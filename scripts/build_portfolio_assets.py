from __future__ import annotations

import csv
import shutil
import statistics
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
SOURCE = ASSETS / "case-studies"
OUTPUT = ASSETS / "portfolio"

NAVY = "#071522"
PANEL = "#0D2235"
PANEL_2 = "#102A42"
TEXT = "#F4F8FC"
MUTED = "#9BB0C4"
CYAN = "#5BC0EB"
BLUE = "#6785E8"
TEAL = "#40C4AA"
GRID = "#244057"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    name = "segoeuib.ttf" if bold else "segoeui.ttf"
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size)


def open_rgb(path: Path) -> Image.Image:
    image = Image.open(path)
    if image.mode == "RGBA":
        background = Image.new("RGBA", image.size, (0, 0, 0, 0))
        background.alpha_composite(image)
        return background
    return image.convert("RGB")


def save_png(image: Image.Image, name: str) -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    image.save(OUTPUT / name, optimize=True)


def fit_on_canvas(
    source: Image.Image,
    size: tuple[int, int],
    background: str,
    margin: int = 0,
) -> Image.Image:
    canvas = Image.new("RGB", size, background)
    fitted = ImageOps.contain(
        source.convert("RGBA"),
        (size[0] - margin * 2, size[1] - margin * 2),
        Image.Resampling.LANCZOS,
    )
    x = (size[0] - fitted.width) // 2
    y = (size[1] - fitted.height) // 2
    canvas.paste(fitted, (x, y), fitted)
    return canvas


def rounded_phone(image: Image.Image, width: int, height: int) -> Image.Image:
    fitted = ImageOps.fit(image.convert("RGB"), (width, height), Image.Resampling.LANCZOS)
    mask = Image.new("L", (width, height), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, width, height), radius=28, fill=255)
    output = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    output.paste(fitted, (0, 0), mask)
    return output


def compose_phone_showcase(
    paths: list[Path],
    captions: list[str],
    title: str,
    subtitle: str,
    output_name: str,
    canvas_size: tuple[int, int],
) -> None:
    width, height = canvas_size
    canvas = Image.new("RGB", canvas_size, NAVY)
    draw = ImageDraw.Draw(canvas)
    draw.text((70, 50), title, font=font(42, True), fill=TEXT)
    draw.text((70, 105), subtitle, font=font(22), fill=MUTED)

    count = len(paths)
    top = 180
    bottom = 105
    phone_height = height - top - bottom
    with Image.open(paths[0]) as sample:
        aspect_ratio = sample.width / sample.height
    phone_width = round(phone_height * aspect_ratio)
    maximum_width = (width - (count + 1) * 24) // count
    if phone_width > maximum_width:
        phone_width = maximum_width
        phone_height = round(phone_width / aspect_ratio)
    gap = max(24, (width - count * phone_width) // (count + 1))

    for index, (path, caption) in enumerate(zip(paths, captions)):
        x = gap + index * (phone_width + gap)
        draw.rounded_rectangle(
            (x - 10, top - 10, x + phone_width + 10, top + phone_height + 10),
            radius=34,
            fill=PANEL_2,
        )
        phone = rounded_phone(open_rgb(path), phone_width, phone_height)
        canvas.paste(phone, (x, top), phone)
        caption_width = draw.textlength(caption, font=font(20, True))
        draw.text(
            (x + (phone_width - caption_width) / 2, height - 66),
            caption,
            font=font(20, True),
            fill=TEXT,
        )

    save_png(canvas, output_name)


def draw_accuracy_chart(
    title: str,
    subtitle: str,
    rows: list[tuple[str, float, float]],
    output_name: str,
) -> None:
    width, height = 1600, 960
    canvas = Image.new("RGB", (width, height), NAVY)
    draw = ImageDraw.Draw(canvas)
    draw.text((80, 58), title, font=font(46, True), fill=TEXT)
    draw.text((80, 120), subtitle, font=font(23), fill=MUTED)

    chart_left, chart_right = 410, 1370
    chart_top, chart_bottom = 230, 835
    for tick in range(0, 101, 20):
        x = chart_left + (chart_right - chart_left) * tick / 100
        draw.line((x, chart_top, x, chart_bottom), fill=GRID, width=2)
        label = f"{tick}%"
        tw = draw.textlength(label, font=font(18))
        draw.text((x - tw / 2, chart_bottom + 24), label, font=font(18), fill=MUTED)

    row_height = (chart_bottom - chart_top) / len(rows)
    top_value = max(value for _, value, _ in rows)
    for index, (name, value, deviation) in enumerate(rows):
        center_y = chart_top + row_height * (index + 0.5)
        bar_height = min(62, row_height * 0.54)
        y1, y2 = center_y - bar_height / 2, center_y + bar_height / 2
        draw.text((80, center_y - 19), name, font=font(24, True), fill=TEXT)

        bar_right = chart_left + (chart_right - chart_left) * value / 100
        color = CYAN if value == top_value else BLUE
        draw.rounded_rectangle((chart_left, y1, bar_right, y2), radius=14, fill=color)

        error_left = chart_left + (chart_right - chart_left) * max(0, value - deviation) / 100
        error_right = chart_left + (chart_right - chart_left) * min(100, value + deviation) / 100
        draw.line((error_left, center_y, error_right, center_y), fill=TEXT, width=3)
        draw.line((error_left, center_y - 9, error_left, center_y + 9), fill=TEXT, width=3)
        draw.line((error_right, center_y - 9, error_right, center_y + 9), fill=TEXT, width=3)

        value_label = f"{value:.2f}%".replace(".", ",")
        value_x = chart_right + 24 if value > 88 else bar_right + 18
        draw.text((value_x, center_y - 20), value_label, font=font(24, True), fill=TEXT)

    draw.rounded_rectangle((80, 882, 102, 904), radius=5, fill=CYAN)
    draw.text((118, 878), "akurasi tertinggi", font=font(19), fill=MUTED)
    draw.line((330, 893, 390, 893), fill=TEXT, width=3)
    draw.text((405, 878), "variasi antar-fold", font=font(19), fill=MUTED)
    save_png(canvas, output_name)


def read_stunting_metrics() -> list[tuple[str, float, float]]:
    base = ASSETS / "stunting" / "17_explainable_ai_shap_semua_model" / "binary"
    rows: list[tuple[str, float, float]] = []
    for directory in sorted(path for path in base.iterdir() if path.is_dir()):
        fold_path = directory / "06_konteks_kinerja_model.csv"
        with fold_path.open(encoding="utf-8-sig", newline="") as handle:
            fold_rows = list(csv.DictReader(handle))
        values = [float(row["akurasi_data_uji"]) * 100 for row in fold_rows]
        rows.append(
            (
                fold_rows[0]["nama_model"],
                statistics.mean(values),
                statistics.stdev(values),
            )
        )
    return sorted(rows, key=lambda row: row[1], reverse=True)


def build() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)

    # Shared public assets live in one flat directory.
    portrait_source = ASSETS / "fairizal-portrait.jpg"
    favicon_source = ASSETS / "favicon.svg"
    if portrait_source.exists():
        shutil.copy2(portrait_source, OUTPUT / "fairizal-portrait.jpg")
    if favicon_source.exists():
        shutil.copy2(favicon_source, OUTPUT / "favicon.svg")

    # Existing publication-safe assets retained by the current site.
    shutil.copy2(SOURCE / "comparative-text-results.png", OUTPUT / "comparative-text-thumbnail.png")
    shutil.copy2(SOURCE / "preeclampsia-web-result.png", OUTPUT / "preeclampsia-prediction-thumbnail.png")
    remind = Image.open(SOURCE / "remind-prototype.png")
    remind.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
    remind.save(OUTPUT / "remind-prototype.webp", "WEBP", quality=88, method=6)

    # Project thumbnails.
    facetro_logo = open_rgb(SOURCE / "facetro-icon.png")
    save_png(fit_on_canvas(facetro_logo, (1200, 675), NAVY, margin=120), "facetro-logo-thumbnail.png")

    microsleep_splash = open_rgb(ASSETS / "microsleep" / "UI_UX TA" / "Tampilan Awal (Splash Screen).png")
    microsleep_brand = microsleep_splash.crop((36, 220, 357, 650))
    save_png(fit_on_canvas(microsleep_brand, (1200, 675), "#0B0F14", margin=105), "microsleep-logo-thumbnail.png")

    heatmap = open_rgb(
        ASSETS
        / "stunting"
        / "16_analisis_data_utama_output12"
        / "binary"
        / "07_heatmap_korelasi_top_30.png"
    )
    heatmap_grid = heatmap.crop((330, 250, 2820, 2540))
    heatmap_grid = ImageOps.fit(heatmap_grid, (560, 560), Image.Resampling.LANCZOS)
    heatmap_thumbnail = Image.new("RGB", (1200, 675), NAVY)
    heatmap_draw = ImageDraw.Draw(heatmap_thumbnail)
    heatmap_draw.rounded_rectangle((590, 58, 1158, 626), radius=24, fill=PANEL_2)
    heatmap_thumbnail.paste(heatmap_grid, (594, 62))
    heatmap_draw.text((70, 115), "TOP 30", font=font(26, True), fill=CYAN)
    heatmap_draw.text((70, 175), "Heatmap", font=font(58, True), fill=TEXT)
    heatmap_draw.text((70, 242), "korelasi fitur", font=font(58, True), fill=TEXT)
    heatmap_draw.text((70, 350), "Klasifikasi binary", font=font(25), fill=MUTED)
    heatmap_draw.text((70, 390), "SSGI 2024", font=font(25), fill=MUTED)
    save_png(heatmap_thumbnail, "stunting-heatmap-thumbnail.png")

    comparative = open_rgb(ASSETS / "comparative" / "isi.png")
    save_png(comparative.convert("RGB"), "comparative-text-showcase.png")

    # Detail-page UI showcases from original screenshots.
    facetro_base = ASSETS / "facetro" / "All_Images_1750768189293"
    compose_phone_showcase(
        [facetro_base / "1.png", facetro_base / "2.png", facetro_base / "7.png"],
        ["Login", "Validasi input", "Navigasi"],
        "FACETRO Mobile App",
        "Tiga keadaan antarmuka yang digunakan untuk menunjukkan alur aplikasi tanpa data presensi pengguna.",
        "facetro-ui-showcase.png",
        (1600, 1080),
    )

    microsleep_base = ASSETS / "microsleep" / "UI_UX TA"
    compose_phone_showcase(
        [
            microsleep_base / "Tampilan Awal (Splash Screen).png",
            microsleep_base / "Tampilan Utama.png",
            microsleep_base / "Tampilan Utama Closed.png",
            microsleep_base / "Tampilan Reminder.png",
            microsleep_base / "Tampilan Peringatan Microsleep.png",
        ],
        ["Splash", "Mata terbuka", "Mata tertutup", "Reminder", "Peringatan"],
        "Microsleep Detector",
        "Alur antarmuka dari pembukaan aplikasi, deteksi kondisi mata, hingga peringatan microsleep.",
        "microsleep-ui-showcase.png",
        (1900, 1080),
    )

    draw_accuracy_chart(
        "Perbandingan Akurasi Model Stunting",
        "Rata-rata akurasi data uji pada evaluasi binary 5-fold cross validation.",
        read_stunting_metrics(),
        "stunting-accuracy-models.png",
    )

    draw_accuracy_chart(
        "Perbandingan Akurasi Model Preeklampsia",
        "Data seimbang · 10-fold cross validation · nilai ± menunjukkan variasi antar-fold.",
        [
            ("Random Forest", 95.71, 2.78),
            ("Neural Net", 95.43, 3.42),
            ("Decision Tree", 92.71, 4.12),
            ("Logistic Regression", 91.29, 4.64),
        ],
        "preeclampsia-accuracy-models.png",
    )


if __name__ == "__main__":
    build()

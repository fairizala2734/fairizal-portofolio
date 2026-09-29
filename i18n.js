(() => {
  const CV_LINKS = {
    id: 'https://drive.google.com/file/d/1H-kAVv-742QO5lr4YI_NHIC_Nd669BgK/view?usp=sharing',
    en: 'https://drive.google.com/file/d/18p2c9zIs6PtLKP1nmzrtcYjU5N6EAzM-/view?usp=sharing'
  };

  const en = {
    'Lewati ke konten utama': 'Skip to main content',
    'Beranda': 'Home',
    'Proyek': 'Projects',
    'Keahlian': 'Skills',
    'Pengalaman': 'Experience',
    'Kontak': 'Contact',
    'Semua Proyek': 'All Projects',
    '← Kembali ke semua proyek': '← Back to all projects',
    'Kembali ke semua proyek': 'Back to all projects',
    'Lihat proyek': 'View projects',
    'Lihat semua proyek': 'View all projects',
    'Lihat proyek AI': 'View AI projects',
    'Lihat studi kasus': 'View case study',
    'Lihat ringkasan': 'View summary',
    'Lihat repository': 'View repository',
    'Buka web demo': 'Open web demo',
    'Lihat CV': 'View CV',
    'Lihat CV lengkap': 'View full CV',
    'Hubungi saya': 'Contact me',
    'Mari terhubung': "Let's connect",
    'Terbuka untuk berbagai peran teknologi': 'Open to a wide range of technology roles',
    'Terbuka untuk peluang AI dan peran teknologi secara luas.': 'Open to AI and broader technology opportunities.',
    'Terbuka untuk peluang dan kolaborasi.': 'Open to opportunities and collaboration.',
    'Lokasi': 'Location',
    'Salin alamat email': 'Copy email address',
    'Email tersalin': 'Email copied',
    'Alamat email berhasil disalin.': 'Email address copied successfully.',
    'Alamat email ditampilkan untuk disalin secara manual.': 'Email address shown for manual copying.',
    'IT Enthusiast': 'IT Enthusiast',
    'Lulusan Teknik Komputer yang berpengalaman mengerjakan berbagai proyek teknologi, terutama di bidang computer vision, deep learning, machine learning, dan NLP/LLM. Saya juga terbiasa menangani pengembangan aplikasi, integrasi perangkat, troubleshooting, serta implementasi sistem.': 'Computer Engineering graduate experienced in delivering a range of technology projects, particularly in computer vision, deep learning, machine learning, and NLP/LLM. I am also comfortable handling application development, device integration, troubleshooting, and system implementation.',
    '4 titik implementasi': '4 implementation sites',
    'Bukti pekerjaan': 'Selected work',
    'Proyek Pilihan': 'Featured Projects',
    'Empat proyek yang menunjukkan rentang kemampuan dari pengembangan AI dan analisis data hingga aplikasi mobile serta implementasi sistem nyata.': 'Four projects showcasing a range of capabilities, from AI development and data analysis to mobile applications and real-world system implementation.',
    'Tugas akhir · Individual': 'Final project · Individual',
    'Aplikasi Android on-device yang mengintegrasikan deteksi area mata, model deep learning, dan peringatan real-time.': 'An on-device Android application integrating eye-region detection, a deep learning model, and real-time alerts.',
    '17,7 FPS · diuji pada 6 perangkat': '17.7 FPS · tested on 6 devices',
    'Pipeline audit, preprocessing, pemodelan, evaluasi, interpretasi, dan pelaporan data SSGI 2024.': 'An audit, preprocessing, modeling, evaluation, interpretation, and reporting pipeline for the 2024 SSGI dataset.',
    '284.776 observasi · 5-fold CV': '284,776 observations · 5-fold CV',
    'Aplikasi Streamlit yang mengubah respons komparatif menjadi unit opini, aspek, ringkasan, dan visualisasi yang dapat ditinjau.': 'A Streamlit application that transforms comparative responses into reviewable opinion units, aspects, summaries, and visualizations.',
    'Pipeline 6+ tahap · 8 pertanyaan diuji': '6+ stage pipeline · 8 questions tested',
    'Sistem presensi berbasis face recognition; kontribusi saya berfokus pada aplikasi Android dan implementasi di lapangan.': 'A face-recognition attendance system; my contribution focused on the Android application and on-site implementation.',
    'Mobile app · 4 titik implementasi': 'Mobile app · 4 implementation sites',
    'Cara saya berkontribusi': 'How I contribute',
    'Keahlian Utama': 'Core Capabilities',
    'Sebagian besar pengalaman proyek saya berada di bidang AI. Kemampuan software, IoT, dan IT systems melengkapi saya untuk bekerja lintas proses—dari eksperimen hingga implementasi dan dukungan operasional.': 'Most of my project experience is in AI. My software, IoT, and IT systems capabilities allow me to work across the full process—from experimentation to implementation and operational support.',
    'Computer vision, deep learning, machine learning, NLP/LLM, data preparation, evaluasi, interpretasi model, dan visualisasi.': 'Computer vision, deep learning, machine learning, NLP/LLM, data preparation, evaluation, model interpretation, and visualization.',
    'Python, Kotlin, Django, Streamlit, REST API, Android, debugging aplikasi, dan integrasi model ke produk.': 'Python, Kotlin, Django, Streamlit, REST APIs, Android, application debugging, and model-to-product integration.',
    'Raspberry Pi, microcontroller, kamera, sensor, aktuator, serta integrasi pemrosesan AI dengan perangkat fisik.': 'Raspberry Pi, microcontrollers, cameras, sensors, actuators, and integrating AI processing with physical devices.',
    'Instalasi dan konfigurasi perangkat, troubleshooting hardware, aplikasi dan database, backup, dokumentasi, serta dukungan implementasi.': 'Device installation and configuration, hardware, application and database troubleshooting, backups, documentation, and implementation support.',
    'Bukti proyek: Microsleep': 'Project evidence: Microsleep',
    'Bukti proyek: REMIND': 'Project evidence: REMIND',
    'Bukti proyek: FACETRO': 'Project evidence: FACETRO',
    'Ringkasan perjalanan': 'Experience overview',
    'Ringkasan perjalanan': 'Experience overview',
    'Pengalaman saya berkembang dari implementasi sistem dan mobile development menuju riset serta pengembangan solusi AI berbasis computer vision, machine learning, dan NLP.': 'My experience has progressed from system implementation and mobile development to research and AI solutions in computer vision, machine learning, and NLP.',
    'Juni–Juli 2026': 'June–July 2026',
    'Februari–Juli 2026': 'February–July 2026',
    'Membangun pipeline klasifikasi stunting, mengevaluasi lima algoritma, dan menyusun artefak analisis untuk mendukung persiapan riset.': 'Built a stunting classification pipeline, evaluated five algorithms, and prepared analysis artifacts to support research preparation.',
    'Mengembangkan aplikasi analisis aspek komparatif dan mendukung eksperimen computer vision pada studi pengenalan batik.': 'Developed a comparative-aspect analysis application and supported computer vision experiments for a batik-recognition study.',
    'Mendukung analisis, evaluasi model, visualisasi, dan aplikasi Django untuk riset klasifikasi risiko preeklampsia.': 'Supported data analysis, model evaluation, visualization, and a Django application for preeclampsia risk-classification research.',
    'Mendukung instalasi dan konfigurasi di empat titik, troubleshooting perangkat, aplikasi dan database, serta pengembangan mobile Kotlin.': 'Supported installation and configuration at four sites, troubleshot devices, applications and databases, and contributed to Kotlin mobile development.',

    'Kumpulan karya': 'Project collection',
    'Proyek yang saya kerjakan': 'Projects I Have Worked On',
    'Kumpulan proyek lintas AI, software, mobile, IoT, dan IT systems. Sebagian besar pengalaman saya berada pada proyek AI, sementara proyek lainnya menunjukkan kemampuan membangun, mengintegrasikan, menguji, dan mendukung teknologi secara menyeluruh.': 'A collection of projects across AI, software, mobile, IoT, and IT systems. Most of my experience is in AI projects, while the rest demonstrates my ability to build, integrate, test, and support technology end to end.',
    'Semua': 'All',
    '7 proyek': '7 projects',
    'Kontribusi saya': 'My contribution',
    'Hasil / bukti': 'Outcome / evidence',
    'Konteks teknologi': 'Technology context',
    'Aplikasi Android on-device yang mendeteksi indikasi microsleep melalui kondisi mata dan memberi peringatan secara real-time.': 'An on-device Android application that detects signs of microsleep from eye states and provides real-time alerts.',
    'Vision pipeline, MobileNetV3-Small, TensorFlow Lite, dan integrasi Android': 'Vision pipeline, MobileNetV3-Small, TensorFlow Lite, and Android integration',
    '17,7 FPS · latensi 55,3 ms · diuji pada 6 perangkat': '17.7 FPS · 55.3 ms latency · tested on 6 devices',
    'Pipeline modular untuk audit, preprocessing, pemodelan, evaluasi, interpretasi, visualisasi, dan pelaporan data SSGI 2024.': 'A modular pipeline for auditing, preprocessing, modeling, evaluation, interpretation, visualization, and reporting on the 2024 SSGI dataset.',
    'Data preparation, eksperimen lima model, evaluasi, SHAP, dan reporting': 'Data preparation, five-model experimentation, evaluation, SHAP, and reporting',
    '284.776 observasi · 152 fitur · akurasi terbaik 85,38%': '284,776 observations · 152 features · best accuracy 85.38%',
    'Aplikasi untuk mengurai respons komparatif menjadi unit opini, aspek, frekuensi, ringkasan, dan jaringan aspek.': 'An application that breaks comparative responses into opinion units, aspects, frequencies, summaries, and aspect networks.',
    'Pipeline NLP, validasi input, normalisasi aspek, dan integrasi LLM via OpenRouter': 'NLP pipeline, input validation, aspect normalization, and LLM integration via OpenRouter',
    'Prototipe Raspberry Pi yang menggabungkan klasifikasi kondisi mata berbasis kamera dengan sensor fisiologis dan sistem peringatan.': 'A Raspberry Pi prototype combining camera-based eye-state classification, physiological sensors, and an alert system.',
    'Pengembangan komponen deep learning untuk klasifikasi mata terbuka dan tertutup': 'Developed the deep learning component for open- and closed-eye classification',
    'Prototipe terintegrasi dengan kamera, MAX30102, display, dan buzzer': 'Integrated prototype with camera, MAX30102, display, and buzzer',
    'Aplikasi web dan evaluasi empat model machine learning untuk mendukung riset klasifikasi risiko preeklampsia.': 'A web application and evaluation of four machine learning models supporting preeclampsia risk-classification research.',
    'Analisis data, evaluasi model, visualisasi, dan kontribusi aplikasi web': 'Data analysis, model evaluation, visualization, and web-application contribution',
    '700 observasi · 31 fitur · akurasi tertinggi 95,71%': '700 observations · 31 features · highest accuracy 95.71%',
    'Sistem presensi berbasis face recognition; kontribusi saya berfokus pada aplikasi mobile dan dukungan implementasi di lapangan.': 'A face-recognition attendance system; my contribution focused on the mobile application and on-site implementation support.',
    'Mobile development, instalasi, troubleshooting, dan backup operasional': 'Mobile development, installation, troubleshooting, and operational backups',
    'Computer vision dan deep learning pada sistem keseluruhan · 4 titik implementasi': 'Computer vision and deep learning in the overall system · 4 implementation sites',
    'Ringkasan proyek akademik': 'Academic project summary',
    'Tiga latihan prototipe untuk memahami integrasi microcontroller, sensor, aktuator, dan logika embedded.': 'Three prototype exercises exploring microcontroller, sensor, actuator, and embedded-logic integration.',
    'Perancangan, perakitan, integrasi sensor, pengujian, dan dokumentasi': 'Design, assembly, sensor integration, testing, and documentation',
    'Smart dustbin, soil-moisture detector, dan noise detector': 'Smart dustbin, soil-moisture detector, and noise detector',

    'Tugas akhir': 'Final project',
    'Konteks': 'Context',
    'Fokus': 'Focus',
    'Periode': 'Period',
    'Tim 3 orang': 'Team of 3',
    'Kolaborasi': 'Collaboration',
    'Tahun': 'Year',
    'Kontribusi utama': 'Primary contribution',
    'Model mata': 'Eye-state model',
    'Akademik': 'Academic',
    '3 prototipe': '3 prototypes',
    'Cakupan': 'Scope',
    'Pendekatan': 'Approach',
    'Peran': 'Role',
    'Lanjut menjelajah': 'Continue exploring',
    'Proyek berikutnya': 'Next project',

    'Pipeline modular untuk mengaudit, membersihkan, memodelkan, mengevaluasi, dan melaporkan klasifikasi stunting menggunakan data SSGI 2024.': 'A modular pipeline for auditing, cleaning, modeling, evaluating, and reporting stunting classification using the 2024 SSGI dataset.',
    'Research support': 'Research support',
    'Peran utama': 'Primary role',
    'observasi akhir': 'final observations',
    'fitur akhir': 'final features',
    'akurasi 5-fold CV': '5-fold CV accuracy',
    'Perbandingan rata-rata akurasi lima algoritma pada data uji binary dengan 5-fold cross validation. Gradient Boosting menghasilkan akurasi tertinggi sebesar 85,38%.': 'Average accuracy comparison of five algorithms for binary classification using 5-fold cross-validation. Gradient Boosting achieved the highest accuracy at 85.38%.',
    '01 · Masalah': '01 · Problem',
    'Data besar membutuhkan audit yang dapat ditelusuri': 'Large datasets require traceable auditing',
    'Data survei berskala besar memiliki struktur, tipe variabel, nilai hilang, dan distribusi kelas yang perlu diperiksa secara sistematis. Pipeline dibuat agar setiap perubahan dari data mentah menuju dataset analisis tercatat dan dapat diperiksa kembali.': 'Large-scale survey data contains structures, variable types, missing values, and class distributions that require systematic review. The pipeline records every transformation from raw data to the analytical dataset for later inspection.',
    'Jumlah 284.776 merupakan observasi setelah proses pembersihan dan validasi, bukan jumlah data mentah.': 'The 284,776 figure represents observations after cleaning and validation, not the raw-data count.',
    '02 · Kontribusi': '02 · Contribution',
    'Bagian yang saya kerjakan': 'What I worked on',
    'Audit & preprocessing': 'Audit & preprocessing',
    'Memeriksa kualitas data, memilih fitur, melakukan encoding, scaling, dan validasi dataset akhir.': 'Reviewed data quality, selected features, performed encoding and scaling, and validated the final dataset.',
    'Eksperimen model': 'Model experimentation',
    'Membandingkan lima algoritma pada skenario binary dan multiclass dengan proses evaluasi yang konsisten.': 'Compared five algorithms across binary and multiclass scenarios using a consistent evaluation process.',
    'Evaluasi & pelaporan': 'Evaluation & reporting',
    'Menyusun metrik, visualisasi, interpretasi SHAP, serta materi hasil untuk mendukung persiapan riset.': 'Prepared metrics, visualizations, SHAP interpretations, and result materials to support research preparation.',
    '03 · Keputusan teknis': '03 · Technical decisions',
    'Menjaga evaluasi tetap adil': 'Keeping evaluation fair',
    'Memetakan perubahan jumlah observasi dan fitur.': 'Mapped changes in observation and feature counts.',
    'Menyiapkan data sesuai kebutuhan tiap algoritma.': 'Prepared data according to each algorithm’s requirements.',
    'Menerapkan SMOTE-NC hanya pada data latih di dalam evaluasi.': 'Applied SMOTE-NC only to training data within the evaluation process.',
    'Menggunakan Stratified 5-Fold Cross Validation.': 'Used Stratified 5-Fold Cross-Validation.',
    'Membandingkan performa dan kontribusi fitur menggunakan SHAP.': 'Compared performance and feature contributions using SHAP.',
    '04 · Hasil': '04 · Results',
    'Perbandingan lima model dengan prosedur yang sama': 'Five-model comparison using the same procedure',
    'Seluruh model dievaluasi pada skenario klasifikasi binary menggunakan Stratified 5-Fold Cross Validation. Penyajian semua model membantu memperlihatkan trade-off performa, bukan hanya menonjolkan satu hasil terbaik.': 'All models were evaluated for binary classification using Stratified 5-Fold Cross-Validation. Presenting every model reveals performance trade-offs instead of highlighting only the best result.',
    'Metode evaluasi': 'Evaluation method',
    'Rata-rata akurasi': 'Average accuracy',
    'Regresi Logistik': 'Logistic Regression',
    'Angka ini merupakan hasil evaluasi internal pada dataset proyek, bukan klaim performa pada populasi baru.': 'These figures are internal evaluation results on the project dataset, not performance claims for new populations.',
    '05 · Output': '05 · Output',
    'Artefak yang dihasilkan': 'Produced artifacts',
    'Dataset siap analisis': 'Analysis-ready dataset',
    'Dataset akhir berisi 284.776 observasi dan 152 fitur setelah audit, pembersihan, serta validasi struktur data.': 'The final dataset contains 284,776 observations and 152 features after auditing, cleaning, and structural validation.',
    'Evaluasi yang dapat dibandingkan': 'Comparable evaluation',
    'Lima algoritma dinilai dengan pembagian fold dan prosedur evaluasi yang konsisten.': 'Five algorithms were assessed using consistent folds and evaluation procedures.',
    'Interpretasi model': 'Model interpretation',
    'Visualisasi metrik dan SHAP disusun untuk membantu pembacaan performa serta kontribusi fitur.': 'Metric visualizations and SHAP outputs were prepared to clarify performance and feature contributions.',
    '06 · Teknologi': '06 · Technology',
    'Perangkat kerja': 'Tools used',

    'Prototipe aplikasi Android on-device untuk mendeteksi indikasi microsleep dari kondisi mata dan memberi peringatan audio-visual secara real-time.': 'An on-device Android prototype that detects signs of microsleep from eye states and provides real-time audio-visual alerts.',
    'FPS setelah 30 menit': 'FPS after 30 minutes',
    'latensi rata-rata': 'average latency',
    'perangkat diuji': 'devices tested',
    'Alur inferensi on-device': 'On-device inference flow',
    'Frame kamera → ROI mata → klasifikasi → alarm': 'Camera frame → eye ROI → classification → alert',
    'Rangkaian antarmuka asli dari splash screen, deteksi mata terbuka dan tertutup, reminder, hingga peringatan microsleep.': 'Original interface sequence from the splash screen and open/closed-eye detection to reminders and microsleep alerts.',
    'Masalah yang ditangani': 'Problem addressed',
    'Microsleep dapat membuat pengemudi kehilangan kewaspadaan dalam waktu singkat. Proyek ini mengeksplorasi pendekatan non-intrusif berbasis kamera depan perangkat Android agar indikator mata dapat dianalisis langsung tanpa koneksi eksternal.': 'Microsleep can cause drivers to lose alertness briefly. This project explores a non-intrusive approach using an Android front-facing camera to analyze eye indicators directly without an external connection.',
    'Ini adalah prototipe tugas akhir untuk eksplorasi teknologi, bukan perangkat keselamatan berkendara yang tersertifikasi.': 'This is a final-project prototype for technology exploration, not a certified driving-safety device.',
    'Kontribusi utama': 'Key contributions',
    'Mengintegrasikan CameraX untuk aliran frame real-time serta antarmuka peringatan pada Android.': 'Integrated CameraX for real-time frame streaming and the Android alert interface.',
    'Menggunakan MediaPipe untuk lokalisasi wajah dan area mata sebelum klasifikasi.': 'Used MediaPipe to locate the face and eye regions before classification.',
    'Menerapkan MobileNetV3-Small dalam TensorFlow Lite untuk klasifikasi mata terbuka atau tertutup.': 'Deployed MobileNetV3-Small with TensorFlow Lite for open- and closed-eye classification.',
    'Proses sistem': 'System process',
    'CameraX menangkap frame dari kamera depan.': 'CameraX captures frames from the front-facing camera.',
    'MediaPipe menemukan wajah dan membentuk ROI mata.': 'MediaPipe locates the face and creates the eye ROI.',
    'MobileNetV3-Small TFLite mengklasifikasi kondisi mata.': 'MobileNetV3-Small TFLite classifies the eye state.',
    'Durasi mata tertutup berturut-turut dibandingkan dengan ambang deteksi.': 'The consecutive closed-eye duration is compared against the detection threshold.',
    'Sistem mengaktifkan alarm dan mencatat keluaran pengujian.': 'The system activates an alert and records the test output.',
    'Keputusan implementasi': 'Implementation decisions',
    'Pemrosesan lokal': 'Local processing',
    'Inferensi dijalankan langsung di perangkat agar alur deteksi tidak bergantung pada koneksi internet atau server eksternal.': 'Inference runs directly on the device so detection does not depend on an internet connection or external server.',
    'Area mata terfokus': 'Focused eye region',
    'MediaPipe digunakan untuk menemukan wajah dan membatasi area mata sebelum frame masuk ke model klasifikasi.': 'MediaPipe locates the face and narrows the eye region before frames enter the classification model.',
    'Peringatan berbasis durasi': 'Duration-based alert',
    'Keluaran mata tertutup dipantau secara berurutan sehingga alarm tidak dipicu hanya oleh satu frame sesaat.': 'Closed-eye outputs are monitored consecutively so a single transient frame does not trigger the alert.',
    'Hasil pengujian perangkat': 'Device testing results',
    'Pengujian berfokus pada kemampuan aplikasi mempertahankan inferensi real-time dan stabilitas penggunaan, bukan hanya keberhasilan menjalankan model sekali.': 'Testing focused on sustained real-time inference and operational stability, not merely running the model once.',
    'Aspek': 'Aspect',
    'Skenario': 'Scenario',
    'Hasil teramati': 'Observed result',
    'Kecepatan inferensi': 'Inference speed',
    'Aplikasi aktif selama 30 menit': 'Application active for 30 minutes',
    'pada akhir pengujian': 'at the end of testing',
    'Latensi': 'Latency',
    'Pengukuran pemrosesan frame': 'Frame-processing measurement',
    'rata-rata': 'average',
    'Kompatibilitas': 'Compatibility',
    'Enam perangkat Android': 'Six Android devices',
    'Tidak ditemukan crash atau freeze selama skenario uji': 'No crashes or freezes observed during the test scenario',
    'Hasil menggambarkan perangkat dan kondisi pengujian tugas akhir; bukan sertifikasi untuk penggunaan keselamatan berkendara.': 'Results reflect the devices and conditions used in the final-project testing; they are not certification for driving-safety use.',
    'Teknologi': 'Technology',

    'Kontribusi pada aplikasi Django dan evaluasi model machine learning untuk mendukung riset prediksi preeklampsia berbasis data terstruktur.': 'Contributed to a Django application and machine learning model evaluation supporting structured-data preeclampsia prediction research.',
    'observasi dataset': 'dataset observations',
    'fitur dianalisis': 'features analyzed',
    'akurasi tertinggi': 'highest accuracy',
    'Riset dan evaluasi': 'Research and evaluation',
    'model pembanding': 'compared models',
    'anggota tim': 'team members',
    'Analisis data · evaluasi model · visualisasi · kontribusi web': 'Data analysis · model evaluation · visualization · web contribution',
    'Perbandingan akurasi empat algoritma pada data seimbang dengan 10-fold cross validation. Nilai variasi antar-fold tetap ditampilkan agar perbandingan tidak hanya bertumpu pada satu angka.': 'Accuracy comparison of four algorithms on balanced data using 10-fold cross-validation. Fold-to-fold variation is shown so the comparison does not rely on a single figure.',
    'Hasil perbandingan model': 'Model comparison results',
    'Empat algoritma diuji pada data seimbang menggunakan 10-fold cross validation. Nilai rata-rata dan variasi antar-fold dibaca bersama untuk melihat performa sekaligus kestabilannya.': 'Four algorithms were tested on balanced data using 10-fold cross-validation. Mean values and fold-to-fold variation were considered together to assess performance and stability.',
    'Variasi antar-fold': 'Fold-to-fold variation',
    'Hasil ini merupakan evaluasi pada dataset riset yang digunakan dalam proyek, bukan validasi klinis pada populasi umum.': 'These results are evaluations on the project’s research dataset, not clinical validation for the general population.',
    'Fokus kontribusi saya dalam tim': 'My contribution within the team',
    'Proyek dikerjakan oleh tiga anggota. Kontribusi saya berfokus pada analisis dan evaluasi data, penyusunan visualisasi hasil, serta membantu menghubungkan keluaran model ke alur aplikasi web Django.': 'The project was completed by a three-person team. My contribution focused on data analysis and evaluation, result visualizations, and connecting model outputs to the Django web-application flow.',
    'Analisis data': 'Data analysis',
    'Mendukung eksplorasi dataset, analisis statistik, dan penyusunan visualisasi untuk memahami karakteristik fitur.': 'Supported dataset exploration, statistical analysis, and visualizations to understand feature characteristics.',
    'Evaluasi model': 'Model evaluation',
    'Membandingkan model dengan pembagian data dan cross validation untuk melihat performa klasifikasi secara lebih stabil.': 'Compared models using data splits and cross-validation for a more stable view of classification performance.',
    'Aplikasi web': 'Web application',
    'Berkontribusi pada aplikasi Django yang menyajikan input pengguna dan keluaran prediksi bagi kebutuhan riset.': 'Contributed to a Django application presenting user inputs and prediction outputs for research needs.',
    'Sistem ini dibuat sebagai dukungan riset dan edukasi. Sistem bukan alat diagnosis klinis, dan hasilnya tidak menggantikan pemeriksaan tenaga kesehatan.': 'This system was built for research and education. It is not a clinical diagnostic tool and does not replace examination by healthcare professionals.',
    'Alur kerja': 'Workflow',
    'Meninjau struktur dataset dan konteks variabel.': 'Reviewed the dataset structure and variable context.',
    'Menyiapkan skenario data mentah dan data seimbang.': 'Prepared raw-data and balanced-data scenarios.',
    'Menguji beberapa algoritma dengan metrik klasifikasi.': 'Tested several algorithms using classification metrics.',
    'Menyusun grafik evaluasi dan feature-weight.': 'Prepared evaluation and feature-weight charts.',
    'Menghubungkan hasil riset dengan pengalaman web Django.': 'Connected research results to the Django web experience.',
    'Hal yang dipelajari': 'Key learnings',
    'Evaluasi bukan hanya akurasi': 'Evaluation goes beyond accuracy',
    'Macro F1, precision, recall, dan ROC-AUC digunakan sebagai konteks tambahan saat membandingkan model.': 'Macro F1, precision, recall, and ROC-AUC provide additional context when comparing models.',
    'Komunikasi hasil yang bertanggung jawab': 'Responsible result communication',
    'Output machine learning untuk kesehatan perlu diberi batasan penggunaan yang jelas dan tidak boleh diposisikan sebagai diagnosis.': 'Machine learning outputs in healthcare require clear usage boundaries and must not be presented as a diagnosis.',

    'Aplikasi Streamlit untuk mengolah respons teks komparatif menjadi aspek, frekuensi, contoh pendapat, dan ringkasan hasil yang dapat ditinjau kembali.': 'A Streamlit application that processes comparative text responses into aspects, frequencies, opinion examples, and reviewable summaries.',
    'tahap pipeline': 'pipeline stages',
    'pertanyaan diuji': 'questions tested',
    'aplikasi Streamlit': 'Streamlit application',
    'Pipeline analisis': 'Analysis pipeline',
    'struktur': 'structure',
    'validasi': 'validation',
    'Ingest · ekstraksi · normalisasi · ringkasan · jaringan aspek': 'Ingest · extraction · normalization · summary · aspect network',
    'Screenshot terbaru dari hasil analisis: ringkasan pipeline, jumlah unit opini dan aspek, serta visualisasi jaringan aspek yang dapat ditinjau pengguna.': 'Latest analysis screenshot showing the pipeline summary, opinion-unit and aspect counts, and a reviewable aspect-network visualization.',
    'Masalah dan tujuan sistem': 'Problem and system objective',
    'Respons terbuka berisi variasi istilah, cara membandingkan, dan tingkat detail yang berbeda. Pembacaan manual pada banyak respons menjadi berulang dan sulit ditelusuri. Sistem ini membantu peneliti memproses data secara bertahap: memvalidasi input, mengekstrak unit opini, menormalkan aspek, lalu menyajikan keluaran yang masih dapat diperiksa manusia.': 'Open-ended responses contain varied terminology, comparison patterns, and levels of detail. Manually reviewing many responses becomes repetitive and difficult to trace. This system helps researchers process data step by step: validating input, extracting opinion units, normalizing aspects, and presenting outputs that remain open to human review.',
    'LLM digunakan untuk membantu analisis, bukan untuk menetapkan kesimpulan penelitian secara otomatis. Interpretasi akhir tetap memerlukan peninjauan manusia.': 'The LLM assists analysis rather than automatically determining research conclusions. Final interpretation still requires human review.',
    'Komponen utama': 'Core components',
    'Validasi input': 'Input validation',
    'Mengecek struktur CSV, entity pembanding, serta bentuk pertanyaan sebelum pemrosesan berjalan.': 'Checks the CSV structure, compared entities, and question format before processing.',
    'Analisis linguistik': 'Linguistic analysis',
    'Memakai Stanza untuk tokenisasi, POS tagging, lemma, dan dukungan bukti linguistik.': 'Uses Stanza for tokenization, POS tagging, lemmatization, and linguistic evidence.',
    'Menggunakan OpenRouter untuk membantu penilaian komparatif dan normalisasi aspek, dengan keluaran yang tetap dapat diaudit.': 'Uses OpenRouter to assist comparative assessment and aspect normalization while keeping outputs auditable.',
    'Alur pipeline': 'Pipeline flow',
    'Membaca dan memvalidasi data CSV fleksibel.': 'Reads and validates flexible CSV input.',
    'Memeriksa entitas dan bentuk pertanyaan komparatif.': 'Checks entities and comparative-question structure.',
    'Menghasilkan kandidat opinion units dan aspek.': 'Produces candidate opinion units and aspects.',
    'Menggabungkan variasi istilah agar analisis lebih konsisten.': 'Merges terminology variants for more consistent analysis.',
    'Menyajikan frekuensi, contoh, dan jaringan aspek komparatif.': 'Presents frequencies, examples, and comparative aspect networks.',
    'Keluaran yang dapat ditinjau pengguna': 'Reviewable user outputs',
    'Status setiap tahap': 'Stage-by-stage status',
    'Pengguna dapat melihat tahapan yang telah selesai dan menelusuri letak proses ketika hasil perlu diperiksa ulang.': 'Users can see completed stages and locate the relevant process when results require review.',
    'Tabel hasil terstruktur': 'Structured result tables',
    'Opinion units, aspek, label komparatif, dan contoh teks disajikan dalam bentuk yang lebih mudah difilter dan direview.': 'Opinion units, aspects, comparative labels, and text examples are presented in a format that is easier to filter and review.',
    'Ringkasan & jaringan aspek': 'Summary & aspect network',
    'Frekuensi dan hubungan aspek divisualisasikan untuk membantu menemukan pola awal sebelum interpretasi penelitian.': 'Aspect frequencies and relationships are visualized to help identify early patterns before research interpretation.',
    'Prinsip desain dan batasan': 'Design principles and limitations',
    'Output antara disimpan sehingga pengguna dapat meninjau proses, tidak hanya menerima hasil akhir yang sulit dijelaskan.': 'Intermediate outputs are retained so users can review the process rather than receive only a difficult-to-explain final result.',
    'Kualitas keluaran bergantung pada kualitas input dan respons model. Karena itu, LLM diposisikan sebagai asisten dan hasilnya tetap perlu diverifikasi peneliti.': 'Output quality depends on input quality and model responses. The LLM is therefore positioned as an assistant, and researchers must still verify the results.',

    'Prototipe capstone pemantauan kelelahan pengemudi yang mengintegrasikan deteksi kondisi mata berbasis kamera dengan pembacaan denyut jantung dan SpO₂.': 'A capstone driver-fatigue monitoring prototype integrating camera-based eye-state detection with heart-rate and SpO₂ readings.',
    'subsistem terintegrasi': 'integrated subsystems',
    'prototipe Raspberry Pi': 'Raspberry Pi prototype',
    'Integrasi sistem': 'System integration',
    'mata': 'eyes',
    'output': 'output',
    'Kamera · CNN · MAX30102 · Buzzer · Streamlit': 'Camera · CNN · MAX30102 · Buzzer · Streamlit',
    'Artefak prototipe asli: perangkat REMIND yang menggabungkan kamera, display, dan komponen pemantauan dalam satu perangkat.': 'Original prototype artifact: the REMIND device combines a camera, display, and monitoring components in one unit.',
    'Masalah dan ruang lingkup prototipe': 'Problem and prototype scope',
    'Proyek ini mengeksplorasi cara menggabungkan dua jenis masukan dalam satu perangkat lokal: kondisi mata dari kamera dan pembacaan sensor fisiologis. Tujuannya adalah membangun demonstrasi terintegrasi yang dapat mengolah masukan, menampilkan status, dan memberi peringatan melalui perangkat yang sama.': 'This project explores combining two input types in one local device: camera-based eye states and physiological sensor readings. The goal was an integrated demonstration capable of processing inputs, displaying status, and issuing alerts through the same device.',
    'REMIND adalah prototipe akademik. Hasil demonstrasi fungsional tidak dapat diartikan sebagai validasi perangkat medis atau produk keselamatan kendaraan.': 'REMIND is an academic prototype. Functional demonstration results do not constitute validation as a medical device or vehicle-safety product.',
    'Peran saya dalam tim': 'My role in the team',
    'Proyek capstone ini dikerjakan oleh tiga anggota. Kontribusi utama saya berada pada pengembangan klasifikasi kondisi mata terbuka dan tertutup sebagai masukan bagi subsistem pemantauan visual. Perakitan perangkat, integrasi sensor, antarmuka, dan pengujian prototipe dilakukan bersama tim.': 'This capstone was completed by a three-person team. My primary contribution was developing open- and closed-eye classification for the visual-monitoring subsystem. Device assembly, sensor integration, interface work, and prototype testing were completed collaboratively.',
    'Menyiapkan komponen model untuk membedakan kondisi mata terbuka dan tertutup dari masukan kamera.': 'Prepared the model component for distinguishing open and closed eyes from camera input.',
    'Membantu menghubungkan keluaran klasifikasi mata ke logika status pada prototipe.': 'Helped connect eye-classification output to the prototype’s status logic.',
    'Mendukung penyatuan subsistem visual dengan sensor, display, dan mekanisme peringatan pada Raspberry Pi.': 'Supported integration of the visual subsystem with sensors, display, and alert mechanisms on the Raspberry Pi.',
    'Arsitektur ringkas': 'Architecture overview',
    'Kamera dan pipeline computer vision mengamati kondisi mata pengemudi secara real-time.': 'The camera and computer vision pipeline monitor the driver’s eye state in real time.',
    'MAX30102 membaca sinyal BPM dan SpO₂ ketika jari terdeteksi pada sensor.': 'The MAX30102 reads BPM and SpO₂ signals when a finger is detected on the sensor.',
    'LCD, buzzer, dan antarmuka menampilkan status serta himbauan berdasarkan keluaran sistem.': 'The LCD, buzzer, and interface present status and prompts based on system output.',
    'Alur integrasi': 'Integration flow',
    'Raspberry Pi, kamera, sensor, serta antarmuka dinyalakan.': 'The Raspberry Pi, camera, sensors, and interface are initialized.',
    'Kamera mengirim frame untuk evaluasi kondisi mata.': 'The camera sends frames for eye-state evaluation.',
    'Model klasifikasi menentukan keadaan mata sebagai input sistem.': 'The classification model determines the eye state as a system input.',
    'Sensor MAX30102 membaca BPM dan SpO₂ ketika tersedia.': 'The MAX30102 reads BPM and SpO₂ when available.',
    'Status, buzzer, dan himbauan disajikan pada antarmuka.': 'Status, buzzer alerts, and prompts are presented through the interface.',
    'Hasil yang dicapai': 'Outcomes',
    'Prototipe lokal terintegrasi': 'Integrated local prototype',
    'Kamera, klasifikasi kondisi mata, sensor MAX30102, display, dan buzzer dapat dijalankan dalam satu prototipe berbasis Raspberry Pi 5.': 'The camera, eye-state classification, MAX30102 sensor, display, and buzzer operate within one Raspberry Pi 5 prototype.',
    'Demonstrasi alur end-to-end': 'End-to-end flow demonstration',
    'Masukan perangkat dapat diproses menjadi status pada antarmuka dan respons peringatan dalam skenario demonstrasi tim.': 'Device inputs can be processed into interface status and alert responses in the team’s demonstration scenario.',
    'Tidak ada angka akurasi atau klaim efektivitas keselamatan yang ditampilkan karena bukti yang tersedia berfokus pada keberhasilan integrasi prototipe.': 'No accuracy figure or safety-effectiveness claim is shown because the available evidence focuses on successful prototype integration.',

    'Sistem presensi berbasis face recognition dengan computer vision dan deep learning; kontribusi saya berfokus pada aplikasi Android pendamping serta dukungan implementasi, konfigurasi, dan troubleshooting di lapangan.': 'A face-recognition attendance system using computer vision and deep learning; my contribution focused on the companion Android application and on-site implementation, configuration, and troubleshooting support.',
    'titik implementasi': 'implementation sites',
    'konteks sistem': 'system context',
    'Fokus pekerjaan': 'Work focus',
    'Rangkaian UI asli aplikasi mobile FACETRO. Layar dipilih untuk memperlihatkan login, validasi, dan navigasi tanpa mengekspos data presensi pengguna.': 'Original FACETRO mobile-app UI sequence. Screens were selected to show login, validation, and navigation without exposing user attendance data.',
    'Gambaran sistem dan batas tanggung jawab': 'System overview and responsibility boundaries',
    'FACETRO adalah sistem presensi yang menggunakan face recognition berbasis computer vision dan deep learning pada perangkat utama, lalu menghubungkan hasil presensi dengan layanan backend dan aplikasi Android pendamping.': 'FACETRO is an attendance system using computer-vision and deep-learning-based face recognition on the main device, connecting attendance results to backend services and a companion Android application.',
    'Lapisan computer vision menangani pengenalan wajah sebagai mekanisme identifikasi pada sistem keseluruhan.': 'The computer vision layer handles face recognition as the identification mechanism within the overall system.',
    'Aplikasi Android memberi pengguna akses ke informasi profil, ringkasan, dan rekap presensi.': 'The Android application gives users access to profile information, summaries, and attendance records.',
    'Perangkat, aplikasi, API, dan data perlu dikonfigurasi serta diperiksa bersama agar alur presensi dapat digunakan di lokasi.': 'Devices, applications, APIs, and data must be configured and verified together for the attendance flow to operate on site.',
    'Kontribusi saya tidak berada pada pengembangan model face recognition. Fokus saya adalah aplikasi Android pendamping dan dukungan implementasi di lapangan selama kegiatan magang.': 'I did not contribute to development of the face-recognition model. My work focused on the companion Android application and on-site implementation support during the internship.',
    'Kontribusi yang saya kerjakan': 'My contributions',
    'Membantu pengembangan dan penyempurnaan aplikasi Android berbasis Kotlin untuk akses informasi presensi.': 'Helped develop and refine a Kotlin-based Android application for accessing attendance information.',
    'Mengerjakan pembaruan pada halaman login, dashboard, sidebar, profil, dan rekap presensi.': 'Updated the login, dashboard, sidebar, profile, and attendance-record screens.',
    'Mendukung instalasi, konfigurasi, troubleshooting perangkat, serta backup operasional pada empat titik implementasi.': 'Supported installation, configuration, device troubleshooting, and operational backups across four implementation sites.',
    'Alur dukungan implementasi': 'Implementation support flow',
    'Menyiapkan perangkat dan kebutuhan aplikasi sebelum pemasangan di lokasi.': 'Prepared devices and application requirements before on-site installation.',
    'Membantu konfigurasi perangkat dan memeriksa komunikasi aplikasi dengan layanan yang diperlukan.': 'Assisted device configuration and verified application communication with required services.',
    'Menguji alur penggunaan utama serta memastikan data dan antarmuka dapat diakses sesuai kebutuhan.': 'Tested core user flows and ensured data and interfaces were accessible as required.',
    'Menelusuri kendala dari sisi perangkat, aplikasi, koneksi API, atau sinkronisasi data.': 'Traced issues across devices, applications, API connections, and data synchronization.',
    'Mendokumentasikan penanganan, melakukan backup yang diperlukan, dan mengoordinasikan tindak lanjut.': 'Documented resolutions, performed required backups, and coordinated follow-up actions.',
    'Hasil dan bukti yang dapat ditampilkan': 'Presentable outcomes and evidence',
    'Case study ini menekankan kontribusi mobile dan operasional saya. Tidak ada data wajah, data presensi, kredensial, konfigurasi jaringan, atau source internal yang ditampilkan pada portofolio publik.': 'This case study highlights my mobile and operational contributions. No face data, attendance data, credentials, network configurations, or internal source code are shown in the public portfolio.',
    'Aplikasi pendamping yang lebih jelas': 'Clearer companion application',
    'Pembaruan antarmuka mencakup login, dashboard, sidebar, profil, dan rekap presensi untuk membantu keterbacaan serta navigasi pengguna.': 'Interface updates covered login, dashboard, sidebar, profile, and attendance records to improve readability and navigation.',
    'Dukungan pada empat titik': 'Support across four sites',
    'Implementasi mencakup pengecekan perangkat, penanganan kendala, dokumentasi, backup, dan koordinasi kebutuhan teknis di lapangan.': 'Implementation work included device checks, issue resolution, documentation, backups, and coordination of on-site technical needs.',
    'Teknologi & praktik': 'Technology & practices',

    'Kumpulan proyek pembelajaran yang mengeksplorasi integrasi microcontroller, sensor, aktuator, dan pengujian fungsi dasar.': 'A collection of learning projects exploring microcontroller, sensor, and actuator integration and basic functional testing.',
    'prototipe': 'prototypes',
    'sensor & aktuator': 'sensors & actuators',
    'pembelajaran praktik': 'hands-on learning',
    'Eksplorasi dasar': 'Foundational exploration',
    'Rancang · rakit · uji · dokumentasikan': 'Design · assemble · test · document',
    'Tiga prototipe': 'Three prototypes',
    'Masukan jarak atau keberadaan objek dibaca oleh sensor, diproses oleh controller, lalu digunakan untuk menggerakkan mekanisme penutup secara otomatis.': 'Distance or object-presence input is read by a sensor, processed by the controller, and used to move the lid mechanism automatically.',
    'Nilai kelembapan tanah dibaca sebagai masukan, dibandingkan dengan kondisi yang ditentukan, lalu diterjemahkan menjadi status pemantauan sederhana.': 'Soil-moisture values are read as input, compared with a defined condition, and translated into a simple monitoring status.',
    'Tingkat suara lingkungan dibaca oleh sensor dan dibandingkan dengan ambang untuk memicu indikator atau respons yang telah ditentukan.': 'Ambient sound levels are read by a sensor and compared with a threshold to trigger a defined indicator or response.',
    'Pola kerja yang dipraktikkan': 'Practiced workflow',
    'Menentukan hubungan antara masukan sensor, logika controller, dan keluaran aktuator atau indikator.': 'Defined the relationship between sensor input, controller logic, and actuator or indicator output.',
    'Merakit komponen dan memastikan koneksi dasar dapat bekerja.': 'Assembled components and verified basic connections.',
    'Menerapkan logika pembacaan, ambang, dan respons pada microcontroller.': 'Implemented reading, threshold, and response logic on the microcontroller.',
    'Menguji fungsi dasar dengan beberapa kondisi masukan dan memperbaiki perilaku yang belum sesuai.': 'Tested basic functions under multiple input conditions and corrected unexpected behavior.',
    'Mencatat rangkaian, cara kerja, serta hasil pembelajaran dari setiap prototipe.': 'Documented circuitry, operation, and lessons learned from each prototype.',
    'Fokus pembelajaran': 'Learning focus',
    'Bagian ini ditampilkan sebagai ringkasan karena proyek-proyeknya merupakan latihan akademik awal. Nilai utamanya adalah pengalaman langsung dalam desain sistem, perakitan, integrasi sensor, pengujian, serta dokumentasi—bukan klaim produk siap pakai.': 'This section is presented as a summary because these were early academic exercises. Their value lies in hands-on system design, assembly, sensor integration, testing, and documentation—not in claims of production readiness.',
    'Detail model komponen dan hasil ukur tidak dicantumkan karena dokumentasi asli belum tersedia untuk diverifikasi. Deskripsi fungsi di atas akan diaudit kembali sebelum detail teknis tambahan dipublikasikan.': 'Component-model details and measurements are omitted because the original documentation is not currently available for verification. The functional descriptions will be reviewed before additional technical details are published.'
  };

  const attributesEn = {
    'Navigasi utama': 'Main navigation',
    'Ringkasan kemampuan': 'Capability summary',
    'Filter proyek': 'Project filters',
    'Salin alamat email': 'Copy email address',
    'Fairizal Arifianto mengenakan setelan formal': 'Fairizal Arifianto wearing formal attire',
    'Buka studi kasus Microsleep Detector': 'Open the Microsleep Detector case study',
    'Buka studi kasus Stunting Classification': 'Open the Stunting Classification case study',
    'Buka studi kasus Comparative Text Analysis': 'Open the Comparative Text Analysis case study',
    'Buka studi kasus FACETRO': 'Open the FACETRO case study',
    'Logo aplikasi Microsleep Detector': 'Microsleep Detector application logo',
    'Heatmap korelasi 30 fitur pada klasifikasi stunting': 'Correlation heatmap of 30 features in the stunting classification project',
    'Dashboard hasil Comparative Text Analysis': 'Comparative Text Analysis results dashboard',
    'Prototipe akhir REMIND Driver Safety System': 'Final REMIND Driver Safety System prototype',
    'Hasil prediksi aplikasi riset preeklampsia': 'Prediction output from the preeclampsia research application',
    'Dashboard jaringan aspek pada Comparative Text Analysis': 'Aspect-network dashboard in Comparative Text Analysis',
    'Tampilan login, validasi input, dan navigasi aplikasi mobile FACETRO': 'Login, input validation, and navigation screens from the FACETRO mobile application',
    'Lima keadaan antarmuka aplikasi Microsleep Detector': 'Five interface states from the Microsleep Detector application',
    'Perbandingan akurasi empat model pada riset preeklampsia': 'Accuracy comparison of four models in the preeclampsia research project',
    'Foto prototipe akhir REMIND Driver Safety System': 'Photo of the final REMIND Driver Safety System prototype',
    'Perbandingan akurasi lima model klasifikasi stunting': 'Accuracy comparison of five stunting classification models'
  };

  const metaEn = {
    'index.html': {
      title: 'Fairizal Arifianto — Technology Portfolio',
      description: 'Fairizal Arifianto’s technology portfolio featuring AI, software, IoT, IT support, and system integration experience.',
      ogDescription: 'Projects across AI, software, mobile, IoT, and IT systems—from model development to technology implementation.'
    },
    'projects.html': {
      title: 'All Projects — Fairizal Arifianto',
      description: 'Technology projects by Fairizal Arifianto across AI, software, mobile, IoT, IT support, and system integration.'
    },
    'project-stunting.html': { title: 'Stunting Classification — Fairizal Arifianto', description: 'Case study of a stunting classification pipeline using the 2024 SSGI dataset.' },
    'project-microsleep.html': { title: 'Microsleep Detector — Fairizal Arifianto', description: 'Case study of an on-device Android computer vision application for microsleep detection.' },
    'project-preeclampsia.html': { title: 'Preeclampsia Detection — Fairizal Arifianto', description: 'Case study of a Django application and machine learning evaluation for preeclampsia research.' },
    'project-comparative-text.html': { title: 'Comparative Text Analysis — Fairizal Arifianto', description: 'Case study of an NLP and LLM-assisted comparative text-analysis application.' },
    'project-remind.html': { title: 'REMIND Driver Safety System — Fairizal Arifianto', description: 'Case study of the REMIND IoT and computer vision capstone prototype.' },
    'project-facetro.html': { title: 'FACETRO Attendance System — Fairizal Arifianto', description: 'Case study of mobile-development and implementation-support contributions to FACETRO.' },
    'project-iot-academic.html': { title: 'IoT Academic Prototypes — Fairizal Arifianto', description: 'Summary of Fairizal Arifianto’s academic IoT prototypes.' }
  };

  const originalText = new Map();
  const originalAttributes = [];
  let currentLanguage = 'id';

  const pageName = () => window.location.pathname.split('/').pop() || 'index.html';
  const preserveWhitespace = (source, replacement) => source.replace(source.trim(), replacement);

  function createSwitch() {
    const header = document.querySelector('.site-header');
    if (!header || header.querySelector('.language-switch')) return;
    const switcher = document.createElement('div');
    switcher.className = 'language-switch';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Pilihan bahasa');
    switcher.innerHTML = '<button type="button" data-language="id" aria-pressed="true">ID</button><span aria-hidden="true">/</span><button type="button" data-language="en" aria-pressed="false">EN</button>';
    header.appendChild(switcher);
    switcher.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  }

  function collectText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (['SCRIPT', 'STYLE'].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest('.language-switch') || node.parentElement?.id === 'project-count') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let node;
    while ((node = walker.nextNode())) originalText.set(node, node.nodeValue);

    document.querySelectorAll('[aria-label], [alt], [title], [placeholder]').forEach((element) => {
      ['aria-label', 'alt', 'title', 'placeholder'].forEach((attribute) => {
        if (element.hasAttribute(attribute)) originalAttributes.push([element, attribute, element.getAttribute(attribute)]);
      });
    });
  }

  function updateMetadata(language) {
    const originalTitle = document.querySelector('title')?.dataset.originalTitle || document.title;
    const titleElement = document.querySelector('title');
    if (titleElement && !titleElement.dataset.originalTitle) titleElement.dataset.originalTitle = originalTitle;
    const metadata = metaEn[pageName()];
    document.title = language === 'en' && metadata ? metadata.title : originalTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      if (!description.dataset.originalContent) description.dataset.originalContent = description.content;
      description.content = language === 'en' && metadata ? metadata.description : description.dataset.originalContent;
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      if (!ogTitle.dataset.originalContent) ogTitle.dataset.originalContent = ogTitle.content;
      ogTitle.content = language === 'en' && metadata ? metadata.title : ogTitle.dataset.originalContent;
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      if (!ogDescription.dataset.originalContent) ogDescription.dataset.originalContent = ogDescription.content;
      ogDescription.content = language === 'en' && metadata?.ogDescription ? metadata.ogDescription : ogDescription.dataset.originalContent;
    }
  }

  function updateProjectCount() {
    const count = document.querySelector('#project-count');
    if (!count) return;
    const visible = [...document.querySelectorAll('.case-card')].filter((card) => !card.hidden).length;
    count.textContent = currentLanguage === 'en' ? `${visible} ${visible === 1 ? 'project' : 'projects'}` : `${visible} proyek`;
  }

  function setLanguage(language) {
    currentLanguage = language === 'en' ? 'en' : 'id';
    document.documentElement.lang = currentLanguage;
    originalText.forEach((source, node) => {
      const key = source.trim();
      node.nodeValue = currentLanguage === 'en' && en[key] ? preserveWhitespace(source, en[key]) : source;
    });
    originalAttributes.forEach(([element, attribute, source]) => {
      element.setAttribute(attribute, currentLanguage === 'en' && attributesEn[source] ? attributesEn[source] : source);
    });
    document.querySelectorAll('.language-switch button').forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const switcher = document.querySelector('.language-switch');
    if (switcher) switcher.setAttribute('aria-label', currentLanguage === 'en' ? 'Language selection' : 'Pilihan bahasa');
    document.querySelectorAll('a[href*="drive.google.com/file/d/"]').forEach((link) => { link.href = CV_LINKS[currentLanguage]; });
    updateMetadata(currentLanguage);
    updateProjectCount();
    try { localStorage.setItem('portfolio-language', currentLanguage); } catch {}
    window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: { language: currentLanguage } }));
  }

  function init() {
    createSwitch();
    collectText();
    let savedLanguage = 'id';
    try { savedLanguage = localStorage.getItem('portfolio-language') || 'id'; } catch {}
    setLanguage(savedLanguage);
  }

  window.portfolioI18n = {
    init,
    setLanguage,
    getLanguage: () => currentLanguage,
    translate: (key) => currentLanguage === 'en' && en[key] ? en[key] : key,
    updateProjectCount
  };
})();

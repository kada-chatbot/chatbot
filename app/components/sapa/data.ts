import type { HistorySection, SuggestionItem, TopicItem } from "./types";

export const topics: TopicItem[] = [
  { id: "Umum", icon: "🌐", label: "Umum" },
  { id: "PSE", icon: "🏢", label: "PSE" },
  { id: "Regulasi", icon: "📋", label: "Regulasi" },
  { id: "Perizinan", icon: "📄", label: "Perizinan" },
  { id: "Internet", icon: "📡", label: "Internet" },
  { id: "Siber", icon: "🔒", label: "Siber" },
];

export const suggestions: SuggestionItem[] = [
  {
    id: "pse",
    icon: "🏢",
    title: "Daftar PSE",
    description: "Pelajari cara mendaftarkan Penyelenggara Sistem Elektronik",
    prompt: "Apa itu PSE dan bagaimana cara mendaftarkannya?",
  },
  {
    id: "pdp",
    icon: "🛡️",
    title: "UU PDP",
    description: "Informasi Undang-Undang Pelindungan Data Pribadi",
    prompt: "Jelaskan tentang UU Pelindungan Data Pribadi",
  },
  {
    id: "konten",
    icon: "🚨",
    title: "Lapor Konten",
    description: "Tata cara pelaporan konten ilegal & negatif",
    prompt: "Bagaimana cara melaporkan konten negatif di internet?",
  },
  {
    id: "internet",
    icon: "📡",
    title: "Akses Digital",
    description: "Program perluasan akses internet nasional",
    prompt: "Apa program Komdigi untuk internet di daerah terpencil?",
  },
];

export const historySections: HistorySection[] = [
  {
    label: "Hari Ini",
    items: [
      { title: "Informasi PSE & PSTE", active: true },
      { title: "Regulasi Perlindungan Data" },
    ],
  },
  {
    label: "Kemarin",
    items: [
      { title: "Pendaftaran Izin Frekuensi" },
      { title: "UU ITE Terbaru 2024" },
      { title: "Program Internet Desa" },
    ],
  },
  {
    label: "7 Hari Lalu",
    items: [{ title: "Konten Digital Ilegal" }],
  },
];

type DummyResponse = {
  keywords?: string[];
  response: string;
};

const dummyResponses: Record<string, DummyResponse> = {
  pse: {
    keywords: [
      "pse",
      "penyelenggara sistem elektronik",
      "daftar pse",
      "pendaftaran pse",
      "sistem elektronik",
    ],
    response: `<p><strong>Penyelenggara Sistem Elektronik (PSE)</strong> adalah setiap orang, penyelenggara negara, badan usaha, dan masyarakat yang menyediakan, mengelola, dan/atau mengoperasikan sistem elektronik.</p>
<p><strong>Cara Pendaftaran PSE:</strong></p>
<ul>
  <li>Kunjungi portal <strong>pse.kominfo.go.id</strong></li>
  <li>Buat akun dan lengkapi profil perusahaan</li>
  <li>Isi formulir pendaftaran secara online</li>
  <li>Lampirkan dokumen yang dipersyaratkan (NIB, akta perusahaan, dll)</li>
  <li>Tunggu verifikasi dari tim Komdigi (maksimal 14 hari kerja)</li>
</ul>
<p>PSE yang belum mendaftar dapat dikenai sanksi berupa pemblokiran akses. Untuk bantuan lebih lanjut, hubungi <strong>Call Center 159</strong>.</p>`,
  },
  pdp: {
    keywords: ["pdp", "data pribadi", "perlindungan data", "uu pdp", "undang-undang perlindungan"],
    response: `<p><strong>Undang-Undang Pelindungan Data Pribadi (UU PDP)</strong> — UU No. 27 Tahun 2022 — adalah regulasi yang mengatur pengumpulan, pemrosesan, dan perlindungan data pribadi warga negara Indonesia.</p>
<p><strong>Pokok-pokok UU PDP:</strong></p>
<ul>
  <li>Hak pemilik data: akses, koreksi, dan penghapusan data</li>
  <li>Kewajiban pengendali data untuk mendapatkan persetujuan</li>
  <li>Pelaporan kebocoran data dalam 14 jam</li>
  <li>Sanksi pidana hingga 6 tahun & denda Rp 60 miliar</li>
</ul>
<p>Masa transisi UU PDP berlaku 2 tahun sejak disahkan. Perusahaan diwajibkan segera menyesuaikan praktik pengelolaan data.</p>`,
  },
  konten: {
    keywords: ["lapor konten", "konten negatif", "konten ilegal", "blokir", "hoaks", "pornografi"],
    response: `<p>Untuk <strong>melaporkan konten negatif atau ilegal</strong> di internet, Komdigi menyediakan beberapa saluran resmi:</p>
<ul>
  <li>🌐 <strong>aduankonten.id</strong> — portal pengaduan konten online</li>
  <li>📧 <strong>aduankonten@komdigi.go.id</strong></li>
  <li>📱 <strong>WhatsApp:</strong> 08119224545</li>
  <li>📞 <strong>Call Center:</strong> 159</li>
</ul>
<p>Kategori konten yang dapat dilaporkan meliputi: pornografi anak, perjudian online, terorisme, hoaks berbahaya, penipuan digital, dan pelanggaran hak cipta.</p>
<p>Rata-rata penanganan aduan: <strong>kurang dari 3 jam</strong> untuk konten prioritas.</p>`,
  },
  internet: {
    keywords: ["internet desa", "internet terpencil", "akses internet", "program internet", "3t", "daerah terpencil", "bakti"],
    response: `<p>Komdigi melalui <strong>BAKTI (Badan Aksesibilitas Telekomunikasi dan Informasi)</strong> menjalankan berbagai program perluasan akses internet nasional:</p>
<ul>
  <li>📡 <strong>Palapa Ring</strong> — jaringan tulang punggung serat optik 35 provinsi</li>
  <li>🏘️ <strong>Internet Desa</strong> — koneksi broadband untuk 83.000+ desa</li>
  <li>🏫 <strong>Sekolah & Puskesmas</strong> — konektivitas lembaga layanan publik di daerah 3T</li>
  <li>🛰️ <strong>SATRIA-1</strong> — satelit multifungsi untuk daerah terpencil</li>
</ul>
<p>Untuk mengajukan permohonan konektivitas daerah 3T, kunjungi <strong>bakti.komdigi.go.id</strong> atau hubungi Dinas Kominfo setempat.</p>`,
  },
  "uu ite": {
    keywords: ["uu ite", "undang-undang ite", "pasal ite", "revisi ite", "hukum digital"],
    response: `<p><strong>UU ITE (Undang-Undang Informasi dan Transaksi Elektronik)</strong> — UU No. 1 Tahun 2024 (revisi kedua) mengatur transaksi elektronik, kejahatan siber, dan informasi digital di Indonesia.</p>
<p><strong>Pembaruan UU ITE 2024:</strong></p>
<ul>
  <li>Penguatan pasal perlindungan korban pencemaran nama baik</li>
  <li>Penambahan ketentuan <em>right to be forgotten</em></li>
  <li>Penegasan sanksi penyebaran hoaks dengan ancaman pidana</li>
  <li>Klausul perlindungan jurnalis dan pelapor pelanggaran</li>
</ul>
<p>Untuk konsultasi hukum terkait UU ITE, Komdigi bekerja sama dengan BPHN menyediakan layanan konsultasi gratis.</p>`,
  },
  frekuensi: {
    keywords: ["frekuensi", "izin frekuensi", "radio", "spektrum", "perizinan frekuensi"],
    response: `<p>Pengajuan <strong>Izin Penggunaan Spektrum Frekuensi Radio</strong> dilakukan secara online melalui sistem OSS (Online Single Submission) Komdigi.</p>
<p><strong>Jenis izin frekuensi:</strong></p>
<ul>
  <li>ISR (Izin Stasiun Radio) — untuk stasiun komunikasi radio</li>
  <li>IPFR (Izin Penggunaan Frekuensi Radio) — untuk jaringan telekomunikasi</li>
  <li>Izin Amatir Radio & KRAP</li>
</ul>
<p><strong>Proses pengajuan:</strong> Login di <strong>sdppi.komdigi.go.id</strong> → Pilih jenis izin → Isi data teknis → Upload dokumen → Bayar BHP Frekuensi → Tunggu penerbitan izin (7–30 hari kerja).</p>`,
  },
  siber: {
    keywords: ["siber", "cyber", "keamanan siber", "serangan siber", "ransomware", "bssn", "hack"],
    response: `<p>Untuk insiden <strong>keamanan siber</strong>, Komdigi berkoordinasi dengan <strong>BSSN (Badan Siber dan Sandi Negara)</strong> sebagai lembaga teknis utama.</p>
<p><strong>Jika terjadi insiden siber:</strong></p>
<ul>
  <li>Laporkan ke BSSN melalui <strong>cert@bssn.go.id</strong></li>
  <li>Hubungi <strong>ID-SIRTII/CC</strong> untuk insiden jaringan internet</li>
  <li>Kontak darurat: <strong>(021) 3192-5551</strong></li>
</ul>
<p>Komdigi juga menyediakan program <strong>CyberShield Indonesia</strong> untuk pelatihan dan sertifikasi keamanan digital bagi instansi pemerintah dan UMKM.</p>`,
  },
  default: {
    response: `<p>Terima kasih atas pertanyaan Anda. Saya adalah <strong>SAPA</strong>, Asisten Digital Kementerian Komunikasi dan Digital Republik Indonesia.</p>
<p>Saya dapat membantu Anda dengan informasi terkait:</p>
<ul>
  <li>🏢 Pendaftaran PSE (Penyelenggara Sistem Elektronik)</li>
  <li>🛡️ Regulasi perlindungan data (UU PDP)</li>
  <li>🚨 Pelaporan konten negatif & hoaks</li>
  <li>📡 Program akses internet daerah 3T</li>
  <li>⚖️ UU ITE dan regulasi digital</li>
  <li>📻 Perizinan frekuensi radio</li>
  <li>🔒 Keamanan siber dan aduan kejahatan digital</li>
</ul>
<p>Silakan ajukan pertanyaan lebih spesifik, atau hubungi <strong>Call Center Komdigi di 159</strong> untuk bantuan langsung dari petugas kami.</p>`,
  },
};

export function findResponse(text: string): string {
  const lower = text.toLowerCase();

  for (const [key, item] of Object.entries(dummyResponses)) {
    if (key === "default" || !item.keywords) {
      continue;
    }

    if (item.keywords.some((keyword) => lower.includes(keyword))) {
      return item.response;
    }
  }

  return dummyResponses.default.response;
}

// ===== Data ekstrakurikuler =====
const ekskulData = [
  {
    id: "pramuka",
    nama: "Pramuka",
    kategori: "Organisasi",
    emoji: "⛺",
    warna: "#dff3e4",
    deskripsi: "Melatih kemandirian, kepemimpinan, dan kerja sama tim melalui kegiatan alam terbuka.",
    kegiatan: [
      "Latihan rutin baris-berbaris dan tali-temali",
      "Perkemahan Sabtu-Minggu (Persami) tiap semester",
      "Kegiatan bakti sosial dan bersih lingkungan",
      "Pelatihan navigasi, pertolongan pertama, dan survival"
    ],
    penghargaan: [
      "Juara 1 Lomba Tingkat Penggalang Tingkat Kota 2025",
      "Juara 2 Cerdas Cermat Pramuka Tingkat Provinsi 2024",
      "Pangkalan Terbaik Se-Kwartir Cabang 2024"
    ],
    jadwal: "Jumat, 15.00–17.00 WIB · Pembina: Pak Hendra"
  },
  {
    id: "basket",
    nama: "Basket",
    kategori: "Olahraga",
    emoji: "🏀",
    warna: "#ffe6d2",
    deskripsi: "Mengasah kebugaran, strategi, dan sportivitas lewat latihan dan pertandingan antarsekolah.",
    kegiatan: [
      "Latihan fisik, dribbling, shooting, dan passing",
      "Latihan strategi tim dan simulasi pertandingan",
      "Turnamen antarsekolah dan antar kelas",
      "Pembinaan wasit dan pencatat skor"
    ],
    penghargaan: [
      "Juara 1 Pekan Olahraga Pelajar Kota 2025 (Putra)",
      "Juara 3 Liga Basket SMA Provinsi 2025",
      "Best Player Turnamen Pelajar 2024"
    ],
    jadwal: "Selasa & Kamis, 15.30–17.30 WIB · Pembina: Pak Rudi"
  },
  {
    id: "paskibra",
    nama: "Paskibra",
    kategori: "Organisasi",
    emoji: "🇮🇩",
    warna: "#fde0e3",
    deskripsi: "Membentuk disiplin, tanggung jawab, dan rasa cinta tanah air sebagai petugas pengibar bendera.",
    kegiatan: [
      "Latihan PBB dan formasi pengibaran bendera",
      "Bertugas pada upacara sekolah dan hari besar nasional",
      "Latihan fisik dan kedisiplinan",
      "Seleksi calon anggota Paskibraka tingkat kota"
    ],
    penghargaan: [
      "Juara 2 Lomba Baris-Berbaris Tingkat Provinsi 2025",
      "Juara Harapan 1 LKBB Tingkat Kota 2024",
      "Penampil Terbaik Upacara HUT RI Kecamatan 2025"
    ],
    jadwal: "Senin & Rabu, 15.00–17.00 WIB · Pembina: Bu Ratna"
  },
  {
    id: "pmr",
    nama: "PMR (Palang Merah Remaja)",
    kategori: "Sosial",
    emoji: "➕",
    warna: "#fbe3ea",
    deskripsi: "Belajar pertolongan pertama dan kepedulian sosial untuk membantu sesama.",
    kegiatan: [
      "Pelatihan P3K dan bantuan hidup dasar",
      "Piket UKS dan pendampingan kegiatan sekolah",
      "Donor darah dan aksi kemanusiaan",
      "Kampanye hidup sehat di lingkungan sekolah"
    ],
    penghargaan: [
      "Juara 1 Lomba Pertolongan Pertama (PMR Wira) 2025",
      "Juara 2 Jambore PMR Tingkat Kabupaten 2024",
      "Sekolah Penyelenggara Donor Darah Terbaik 2025"
    ],
    jadwal: "Rabu, 15.00–16.30 WIB · Pembina: Bu Dewi"
  },
  {
    id: "robotik",
    nama: "Robotik & Coding",
    kategori: "Sains & Teknologi",
    emoji: "🤖",
    warna: "#dde7fb",
    deskripsi: "Merancang robot dan membuat program sederhana sampai aplikasi, cocok untuk yang suka teknologi.",
    kegiatan: [
      "Belajar dasar elektronika dan Arduino",
      "Pemrograman Python dan web dasar",
      "Merakit robot line follower dan robot sumo",
      "Proyek teknologi untuk lomba dan pameran sekolah"
    ],
    penghargaan: [
      "Juara 1 Kontes Robot Line Follower Tingkat Provinsi 2025",
      "Medali Perak Olimpiade Sains Informatika Kota 2024",
      "Finalis Lomba Inovasi Teknologi Pelajar Nasional 2025"
    ],
    jadwal: "Kamis, 15.30–17.30 WIB · Pembina: Pak Andi"
  },
  {
    id: "paduan-suara",
    nama: "Paduan Suara",
    kategori: "Seni",
    emoji: "🎤",
    warna: "#efe3fa",
    deskripsi: "Mengembangkan teknik vokal, harmonisasi, dan kepercayaan diri tampil di depan umum.",
    kegiatan: [
      "Latihan teknik pernapasan, vokal, dan harmoni",
      "Tampil pada upacara dan perpisahan sekolah",
      "Mengikuti festival paduan suara pelajar",
      "Pelatihan dasar membaca not balok"
    ],
    penghargaan: [
      "Juara 1 Festival Paduan Suara Pelajar Kota 2025",
      "Medali Perak Lomba Paduan Suara Nasional 2024",
      "Penampil Terbaik Pentas Seni Pelajar 2025"
    ],
    jadwal: "Selasa, 15.00–17.00 WIB · Pembina: Bu Maya"
  },
  {
    id: "jurnalistik",
    nama: "Jurnalistik",
    kategori: "Seni",
    emoji: "📰",
    warna: "#fff1c7",
    deskripsi: "Berlatih menulis berita, mengambil foto, dan mengelola majalah dinding serta media sekolah.",
    kegiatan: [
      "Pelatihan menulis berita, opini, dan feature",
      "Mengelola mading dan website sekolah",
      "Liputan acara sekolah dan wawancara tokoh",
      "Dasar fotografi dan penyuntingan video"
    ],
    penghargaan: [
      "Juara 1 Lomba Menulis Berita Pelajar Provinsi 2025",
      "Juara 2 Lomba Mading Tingkat Kota 2024",
      "Majalah Sekolah Terbaik Tingkat Kabupaten 2025"
    ],
    jadwal: "Jumat, 14.30–16.00 WIB · Pembina: Pak Fajar"
  }
];

// ===== State & elemen =====
const STORAGE_KEY = "pendaftaran_ekskul";
let pendaftaran = [];
try { pendaftaran = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch (e) { pendaftaran = []; }

const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const overlay = document.getElementById("overlay");
const form = document.getElementById("regForm");
const successBox = document.getElementById("success");
const regSection = document.getElementById("pendaftaran-saya");
const regList = document.getElementById("regList");

let kategoriAktif = "Semua";
let ekskulDipilih = null;
let fokusSebelumnya = null;

// ===== Render filter =====
function renderFilters() {
  const kategori = ["Semua", ...new Set(ekskulData.map(e => e.kategori))];
  filtersEl.innerHTML = "";
  kategori.forEach(k => {
    const b = document.createElement("button");
    b.className = "chip" + (k === kategoriAktif ? " active" : "");
    b.textContent = k;
    b.setAttribute("aria-pressed", k === kategoriAktif);
    b.addEventListener("click", () => { kategoriAktif = k; renderFilters(); renderCards(); });
    filtersEl.appendChild(b);
  });
}

// ===== Render kartu =====
function sudahDaftar(id) {
  return pendaftaran.some(p => p.ekskulId === id);
}

function renderCards() {
  grid.innerHTML = "";
  ekskulData
    .filter(e => kategoriAktif === "Semua" || e.kategori === kategoriAktif)
    .forEach(e => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="card-top">
          <span class="emoji" style="background:${e.warna}">${e.emoji}</span>
          <div>
            <h3>${e.nama}</h3>
            <span class="tag">${e.kategori}</span>
          </div>
        </div>
        <div class="card-body">
          <p>${e.deskripsi}</p>
          <p class="stat">${e.kegiatan.length} kegiatan · ${e.penghargaan.length} penghargaan</p>
          ${sudahDaftar(e.id) ? '<span class="badge-done">✓ Kamu sudah mendaftar</span>' : ""}
        </div>
        <div class="card-foot">
          <button class="btn btn-detail" data-id="${e.id}">Lihat detail &amp; daftar</button>
        </div>`;
      card.querySelector("button").addEventListener("click", ev => bukaModal(e.id, ev.currentTarget));
      grid.appendChild(card);
    });
}

// ===== Modal =====
function bukaModal(id, pemicu) {
  ekskulDipilih = ekskulData.find(e => e.id === id);
  fokusSebelumnya = pemicu;

  document.getElementById("mTitle").textContent = ekskulDipilih.nama;
  document.getElementById("mDesc").textContent = ekskulDipilih.deskripsi;
  document.getElementById("mEmoji").textContent = ekskulDipilih.emoji;
  document.getElementById("mTop").style.background = ekskulDipilih.warna;
  document.getElementById("mJadwal").textContent = ekskulDipilih.jadwal;

  isiList("mKegiatan", ekskulDipilih.kegiatan);
  isiList("mPenghargaan", ekskulDipilih.penghargaan);

  resetForm();
  form.hidden = false;
  successBox.hidden = true;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("nama").focus();
}

function isiList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
}

function tutupModal() {
  overlay.hidden = true;
  document.body.style.overflow = "";
  if (fokusSebelumnya) fokusSebelumnya.focus();
}

document.getElementById("closeBtn").addEventListener("click", tutupModal);
document.getElementById("sClose").addEventListener("click", tutupModal);
overlay.addEventListener("click", e => { if (e.target === overlay) tutupModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !overlay.hidden) tutupModal(); });

// ===== Form =====
function resetForm() {
  form.reset();
  ["Nama", "Kelas", "Alasan"].forEach(n => {
    document.getElementById("err" + n).textContent = "";
  });
  form.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
}

function setError(inputId, errId, pesan) {
  document.getElementById(errId).textContent = pesan;
  document.getElementById(inputId).classList.toggle("invalid", !!pesan);
  return !pesan;
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const kelas = document.getElementById("kelas").value;
  const alasan = document.getElementById("alasan").value.trim();

  const okNama = setError("nama", "errNama",
    nama.length < 3 ? "Isi nama lengkap, minimal 3 huruf." : "");
  const okKelas = setError("kelas", "errKelas",
    !kelas ? "Pilih kelas kamu." : "");
  const okAlasan = setError("alasan", "errAlasan",
    alasan.length < 15 ? "Tulis alasanmu, minimal 15 karakter." : "");

  if (!(okNama && okKelas && okAlasan)) return;

  // Cegah daftar ganda (nama + ekskul yang sama)
  const ganda = pendaftaran.some(p =>
    p.ekskulId === ekskulDipilih.id && p.nama.toLowerCase() === nama.toLowerCase());
  if (ganda) {
    setError("nama", "errNama", "Nama ini sudah terdaftar di " + ekskulDipilih.nama + ".");
    return;
  }

  pendaftaran.push({
    ekskulId: ekskulDipilih.id,
    ekskulNama: ekskulDipilih.nama,
    nama, kelas, alasan,
    waktu: new Date().toLocaleString("id-ID")
  });
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(pendaftaran)); } catch (err) { /* abaikan */ }

  document.getElementById("sTitle").textContent = "Pendaftaran terkirim!";
  document.getElementById("sText").textContent =
    `${nama} (${kelas}) berhasil mendaftar ke ${ekskulDipilih.nama}. Pembina akan menghubungi kamu lewat wali kelas.`;
  form.hidden = true;
  successBox.hidden = false;

  renderCards();
  renderPendaftaran();
});

// ===== Daftar pendaftaran =====
function renderPendaftaran() {
  regList.innerHTML = "";
  regSection.hidden = pendaftaran.length === 0;
  pendaftaran.forEach(p => {
    const li = document.createElement("li");
    const kiri = document.createElement("strong");
    kiri.textContent = `${p.nama} · ${p.kelas}`;
    const tengah = document.createElement("span");
    tengah.textContent = p.ekskulNama;
    const kanan = document.createElement("span");
    kanan.textContent = p.waktu;
    li.append(kiri, tengah, kanan);
    regList.appendChild(li);
  });
}

// ===== Mulai =====
renderFilters();
renderCards();
renderPendaftaran();
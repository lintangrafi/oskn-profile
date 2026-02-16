import {
  Profile,
  Experience,
  Project,
  Skill,
  Education,
  Certification,
} from "./types";

// Profile Data
export const profileData: Profile = {
  name: "Lintang Rafi Endrian Darmawan",
  tagline: "Undergraduate Computer Science | Fullstack Mobile Programming | Junior Machine Learning Dev",
  bio: "Mahasiswa aktif semester 8 Ilmu Komputer dari Universitas Bina Bangsa dengan fokus pada Fullstack Mobile Programming dan Web Development. Berpengalaman dalam membuat aplikasi menggunakan Python, Flutter, Dart, PHP, dan database MySQL & PostgreSQL. Aktif sebagai founder dan ketua komunitas anime & cosplay di Lebak, berhasil mengorganisir event 'Yoru ni Nareshi' sebagai event anime pertama di kota. Pernah berkontribusi dengan Badan Pusat Statistik sebagai Data Entry Operator pada Sensus Tani 2023 dan REGSOSEK 2022.",
  email: "lintang.rafi45@gmail.com",
  location: "Lebak, Banten, Indonesia",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lintangrafi",
    github: "https://github.com/lintangrafi",
  },
};

// Experience Data
export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "Badan Pusat Statistik",
    role: "Data Entry Operator",
    type: "Contract",
    location: "Lebak, Banten, Indonesia",
    startDate: "2023-08",
    endDate: "2023-09",
    description:
      "Ikut dalam program entry data sebagai operator entry pada Sensus Tani 2023 (ST2023).",
    achievements: [
      "Memasukkan dan memverifikasi data pertanian secara akurat ke dalam sistem sensus",
      "Mencapai target harian entry data yang ditetapkan oleh koordinator statistik",
      "Mengelola data dengan tingkat akurasi tinggi dan kesalahan minimal",
    ],
    technologies: [
      "Microsoft Excel",
      "BPS Internal Data Entry System",
    ],
  },
  {
    id: "exp-2",
    company: "Badan Pusat Statistik",
    role: "Data Entry Operator",
    type: "Contract",
    location: "Lebak, Banten, Indonesia",
    startDate: "2023-01",
    endDate: "2023-03",
    description:
      "Ikut dalam program entry data sebagai operator entry di Registrasi Sosial dan Ekonomi 2022 (REGSOSEK 2022).",
    achievements: [
      "Mengelola ribuan data profil sosial ekonomi masyarakat Lebak dengan tingkat kesalahan minimal",
      "Membantu digitalisasi dokumen fisik ke dalam basis data registrasi nasional",
      "Berkontribusi dalam pengumpulan data yang akurat untuk kebijakan pemerintah",
    ],
    technologies: [
      "Microsoft Excel",
      "Data Management System",
    ],
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "POS Kygoo - Point of Sale System",
    description:
      "Aplikasi Point-of-Sale (POS) berbasis Next.js dengan fitur lengkap untuk manajemen inventori, laporan, audit log, dan shift management.",
    longDescription:
      "POS Kygoo adalah sistem kasir modern yang dibangun dengan Next.js 15, TypeScript, dan Drizzle ORM. Aplikasi ini menyediakan fitur lengkap untuk operasional bisnis retail termasuk POS, manajemen inventori, laporan keuangan, audit log, dan sistem shift. Menggunakan PostgreSQL sebagai database dan dilengkapi autentikasi dengan default akun superadmin dan cashier untuk testing.",
    image: "/projects/project1-pos.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
    ],
    category: "Web Application",
    featured: true,
    links: {
      github: "https://github.com/lintangrafi/POS-Kygoo",
      demo: "https://pos-kygoo.vercel.app/",
    },
    date: "2026-01",
  },
  {
    id: "proj-2",
    title: "Student Prediction ML - Lebak District",
    description:
      "Aplikasi Machine Learning untuk menganalisis dan memprediksi jumlah murid SMP di Kabupaten Lebak tahun 2016-2024 menggunakan Python dan Streamlit.",
    longDescription:
      "Proyek penelitian yang mengimplementasikan machine learning untuk menganalisis dan memprediksi jumlah murid Sekolah Menengah Pertama (SMP) di seluruh kecamatan Kabupaten Lebak. Aplikasi ini dilengkapi dashboard interaktif menggunakan Streamlit untuk visualisasi data dengan grafik Plotly, preprocessing data otomatis, dan model prediksi untuk membantu perencanaan pendidikan di daerah tersebut.",
    image: "/projects/project2-ml.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Pandas",
      "Plotly",
    ],
    category: "Data Science",
    featured: true,
    links: {
      github: "https://github.com/lintangrafi/prediksi-siswa-lebak",
    },
    date: "2025-11",
  },
  {
    id: "proj-3",
    title: "PT. Daya Prana Raya - Company Profile",
    description:
      "Website company profile modern dengan admin dashboard untuk mengelola portfolio project konstruksi dan building maintenance.",
    longDescription:
      "Website company profile lengkap untuk PT. Daya Prana Raya yang dibangun dengan Next.js 15 dan Supabase. Fitur utama meliputi homepage modern, project portfolio dengan filtering dan sorting, project detail dengan image gallery interaktif, admin dashboard untuk CRUD operations, multi-image upload dengan drag & drop support, responsive design, dan SEO optimized. Menggunakan shadcn/ui components untuk UI yang modern dan konsisten.",
    image: "/projects/project3-company.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    category: "Web Application",
    featured: true,
    links: {
      github: "https://github.com/lintangrafi/dpr-profile",
    },
    date: "2025-11",
  },
  {
    id: "proj-4",
    title: "Nusuki App - Modern Web Application",
    description:
      "Aplikasi web modern yang dibangun dengan Vite, React, TypeScript, dan shadcn/ui dengan focus pada performa dan SEO optimization.",
    image: "/projects/project4-nusuki.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    category: "Web Application",
    featured: false,
    links: {
      github: "https://github.com/lintangrafi/nusuki-app",
    },
    date: "2025-11",
  },
  {
    id: "proj-5",
    title: "PAGUMA Calendar - Program Management",
    description:
      "Aplikasi kalender interaktif berbasis Canvas API untuk mengelola program kerja PAGUMA Lebak dengan dukungan multi-departemen dan Firebase real-time.",
    image: "/projects/project5-calendar.jpg",
    technologies: [
      "JavaScript",
      "HTML5 Canvas",
      "Firebase",
      "CSS3",
    ],
    category: "Web Application",
    featured: false,
    links: {
      github: "https://github.com/lintangrafi/paguma-calendar",
      demo: "https://paguma-calendar.vercel.app/",
    },
    date: "2025-09",
  },
  {
    id: "proj-6",
    title: "LevelUp Lab - Skill Acquisition App",
    description:
      "Aplikasi mobile Flutter untuk pembelajaran skill menggunakan metode 'First 20 Hours' dengan Pomodoro technique untuk focus sessions.",
    image: "/projects/project6-levelup.jpg",
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Hive",
      "GoRouter",
    ],
    category: "Mobile Application",
    featured: false,
    links: {
      github: "https://github.com/lintangrafi/levelup-hub",
    },
    date: "2025-09",
  },
];

// Skills Data
export const skillsData: Skill[] = [
  // Frontend & Mobile
  { name: "Flutter", category: "Frontend", proficiency: 90 },
  { name: "Dart", category: "Frontend", proficiency: 90 },
  { name: "React", category: "Frontend", proficiency: 85 },
  { name: "Next.js", category: "Frontend", proficiency: 85 },
  { name: "HTML/CSS", category: "Frontend", proficiency: 90 },
  { name: "JavaScript", category: "Frontend", proficiency: 85 },
  { name: "TypeScript", category: "Frontend", proficiency: 80 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 85 },
  { name: "Responsive Design", category: "Frontend", proficiency: 90 },
  { name: "Kotlin", category: "Frontend", proficiency: 80 },

  // Backend
  { name: "Python", category: "Backend", proficiency: 85 },
  { name: "PHP", category: "Backend", proficiency: 80 },
  { name: "Node.js", category: "Backend", proficiency: 75 },
  { name: "Express.js", category: "Backend", proficiency: 75 },
  { name: "Prisma", category: "Backend", proficiency: 80 },
  { name: "REST APIs", category: "Backend", proficiency: 85 },

  // Database
  { name: "PostgreSQL", category: "Database", proficiency: 85 },
  { name: "MySQL", category: "Database", proficiency: 85 },
  { name: "Supabase", category: "Database", proficiency: 80 },
  { name: "Firebase", category: "Database", proficiency: 75 },

  // Tools
  { name: "VS Code", category: "Tools", proficiency: 90 },
  { name: "Git", category: "Tools", proficiency: 80 },
  { name: "Canva", category: "Tools", proficiency: 85 },
  { name: "Figma", category: "Tools", proficiency: 75 },
  { name: "Postman", category: "Tools", proficiency: 80 },

  // Other (ML, Game Dev)
  { name: "Machine Learning", category: "Other", proficiency: 75 },
  { name: "Unity 3D", category: "Other", proficiency: 80 },
  { name: "Flame Engine", category: "Other", proficiency: 75 },
  { name: "C#", category: "Other", proficiency: 75 },
  { name: "Blender", category: "Other", proficiency: 70 },
];

// Education Data
export const educationData: Education[] = [
  {
    id: "edu-1",
    institution: "Universitas Bina Bangsa",
    degree: "Bachelor of Science (S1)",
    field: "Ilmu Komputer (Computer Science)",
    startDate: "2022-08",
    endDate: "2026-06",
    description:
      "Mahasiswa aktif dengan fokus pada Fullstack Mobile Programming dan Web Development. Sedang menyusun skripsi mengenai analisis kualitatif deskriptif pada platform Medium.",
  },
];

// Certifications Data
export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    name: "SAP Procurement System Development & Simulation",
    issuer: "SAP",
    date: "2024-06",
  },
  {
    id: "cert-2",
    name: "Dasar-dasar Keamanan AI",
    issuer: "Dicoding Indonesia",
    date: "2024-03",
  },
  {
    id: "cert-3",
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2024-02",
  },
  {
    id: "cert-4",
    name: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM",
    date: "2024-11",
  },
  {
    id: "cert-5",
    name: "Outstanding Presentation on Machine Learning Applications",
    issuer: "University Conference",
    date: "2025-01",
  },
];

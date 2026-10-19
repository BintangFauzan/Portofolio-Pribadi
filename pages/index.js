import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import deved from "../public/Profil.jpg";
import RilisProject from "./components/RilisProject";
import ProjectMandiri from "./components/ProjectMandiri";

const skills = [
  "Laravel",
  "React",
  "Next.js",
  "Vue.js",
  "React Native",
  "CodeIgniter",
  "MySQL",
  "Tailwind CSS",
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`portfolio-page${darkMode ? " dark" : ""}`}>
      <Head>
        <title>Bintang Fauzan Dyan | Developer</title>
        <meta
          name="description"
          content="Portofolio Bintang Fauzan Dyan, developer web dan aplikasi."
        />
      </Head>

      <header className="portfolio-header">
        <a className="portfolio-brand" href="#home" onClick={closeMenu}>
          PORTOFOLIO PROFILE
        </a>
        <div className="header-actions">
          <button
            aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            className="header-button"
            onClick={() => setDarkMode(!darkMode)}
            type="button"
          >
            {darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
          </button>
          <button
            aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
            aria-expanded={menuOpen}
            className={`header-button menu-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav
          aria-label="Navigasi utama"
          className={`portfolio-nav${menuOpen ? " is-open" : ""}`}
        >
          <a href="#home" onClick={closeMenu}>Beranda</a>
          <a href="#about" onClick={closeMenu}>Tentang Saya</a>
          <a href="#projects" onClick={closeMenu}>Proyek</a>
          <a href="#contact" onClick={closeMenu}>Kontak</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <p className="eyebrow">PORTOFOLIO · DEVELOPER INDONESIA</p>
          <div className="portrait-card">
            <div className="portrait-image">
              <Image
                alt="Foto profil Bintang Fauzan Dyan"
                src={deved}
                fill
                priority
                sizes="(max-width: 640px) 82vw, 420px"
                style={{ objectFit: "cover", objectPosition: "center 25%" }}
              />
            </div>
            <div className="portrait-caption">
              <span>Sarjana Ilmu Komputer</span>
              <i />
            </div>
          </div>
          <p className="hero-role">FULLSTACK WEBSITE DEVELOPER</p>
          <h1>BINTANG FAUZAN DYAN</h1>
          <div className="hero-specialties" aria-label="Bidang keahlian">
            <span>Website Developer</span>
            <span>Web Application</span>
            <span>Problem Solver</span>
          </div>
          <p className="hero-description">
            Lulusan Ilmu Komputer yang antusias membangun aplikasi dan website
            yang bermanfaat. Senang belajar teknologi baru, bekerja sama dalam
            tim, dan mengubah kebutuhan menjadi solusi digital.
          </p>
          <div className="social-links" aria-label="Media sosial">
            <a
              aria-label="Instagram Bintang Fauzan"
              href="https://www.instagram.com/bintang_fauzan14?igsh=NGpxb3JieW50ODFt"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
            <a
              aria-label="LinkedIn Bintang Fauzan"
              href="https://www.linkedin.com/in/bintang-fauzan-62a760203"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              aria-label="GitHub Bintang Fauzan"
              href="https://github.com/BintangFauzan"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </div>
          <a
            className="resume-button"
            href="https://drive.google.com/file/d/1bKeMw5O4PU0AqeyT5vrOgDlgriGYbpVi/view?usp=drive_link"
            rel="noreferrer"
            target="_blank"
          >
            LIHAT CV &amp; RESUME <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-kicker">
            <span>01. TENTANG SAYA</span>
            <span>PROFIL</span>
          </div>
          <div className="about-content">
            <h2>Membangun solusi digital yang berguna.</h2>
            <p>
              Saya adalah lulusan Ilmu Komputer yang tertarik pada pengembangan
              web dan perangkat lunak. Saya memiliki pengalaman mengembangkan
              aplikasi menggunakan teknologi seperti{" "}
              <strong>Laravel, React, Next.js, Vue.js</strong>, dan{" "}
              <strong>CodeIgniter</strong>.
            </p>
            <p>
              Dalam setiap proyek, saya berusaha memahami kebutuhan pengguna,
              menulis kode yang mudah dirawat, dan terus mengembangkan
              keterampilan melalui tantangan baru.
            </p>
            <div className="skills-panel">
              <span className="skills-label">TEKNOLOGI YANG SAYA GUNAKAN</span>
              <div className="skills-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-kicker">
            <span>02. KARYA SAYA</span>
            <span>PROYEK</span>
          </div>
          <div className="section-heading">
            <h2>Proyek pilihan</h2>
            <p>
              Beberapa proyek profesional dan mandiri yang pernah saya
              kerjakan.
            </p>
          </div>
          <div className="project-group">
            <h3>Proyek profesional</h3>
            <div className="portfolio-projects">
              <RilisProject />
            </div>
          </div>
          <div className="project-group">
            <h3>Proyek mandiri</h3>
            <div className="portfolio-projects">
              <ProjectMandiri />
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-kicker">
            <span>03. MARI TERHUBUNG</span>
            <span>KONTAK</span>
          </div>
          <h2>Ada ide untuk dikerjakan bersama?</h2>
          <p>Saya terbuka untuk berdiskusi tentang proyek dan kesempatan baru.</p>
          <a
            href="https://www.linkedin.com/in/bintang-fauzan-62a760203"
            rel="noreferrer"
            target="_blank"
          >
            HUBUNGI SAYA <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="portfolio-footer">
        <a href="#home">BINTANG FAUZAN DYAN</a>
        <span>© {new Date().getFullYear()} · Dibuat dengan semangat belajar</span>
      </footer>
    </div>
  );
}

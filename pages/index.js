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

const copy = {
  id: {
    description: "Portofolio Bintang Fauzan Dyan, developer web dan aplikasi.",
    switchLanguage: "Switch to English",
    switchThemeToLight: "Aktifkan mode terang",
    switchThemeToDark: "Aktifkan mode gelap",
    closeMenu: "Tutup navigasi",
    openMenu: "Buka navigasi",
    navigation: "Navigasi utama",
    home: "Beranda",
    about: "Tentang Saya",
    projects: "Proyek",
    contact: "Kontak",
    eyebrow: "PORTOFOLIO · DEVELOPER INDONESIA",
    portraitAlt: "Foto profil Bintang Fauzan Dyan",
    degree: "Sarjana Ilmu Komputer",
    specialties: "Bidang keahlian",
    introduction:
      "Lulusan Ilmu Komputer yang antusias membangun aplikasi dan website yang bermanfaat. Senang belajar teknologi baru, bekerja sama dalam tim, dan mengubah kebutuhan menjadi solusi digital.",
    socialMedia: "Media sosial",
    resume: "LIHAT CV & RESUME",
    aboutKicker: "01. TENTANG SAYA",
    profile: "PROFIL",
    aboutHeading: "Membangun solusi digital yang berguna.",
    aboutFirst:
      "Saya adalah lulusan Ilmu Komputer yang tertarik pada pengembangan web dan perangkat lunak. Saya memiliki pengalaman mengembangkan aplikasi menggunakan teknologi seperti",
    aboutSecond:
      "Dalam setiap proyek, saya berusaha memahami kebutuhan pengguna, menulis kode yang mudah dirawat, dan terus mengembangkan keterampilan melalui tantangan baru.",
    skills: "TEKNOLOGI YANG SAYA GUNAKAN",
    workKicker: "02. KARYA SAYA",
    featured: "Proyek pilihan",
    projectsDescription:
      "Beberapa proyek profesional dan mandiri yang pernah saya kerjakan.",
    professionalProjects: "Proyek profesional",
    personalProjects: "Proyek mandiri",
    contactKicker: "03. MARI TERHUBUNG",
    contactHeading: "Ada ide untuk dikerjakan bersama?",
    contactDescription:
      "Saya terbuka untuk berdiskusi tentang proyek dan kesempatan baru.",
    contactButton: "HUBUNGI SAYA",
    footer: "Dibuat dengan semangat belajar",
  },
  en: {
    description:
      "The portfolio of Bintang Fauzan Dyan, a web and application developer.",
    switchLanguage: "Switch to Indonesian",
    switchThemeToLight: "Switch to light mode",
    switchThemeToDark: "Switch to dark mode",
    closeMenu: "Close navigation",
    openMenu: "Open navigation",
    navigation: "Main navigation",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    eyebrow: "PORTFOLIO · INDONESIAN DEVELOPER",
    portraitAlt: "Portrait of Bintang Fauzan Dyan",
    degree: "Bachelor of Computer Science",
    specialties: "Areas of expertise",
    introduction:
      "A Computer Science graduate passionate about building useful applications and websites. I enjoy learning new technologies, collaborating with teams, and turning needs into digital solutions.",
    socialMedia: "Social media",
    resume: "VIEW CV & RESUME",
    aboutKicker: "01. ABOUT ME",
    profile: "PROFILE",
    aboutHeading: "Building digital solutions that make a difference.",
    aboutFirst:
      "I am a Computer Science graduate interested in web and software development. I have experience building applications with technologies such as",
    aboutSecond:
      "For every project, I aim to understand user needs, write maintainable code, and keep growing my skills through new challenges.",
    skills: "TECHNOLOGIES I WORK WITH",
    workKicker: "02. SELECTED WORK",
    featured: "Featured projects",
    projectsDescription:
      "A selection of professional and personal projects I have worked on.",
    professionalProjects: "Professional projects",
    personalProjects: "Personal projects",
    contactKicker: "03. LET'S CONNECT",
    contactHeading: "Have a project in mind?",
    contactDescription:
      "I am open to discussing new projects and opportunities.",
    contactButton: "GET IN TOUCH",
    footer: "Built with a passion for learning",
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("id");
  const [menuOpen, setMenuOpen] = useState(false);

  const text = copy[language];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`portfolio-page${darkMode ? " dark" : ""}`}
      lang={language}
    >
      <Head>
        <title>Bintang Fauzan Dyan | Developer</title>
        <meta
          name="description"
          content={text.description}
        />
      </Head>

      <header className="portfolio-header">
        <a className="portfolio-brand" href="#home" onClick={closeMenu}>
          {language === "en" ? "MY PORTFOLIO" : "PORTOFOLIO PROFILE"}
        </a>
        <div className="header-actions">
          <button
            aria-label={text.switchLanguage}
            className="header-button language-toggle"
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            type="button"
          >
            {language === "id" ? "EN" : "ID"}
          </button>
          <button
            aria-label={
              darkMode ? text.switchThemeToLight : text.switchThemeToDark
            }
            className="header-button"
            onClick={() => setDarkMode(!darkMode)}
            type="button"
          >
            {darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
          </button>
          <button
            aria-label={menuOpen ? text.closeMenu : text.openMenu}
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
          aria-label={text.navigation}
          className={`portfolio-nav${menuOpen ? " is-open" : ""}`}
        >
          <a href="#home" onClick={closeMenu}>{text.home}</a>
          <a href="#about" onClick={closeMenu}>{text.about}</a>
          <a href="#projects" onClick={closeMenu}>{text.projects}</a>
          <a href="#contact" onClick={closeMenu}>{text.contact}</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <p className="eyebrow">{text.eyebrow}</p>
          <div className="portrait-card">
            <div className="portrait-image">
              <Image
                alt={text.portraitAlt}
                src={deved}
                fill
                priority
                sizes="(max-width: 640px) 82vw, 420px"
                style={{ objectFit: "cover", objectPosition: "center 25%" }}
              />
            </div>
            <div className="portrait-caption">
              <span>{text.degree}</span>
              <i />
            </div>
          </div>
          <p className="hero-role">FULLSTACK WEBSITE DEVELOPER</p>
          <h1>BINTANG FAUZAN DYAN</h1>
          <div className="hero-specialties" aria-label={text.specialties}>
            <span>Website Developer</span>
            <span>Web Application</span>
            <span>Problem Solver</span>
          </div>
          <p className="hero-description">
            {text.introduction}
          </p>
          <div className="social-links" aria-label={text.socialMedia}>
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
            href="https://drive.google.com/drive/folders/1xnKduLcUFc2bQUSXwt3tlTCw4iew_3J6?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            {text.resume} <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-kicker">
            <span>{text.aboutKicker}</span>
            <span>{text.profile}</span>
          </div>
          <div className="about-content">
            <h2>{text.aboutHeading}</h2>
            <p>
              {text.aboutFirst}{" "}
              <strong>Laravel, React, Next.js, Vue.js</strong>, dan{" "}
              <strong>CodeIgniter</strong>.
            </p>
            <p>{text.aboutSecond}</p>
            <div className="skills-panel">
              <span className="skills-label">{text.skills}</span>
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
            <span>{text.workKicker}</span>
            <span>{text.projects}</span>
          </div>
          <div className="section-heading">
            <h2>{text.featured}</h2>
            <p>{text.projectsDescription}</p>
          </div>
          <div className="project-group">
            <h3>{text.professionalProjects}</h3>
            <div className="portfolio-projects">
              <RilisProject language={language} />
            </div>
          </div>
          <div className="project-group">
            <h3>{text.personalProjects}</h3>
            <div className="portfolio-projects">
              <ProjectMandiri language={language} />
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-kicker">
            <span>{text.contactKicker}</span>
            <span>{text.contact}</span>
          </div>
          <h2>{text.contactHeading}</h2>
          <p>{text.contactDescription}</p>
          <a
            href="https://www.linkedin.com/in/bintang-fauzan-62a760203"
            rel="noreferrer"
            target="_blank"
          >
            {text.contactButton} <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="portfolio-footer">
        <a href="#home">BINTANG FAUZAN DYAN</a>
        <span>© {new Date().getFullYear()} · {text.footer}</span>
      </footer>
    </div>
  );
}

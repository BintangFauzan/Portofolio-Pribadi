import Head from "next/head";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import IconChrome from "./components/PartComponents/IconChrome";
import MyProject from "./components/MyProject";
import deved from "../public/Profil.jpg";
import Image from "next/image";

import IconGithub from "./components/PartComponents/IconGithub";
import spmb from "../public/spmb.png";
import RilisProject from "./components/RilisProject";
import ProjectMandiri from "./components/ProjectMandiri";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">BintangFauzan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1bKeMw5O4PU0AqeyT5vrOgDlgriGYbpVi/view?usp=drive_link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Bintang Fauzan Dyan
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Seorang lulusan dengan gelar Sarjana dalam Ilmu Komputer yang
              antusias dan siap memulai karir di bidang teknologi informasi.
              Memiliki pemahaman dasar tentang pengembangan, pemrograman, dan
              pengembangan perangkat lunak, serta analisis sistem. Mampu bekerja
              dalam tim dan memiliki kemampuan belajar yang cepat. Berkomitmen
              untuk mengembangkan keterampilan dan berkontribusi pada
              proyek-proyek yang menantang.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.instagram.com/bintang_fauzan14?igsh=NGpxb3JieW50ODFt">
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/bintang-fauzan-62a760203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              {/* <AiFillYoutube /> */}
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Project</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Ini adalah beberapa project yang sudah rilis saya kerjakan.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <RilisProject />
          </div>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Project</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Project mandiri yang saya kerjakan
            </p>
          </div>
          <ProjectMandiri />
        </section>
      </main>
    </div>
  );
}

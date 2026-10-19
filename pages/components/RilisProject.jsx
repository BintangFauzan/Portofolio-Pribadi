import MyProject from "./MyProject";
import spmb from "../../public/spmb.png";
import rospa from "../../public/rospa.png";
import simela from "../../public/simela.png";
import IconGithub from "../components/PartComponents/IconGithub";
import survey from "../../public/survey_360.png";

export default function RilisProject({ language }) {
  const english = language === "en";

  return (
    <>
      {/* SPMB*/}
      <MyProject
        src={spmb}
        h2={
          english
            ? "SPMB Website - Khoirul Ummah School Admissions"
            : "Web SPMB - Pendaftaran Sekolah Khoirul Ummah"
        }
        p={
          <>
            <strong className="text-gray-900 dark:text-white">
              Challenge:
            </strong>{" "}
            {english
              ? "The previous admissions website only supported elementary school applications. The foundation needed to accept middle and high school applications as well."
              : "Web PPDB sebelumnya hanya menampilkan data untuk SD. Yayasan membutuhkan fitur pendaftaran untuk siswa SMP dan SMA."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            {english
              ? "Added dedicated application pages for middle and high school, with tailored forms integrated into the existing database. The updated system streamlines enrollment for these school levels."
              : "Menambahkan menu baru untuk pendaftaran SMP dan SMA dengan formulir yang sesuai dan integrasi dengan database yang ada. Membuat sistem yang memudahkan proses pendaftaran untuk level pendidikan yang lebih tinggi."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            {english
              ? "Expanded enrollment to middle and high school students, improved access to the foundation, and broadened admissions across multiple education levels."
              : "Membuka peluang pendaftaran untuk siswa SMP dan SMA, meningkatkan aksesibilitas yayasan, dan memperluas jangkauan pendaftaran ke berbagai jenjang pendidikan."}
          </>
        }
        hrefGithub={
          "https://github.com/BintangFauzan/WebSIMELA" // Ganti dengan link GitHub jika ada
        }
      >
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
            CodeIgniter 3
          </span>
          <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
            MySQL
          </span>
        </div>
        {/* Links */}
        <a
          href={"https://www.ppdb.khoiruummah.sch.id/LandingPage/tampil"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-400 hover:text-blue-700 transition duration-200 font-semibold flex items-center gap-1"
        >
          {english ? "View live site →" : "Live →"}
        </a>
      </MyProject>
      {/* Rospa*/}
      <MyProject
        src={rospa}
        h2={
      english
        ? "Rospa Web - Media Team Request System"
        : "Rospa Web - Tim Media Request System"
        }
        p={
          <>
            <strong className="text-gray-900 dark:text-white">
              Challenge:
            </strong>{" "}
            {english
              ? "Media clients submitted large batches of photo and video editing requests without a queue, disrupting the team and leaving clients unable to track their requests."
              : "Klien media mengirim request edit foto/video secara massal tanpa sistem antrian, menyebabkan gangguan dan klien tidak tahu status request mereka."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            {english
              ? "Implemented a request queue that assigns each submission a queue number and lets clients track its status in real time."
              : "Mengimplementasikan sistem antrian untuk request klien. Setiap request mendapat nomor antrian dan klien dapat memonitor status secara real-time."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            {english
              ? "Improved the media team's efficiency, gave clients visibility into their requests, and reduced disruptions during peak hours."
              : "Meningkatkan efisiensi tim media, klien dapat memonitor request mereka, dan mengurangi gangguan saat peak hour."}
          </>
        }
        hrefGithub={
          "https://github.com/BintangFauzan/Rospa-Web" // Ganti dengan link GitHub
        }
      >
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
            CodeIgniter 3
          </span>
          <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
            MySQL
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 px-4 py-1 rounded-full text-sm font-medium">
            Real-time Updates
          </span>
        </div>
        {/* Links */}
        <IconGithub
          href={"https://github.com/BintangFauzan/Rospa"}
          margin={"mb-5 ml-5"}
        />
        <a
          href={"https://rospa.donasirumahtahfizh.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-400 hover:text-blue-700 transition duration-200 font-semibold flex items-center gap-1"
        >
          {english ? "View live site →" : "Live →"}
        </a>
      </MyProject>
      {/* Simela*/}
      <MyProject
        src={simela}
        h2={
          english
            ? "SIMELA Website - School Management"
            : "Web SIMELA - Manajemen Sekolah"
        }
        p={
          <>
            <strong className="text-gray-900 dark:text-white">
              Challenge:
            </strong>{" "}
            {english
              ? "A foundation operating three schools needed a centralized system to manage academics, students, and staff. The previous system also had a complex report-card printing bug caused by conflicting code."
              : "Yayasan dengan 3 sekolah membutuhkan sistem terpusat untuk manajemen akademik, peserta didik, dan tenaga pendidik. Sistem sebelumnya memiliki bug cetak rapor yang kompleks akibat konflik yang tidak disengaja dari programmer sebelumnya."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            {english
              ? "Developed a centralized management platform for all three schools, covering academics, students, staff, assessments, grading, and reports. Fixed the report-card printing bug and its impact on related features."
              : "Mengembangkan web manajemen terpusat untuk 3 sekolah dengan fitur lengkap: Manajemen Akademik, Peserta Didik, Tenaga Pendidik, Evaluasi & Penilaian, dan Pelaporan. Memperbaiki bug cetak rapor yang menyebabkan efek berantai pada berbagai fungsionalitas."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            {english
              ? "Improved the foundation's administrative efficiency, reduced report-processing time, and unified data management across all three schools."
              : "Meningkatkan efisiensi administrasi yayasan, mengurangi waktu pemrosesan laporan, dan memastikan data terintegrasi dengan baik untuk 3 sekolah yang dikelola secara terpusat."}
          </>
        }
      >
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
            CodeIgniter 3
          </span>
          <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
            MySQL
          </span>
        </div>
        {/* Links */}
        <IconGithub
          href={"https://github.com/BintangFauzan/simela"}
          margin={"mb-5 ml-5"}
        />
      </MyProject>
      {/* Survey 360*/}
      <MyProject
        src={survey}
        h2={"Survey 360 - Survey Builder"}
        p={
          <>
            <strong className="text-gray-900 dark:text-white">
              Challenge:
            </strong>{" "}
            {english
              ? "Administrators struggled to create surveys for schools and foundation teams, each requiring different formats."
              : "Admin kesulitan membuat survei untuk sekolah maupun internal yayasan dengan format yang berbeda-beda."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            {english
              ? "Developed a survey builder that lets administrators create surveys with different question types, target audiences, and automated distribution."
              : "Mengembangkan platform survey builder yang memungkinkan admin membuat survei dengan berbagai tipe pertanyaan, target responden, dan distribusi otomatis."}
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            {english
              ? "Streamlined the foundation's administration, improved data organization, and made survey results easier to analyze."
              : "Memudahkan administrasi yayasan, data lebih terstruktur, dan hasil survei dapat dianalisis dengan lebih baik."}
          </>
        }
      >
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
            Laravel 11
          </span>
          <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
            MySQL
          </span>
          <span className="bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-300 px-4 py-1 rounded-full text-sm font-medium">
            React
          </span>
        </div>
        {/* Links */}
        <IconGithub
          href={"https://github.com/BintangFauzan/Survey-360"}
          margin={"mb-5 ml-5"}
        />
        <a
          href={"https://survey360.generasiumatterbaik.com/login"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-400 hover:text-blue-700 transition duration-200 font-semibold flex items-center gap-1"
        >
          {english ? "View live site →" : "Live →"}
        </a>
      </MyProject>
    </>
  );
}

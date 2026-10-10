import MyProject from "./MyProject";
import spmb from "../../public/spmb.png";
import rospa from "../../public/rospa.png";
import simela from "../../public/simela.png";
import IconGithub from "../components/PartComponents/IconGithub";
import survey from "../../public/survey_360.png";

export default function RilisProject({}) {
  return (
    <>
      {/* SPMB*/}
      <MyProject
        src={spmb}
        h2={"Web SPMB - Pendaftaran Sekolah Khoirul Ummah"}
        p={
          <>
            <strong className="text-gray-900 dark:text-white">
              Challenge:
            </strong>{" "}
            Web PPDB sebelumnya hanya menampilkan data untuk SD. Yayasan
            membutuhkan fitur pendaftaran untuk siswa SMP dan SMA.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            Menambahkan menu baru untuk pendaftaran SMP dan SMA dengan formulir
            yang sesuai dan integrasi dengan database yang ada. Membuat sistem
            yang memudahkan proses pendaftaran untuk level pendidikan yang lebih
            tinggi.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            Membuka peluang pendaftaran untuk siswa SMP dan SMA, meningkatkan
            aksesibilitas yayasan, dan memperluas jangkauan pendaftaran ke
            berbagai jenjang pendidikan.
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
          Live →
        </a>
      </MyProject>
      {/* Rospa*/}
      <MyProject
        src={rospa}
        h2={"Rospa Web - Tim Media Request System"}
        p={
          <>
            <strong className="text-gray-900 dark:text-white">
              Challenge:
            </strong>{" "}
            Klien media mengirim request edit foto/video secara massal tanpa
            sistem antrian, menyebabkan gangguan dan klien tidak tahu status
            request mereka.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            Mengimplementasikan sistem antrian untuk request klien. Setiap
            request mendapat nomor antrian dan klien dapat memonitor status
            secara real-time.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            Meningkatkan efisiensi tim media, klien dapat memonitor request
            mereka, dan mengurangi gangguan saat peak hour.
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
          Live →
        </a>
      </MyProject>
      {/* Simela*/}
      <MyProject
        src={simela}
        h2={"Web SIMELA - Manajemen Sekolah"}
        p={
          <>
            <strong className="text-gray-900 dark:text-white">
              Challenge:
            </strong>{" "}
            Yayasan dengan 3 sekolah membutuhkan sistem terpusat untuk manajemen
            akademik, peserta didik, dan tenaga pendidik. Sistem sebelumnya
            memiliki bug cetak rapor yang kompleks akibat konflik yang tidak
            disengaja dari programmer sebelumnya.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            Mengembangkan web manajemen terpusat untuk 3 sekolah dengan fitur
            lengkap: Manajemen Akademik, Peserta Didik, Tenaga Pendidik,
            Evaluasi & Penilaian, dan Pelaporan. Memperbaiki bug cetak rapor
            yang menyebabkan efek berantai pada berbagai fungsionalitas.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            Meningkatkan efisiensi administrasi yayasan, mengurangi waktu
            pemrosesan laporan, dan memastikan data terintegrasi dengan baik
            untuk 3 sekolah yang dikelola secara terpusat.
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
            Admin kesulitan membuat survei untuk sekolah maupun internal yayasan
            dengan format yang berbeda-beda.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Solution:
            </strong>{" "}
            Mengembangkan platform survey builder yang memungkinkan admin
            membuat survei dengan berbagai tipe pertanyaan, target responden,
            dan distribusi otomatis.
            <br />
            <strong className="text-gray-900 dark:text-white">
              Impact:
            </strong>{" "}
            Memudahkan administrasi yayasan, data lebih terstruktur, dan hasil
            survei dapat dianalisis dengan lebih baik.
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
          Live →
        </a>
      </MyProject>
    </>
  );
}

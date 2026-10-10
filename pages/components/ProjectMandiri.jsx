import MyProject from "./MyProject";
import IconChrome from "./PartComponents/IconChrome";
import IconGithub from "./PartComponents/IconGithub";
import web1 from "../../public/Perpustakaan.png";
import web2 from "../../public/TTS.jpeg";
import web3 from "../../public/Letter.png";
import webInventori from "../../public/Web Invetori.png";
import webCuaca from "../../public/Vite + React - Google Chrome 5_8_2025 4_38_31 PM.png";
import webInventoriBarangReact from "../../public/Web Inventori Barang React.png";
import webFood from "../../public/Web Food Order.png";
import ArusDana from "../../public/Arus_dana_2.png";

export default function ProjectMandiri() {
  return (
    <>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {/* Card 1: Perpustakaan Digital */}
        <MyProject
          src={web1}
          h2={"Perpustakaan Digital"}
          p={
            "Membuat sistem perpustakaan dengan Vue sebagai front end dan php sebagai backend nya"
          }
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
              Vue
            </span>
            <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              MySQL
            </span>
            <span className="bg-blue-100 text-blue-500 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              PHP
            </span>
          </div>
          <IconGithub href={"https://github.com/BintangFauzan/UAS_PEMWEB_02"} />
        </MyProject>

        {/* Card 2: Text To Speech Bahasa Minang */}
        <MyProject
          src={web2}
          h2={"Text To Speech Bahasa Minang"}
          p={
            "Membuat Sistem Text To Speech Bahasa Minang Dengan Menggunakan Metode VITS"
          }
          hrefGithub={
            "https://colab.research.google.com/drive/1VrueknvZBkWUxxGbbLEdcZ8yZZjkCEg7#scrollTo=TSkVk0MpUGpi"
          }
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-100 text-cyan-900 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
              Python
            </span>
          </div>
          <IconChrome
            href={
              "https://colab.research.google.com/drive/1w1lDT_ATJM7PbIguZyUb-k1RBzJa8X3u?usp=sharing"
            }
          />
          <IconGithub
            href={
              "https://colab.research.google.com/drive/1VrueknvZBkWUxxGbbLEdcZ8yZZjkCEg7#scrollTo=TSkVk0MpUGpi"
            }
          />
        </MyProject>

        {/* Card 3: Making A Game */}
        <MyProject
          src={web3}
          h2={"Making A Game"}
          p={"Membuat Game RPG 2D Dengan Menggunakan RPG Maker MV"}
          hrefGithub={"https://github.com/BintangFauzan/Inventori"}
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-300 px-4 py-1 rounded-full text-sm font-medium">
              RPG Maker MV
            </span>
          </div>
          <IconChrome href={"https://bintangfauzan.github.io/The-Letter/"} />
          <IconGithub href={"https://github.com/BintangFauzan/The-Letter"} />
        </MyProject>

        {/* Card 4: Web inventori */}
        <MyProject
          src={webInventori}
          h2={"Web inventori"}
          href={"https://github.com/BintangFauzan/The-Letter"}
          p={
            "'Membuat web inventori barang dengan menggunakna laravel 11, ' +\n" +
            "                    'web sudah memiliki fungsi login serta logika untuk perhitungan penambahan barang"
          }
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
              Laravel 11
            </span>
            <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:blue-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
              MySql
            </span>
          </div>
          <IconGithub src={"https://github.com/BintangFauzan/Inventori"} />
        </MyProject>

        {/* Card 5: Web Perkiraan Cuaca Dengan React */}
        <MyProject
          src={webCuaca}
          h2={"Web Perkiraan Cuaca Dengan React"}
          p={
            "Membuat Web Perkiraan Cuaca Dengan React dimana sudah terhubung dengan API dari https://www.weatherapi.com/" +
            "API akan berakhir pada 9 mei 2025"
          }
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              React
            </span>
          </div>
          <IconGithub href={"https://github.com/BintangFauzan/React-Weather"} />
          <IconChrome
            href={"https://perkiraan-cuaca-by-bintang.netlify.app/"}
          />
        </MyProject>

        {/* Card 6: Web inventori Barang React */}
        <MyProject
          src={webInventoriBarangReact}
          h2={"Web inventori Barang React dengan laravel 11 sebagai backend"}
          p={
            "Membuat Web inventori barang menggunakan react di frontend dan backend menggunakan laravel 11," +
            "Dimana API sudah bisa untuk tambah, edit, hapus"
          }
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
              Laravel 11
            </span>
            <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              React
            </span>
          </div>
          <IconGithub
            href={"https://github.com/BintangFauzan/Inventori-Barang-React"}
          />
        </MyProject>

        {/* Card 7: Web Food Order */}
        <MyProject
          src={webFood}
          h2={
            "Web pesan antar makanan dibuat dengan menggunakan React dan Laravel 12"
          }
          p={
            "Usaha yang bergerak dibidang makanan terutama pesan antar dapat menggunakan web ini karna sudah memiliki API yang rapi dan terintegrasi dengan baik customer dapat langsung memesan makanan dan pesanan dengan cepat langsung akan masuk ke admin. web sudah sangat intuitif dan responsive untuk semua gadget"
          }
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
              Laravel 11
            </span>
            <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              React
            </span>
          </div>
          <IconGithub
            href={"https://github.com/BintangFauzan/Food-Order-React-Frontend"}
          />
          <IconGithub
            href={
              "https://github.com/BintangFauzan/Food-Order-Backend-With-Laravel-12"
            }
          />
        </MyProject>

        {/* Card 8: Arus Dana */}
        <MyProject
          src={ArusDana}
          h2={"Aplikasi android bernama Arus Dana dibuat dengan React Native"}
          p={`
                     Aplikasi ini berfokus pada kesederhanaan sambil menyediakan fitur-fitur canggih seperti pelacakan pengeluaran berbantuan AI dan analisis finansial secara real-time. Ini telah menjadi pengalaman belajar yang luar biasa dalam membangun aplikasi mobile yang siap produksi dengan praktik React Native modern.
                     `}
        >
          {/* Tech Stack Inclusion */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium">
              React Native
            </span>
          </div>
          <IconGithub href={"https://github.com/BintangFauzan/Arus-Dana"} />
        </MyProject>
      </div>
    </>
  );
}

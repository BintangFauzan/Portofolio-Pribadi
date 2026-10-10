export default function CardComponent() {
  return (
    <>
      <div>
        <img
          src="https://bintang-porto.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPerpustakaan.2vp30vfnme250.png&w=3840&q=75"
          alt="Perpustakaan Digital"
          className="project-image"
        />
        <div className="project-content">
          <h3 className="project-title">Perpustakaan Digital</h3>
          <p className="project-desc">
            <strong>Challenge:</strong> Sistem perpustakaan manual rentan
            kesalahan data dan sulit dilacak.
            <strong>Solution:</strong> Mengimplementasikan sistem digital dengan
            tracking real-time.
            <strong>Impact:</strong> Mengurangi waktu pencarian buku 70% dan
            meminimalisir kehilangan buku.
          </p>
          <div className="tech-stack">
            <span className="tech-tag">Vue.js</span>
            <span className="tech-tag">Laravel 11</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">RESTful API</span>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/BintangFauzan/Perpustakaan-Digital"
              target="blank"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

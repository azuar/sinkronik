import { Button } from "antd";
import "./index.scss";

const Layanan = () => {
  return (
    <>
      <div className="section" id="layanan"></div>
      <div className="layanan">
        <div className="container">
          <div className="layanan-background">
            <div className="solution-list">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center mt-5 mb-5 fw-bolder">
                    Solusi yang Dapat Kami Tawarkan
                  </h1>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="d-flex align-items-center gap-3">
                    <img height={40} src="lamp.svg" alt="lamp" />
                    <h1 className="fs-3 m-0">Brand Development</h1>
                  </div>
                  <hr />
                  <p className="text-justify fs-5">
                    Kami bantu membangun dan mengembangkan identitas brand Anda,
                    mulai dari konsep, desain logo, hingga positioning di pasar.
                    Layanan kami membantu menciptakan image brand yang konsisten
                    dan menarik, serta membangun koneksi emosional dengan
                    pelanggan Anda.
                  </p>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="d-flex align-items-center gap-3">
                    <img height={40} src="like.svg" alt="like" />
                    <h1 className="fs-3 m-0">Brand Development</h1>
                  </div>
                  <hr />
                  <p className="text-justify fs-5">
                    Dengan strategi yang terarah, menciptakan konten menarik,
                    dan meningkatkan interaksi dengan audiens. Fokus kami adalah
                    membangun hubungan yang kuat dengan pengikut dan memperkuat
                    brand presence online Anda.
                  </p>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="d-flex align-items-center gap-3">
                    <img height={40} src="computer.svg" alt="computer" />
                    <h1 className="fs-3 m-0">Brand Development</h1>
                  </div>
                  <hr />
                  <p className="text-justify fs-5">
                    Kami optimalkan website Anda dengan desain yang profesional
                    dan SEO yang efektif. Mulai dari struktur yang ramah
                    pengguna hingga konten yang dioptimalkan untuk mesin
                    pencari, kami bantu website Anda tampil lebih menonjol di
                    halaman pencarian dan menarik lebih banyak pengunjung.
                  </p>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="d-flex align-items-center gap-3">
                    <img height={40} src="clip.svg" alt="clip" />
                    <h1 className="fs-3 m-0">Brand Development</h1>
                  </div>
                  <hr />
                  <p className="text-justify fs-5">
                    Tingkatkan daya tarik brand Anda dengan video kreatif dan
                    motion graphics yang memukau. Kami menghasilkan video
                    berkualitas tinggi untuk berbagai kebutuhan, dari konten
                    sosial media hingga video company profile yang profesional
                    untuk menyampaikan pesan dengan cara yang lebih visual dan
                    engaging.
                  </p>
                </div>
                <div className="text-center">
                  <Button color="default" variant="solid" className="button">
                    Konsultasikan Sekarang
                  </Button>

                  <h1 className="fw-bolder mt-5 mb-3">
                    Maksimalkan Potensi Digital Marketing Anda
                  </h1>
                  <p className="fs-4">
                    Strategi digital marketing terintegrasi untuk memastikan
                    Anda meraih pelanggan dan bertahan kuat di pasar
                  </p>
                </div>
              </div>
            </div>
            <div className="solution-image">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="img-bg1 fs-4 text-white d-flex align-items-end justify-content-center pb-5">
                    Menumbuhkan Brand Awareness
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="img-bg2 fs-4 text-white d-flex align-items-end justify-content-center pb-5">
                    Menigkatkan Kualitas Traffic
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="img-bg3 fs-4 text-white d-flex align-items-end justify-content-center pb-5">
                    Membantu Meyakinkan Leads
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                  <div className="img-bg4 fs-4 text-white d-flex align-items-end justify-content-center pb-5">
                    Memperluas Target Audiens
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layanan;

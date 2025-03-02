import { Button } from "antd";
import "./index.scss";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="logo.svg" alt="logo" height="120px" />
                <div className="text-white">
                  <p>
                    Ingin <span>Bisnis Naik Level?</span>
                  </p>
                  <p>
                    Kini Lebih <span>Mudah</span> dengan{" "}
                    <span>Solusi Digital Marketing.</span>
                  </p>
                  <span>
                    Sinkronik siap membantu mengelola dan meningkatkan potensi
                    Digital Marketing Perusahaan Anda!
                  </span>
                </div>
                <Button className="button mt-5 mb-5">
                  Konsultasikan Sekarang
                </Button>
              </div>
              <div className="col-md-6 d-flex justify-content-end align-items-end whatsapp-icon">
                <img src="wa.svg" alt="wa" height={60} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="fs-3 text-center mt-5">
            Di era digital saat ini,{" "}
            <span className="fw-bold">kehadiran online adalah keharusan</span>.
            Tanpa digital marketing yang efektif,{" "}
            <span className="fw-bold">
              bisnis Anda berisiko tertinggal dari kompetitor
            </span>
            . Dengan strategi yang tepat, Anda dapat menjangkau lebih banyak
            pelanggan, membangun hubungan yang kuat, dan{" "}
            <span className="fw-bold">menjaga bisnis tetap kompetitif</span>.
          </p>
          <p className="fs-3 text-center mt-5">
            Apakah Anda mengalami hal-hal ini ketika ingin menjalankan Digital
            Marketing!?
          </p>
          <div className="row">
            <div className="col-md-5">
              <img src="male.svg" alt="male" height="100%" width="100%" />
            </div>
            <div className="col-md-7">
              <div className="card mb-4 mt-3">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img
                        src="people.svg"
                        alt="people"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-10">
                      <h3 className="">Kurangnya Sumber Daya</h3>
                      <p className="fs-5 mb-0">
                        Waktu, tenaga ahli, dan anggaran sering menjadi kendala
                        dalam menjalankan digital marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mt-3">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img src="chart.svg" alt="chart" className="img-fluid" />
                    </div>
                    <div className="col-10">
                      <h3 className="">Kurangnya Sumber Daya</h3>
                      <p className="fs-5 mb-0">
                        Waktu, tenaga ahli, dan anggaran sering menjadi kendala
                        dalam menjalankan digital marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mt-3">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <img src="clock.svg" alt="clock" className="img-fluid" />
                    </div>
                    <div className="col-10">
                      <h3 className="">Kurangnya Sumber Daya</h3>
                      <p className="fs-5 mb-0">
                        Waktu, tenaga ahli, dan anggaran sering menjadi kendala
                        dalam menjalankan digital marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button
                  color="default"
                  variant="solid"
                  className="button mb-5 mt-3"
                >
                  Konsultasikan Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

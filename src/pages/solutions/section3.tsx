const Section3 = () => {
  return (
    <>
      <div className="section" id="video-editing-motion"></div>
      <div className="section3">
        <div className="container">
          <h2 className="text-center text-white pt-5">
            Video Editing & Motion Graphics
          </h2>
          <div className="row">
            <div className="col-xl-8 col-lg-6 d-flex justify-content-center align-items-center">
              <img
                src="/solution/iklan.webp"
                alt="iklan"
                className="img-fluid"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="row mt-5">
                <div className="col-xl-12 col-md-6 col-md-6 col-sm-6 col-12">
                  <div className="d-flex align-items-center justify-content-center tags">
                    <img src="icons/up.svg" alt="up" height={100} />
                    <h2 className="text-white">
                      Meningkatkan <br />
                      daya saing
                    </h2>
                  </div>
                  <div className="text-center text-white">
                    <p className="fs-4 fw-thin pt-4">
                      High-quality konten menarik, membangun kepercayaan, dan
                      meningkatkan penjualan. Kesan profesional membuat bisnis
                      lebih kompetitif.
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 col-md-6 col-sm-6 col-12">
                  <div className="d-flex align-items-center justify-content-center tags">
                    <img src="icons/up.svg" alt="up" height={100} />
                    <h1 className="text-white">5 X</h1>
                  </div>
                  <div className="text-center text-white">
                    <p className="fs-4 fw-thin">
                      1Juta+ Penonton Organik dalam 1 bulan
                    </p>

                    <h3>Scan For Better Quality</h3>
                    <img
                      src="solution/qr.svg"
                      alt="qr"
                      height={150}
                      className="mt-3 mb-5"
                    />
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

export default Section3;

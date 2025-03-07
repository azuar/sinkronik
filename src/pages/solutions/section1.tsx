const Section1 = () => {
  return (
    <>
      <div className="section" id="sosial-media-managemen"></div>
      <div className="section1">
        <div className="container">
          <h2 className="text-center text-white pt-5">
            Sosial Media Managemen
          </h2>
          <div className="row">
            <div className="col-lg-5 col-md-5 mt-5">
              <div className="d-flex align-items-center justify-content-center tags">
                <img src="up.svg" alt="up" height={100} />
                <h1 className="text-white">10 X</h1>
              </div>
              <div className="text-center text-white">
                <p className="fs-3 fw-thin">
                  Followers naik hingga 10 kali lipat
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center tags pt-5">
                <img src="up.svg" alt="up" height={100} />
                <h2 className="text-white">
                  Omset <br /> Naik
                </h2>
              </div>
              <div className="text-center text-white pb-3 d-flex justify-content-center">
                <p className="fs-3 fw-thin" style={{ maxWidth: 300 }}>
                  Menaikkan penjualan makanan maupun wedding venue
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 d-flex justify-content-center align-items-center">
              <img
                src="sosmed.webp"
                alt="sosmed"
                className="img-fluid"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;

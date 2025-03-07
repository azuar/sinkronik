const Section2 = () => {
  const brandingLogos = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg"];
  return (
    <>
      <div className="section" id="brand-development"></div>
      <div className="section2">
        <div className="container">
          <h2 className="text-center pt-5 pb-5">Sosial Media Managemen</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 px-4">
              <div className="d-flex align-items-center justify-content-center tags">
                <img
                  src="icons/eye.svg"
                  alt="up"
                  height={150}
                  className="me-3"
                />
                <div className="row">
                  <div className="col-12">
                    <h2>Brand Mudah Diingat</h2>
                    <p className="fs-4 fw-thin">
                      Menjadikan brand Anda mudah diingat dan top of mind dimata
                      customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 px-4">
              <div className="d-flex align-items-center justify-content-center tags">
                <img src="icons/up.svg" alt="up" height={150} />
                <div className="row">
                  <div className="col-12">
                    <h2>Trust Meningkat</h2>
                    <p className="fs-3 fw-thin">
                      Logo yang cocok dengan identitas brand dapat meningkatkan
                      kepercayaan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="brand-logo justify-content-center align-items-center my-4">
                <div className="justify-content-center align-items-center">
                  {brandingLogos.map((brand, _index) => (
                    <span key={_index}>
                      <img
                        src={`/logo-branding/${brand}`}
                        alt="client"
                        height={230}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

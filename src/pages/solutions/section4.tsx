const Section4 = () => {
  return (
    <>
      <div className="section" id="website-management-seo"></div>
      <div className="section4">
        <div className="container">
          <h2 className="text-center pt-5">Website Manajemen & SEO</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="row pt-5">
                <div className="col-lg-12 col-md-6 col-sm-6 col-12 ">
                  <div className="d-flex align-items-center justify-content-center tags">
                    <img src="icons/up.svg" alt="up" height={100} />
                    <h1>3 X</h1>
                  </div>
                  <div className="text-center">
                    <p className="fs-3 fw-thin">
                      Tayangan website <br /> meningkat 3 kali lipat
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                  <div className="d-flex align-items-center justify-content-center tags">
                    <img src="icons/up.svg" alt="up" height={100} />
                    <h2 className="mb-0">
                      Meningkatkan <br /> daya saing
                    </h2>
                  </div>
                  <div className="text-center">
                    <p className="fs-3 fw-thin">
                      Design website yang bagus meningkatkan daya saing brand
                      dari pesaing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-center">
              <img
                src="/solution/seo.webp"
                alt="seo"
                className="img-fluid mt-5"
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

export default Section4;

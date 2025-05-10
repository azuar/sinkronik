import { Button } from "antd";

const Section4 = () => {
  const cardSolution = [
    "Pembuatan Website",
    "Pembuatan Landing Page",
    "Pembuatan Mobile App",
    "Pembuatan Marketplace",
  ];
  return (
    <>
      <div className="section" id="website-management-seo"></div>
      <div className="section4">
        <div className="container pb-5">
          <h2 className="text-center pt-5">Website & App Developer</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="row pt-3">
                <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                  <div className="d-flex justify-content-center align-items-center tags">
                    <img src="icons/up.svg" alt="up" height={100} />
                    <h2 className="mb-0">
                      Meningkatkan <br />
                      Trust Customer
                    </h2>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-6 col-12 mb-3">
                  <div className="d-flex justify-content-center align-items-center tags">
                    <img src="icons/up.svg" alt="up" height={100} />
                    <h2 className="mb-0">
                      Meningkatkan <br />
                      Penjualan
                    </h2>
                  </div>
                </div>
                {cardSolution.map((solution, _index) => (
                  <div className="col-lg-12 col-md-6 col-sm-6 col-12 px-5">
                    <div className="card my-2 text-center" key={_index}>
                      <div className="card-body">{solution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-center justify-content-center">
              <img
                src="/solution/web-dev.png"
                alt="seo"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="text-center">
            <Button
              color="default"
              variant="solid"
              className="button mb-5 mt-3"
              onClick={() =>
                window.open(
                  "https://wa.me/6285258887844?text=Hallo, Saya ingin Tanya Lebih Lanjut tentang Website & App Developer. bisa bantu saya ?",
                  "_blank"
                )
              }
            >
              Tanya Lebih Lanjut tentang Website & App Developer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;

import { Button } from "antd";

const Section6 = () => {
  const solutionList = [
    {
      title: "Penentuan Tujuan",
      description:
        "Dengan menggunakan Insight dari pasar saat ini untuk menciptakan target.",
    },
    {
      title: "Mengelola dan Mengalokasikan Sumber Daya",
      description:
        "Mendistribusikan sumber daya secara efektif untuk marketing, pengembangan produk, dan sales.",
    },
    {
      title: "Strategi Pendekatan yang Tepat",
      description:
        "Riset pasar untuk terhubung dengan audiens melalui pesan yang menarik.",
    },
  ];
  return (
    <>
      <div className="section" id="website-management-seo"></div>
      <div className="section6">
        <div className="container">
          <h2 className="text-center pt-5">Riset Pasar</h2>
          <div className="row">
            <div className="col-lg-6 px-4 mt-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <h4
                      className="text-center mt-4 fw-bold bg-white py-2"
                      style={{
                        width: 300,
                        border: "1px solid gray",
                        borderRadius: "30px",
                      }}
                    >
                      Entry Strategy
                    </h4>
                  </div>
                  <p className="text-center text-white fs-5 px-3 mt-4">
                    Analisis kelayakan untuk memasuki pasar atau area baru
                    dengan menyesuaikan tujuan perusahaan terhadap kondisi pasar
                    yang ada.
                  </p>
                  <div className="text-center">
                    <img
                      src="solution/diagram.png"
                      alt="diagram"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-4 mt-4">
              <div className="card pb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <h4
                      className="text-center mt-4 fw-bold bg-white py-2"
                      style={{
                        width: 300,
                        border: "1px solid gray",
                        borderRadius: "30px",
                      }}
                    >
                      Penilaian Pasar
                    </h4>
                  </div>
                  <p className="text-center text-white fs-5 px-3 mt-4">
                    Evaluasi yang mendalam membantu perusahaan memahami kondisi
                    pasar secara komprehensif, sehingga dapat berkembang dengan
                    strategi yang tepat, bersaing secara optimal, dan meraih
                    kesuksesan jangka panjang.
                  </p>
                  {solutionList.map((solution, _index) => (
                    <div className="solution-list px-3">
                      <h4 className="fw-bold" style={{ color: "#C6E6FF" }}>
                        {solution.title}
                      </h4>
                      <p className="text-white fs-5">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Button
              color="default"
              variant="solid"
              className="button mb-5 mt-3"
            >
              Tanya Lebih Lanjut tentang Riset Pasar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;

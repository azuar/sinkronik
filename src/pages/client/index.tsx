import { Button } from "antd";
import "./index.scss";
const Client = () => {
  const clientLogos = [
    "maybline.svg",
    "yuasa.svg",
    "ferary.svg",
    "indosat.svg",
    "blu.svg",
    "klusterfirst.svg",
    "lakupos.svg",
    "golden-leaf.svg",
    "vena.svg",
    "kamaz.svg",
    "pupuk-kujang.svg",
    "titip.svg",
    "blueray-cargo.svg",
  ];
  return (
    <>
      <div className="section" id="klien"></div>
      <div className="client">
        <div className="container text-center">
          <h1 className="fw-bolder">
            Klien Kami, Mitra Kepercayaan dari Berbagai Industri
          </h1>
          <p className="fs-4">
            Kami bangga telah dipercaya oleh berbagai bisnis untuk membantu
            mereka
            <br /> tumbuh melalui solusi digital marketing yang efektif.
          </p>
          <div className="client-logo justify-content-center align-items-center my-4">
            <div className="justify-content-center align-items-center gap-5">
              {clientLogos.map((client, _index) => (
                <span key={_index}>
                  <img
                    src={`/client/${client}`}
                    alt="client"
                    height={84}
                    className="m-4"
                  />
                </span>
              ))}
            </div>
          </div>
          <p className="fs-4 mt-5">
            Jadilah bagian dari klien sukses kami berikutnya!
          </p>
          <Button color="default" variant="solid" className="button mb-5 mt-3">
            Konsultasikan Sekarang
          </Button>
        </div>
      </div>
    </>
  );
};
export default Client;

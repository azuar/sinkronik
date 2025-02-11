import { Button } from "antd";
import "./index.scss";
const Client = () => {
  const clientLogos = [
    "https://logos-world.net/wp-content/uploads/2020/12/Maybelline-Logo.png",
    "https://cdn.freebiesupply.com/logos/large/2x/yuasa-logo-png-transparent.png",
    "https://cdn.discordapp.com/attachments/872315836398968854/1338936100206674032/image-removebg-preview.png?ex=67ace4ea&is=67ab936a&hm=7d3145fbdc6ba5ee01bbbd75d7dffb711a4eb634d723ef08f12cf77a05d92537&",
    "https://download.logo.wine/logo/Indosat/Indosat-Logo.wine.png",
    "https://cdn.discordapp.com/attachments/872315836398968854/1338938589056339999/image1.png?ex=67ace73b&is=67ab95bb&hm=4229eed6f62263b006c9c3b644be64ce1a95ee4d06341460a8fb454812a63c69&",
    "https://cdn.discordapp.com/attachments/872315836398968854/1338938835408519289/image.png?ex=67ace776&is=67ab95f6&hm=d420e38ebe0f93a61cd649c8997a4304bad867b0b2bd7767596bcf16ba4c800f&",
    "https://ideatax.my.canva.site/mudahnya-mengembangkan-bisnis-dengan-solusi-digital-marketing-efektif/_assets/media/c2f186d04ef1cd0dea5bac14fc3891fb.png",
    "https://ideatax.my.canva.site/mudahnya-mengembangkan-bisnis-dengan-solusi-digital-marketing-efektif/_assets/media/2373cd57a9d4051d64485c8c053438bb.png",
    "https://ideatax.my.canva.site/mudahnya-mengembangkan-bisnis-dengan-solusi-digital-marketing-efektif/_assets/media/417a47ef511e2c9ce7533dabbcc32a1a.png",
    "https://www.cdnlogo.com/logos/k/70/kamaz.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/Logo_kujang.jpg",
    "https://cdn.discordapp.com/attachments/872315836398968854/1338939780246933666/image.png?ex=67ace857&is=67ab96d7&hm=ae0d518a377667ef5f8daf2c99c28c6f39ee95c4f516e482d684fd5b17b73656&",
    "https://cdn.discordapp.com/attachments/872315836398968854/1338940123324092458/image.png?ex=67ace8a9&is=67ab9729&hm=93f010241d625def427bd8f444ac2f335b4e8d2f151e57b393fbc1f73bb10059&",
  ];
  return (
    <>
      <div className="section" id="client"></div>
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
                <span>
                  <img src={`${client}`} alt="" height={84} className="m-4" />
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

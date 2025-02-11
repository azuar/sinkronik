import { Button, Form, Input } from "antd";
import "./index.scss";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Kontak = () => {
  return (
    <>
      <div className="section" id="kontak"></div>
      <div className="kontak">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-end justify-content-center">
              <img
                src="https://cdn.discordapp.com/attachments/872315836398968854/1338949524663566417/image-removebg-preview_2.png?ex=67acf16b&is=67ab9feb&hm=351ee326b1b3247e0c72c00e05dfd634e1a5a8bd208f5d8bf3bbcfbece4ab4a2&"
                alt=""
                height={"80%"}
              />
            </div>
            <div className="col-lg-6 mb-5">
              <p className="fs-1 text-center mt-5">
                Saatnya Bisnis Anda <strong>Tampil</strong>! Gunakan Iklan
                Digital untuk{" "}
                <strong>Meningkatkan Visibilitas dan Penjualan!</strong>
              </p>
              <div className="card">
                <div className="card-body">
                  <p className="fs-4">Ingin info lebih lanjut?</p>
                  <Form size="large" layout="vertical">
                    <Form.Item label="Nama Lengkap *">
                      <Input placeholder="Nama Lengkap .." />
                    </Form.Item>
                    <Form.Item label="Alamat Email *">
                      <Input placeholder="Alamat Email .." />
                    </Form.Item>
                    <Form.Item label="Nomer Whatsapp *">
                      <Input placeholder="Nomer Whatsapp ..." />
                    </Form.Item>
                    <Form.Item label="Industri Bisnis Anda *">
                      <Input placeholder="Industri Bisnis Anda .." />
                    </Form.Item>
                  </Form>
                  <div className="text-center">
                    <Button color="default" className="button mt-3 mb-3">
                      <strong>Submit</strong>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <div className="container">
          <div className="contact row mb-5">
            <div className="col-lg-4 col-md-6 mt-4 ">
              <h2>Sinkronic Creative Agency</h2>
              <p className="fs-3 mb-0">
                <FaPhoneAlt className="me-3" />
                08xx - xxxx - xxxx
              </p>
              <p className="fs-3 mb-0">
                <IoMdMail className="me-3" />
                Sinkronikcreative@gmail.com
              </p>
            </div>
            <div className="col-lg-5 col-md-6 mt-4 ">
              <h2>Social Media</h2>
              <div className="row">
                <div className="col-6">
                  <p className="fs-3 mb-0">
                    <FaInstagram className="me-3" />
                    @Sinkronik
                  </p>
                </div>
                <div className="col-6">
                  <p className="fs-3 mb-0">
                    <FaTiktok className="me-3" />
                    @Sinkronik
                  </p>
                </div>
                <div className="col-6">
                  <p className="fs-3 mb-0">
                    <FaXTwitter className="me-3" />
                    @Sinkronik
                  </p>
                </div>
                <div className="col-6">
                  <p className="fs-3 mb-0">
                    <FaLinkedin className="me-3" />
                    @Sinkronik
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center align-items-center mt-4 ">
              <img
                src="https://cdn.discordapp.com/attachments/872315836398968854/1338960353664434177/image.png?ex=67acfb80&is=67abaa00&hm=bc29a222eadcf80259615d24df046bfc151586d56cef61e6822d2c682cc561b7&"
                alt=""
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;

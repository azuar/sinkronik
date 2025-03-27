import { Button, Form, Input, Spin } from "antd";
import "./index.scss";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import dayjs from "dayjs";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

interface MeetingDetails {
  [key: string]: string; // Jika ada properti lain yang tidak diketahui
}


const Kontak = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const sendEmail = (value:MeetingDetails) => {
    const date = dayjs(value.meeting_date).format("DD MMMM YYYY");
    value.meeting_date = date;
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        value,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "Berhasil!",
          text: "Jadwal berhasil dikirim.",
          icon: "success",
        });
        setLoading(false);
        form.resetFields();
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({
          title: "Gagal!",
          text: "Jadwal gagal dikirim.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="section" id="kontak"></div>
      <div className="kontak">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-end justify-content-center mt-5">
              <img src="others/female.svg" alt="female" width={"90%"} />
            </div>
            <div className="col-lg-6 mb-5">
              <p className="fs-1 text-center mt-5">
                Saatnya Bisnis Anda <strong>Tampil</strong>! Gunakan Iklan
                Digital untuk{" "}
                <strong>Meningkatkan Visibilitas dan Penjualan!</strong>
              </p>
              <Spin spinning={loading}>
              <div className="card">
                <div className="card-body">
                  <p className="fs-4">Ingin info lebih lanjut?</p>
                  <Form size="large" layout="vertical" form={form} onFinish={sendEmail}>
                    <Form.Item label="Nama Lengkap *" name="name"
                        rules={[
                          { required: true, message: "Nama harus diisi!" },
                        ]}>
                      <Input placeholder="Nama Lengkap .." />
                    </Form.Item>
                    <Form.Item label="Alamat Email *" name="email"
                        rules={[
                          { required: true, message: "Email harus diisi!" },
                        ]}>
                      <Input placeholder="Alamat Email .." />
                    </Form.Item>
                    <Form.Item label="Nomer Whatsapp *" name="whatsapp"
                        rules={[
                          { required: true, message: "Whatsapp harus diisi!" },
                        ]}>
                      <Input placeholder="Nomer Whatsapp ..." />
                    </Form.Item>
                    <Form.Item label="Industri Bisnis Anda *" name="industri"
                        rules={[
                          { required: true, message: "Industri Bisnis harus diisi!" },
                        ]}>
                      <Input placeholder="Industri Bisnis Anda .." />
                    </Form.Item>
                    <div className="text-center">
                    <Button color="default" className="button mt-3 mb-3" htmlType="submit">
                      <strong>Submit</strong>
                    </Button>
                  </div>
                  </Form>
                  
                </div>
              </div>
              </Spin>
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
              <img src="logo/sinkronik.svg" alt="sinkronik-logo" height={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;

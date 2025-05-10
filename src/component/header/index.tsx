import React from "react";
import "./index.scss";
import { Button } from "antd";
import { BsWhatsapp } from "react-icons/bs";

const Header: React.FC = () => {
  const items = [
    {
      key: "1",
      label: "Home",
      href: "#home",
    },
    {
      key: "2",
      label: "Layanan",
      href: "#layanan",
    },
    {
      key: "3",
      label: "Klien",
      href: "#klien",
    },
    {
      key: "4",
      label: "Solusi",
      href: "#solusi",
    },
    {
      key: "5",
      label: "Harga & Paket",
      href: "#harga",
    },
    {
      key: "5",
      label: "Kontak",
      href: "#kontak",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {items.map((item, _index) => (
                <a className="nav-link fs-5" href={item.href} key={_index}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="d-flex">
            <Button
              type="text"
              className="fs-2 me-3"
              icon={<BsWhatsapp />}
              onClick={() =>
                window.open(
                  "https://wa.me/6285258887844?text=Hallo, Saya ingin konsultasi terkait digital marketing. bisa bantu saya ?",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

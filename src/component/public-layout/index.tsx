import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import { FloatButton } from "antd";
import { UpCircleOutlined, WhatsAppOutlined } from "@ant-design/icons";
const PublicLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <FloatButton.Group>
        <FloatButton.BackTop icon={<UpCircleOutlined />} />

        <FloatButton
          icon={<WhatsAppOutlined />}
          onClick={() => window.open("https://wa.me/6282118606158", "_blank")}
          className="button-float-wa"
        />
      </FloatButton.Group>
    </>
  );
};

export default PublicLayout;

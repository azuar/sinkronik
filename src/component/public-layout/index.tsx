import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";

const PublicLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default PublicLayout;

import Client from "./client";
import Home from "./home";
import Kontak from "./kontak";
import Layanan from "./layanan";
const MainPages = () => {
  return (
    <>
      <Home />
      <Layanan />
      <Client />
      <Kontak />
    </>
  );
};

export default MainPages;

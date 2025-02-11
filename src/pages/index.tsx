import Client from "./client";
import HargaPaket from "./harga-paket";
import Home from "./home";
import Kontak from "./kontak";
import Layanan from "./layanan";
const MainPages = () => {
  return (
    <>
      <Home />
      <Layanan />
      <Client />
      <HargaPaket />
      <Kontak />
    </>
  );
};

export default MainPages;

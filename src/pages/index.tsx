import Client from "./client";
import HargaPaket from "./harga-paket";
import Home from "./home";
import Kontak from "./kontak";
import Layanan from "./layanan";
import Solutions from "./solutions";
const MainPages = () => {
  return (
    <>
      <Home />
      <Layanan />
      <Client />
      <Solutions />
      <HargaPaket />
      <Kontak />
    </>
  );
};

export default MainPages;

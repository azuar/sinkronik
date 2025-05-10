import { Table, TableProps } from "antd";
import "./index.scss";

const HargaPaket = () => {
  const columns: TableProps<any>["columns"] = [
    {
      dataIndex: "name",
      key: "name",
      render: (text) => <>{text}</>,
    },
    {
      title: "Basic",
      dataIndex: "basic",
      key: "basic",
    },
    {
      title: "Regular",
      dataIndex: "regular",

      key: "regular",
    },
    {
      title: "Eksklusif",
      dataIndex: "eksklusif",
      key: "eksklusif",
    },
  ];

  const columnsMobile: TableProps<any>["columns"] = [
    {
      title: "Basic",
      dataIndex: "basic",
      key: "basic",
    },
    {
      title: "Regular",
      dataIndex: "regular",

      key: "regular",
    },
    {
      title: "Eksklusif",
      dataIndex: "eksklusif",
      key: "eksklusif",
    },
  ];

  const TagUl = (list: any[]) => {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  const dataInvestasi: any[] = [
    {
      key: "1",
      name: "Harga Mulai dari",
      basic: "Mulai dari Rp. 3.000.000/bln",
      regular: "Mulai dari Rp. 6.000.000/bln",
      eksklusif: "Mulai dari Rp. 10.000.000/bln",
    },
    {
      key: "2",
      name: "Platform Sosmed",
      basic:
        "1 Akun Sosial Media (IG / Tiktok / Linkedin / Youtube / Facebook)",
      regular:
        "2 Akun Sosial Media (IG / Tiktok / Linkedin / Youtube / Facebook)",
      eksklusif:
        "3 Akun Sosial Media (IG / Tiktok / Linkedin / Youtube / Facebook)",
    },
    {
      key: "3",
      name: "Website",
      basic: TagUl([
        "2 Pilihan Design Webisite",
        "3x Revisi",
        "5 Halaman (Home, Layanan, dll)",
      ]),
      regular: TagUl([
        "2 Pilihan Design Webisite",
        "3x Revisi",
        "5 Halaman (Home, Layanan, dll)",
      ]),
      eksklusif: TagUl([
        "2 Pilihan Design Webisite",
        "3x Revisi",
        "5 Halaman (Home, Layanan, dll)",
      ]),
    },
    {
      key: "4",
      name: "Artikel SEO",
      basic: "2 Artikel SEO / Bulan",
      regular: "4 Artikel SEO / Bulan",
      eksklusif: "8 Artikel SEO / Bulan",
    },
  ];

  const dataBanding: any[] = [
    {
      key: "1",
      name: "Karyawan Inhouse",
      basic: TagUl([
        "1 Orang Konten Creator",
        "1 Orang Editor",
        "1 Orang Penulis Artikel SEO",
      ]),
      regular: TagUl([
        "1 Orang Konten Creator",
        "2 Orang Editor",
        "1 Orang Penulis Artikel SEO",
      ]),
      eksklusif: TagUl([
        "1 Orang Manager / Supervisor",
        "1 Orang Konten Creator",
        "3 Orang Editor",
        "2 Orang Penulis Artikel SEO",
      ]),
    },
    {
      key: "2",
      name: "Cost",
      basic: "Rp. 15.000.000 / bln",
      regular: "Rp. 20.000.000 / bln",
      eksklusif: "Rp. 40.000.000 / bln",
    },
  ];

  const dataInvestasiMobile: any[] = [
    {
      key: "1",
      basic: "Mulai dari Rp. 3.000.000/bln",
      regular: "Mulai dari Rp. 6.000.000/bln",
      eksklusif: "Mulai dari Rp. 10.000.000/bln",
    },
    {
      key: "2",
      basic:
        "1 Akun Sosial Media (IG / Tiktok / Linkedin / Youtube / Facebook)",
      regular:
        "2 Akun Sosial Media (IG / Tiktok / Linkedin / Youtube / Facebook)",
      eksklusif:
        "3 Akun Sosial Media (IG / Tiktok / Linkedin / Youtube / Facebook)",
    },
    {
      key: "3",
      basic: TagUl([
        "2 Pilihan Design Webisite",
        "3x Revisi",
        "5 Halaman (Home, Layanan, dll)",
      ]),
      regular: TagUl([
        "2 Pilihan Design Webisite",
        "3x Revisi",
        "5 Halaman (Home, Layanan, dll)",
      ]),
      eksklusif: TagUl([
        "2 Pilihan Design Webisite",
        "3x Revisi",
        "5 Halaman (Home, Layanan, dll)",
      ]),
    },
    {
      key: "4",
      basic: "2 Artikel SEO / Bulan",
      regular: "4 Artikel SEO / Bulan",
      eksklusif: "8 Artikel SEO / Bulan",
    },
  ];

  const dataBandingMobile: any[] = [
    {
      key: "1",
      basic: TagUl([
        "1 Orang Konten Creator",
        "1 Orang Editor",
        "1 Orang Penulis Artikel SEO",
      ]),
      regular: TagUl([
        "1 Orang Konten Creator",
        "2 Orang Editor",
        "1 Orang Penulis Artikel SEO",
      ]),
      eksklusif: TagUl([
        "1 Orang Manager / Supervisor",
        "1 Orang Konten Creator",
        "3 Orang Editor",
        "2 Orang Penulis Artikel SEO",
      ]),
    },
    {
      key: "2",
      basic: "Cost : Rp. 15.000.000 / bln",
      regular: "Cost : Rp. 20.000.000 / bln",
      eksklusif: "Cost : Rp. 40.000.000 / bln",
    },
  ];

  return (
    <>
      <div className="section" id="harga"></div>
      <div className="harga">
        <div className="paket">
          <div className="container">
            <div className="text-center">
              <h2 className="text-white">Nilai Investasi</h2>

              <div className="mobile-table">
                {/* <Select
                  defaultValue="basic"
                  style={{ width: 320, fontSize: "50px", fontWeight: "bolder" }}
                  size={"large"}
                  options={[
                    { value: "basic", label: "Basic" },
                    { value: "regular", label: "Regular" },
                    { value: "eksklusif", label: "Eksklusif" },
                  ]}
                  placeholder="select it"
                /> */}
                <Table
                  className="table-config mt-4"
                  columns={columnsMobile}
                  dataSource={dataInvestasiMobile}
                  pagination={false}
                  bordered={true}
                  rowHoverable={false}
                />
              </div>
              <div className="desktop-table">
                <Table
                  className="table-config mt-4"
                  columns={columns}
                  dataSource={dataInvestasi}
                  pagination={false}
                  bordered={true}
                  rowHoverable={false}
                />
              </div>
              <h2 className="text-white mt-4">Sebagai Pebandingan</h2>
              <div className="desktop-table">
                <Table
                  showHeader={false}
                  className="table-config mt-4"
                  columns={columns}
                  dataSource={dataBanding}
                  pagination={false}
                  bordered={true}
                  rowHoverable={false}
                />
              </div>
              <div className="mobile-table">
                <Table
                  showHeader={false}
                  className="table-config mt-4"
                  columns={columnsMobile}
                  dataSource={dataBandingMobile}
                  pagination={false}
                  bordered={true}
                  rowHoverable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HargaPaket;

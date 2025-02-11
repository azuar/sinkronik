import { Card } from "react-bootstrap";
import { FaUsers, FaChartLine, FaClock } from "react-icons/fa";

export default function DigitalMarketingChallenges() {
  const challenges = [
    {
      icon: <FaUsers className="text-danger fs-3" />,
      title: "Kurangnya Sumber Daya",
      description:
        "Waktu, tenaga ahli, dan anggaran sering menjadi kendala dalam menjalankan digital marketing.",
    },
    {
      icon: <FaChartLine className="text-danger fs-3" />,
      title: "Sulit Mengukur Hasil",
      description:
        "Minimnya alat dan keahlian untuk menganalisis data membuat pengukuran keberhasilan menjadi tantangan.",
    },
    {
      icon: <FaClock className="text-danger fs-3" />,
      title: "Perubahan Cepat",
      description:
        "Tren dan algoritma terus berubah, membuat perusahaan sulit untuk selalu mengikuti perkembangan.",
    },
  ];

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">
        Apakah Anda mengalami hal-hal ini ketika ingin menjalankan Digital
        Marketing!?
      </h2>
      <div className="row align-items-center">
        {/* Left side: Image */}
        <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
          <img
            src="people.png"
            width={300}
            height={400}
            alt="Frustrated businessman"
            className="shadow-lg rounded"
          />
        </div>

        {/* Right side: Challenges */}
        <div className="col-md-8">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="mb-3 p-3 shadow-lg d-flex flex-row align-items-center border-0"
            >
              <div className="me-3">{challenge.icon}</div>
              <Card.Body>
                <Card.Title>{challenge.title}</Card.Title>
                <Card.Text>{challenge.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
          <div className="mt-3">
            <button className="btn btn-dark shadow-lg">
              Konsultasikan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

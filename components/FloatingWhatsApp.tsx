import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/447593728481"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-fab">
      <FaWhatsapp size={30} color="white" style={{ position: "relative", zIndex: 1 }} />
    </a>
  );
}

import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="tel:+447360270797"
      aria-label="Call us now"
      className="wa-fab">
      <FaPhoneAlt size={24} color="white" style={{ position: "relative", zIndex: 1 }} />
    </a>
  );
}

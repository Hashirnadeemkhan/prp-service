import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/447593728481"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      style={{
        width: "54px",
        height: "54px",
        backgroundColor: "#25D366",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
      }}>
      <FaWhatsapp size={30} color="white" />
    </a>
  );
}

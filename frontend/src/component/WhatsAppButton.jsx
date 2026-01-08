import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9518795065"; // ✅ apna number (country code ke sath)
  const message = encodeURIComponent(
    "Hi, I’m interested in your collection. Please share more details."
  );

  const [visible, setVisible] = useState(true);

  // Scroll-based visibility (UX polish)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* INLINE CSS + ANIMATION */}
      <style>
        {`
          .whatsapp-btn {
            position: fixed;
            right: 16px;
            bottom: 16px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background-color: #25D366;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            z-index: 9999;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            animation: whatsappPulse 2s infinite;
          }

          .whatsapp-btn:hover {
            background-color: #1ebe5d;
            transform: scale(1.08);
          }

          .whatsapp-btn.hide {
            opacity: 0.6;
            transform: translateY(6px);
          }

          @keyframes whatsappPulse {
            0% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
            }
            70% {
              box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
          }

          /* Responsive */
          @media (min-width: 640px) {
            .whatsapp-btn {
              width: 64px;
              height: 64px;
              right: 24px;
              bottom: 24px;
            }
          }
        `}
      </style>

      {/* BUTTON */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`whatsapp-btn ${visible ? "" : "hide"}`}
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default WhatsAppButton;

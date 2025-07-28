import Logo from "../assets/Logo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center gap-5 p-4">
      <img src={Logo} alt="Logo" className="w-3xs" />
      <div>
        <p className="text-xl">Av. Alvarez Thomas 2617</p>
        <p className="text-xl text-center">CABA</p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="ic:outline-whatsapp"
            width="32"
            height="32"
            className="cursor-pointer"
          />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:instagram"
            width="32"
            height="32"
            className="cursor-pointer"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="pajamas:twitter"
            width="32"
            height="32"
            className="cursor-pointer"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

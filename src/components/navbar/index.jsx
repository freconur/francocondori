import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub as github } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as linkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars as menu } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const onActiveMenu = () => {
    setActiveMenu(!activeMenu)
  }
  return (
    <div className="Navbar">
      <div className="brand">
        FECH
      <FontAwesomeIcon onClick={onActiveMenu} className="burger_menu" icon={menu}/>
      </div>
      <ul className={`navbar_section ${activeMenu && 'activeMenu' }`}>
        <li onClick={() => setActiveMenu(!activeMenu)} className="list">
          <a href="#projects">proyectos</a>
        </li>
        <li onClick={() => setActiveMenu(!activeMenu)} className="list">
          <a href="#skills">skills</a>
        </li>
        <li onClick={() => setActiveMenu(!activeMenu)} className="list">
          <a href="#contactme">contacto</a>
        </li>
      </ul>
      <ul className="navbar_dev_social">
        <li>
          <a href="https://github.com/freconur" target="_blank">
            <FontAwesomeIcon icon={github} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/franco-condori-huaraya-a78015164" target="_blank">
            <FontAwesomeIcon icon={linkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };

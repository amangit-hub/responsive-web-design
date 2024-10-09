"use client";
import NavLink from "./navbarlink/navbarlink";
import Style from "./link.module.css";
import { useState } from "react";

const NavigationLinks = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },

    { title: "Blog", path: "/blog" },
  ];

  // hook
  const [open, setOpen] = useState(true);
  const session = true;
  const isAdmin = true;

  return (
    <div className={Style.container}>
      <div className={Style.link}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={Style.btn}>logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={Style.menubar}
        onClick={() => setOpen((close) => !close)}
      >
        menu
      </button>
      {open && (
        <div className={Style.smallerScreen}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationLinks;

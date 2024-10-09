// import Link from "next/link";
import Links from "../navbar/link/Link.jsx";
import Style from "../navbar/navabar.module.css";
const navbarPage = () => {
  return (
    <div className={Style.container}>
      <div className={Style.logo_container}>
        <h2 className={Style.logo}>AmazingTeam</h2>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default navbarPage;

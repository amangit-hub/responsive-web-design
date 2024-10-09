import Link from "next/link";
import Style from "../navbarlink/navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${Style.container} ${pathName === item.path && Style.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;

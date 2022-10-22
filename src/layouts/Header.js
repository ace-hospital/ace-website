import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { activeNavMenu, stickyNav } from "../utils";
import {
  DefaultHeaderStyle,
  HeaderStyle1,
  HeaderStyle2,
  HeaderStyle3,
} from "./HeaderStyle";
import { DefaultSticky, Sticky1 } from "./SttickyNav";

const Header = ({ header, open, openMenu }) => {
  const router = useRouter();
  useEffect(() => {
    activeNavMenu(router.pathname);
    window.addEventListener("scroll", stickyNav);
  });

  const getHeader = () => {
    switch (header) {
      case 1:
        return <HeaderStyle1 open={open} openMenu={openMenu} />;
      case 2:
        return <HeaderStyle2 open={open} openMenu={openMenu} />;
      case 3:
        return <HeaderStyle3 open={open} openMenu={openMenu} />;
      default:
        return <DefaultHeaderStyle open={open} openMenu={openMenu} />;
    }
  };
  return (
    <Fragment>
      {getHeader()}
      {header === 1 ? (
        <Sticky1 open={open} />
      ) : (
        <DefaultSticky open={open} header={header} />
      )}
    </Fragment>
  );
};

export default Header;

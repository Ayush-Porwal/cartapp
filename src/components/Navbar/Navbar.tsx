import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { MegaMenu } from "primereact/megamenu";
import { InputText } from "primereact/inputtext";

import { items, getUserItems } from "./navbarUtils";

import * as classes from "./Navbar.module.scss";

function Navbar({ userLoggedIn, setUserLoggedIn }) {
  const navigate = useNavigate();
  const menuLeft = useRef<Menu>(null);

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate("/");
    }
  };

  const end = (
    <div className={classes.navbarEnd}>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText placeholder="Search" onKeyUp={handleSearch} />
      </span>
      <div
        role="button"
        className={classes.navbarEndCartButton}
        onClick={() => navigate("/cart")}
      >
        <i className="pi pi-shopping-cart" />
      </div>
      <Menu
        popup
        ref={menuLeft}
        id="popup_menu_left"
        onMouseLeave={(event) =>
          menuLeft.current && menuLeft.current.hide(event)
        }
        model={getUserItems({ userLoggedIn, navigate })}
      />
      <div
        role="button"
        className={classes.navbarEndOptions}
        onMouseEnter={(event) =>
          menuLeft.current && menuLeft.current.toggle(event)
        }
      >
        <img height="24px" src="/images/profile_pic.svg" />
        <i className="pi pi-chevron-down" />
      </div>
    </div>
  );
  return <MegaMenu model={items} end={end} breakpoint="960px" />;
}

export default Navbar;

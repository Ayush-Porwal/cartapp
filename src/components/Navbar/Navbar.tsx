import { useNavigate } from 'react-router-dom';

import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';

import { items } from './navbarUtils';

import * as classes from './Navbar.module.scss';

function Navbar() {
    const navigate = useNavigate();
    const end = (
        <div className={classes.navbarEnd}>
            <i className={`pi pi-shopping-cart ${classes.navbarEndIcon}`} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>
            <i
                className={`pi pi-sign-in ${classes.navbarEndIcon}`}
                onClick={() => navigate('/signin')}
            />
            {/* <i className={`pi pi-sign-out ${classes.navbarEndIcon}`} /> */}
        </div>
    );
    return <MegaMenu model={items} end={end} breakpoint="960px" />;
}

export default Navbar;

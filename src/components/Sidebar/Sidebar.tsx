import { Menu } from 'primereact/menu';

import { items } from './SidebarUtils';

import * as classes from './Sidebar.module.scss';

function Sidebar() {
    return (
        <div className={classes.sidebarContainer}>
            <Menu model={items} className={classes.sidebarMenu} />
        </div>
    );
}

export default Sidebar;

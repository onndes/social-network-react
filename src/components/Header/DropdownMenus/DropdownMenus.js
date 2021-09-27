import { NavLink } from "react-router-dom";
import s from "../Header.module.css";

const DropdownMenus = ({ toggleDrawer, setToggleDrawer }) => {
    return (
        <div className={s.SwipeableDrawer} anchor={"top"} open={toggleDrawer}>
            <div className={s.conentDropMenu}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink
                            to='/myprofile'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            My profile
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/messages'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            Messages
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/news'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            News
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink
                            to='/users'
                            activeClassName={s.active}
                            onClick={() => setToggleDrawer(!toggleDrawer)}>
                            Users
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default DropdownMenus;

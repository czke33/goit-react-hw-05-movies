import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink
            to='/'
            className={styles.link}
            activeclassname={styles.activeLink}
        >
            Home
        </NavLink>

        <NavLink
            to='/movies'
            className={styles.link}
            activeclassname={styles.activeLink}
        >
            Movies
        </NavLink>
    </nav>
);

export default Navigation;
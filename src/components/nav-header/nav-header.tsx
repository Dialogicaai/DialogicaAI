import classNames from 'classnames';
import styles from './nav-header.module.scss';
import Logo from '../../assets/noBackground.png'

import { Link } from "react-router-dom";

export interface NavHeaderProps {
    className?: string;
}

export const NavHeader = ({ className }: NavHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divContent}>
                <span className={styles.spanClass}>
                    <div className={styles.divLogo}>
                    <Link to="/">
                    <img className={styles.logo} src={Logo}></img>
                    </Link>
                    <h1 className={styles.nameH1}>Dialogica</h1>
                    </div>
                    <div>
                    <div className={styles.div}>
                        <a href="https://eq92ev6usyv.typeform.com/to/WgX0GzXA" className={styles.navLink}>Join Waitlist</a>
                    </div>
                    <div className={styles.div}>
                    <Link to="/contact">
                        <a href="/contact" className={styles.navLink}>Contact</a>
                    </Link>
                    </div>
                    </div>
                </span>
            </div>
        </div>
    );
};
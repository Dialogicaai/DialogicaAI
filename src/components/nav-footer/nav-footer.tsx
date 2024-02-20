import classNames from 'classnames';
import styles from './nav-footer.module.scss';
import React from 'react';
import resume from '../../assets/noBackground.png';

export interface NavFooterProps {
    className?: string;
}

export const NavFooter: React.FC<NavFooterProps> = ({ className }) => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:dialogicaai@gmail.com';
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <span>
                    <div>
                    <a href="https://eq92ev6usyv.typeform.com/to/WgX0GzXA" className={styles.linkClass}>Join waiting list</a>
                    <a href="https://www.linkedin.com/company/dialogica-ai" className={styles.linkClass}>LinkedIn</a>
                    <a onClick={handleEmailClick} className={styles.linkClass}>Contact</a>
                    </div>
                </span>
            </div>
        </div>
    );
};

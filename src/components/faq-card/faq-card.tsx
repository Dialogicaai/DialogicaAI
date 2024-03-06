import classNames from 'classnames';
import styles from './faq-card.module.scss';
import React, { useState } from 'react';

export interface faq {
    className?: string;
    id: number;
    title: string;
    description: string;
    bulletOne: string;
    bulletTwo: string;
    bulletThree: string;
}


export const FAQCard = ({ className, id, title, description, bulletOne, bulletThree, bulletTwo }: faq) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanService}>
                    <div className={styles.divText}>
                        <h2>0{id}</h2>
                        <h1>{title}</h1>
                    </div>
                    <div className={styles.divButton}>
                        <button className={styles.button} onClick={toggleDropdown}>
                            +
                        </button>
                    </div>
                </span>
                <div />
            </div>

            {isDropdownOpen && (
                <div className="dropdown-content">
                    {/* Dropdown content goes here */}
                    <span className={styles.dropdown}>
                        <div>
                        <ul className={styles.ul}>
                            <li className={styles.ul}>{bulletOne}</li>
                            <li  className={styles.ul}>{bulletTwo}</li>
                            <li  className={styles.ul}>{bulletThree}</li>
                        </ul>
                        </div>
                        <div className={styles.divDesc}>
                        <p className ={styles.desc}>{description}</p>
                        </div>
                    </span>
                   
                </div>
            )}
            <hr className={styles.spanService}></hr>
        </div>
    );
};

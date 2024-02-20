import classNames from 'classnames';
import styles from './under-slideshow.module.scss';

export interface UnderSlideshowProps {
    className?: string;
}

export const UnderSlideshow = ({ className }: UnderSlideshowProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divMain}>
<div>
<h2 className={styles.h2}>Locked and Secure</h2>
<div className={styles.divParagrah}>
<p className={styles.paragraph}>With advanced security features like Two-Factor Authentication (2FA) and database encryption, our platform ensures your data remains confidential and intact. 2FA adds an extra layer of defense, requiring secondary verification for secure logins, while encryption protects your information from unauthorized access. We prioritize your security, continuously investing in the latest technologies and adhering to industry standards to safeguard your digital footprint. 
 
                                </p></div>
</div>
</div>
    </div>;
};

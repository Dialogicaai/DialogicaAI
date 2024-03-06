import classNames from 'classnames';
import styles from './main-landing.module.scss';
import Main from '../../assets/Main.png';

export interface MainLandingProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MainLanding = ({ className }: MainLandingProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}></div>
            <span className={styles.spanMain}>
                <div className={styles.divLeft}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.aiLogo}
                    />
                    <div className={styles.divTextHeders}>
                        <h1 className={styles.h1ClassBlue}>Amplifying</h1>
                        <h1 className={styles.h1ClassBlack}>Conversations and</h1>
                        <span className={styles.bluetextspan}>
                            <h1 className={styles.h1ClassBlue}>Elevating </h1>
                            <h1 className={styles.h1ClassBlack}> Insights</h1>
                        </span>
                    </div>
                    <p className={styles.paragraphClass}>
                        Dialogica stream lines your data as you speak, providing real time insights
                        tailored with your live-feed transcription.
                    </p>
                    <span className={styles.spanButtons}>
                        <button className={styles.buttonJoin}>Join Waitlist</button>
                        <button className={styles.buttonDiscover}>Discover more -&gt;</button>
                    </span>
                </div>
                <div className={styles.divRight}>
                    <img src={Main} alt="" className={styles.imgClass} />
                </div>
            </span>
        </div>
    );
};

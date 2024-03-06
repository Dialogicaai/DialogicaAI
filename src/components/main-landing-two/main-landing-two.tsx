import classNames from 'classnames';
import styles from './main-landing-two.module.scss';
import Main from '../../assets/Main.png';

export interface MainLandingTwoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MainLandingTwo = ({ className }: MainLandingTwoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <div className={styles.divTop}>
                    <h1 className={styles.IntroText}>
                        <div className={styles.divFirstText}>
                            <span className={styles.amplifyingColor}>Amplifying </span>
                            <span className={styles.conversationsColor}> Conversations</span>
                        </div>
                        <div className={styles.divSecondText}>
                            <span className={styles.andColor}>and</span>
                            <span className={styles.elevatingColor}>Elevating</span>
                            <span className={styles.insightsColor}>Insights</span>
                        </div>
                    </h1>
                </div>
                <div className={styles.divMiddle}>
                    <img src={Main} alt="" className={styles.imgClass} />
                </div>
                <div className={styles.divBottom}>
                    <p className={styles.paragraph}>
                    Dialogica optimizes your data flow as you speak, delivering instant insights customized to your live transcription. 
                    Tailored for legal proceedings, it works to enhance your performance in real-time, empowering you to excel as an attorney.
                    </p>
                    <div className={styles.divButtons}>
                        <button className={styles.buttonWaitlist}>Get Notified</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

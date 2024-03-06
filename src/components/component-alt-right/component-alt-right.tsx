import classNames from 'classnames';
import styles from './component-alt-right.module.scss';
import Chat from '../../assets/Transcription.png'

export interface ComponentAltRightProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ComponentAltRight = ({ className }: ComponentAltRightProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <img
                            src={Chat}
                            alt=""
                            className={styles.imageClass}
                        />
                    </div>
                    <div className={styles.divRight}>
                        <h1 className={styles.h1Class}>Active listening</h1>
                        <p className={styles.paragraphClass}>Dialogica works when you work, listening to the conversation and providing meaningful insights. Tailored for business meetings, job interviews, depositions, podcasts, and research, Dialogica works with you to strengthen your conversations in real-time. From accessing user-uploaded documents, external API's, and many generative A.I. services, users can get the most from their conversations.</p>
                        <div className={styles.divLine} />
                        <div>
                        <button className={styles.button}>Learn More {"->"} </button>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
};

import classNames from 'classnames';
import styles from './component-alt-right-two.module.scss';
import { ListCheck } from '../list-check/list-check';

import Presentation from "../../assets/Databox.png"

export interface ComponentAltRightTwoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ComponentAltRightTwo = ({ className }: ComponentAltRightTwoProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <img
                            src={Presentation}
                            alt=""
                            className={styles.imgClass}
                        />
                    </div>
                    <div className={styles.divRight}>
                        <div className={styles.divTop}>
                            <h1 className={styles.h1Class}>Customizable</h1>
                            <p className={styles.paragraph}>
                                The customizable presentation is applicable in both standalone and
                                online meetings, offering users the flexibility to tailor insights
                                according to their preferences. This includes features such as
                                icons, colored borders, flags, highlighted text, and background
                                colors, which aid in quickly grasping the nature of the data being
                                presented. During transcription, insights are presented as flashcards, 
                                which can be easily expanded to reveal the underlying data with a simple click.
                            </p>
                        </div>
                      
                    </div>
                </span>
            </div>
        </div>
    );
};

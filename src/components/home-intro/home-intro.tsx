import classNames from 'classnames';
import styles from './home-intro.module.scss';

export interface HomeIntroProps {
    className?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomeIntro = ({ className }: HomeIntroProps) => {
    return (
        <div className={classNames(styles.root, className, styles.intro)}>
           <h1 className={styles.h2title}>Amplifing Conversations, Elevating Insights</h1>
            <p className={styles.textparagraph}>
              Dialogica streams your data as you speak, providing real time <br></br>insights matched with your live-feed transcription. 
            </p>
            <span className={styles.root}>
            <button className={styles.button}>Join Waitlist</button>
          
            </span>
        </div>
    );
};

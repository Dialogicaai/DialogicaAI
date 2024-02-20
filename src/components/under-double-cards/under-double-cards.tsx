import classNames from 'classnames';
import styles from './under-double-cards.module.scss';

export interface UnderDoubleCardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UnderDoubleCards = ({ className }: UnderDoubleCardsProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divMain}>
<div>
<h2 className={styles.h2}>
Customizable presentation</h2>
<div className={styles.divParagrah}>
<p className={styles.paragraph}>The customizable presentation is applicable in both standalone and online meetings, offering users the flexibility to tailor insights according to their preferences. This includes features such as icons, colored borders, flags, highlighted text, and background colors, which aid in quickly grasping the nature of the data being presented.</p></div>
</div>
</div>
    </div>;
};

import classNames from 'classnames';
import styles from './under-cards.module.scss';

export interface UnderCardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UnderCards = ({ className }: UnderCardsProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.divMain}>
<div>
<h2 className={styles.h2}>User-defined</h2>
<div className={styles.divParagrah}>
<p className={styles.paragraph}>
User-defined instruction sets, supported by databases, external APIs, and user-uploaded data such as PDFs and Word documents, empower users to precisely define the data they desire to be presented in the feed. These instruction sets direct generative content, allowing users to specify the exact parameters and sources from which information is retrieved.</p></div>
</div>
</div>
    </div>;
};

import classNames from 'classnames';
import styles from './under-main.module.scss';

export interface UnderMainProps {
    className?: string;
}

export const UnderMain = ({ className }: UnderMainProps) => {
    return <div className={classNames(styles.root, className)}>
<div className={styles.divMain}>
<h2 className={styles.h2}>Active listening</h2>
<div className={styles.divParagrah}>
<p className={styles.paragraph}>Dialogica works when you work, listening to the conversation and providing meaningful insights. Tailored for business meetings, job interviews, depositions, podcasts, and research, Dialogica works with you to strengthen your conversations in real-time. From accessing user-uploaded documents, external API's, and many generative A.I. services, users can get the most from their conversations.
</p></div>
</div>
</div>;
};

import classNames from 'classnames';
import styles from './main.module.scss';
import TranscriptionDashboard from '../../assets/TranscriptionDashboard.png'

export interface MainProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Main = ({ className }: MainProps) => {
    return <div className={classNames(styles.root, className)}>
<div  className={styles.divMain}>
<img src={TranscriptionDashboard} alt="" className={styles.imgClass} />
</div>
</div>;
};

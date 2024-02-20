import classNames from 'classnames';
import styles from './double-cards.module.scss';
import { CardLeft } from '../card-left/card-left';
import { CardRight } from '../card-right/card-right';

export interface DoubleCardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const DoubleCards = ({ className }: DoubleCardsProps) => {
    return <div className={classNames(styles.root, className)}>
<div className={styles.divMain}>
<span className={styles.spanMain}>
<CardLeft />
<CardRight /></span>
</div>
</div>;
};

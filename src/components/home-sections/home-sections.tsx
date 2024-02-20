import classNames from 'classnames';
import styles from './home-sections.module.scss';
import { Line } from '../line/line';
import { Card, CardProps } from '../card/card';

export interface HomeSectionsProps {
    className?: string;
    cards: CardProps[]; // Assuming Cards is the type of your array of cards
}

export const HomeSections = ({ className, cards }: HomeSectionsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {cards.map((card, index) => (
                <div key={index} className={styles['card-container']}>
                    <Card 
                    title={card.title} 
                    description={card.description}  />
                </div>
            ))}
        </div>
    );
};

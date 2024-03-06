import classNames from 'classnames';
import styles from './faq.module.scss';
import { FAQCard, faq } from '../faq-card/faq-card';

export interface FAQProps {
    className?: string;
    faqs: faq[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FAQ = ({ className, faqs }: FAQProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <div className={styles.divText}>
                    <h1 className={styles.h1Class}>FAQ&apos;s</h1>
                    <p className={styles.paragraphClass}>
                        Discover quick awnsers to our most popular questions.
                    </p>
                    <div className={styles.divCards}>
                    {faqs.map((faq) => (
                <div>
                 
                    <FAQCard 
                        key={faq.id}
                        id={faq.id}
                        title={faq.title} 
                        description={faq.description}
                        bulletOne={faq.bulletOne}
                        bulletTwo={faq.bulletTwo}
                        bulletThree={faq.bulletThree}
                        />
                
                </div>
            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

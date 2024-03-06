import classNames from 'classnames';
import styles from './about-main.module.scss';

export interface AboutMainProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutMain = ({ className }: AboutMainProps) => {
    return <div className={classNames(styles.root, className)}>AboutMain</div>;
};

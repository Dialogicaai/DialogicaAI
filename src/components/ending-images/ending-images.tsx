import classNames from 'classnames';
import styles from './ending-images.module.scss';
import Bakground1 from '../../assets/background1.png'
import Bakground2 from '../../assets/background2.png'
import Lock from '../../assets/lock.png'
import BottomImage from '../../assets/bottomImage.png'
import Brain from '../../assets/brain.png'

export interface EndingImagesProps {
    className?: string;
}

export const EndingImages = ({ className }: EndingImagesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.divMain}>
                <span className={styles.spanMain}>
                    <div className={styles.divLeft}>
                        <div className={styles.imageWrapper}>
                            <img src={Bakground2} alt="" className={styles.imageClass} />
                            <div className={styles.centeredContent}>
                                <img className={styles.image} src={Lock}></img>
                                <h1 className={styles.leftH1}>Locked and Secure</h1>
                                <p className={styles.leftParagraph}>Backed by the best security methds for your data. </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divRight}>
                        <div className={styles.imageWrapper}>
                            <img src={Bakground1} alt="" className={styles.imageClass} />
                            <div className={styles.centeredContent}>
                                <img className={styles.image} src={Brain}></img>
                                <h1 className={styles.rightH1}>Powered By ELI.</h1>
                                <p className={styles.rightParagraph}>Our live-feed content generation MLM</p>
                            
                            </div>
                        </div>
                    </div>
                </span>
                <div className={styles.divBottom}>
                    <div className={styles.imageWrapper}>
                        <img src={BottomImage} alt="" className={styles.imgClass} />
                        <div className={styles.centeredContent}>
                            <p className={styles.bottomParagraph}>Are you excited?</p>
                            <button className={styles.button}>Join Waitlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

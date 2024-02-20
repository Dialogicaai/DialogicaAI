import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './slideshow.module.scss';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
];

export interface SlideshowProps {
    className?: string;
}

export const Slideshow = ({ className }: SlideshowProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageContainer}>
                <img
                    src={images[(currentImageIndex - 1 + images.length) % images.length]}
                    alt="Previous"
                    className={classNames(styles.image, styles.previousImage)}
                />
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className={styles.image}
                />
                <img
                    src={images[(currentImageIndex + 1) % images.length]}
                    alt="Next"
                    className={classNames(styles.image, styles.nextImage)}
                />
                <button onClick={previousImage} className={classNames(styles.controlButton, styles.previousButton)}>&lt;</button>
                <button onClick={nextImage} className={classNames(styles.controlButton, styles.nextButton)}>&gt;</button>
            </div>
        </div>
    );
};

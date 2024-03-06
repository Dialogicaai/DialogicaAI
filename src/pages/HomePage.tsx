import { useState } from 'react';
import styles from './HomePage.module.scss';
import { NavHeaderDialogica } from '../components/nav-header-dialogica/nav-header-dialogica';
import { GroupUnderMain } from '../components/group-under-main/group-under-main';
import { ComponentAltRight } from '../components/component-alt-right/component-alt-right';
import { ComponentAltLeft } from '../components/component-alt-left/component-alt-left';
import { ComponentAltRightTwo } from '../components/component-alt-right-two/component-alt-right-two';
import { ComponentAltLeftTwo } from '../components/component-alt-left-two/component-alt-left-two';
import { MainLandingTwo } from '../components/main-landing-two/main-landing-two';
import { GroupFinal } from '../components/group-final/group-final';
import { FAQ } from '../components/faq/faq';
import { Footer } from '../components/footer/footer';

function HomePage() {

    const faqs = [
        {
            id: 1,
            title: 'Where is the data Coming From?',
            description: 'Premium Web Design using all modern technologies including React Typescript.',
            bulletOne: 'Website design and management',
            bulletTwo: 'E-Commerce front and back-end support',
            bulletThree: 'On-call tech support',
        },
        {
            id: 2,
            title: 'What is the security like?',
            description: 'Full Service Management following the latest trends and promotions.',
            bulletOne: 'Data Analytics and Marketing for Paid Advertising',
            bulletTwo: 'Content Creation including Video',
            bulletThree: 'Viewer Engaugement',
        },
        {
            id: 3,
            title: 'Is the system Jusridiction Specific?',
            description: 'Is the system Jusridiction Specific?',
            bulletOne: 'Hardware & Software Installation',
            bulletTwo: 'Web Application Developement',
            bulletThree: 'On-Call Tech Support',
        },
        {
            id: 4,
            title: 'Does it follow \'Rules of procedure\'',
            description: 'Full Service content creation to fit all your busness needs from product design and prototyping, branding, etc',
            bulletOne: 'Product Design',
            bulletTwo: 'Business branding & Advertising',
            bulletThree: 'Photography, videography and content creation',
        },
        {
            id: 5,
            title: 'Can I turn off ceritan features?',
            description: 'From data metrics to assisting with Pricing adjustments to maxamize your profits, we have your back!',
            bulletOne: 'Business Planning and Startup',
            bulletTwo: 'Employee Compensation Strategies & Business Analytics',
            bulletThree: 'Competative market pricing',
        },
        {
            id: 6,
            title: 'How are the Questions Generated?',
            description: 'We believe Accessibility is key for every website, no matter how small of a business.',
            bulletOne: 'We strive to adhear to all WCAG 2.1 & 2.2 requiremnts.',
            bulletTwo: 'Backed by up-to-date UserWay Accessibility widget.',
            bulletThree: 'We provides Accessibility Statements and website reports.',
        },
    ];


    return (
        <div className={styles.App}>
            <MainLandingTwo />
            <GroupUnderMain />
            <ComponentAltRight />
            <ComponentAltLeft />
            <ComponentAltRightTwo />
            <ComponentAltLeftTwo />
            <GroupFinal />
            <FAQ  faqs={faqs} />
            <Footer />
        </div>
    );
}

export default HomePage;
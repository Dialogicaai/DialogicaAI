import { HomeIntro } from '../components/home-intro/home-intro';
import { NavFooter } from '../components/nav-footer/nav-footer';
import { Line } from '../components/line/line';
import { Main } from '../components/main/main'
import { SubIntro } from '../components/sub-intro/sub-intro';
import { UnderMain } from '../components/under-main/under-main';
import { HomeSections } from '../components/home-sections/home-sections';
import { UnderCards } from '../components/under-cards/under-cards';
import { DoubleCards } from '../components/double-cards/double-cards';
import { UnderDoubleCards } from '../components/under-double-cards/under-double-cards';
import { Slideshow } from '../components/slideshow/slideshow';
import { UnderSlideshow } from '../components/under-slideshow/under-slideshow';
import { HomeSectionsTwo } from '../components/home-sections-two/home-sections-two';
import { EndingImages } from '../components/ending-images/ending-images';

function HomePage () {

    const cards = [
        { title: 'Transcription', description: 'Providing Real-Time transcription across multiple languages' },
        { title: 'Time Track', description: 'Keeping interviews organized and efficient, even with limited time, by using a system that not only tracks time but also prompts you to revisit previous questions if they haven\'t been answered.'},
        { title: 'Data', description: 'Facilitating the creation of live reference feeds tailored by users through the support of various file types including Word documents, PDFs, spreadsheets, and many others for seamless integration and accessibility.' },
        { title: 'Integrations', description: 'Compatible with top platforms such as Zoom, Google Meet, and Teams, or can be used independently.' },   
    ];

    const cardsTWO = [
        { title: 'Projects', description: 'Easily create and manage projects from one place.' },
        { title: 'Files', description: 'Upload and delete files with esase.' },
        { title: 'Notifications', description: 'Monitor project progress, such as database completion rendering.' },
        { title: 'Tools', description: 'Easily manage Datapbases, External API\'s and more.' },   
    ];

return (
        <div>
                <Line />
                <HomeIntro />
                <SubIntro />
                <Main />
                <UnderMain />
                <HomeSections cards={cards} />
                <UnderCards />
                <DoubleCards />
                <UnderDoubleCards />
                <Slideshow />
                <HomeSectionsTwo cards={cardsTWO} />
                <UnderSlideshow />
                <EndingImages />
                <Line />
                <NavFooter />
        </div>
    )
}

export default HomePage;
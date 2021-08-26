import ContentItem from "./ContentItem";
import FeatureStrip from "./FeatureStrip";
import Showcase from "./Showcase";
import LoTBanner from '../assets/LOT Banner.jpg';

function HomePage(props) {
    let placeholderImg = props.placeholderImg;
    return <div>
        <Showcase img={LoTBanner}/>
        <FeatureStrip header='Continue Watching'>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
        </FeatureStrip>
        <FeatureStrip header='Trending Now'>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
        </FeatureStrip>
        <FeatureStrip header='Children & Family TV'>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
        </FeatureStrip>
        <FeatureStrip header='My List'>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
            <ContentItem img={placeholderImg}/>
        </FeatureStrip>
    </div>
}

export default HomePage;
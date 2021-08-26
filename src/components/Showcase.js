import { circMoreInfo, moreInfoBtn, playBtn } from '../assets/SVGIcons';
import '../css/Showcase.css';

function Showcase(props) {
    return <div id='item-showcase'>
        <img src={props.img} alt='showcase' />
        <div id='img-bottom-mask' />
        <div id='showcase-billboard'>
            <h2 id='showcase-title'>Showcase Title</h2>
            <div id='showcase-btns'>
                <button id='showcase-play-btn'>{playBtn} Play</button>
                <button id='showcase-info-btn'>{circMoreInfo} More Info</button>
            </div>
        </div>
    </div>
};

export default Showcase;
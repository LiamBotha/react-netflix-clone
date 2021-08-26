import '../css/ContentInfo.css';
import { likeBtn, dislikeBtn, moreInfoBtn, playBtn, addBtn } from '../assets/SVGIcons';

function ContentInfo() {
    return <div id='item-info'>
        <div id='info-btns'>
            <button className='info-btn'><div>{ playBtn }</div></button>
            <button className='info-btn'><div>{ addBtn }</div></button>
            <button className='info-btn'><div>{ likeBtn }</div></button>
            <button className='info-btn'><div>{ dislikeBtn }</div></button>
            <button className='info-btn'><div>{ moreInfoBtn }</div></button>
        </div>
        <h5 id='info-compatibility'>98% Match</h5>
        <h5 id='info-seasons'>1 Season</h5>
        <br/>
        <ul id='tag-list'>
            <li className='tag'>Quirky</li>
            <li className='tag'>Ireverrant</li>
            <li className='tag'>Trending</li>
        </ul>
    </div>
}

export default ContentInfo;
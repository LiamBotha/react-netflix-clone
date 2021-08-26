import { useState } from "react"
import ContentInfo from "./ContentInfo";
import '../css/ContentItem.css';

function ContentItem(props) {
    let [bIsSelected, setBIsSelected] = useState(false);
    if(bIsSelected)
    {
        return <div className='content-item' id='selected-item'
            onMouseLeave={() => setTimeout(() => setBIsSelected(false), 50)}>
            <img src={props.img} className='content-img' alt ='content' />
            <ContentInfo />
        </div>
    }

    return <div className='content-item'
        onMouseEnter={() => setBIsSelected(true)}>
        <img src={props.img} className='content-img' alt ='content' />
    </div>
}

export default ContentItem;
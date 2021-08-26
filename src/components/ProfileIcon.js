import { useState } from "react";
import ProfilePopup from "./ProfilePopup";
import '../css/ProfilePopup.css';
import profileImg from '../assets/profileImg.png';

function ProfileIcon(props) {
    let [isHovered, setIsHovered] = useState(false);
    let [disableTimeout, setDisableTimeout] = useState(null);
    return <div id='profile-parent' className='nav-right' 
        onMouseEnter={() => { clearTimeout(disableTimeout); setIsHovered(true); }}
        onMouseLeave={() => { setDisableTimeout(setTimeout(() => setIsHovered(false), 1000)); }}
        >
        <img src={profileImg} alt='Profile' id='profile-pic'/>
        { isHovered && <ProfilePopup />}
    </div>
}

export default ProfileIcon;
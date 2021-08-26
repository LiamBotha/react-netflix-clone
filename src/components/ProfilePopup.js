import '../css/ProfilePopup.css';

function ProfilePopup(props) {
    return <div id='profile-popup'>
        <ul className='popup-list'>
            <a href ='#p1' className='profile-link'>
                <img src={props.img1} alt='Profile' className='profile-pic'/><span>Profile 1</span>
            </a>
            <a href ='#p2' className='profile-link'>
                <img src={props.img2} alt='Profile' className='profile-pic'/><span>Profile 2</span>
            </a>
            <a href ='#p3' className='profile-link'>
                <img src={props.img3} alt='Profile' className='profile-pic'/><span>Profile 3</span>
            </a>
            <a href='#manage'className='profile link'>Manage Profiles</a>
        </ul>
        <ul className='popup-list'>
            <a href='#acc' className='profile-link'>Account</a>
            <a href='#help' className='profile-link'>Help Center</a>
            <a href='#signout' className='profile-link'>Sign out of Netflix</a>
        </ul>
    </div>
}

export default ProfilePopup;
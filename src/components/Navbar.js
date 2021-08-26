import { useEffect, useState } from "react";
import '../css/Navbar.css';
import ProfileIcon from "./ProfileIcon";

function Navbar(props) {
    let [nav, setNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const handleScroll = () => {
        window.pageYOffset > 10 ? setNav(true) : setNav(false);
        console.log(nav);
    }

    return <div id='nav-bar' style={{ background: nav ? '#131314' : '' }}>
        <h1 id='nav-logo'>Flix</h1>
        <ul id='nav-links'>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#TV'>TV Shows</a></li>
            <li><a href='#Movies'>Movies</a></li>
            <li><a href='#New'>New & Popular</a></li>
            <li><a href='#List'>My List</a></li>
        </ul>
        <input type='text' className='nav-right' id='search-bar' placeholder='Title'/>
        <ProfileIcon placeholderImg={props.placeholderImg}/>
    </div>
};

export default Navbar;
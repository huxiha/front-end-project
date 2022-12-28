import logo from '../images/logo.svg';
import MobielActiveNav from './MobielActiveNav';
import { useState } from 'react';

const MobielNav = () => {
    const [displayNav, setDisplay] = useState(false);

    const handleClick = (e) => {
        setDisplay(!displayNav);
    };
    return ( 
        <div className="mobiel">
            <nav className="mobielNav">
                <div className="left">
                    <img src={logo} alt='logo'></img>
                </div>            
                <div className="button">
                    <i className="fa-solid fa-bars fa-2xl" onClick={handleClick}></i>
                </div>
            </nav>
        
            {displayNav && <MobielActiveNav />}
        </div>
        
       
     );
}
 
export default MobielNav;
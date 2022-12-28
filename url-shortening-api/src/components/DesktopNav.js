import NavLinks from "./NavLinks";
import SignButton from "./SignButton";
import logo from '../images/logo.svg'

const DesktopNav = () => {
    return ( 
    <nav className='desktopNav'>
        <div className="left">
            <img src={logo} alt='logo' ></img>
            <NavLinks />
        </div>
        <div className="button">
            <SignButton />
         </div>
    </nav>           
    );
}
 
export default DesktopNav;
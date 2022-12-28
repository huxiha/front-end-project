import DesktopNav from './DesktopNav';
import MobielNav from './MobielNav';

const Navigation = () => {
    return (
        <div className="navigation">
            <DesktopNav />
            <MobielNav />
        </div>
     );
}
 
export default Navigation;
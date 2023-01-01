import { Link } from "react-router-dom";

const DisplayBorder = ({border}) => {
    const cca2 = border[0].cca2;
    const borderName = border[0].name.common;
    return ( 
        <div className="displayBorder">
            <Link to={`/details/${cca2}`}>{borderName}</Link>
        </div>
     );
}
 
export default DisplayBorder;
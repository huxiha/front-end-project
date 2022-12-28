import branIcon from '../images/icon-brand-recognition.svg';
import detailedIcon from '../images/icon-detailed-records.svg';
import customizeIcon from '../images/icon-fully-customizable.svg'

const AdvancedStatistics = () => {
    return ( 
        <div className="advanced">
            <article>
                <h3>Advanced Statistics</h3>
                <p>
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </article>
            <div className="cards">
                <div className="brand">
                    <div className='icon-img'>
                        <img src={branIcon} alt="brandIcon"></img>
                    </div>
                    
                    <h4>Brand Recognition</h4>
                    <p>
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className='line'></div>
                <div className="detailed">
                    <div className='icon-img'>
                        <img src={detailedIcon} alt="detailedIcon"></img>
                    </div>
                    <h4>Detailed Records</h4>
                    <p>
                    Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.
                    </p>
                </div>
                <div className='line'></div>
                <div className="customizable">
                    <div className="icon-img">
                        <img src={customizeIcon} alt="customizeIcon"></img>
                    </div>
                    
                    <h4>Fully Customizable</h4>
                    <p>
                    Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                    </p>
                </div>
                
            </div>
        </div>
     );
}
 
export default AdvancedStatistics;
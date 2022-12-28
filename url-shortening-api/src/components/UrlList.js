import React from "react";
const UrlList = (props) => {
    const { urllist } = props;
    const handleClick = (shorturl) => {
        navigator.clipboard.writeText(shorturl).then((res) => {
            console.log("shorten url copied!");
            const copybtn = document.getElementById('btn');
            copybtn.style.backgroundColor = "hsl(257, 27%, 26%)";
            copybtn.innerHTML = "copied!";
        }, (resError) => {
            console.log("error");
        })
    }
    return ( 
        <div className="urlList">
            {
            urllist.map((urlpair) => (
                <div className="urlPreview" key={urlpair.id}>
                    <div className="orignUrl">{urlpair.orign_url}</div>
                    <div className="copy">
                        <div className="shortenurl">{urlpair.shorten_url}</div>
                        <button id="btn" onClick={(e) => (handleClick(urlpair.shorten_url))}>copy</button>
                    </div>                   
                </div>
                
            ))
        }
        </div>
        
        
     );
}
 
export default UrlList;
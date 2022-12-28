import { useEffect, useState } from "react";
import ShortenUrl from "./ShortenUrl";
import UrlList from "./UrlList";

const Shorten = () => {
    const [urllist, seturllist] = useState([]);
    const url = "http://localhost:8800/urlPairs";
    useEffect(() => {
        fetch(url).then(
            (res) => {
                if(res.ok) {
                    res.json().then(
                        (data) => {
                            seturllist(data);
                        }
                    )
                }
            }
        )

    }, [urllist])
    return ( 
        <div className="shorten">
            <ShortenUrl url={url}/>
            {urllist && <UrlList urllist={urllist}/>}
        </div>
     );
}
 
export default Shorten;
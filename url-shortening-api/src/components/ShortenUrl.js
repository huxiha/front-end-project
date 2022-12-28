import { useState } from "react";

const ShortenUrl = ({url}) => {
    const [inputurl, setUrl] = useState("");
    let urllist;
    const handleSubmit = (e) =>{
        e.preventDefault();
        const inputUrl = document.getElementsByClassName('inputUrl')[0];
        // const sendUrl = {url: inputurl};
        if(!inputurl){            
            inputUrl.setAttribute("class", 'inputUrl change');
            document.getElementById("newTips").style.display = "block";
        } else {
            inputUrl.setAttribute("class", 'inputUrl');
            document.getElementById("newTips").style.display = "none";
            
            //获取shorten 添加到urlList
            fetch("https://api.shrtco.de/v2/shorten?url=" + inputurl, {method: 'POST'}).then(
                (res) => {
                    if(res.ok){
                        res.json().then((data) =>{
                            urllist = {
                                "orign_url": data.result.original_link,
                                "shorten_url": data.result.full_short_link,
                            };
                            fetch(url, {method:'POST',
                        headers:{
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(urllist)})
                        })
                    }
                    
                }
            )
        }      
        
    }
    

    return (
        <div className="shortenUrl">
            <form onSubmit={handleSubmit} className="shortenform">
                <div className="inputandtip">
                    <input 
                    type='text' 
                    className="inputUrl" 
                    id="myInput" 
                    placeholder="Shorten a link here..." 
                    value={inputurl} 
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}></input>
                    <p id="newTips">Please add a link...</p>
                </div>
                
                <button type='submit' className='submitIt' >Shorten it!</button>
                
            </form>
        </div>
        
     );
}
 
export default ShortenUrl;
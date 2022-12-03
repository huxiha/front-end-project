let emailAddress = document.querySelector('div');
emailAddress.onclick = function(){
    let email = document.getElementsByTagName('input')[0].value;
    let formTag = document.querySelector('input');
    if(!email.match(/^\w+@\w+\.\w+$/i)){
        formTag.style.borderColor = "red";
        let errorMessage = document.createTextNode('Please provide a valid email');
        let parentNode = document.querySelector('form');
        if(document.getElementsByClassName("errorMessage").length == 0){
            let newElemnt = document.createElement('p');
            newElemnt.className = 'errorMessage';
            parentNode.appendChild(newElemnt);
            newElemnt.appendChild(errorMessage);
            newElemnt.style.color = "red";
            newElemnt.style.padding = "1rem";
        }   

        if(document.getElementsByClassName("errorIcon").length == 0){
            let iconElement = document.createElement('img');
            iconElement.className = 'errorIcon';
            parentNode.insertBefore(iconElement, parentNode.firstChild);
            iconElement.setAttribute("src", "./images/icon-error.svg");
            iconElement.setAttribute('alt', 'icon-error');
            iconElement.style.display = "inline-block";
            iconElement.style.position = "absolute";
            iconElement.style.right = "25%";
            iconElement.style.top = "6%"
        }   
        
    }else {
        formTag.style.borderColor = "hsl(0, 36%, 70%)";
        if(document.getElementsByClassName("errorIcon").length !== 0){
            document.getElementsByClassName("errorMessage")[0].parentNode.removeChild(document.getElementsByClassName('errorMessage')[0]);
            document.getElementsByClassName('errorIcon')[0].parentNode.removeChild(document.getElementsByClassName('errorIcon')[0]);
        }
        
        
    }
}

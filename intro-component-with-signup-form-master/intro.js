const submit = document.querySelector('button');
submit.onclick = function inputValidate (e) {
    e.preventDefault();
    const inputs = document.getElementsByTagName('input');
    
    for(i in inputs){
        if(inputs[i].value === ''){
            //设置边框为红色
            if(inputs[i].style.borderColor !== 'red'){
                inputs[i].style.borderColor = 'red';
                //设置提示字
                let errorTips = document.createElement('p');
                errorTips.setAttribute('id', `${inputs[i].name}`);
                insertAfter(errorTips, inputs[i]);
                if(inputs[i].name === "Email Address") {
                    inputs[i].setAttribute('placeholder', emailValidate(inputs[i].value));
                    inputs[i].setAttribute('class', "emailAddr change");
                    errorTips.innerHTML = `${inputs[i].name} is not a email`;
                }else {
                    inputs[i].setAttribute('placeholder', "");
                    errorTips.innerHTML = `${inputs[i].name} can not be empty`;
                }
                errorTips.style.color = 'red';
                errorTips.style.textAlign = 'right';
                errorTips.style.fontSize = "0.1rem";
                errorTips.style.padding = '0';
                inputs[i].style.marginBottom = '0';
                //设置错误标识
                let errorImg = document.createElement('img');
                errorImg.setAttribute('src', "./images/icon-error.svg");
                errorImg.setAttribute('id', `img${i}`)
                inputs[i].parentElement.insertBefore(errorImg, inputs[0]);
                inputs[i].parentElement.style.position = 'relative';
                errorImg.style.position = 'absolute'; //error icon要脱离文档流
                errorImg.style.right = '3rem';
                errorImg.style.top = `${2 + 4.6 * Number(i)}rem`;
                
            }                
            
        }else {//恢复原来设置

            if(!(inputs[i].name === "Email Address" && emailValidate(inputs[i].value))) {            
                
                if(document.getElementById(`${inputs[i].name}`)){
                    inputs[i].style.borderColor = 'gray';
                    inputs[i].parentElement.removeChild(inputs[i].nextSibling);
                    inputs[i].parentElement.removeChild(document.getElementById(`img${i}`));
                    inputs[i].style.marginBottom = '1rem';
                }
            }

            
        }
    }
   
}

function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentElement;
    if(parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function emailValidate(emailAddr) {
    if(emailAddr.match(/^\w+@\w+\.\w+$/i)) {
        return "";
    }
    return "email@example.com";
}
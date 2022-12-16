# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned) 
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

Screenshot of my solution.

### Links

- Solution URL: https://github.com/huxiha/front-end-project/tree/master/pricing-component-with-toggle-master
- Live Site URL: https://huxiha.github.io/front-end-project/pricing-component-with-toggle-master

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- javascript

### What I learned

1. multiple background image: background-image:url1,url2;
```
    background-image: url('images/bg-bottom.svg'), url('images/bg-top.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: bottom, top;
```

2. cover the origin style of the radio
```
.radioBox {
    appearance: none;
    position: relative;
    vertical-align: center;
    width: 1.4rem;
    height:1.4rem;
    background-color: white;
    border-radius: 50%;
    margin: 0.2rem;
    margin-right: 0%;
    cursor: pointer;
}
```

3. Ajust the position and size of the background image
```
 body {
        background-image: url('./images/bg-top.svg');
        background-repeat: no-repeat;
        background-position: 175% -3%;/*调节背景的位置坐标，可以超出视窗范围*/
        background-size: 60% 30%;/*调整背景图片的大小，长度和宽度*/
    }
```

## Author

huxixi
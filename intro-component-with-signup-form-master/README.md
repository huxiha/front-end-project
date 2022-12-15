# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

Screenshot of my solution. 

### Links

- Solution URL: https://github.com/huxiha/front-end-project/tree/master/intro-component-with-signup-form-master
- Live Site URL: https://huxiha.github.io/front-end-project/intro-component-with-signup-form-master

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid


### What I learned

1. box-shadow: add shadow to the border;
2. Set input placeholder: Element.setAtrribute('placeholder',");
3. Add new element to the document:
    let errorTips = document.createElement('p');
    errorTips.setAttribute('id', `${inputs[i].name}`);
    insertAfter(errorTips, inputs[i]); 
4. Set placeholder's color:
    css add className.change about the placeholder;
    js add setAttribute('class', className.change);
      [in css] .emailAddr.change::-webkit-input-placeholder {
        color: red;
      }

      [in js] inputs[i].setAttribute('class', "emailAddr change");
5. Set cursor style
  cursor: pointer;


## Author

huxixi
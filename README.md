# Magic 8 Ball Simulator

This application is designed to be asked yes or no Question and present you an answer "Randomly".
It was designed as the final assignment for BitWise Academies JavaScript for Beginers Course.

## Try It Out Here
https://syntheticdesigner.github.io/magic8ball/

## Contents 
* [Tech Stack](#stack)
* [About The App](#app)
* [Button Class](#button)
* [Input Class](#input)
* [Pop Out Menu Class](#gridDoc)
* [Future Development](#plan)
* [Closing Notes](#closing)
* [Connect](#connect)

## <a name="stack" ></a>Tech Stack
* Backend: JavaScript
* Frontend: HTML | CSS | More JavaScript 

## <a name="app"></a>About The App
I created 7 classes to perform these actions. over 85% of the code is JS. The JS classes handle creating the data and UI. The css is used primarily to position elements in the page. Most styling is done within the JS classes. I wanted each class to modular allowing me to add these features to future applications with little to no aditional code. They can be created and attached to HMTL elements Dynamically and then positioned using CSS
## <a name="button"></a>JS Button Class
The First button I developed is realy a checkbox I set up to act like a toggle for turning things on and off. I made this one so a user can switch the animations on the page on and off. In UX design it is a common observation that animations especially infinite ones can be very distracting so haveing the option to turn them off is good.
Constructor:
```javascript
constructor(_element, _fontSize, _defaultText, _activeText, _height, _width)
```
```javascript
let testbtn1 = new JSCheckBox(jsbutton1, 20, "Default Txt here", "Active Text Here");
testbtn1.draw();
```
Within this button we have access to their inputs this is especially important for the checkbox button because we may want to test for the checked value.
```javascript
console.log(testbtn1.input.checked) //Will return true or false
```
If you need the button to be active when the page loads you only need set the input.checked to true before you draw the button.
```javascript
testbtn1.input.checked = true;
testbtn1.draw();
```
The sandwich icon button also uses the checkbox functionality. Basically just adds styleing to make the icon and animate it.
```javascript
let testBurger = new JSBurgerMenu(jsburger, "40px");
testBurger.draw();
```
The Submit button is of type submit and is meant to be attached to forms, or a div inside a form.
```javascript
let submitBTN = new JSSubmitBtn(submit, "1.5em", "Submit", "Submit");
submitBTN.draw();
```
Code Pen:
https://codepen.io/syntheticdesigner/pen/xxXEpxy

## <a name="input"></a>Input Class
The Input Maker is designed to be attached specifically to forms. The input maker will automatically detect the class name or id of the element it is told to attach itself to and assign a for value for it. This allows someone to dynamically add as many inputs as they want to a form. Granted they will all have the same styling.
The unput will return a submit event targeting the form it is attached to.
Constructor:
```javascript
constructor(_element, _labelText, _colorString, _width, _height, _fontSize)
```
```javascript
let testinput = new JSInput(myform, "Here is the Label", "white", "300px", "", "1em");
testinput.draw();

myform.addEventListener("submit", (event) => {
    event.preventDefault();
    testinput.saveToSession();
});
```
Code Pen:
https://codepen.io/syntheticdesigner/pen/YzrGOzo

## <a name="gridDoc"></a>Pop Out Menu Class
The GridDoc actually needs two aditional classes to work properly; the JSGridDoc itself only produces a pop out-like field that a table or data set can be attached to. The table maker on the other hand is designed to map 1d and 2d arrays into a grid. This is ideal for reading from session or local. It works primarily with arrays but can easily be adapted to objects.

Initializing the Pop Out Menu requires 3 steps. First Define and draw a toggle button like the Burger button mentioned before. Then create a grid doc that acts like a pop-out window. Finally attach a table document to the grid doc background.
```javascript
let testDocument = new GridDoc(colapsableDoc, null, "1px", "1px", "600px", "500px");
testDocument.draw();

let testtable = new JSTableMaker(testDocument.background, null, arr);
testtable.draw();

colapsableDoc.addEventListener("change", () => {
    if (testBurger.input.checked) {
        testDocument.styleActive();
    } else {
        testDocument.style();
    }
})
```

## <a name="plan"></a>Future Developement
* If i continue with this project i might add a timeout and shake animation if someone asks the meaning of life to simulate the orb processing
* I actually want to add a swirling vortex and a parallax effect.
* The application is almost entirely mobile friendly. The only exception currently being landscape mode phones. I have plans to fix that if I move forward.

## <a name="closing"></a>Closing Notes
Lastly added functionality that extends the scope of the premise is that if someone asks something relating to the "meaning" of "life" or the "answer" to "everything", through a regex expression, the application is always programmed to answer any question containing those phrases with "42" this is homage of the Great AI in the popular Novel Hitchhiker's Guide to the Galaxy. In The Hitchhiker's Guide to the Galaxy, advanced alien beings create a supercomputer, called Deep Thought, to figure out the answer to the so-called Ultimate Question of Life, the Universe, and Everything. After calculating for 7.5-million years, Deep Thought determined the answer was the number 42.

This project is a good demonstration of intermediate Javascript methods using a variety of features available in Javascript. I would like to in the future continue developing an actual AI that can do a lot more than answer yes or no questions.

## <a name="connect"></a>Connect
Please reach out if you have any questions, comments, concerns.
https://www.linkedin.com/in/andrew-schroepfer/
https://andrewsch.myportfolio.com/



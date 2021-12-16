This application if a Magic 8 Ball Simulator.
It is designed to be asked yes or no Question and present you an answer "Randomly"

I created 7 classes to perform these actions. over 85% of the code is JS

The JS classes handle creating the data and UI.
The css is used primarily to position elements in the page.
Most styleing is done within the JS classes.

First Is the Button Classes. The Parent class JSCheckBox builds out most of the button while JSBurgerMenu and JSSubmit both extend the features from the check box. I may change what extends from what later.

The input Maker and Submit button are both designed to be attached specifically to forms. The input maker will automatically detest the class or id of the element it is told to attach itself to and asign a for value for it. This allows someone to dynamically add as many inputs as they want to a form. Granted they will all have the same styling.

The GridDoc actually needs two classes to work properly the JSGridDoc itself only produces a popout like field that a table or data set can be attached to. The table maker on the other hand is designed to map 1d and 2d arrays into a grid. This is ideal for reading from session or local. It works primarily with araays but can easily be adapteed to objects.

Lastly the Magic8Ball class located inside the script just opulated and draws images from my file by updatingk the classes src value then redrawing the element.

The application is almost entirely mobile freindly. They only exception currently being landscape mode phone. I have plans to fix that if i move forward.

Finnally addeed functionality that extends the scope of the premise is that is someone asks something relating to the "meaning" of "life", through a regex expression, the application is always programmed to answer any question containing those phrases with "42" this is homage of the Great AI in the popular Novel Hitchhikers Guide to the Galaxy. In The Hitchhiker's Guide to the Galaxy, advanced alien beings create a supercomputer, called Deep Thought, to figure out the answer to the so-called Ultimate Question of Life, the Universe, and Everything. After calculating for 7.5-million years, Deep Thought determined the answer was the number 42.

If i continue with this project i might add a time out and shake animation if someone asks the meaning of life to simulate the orb processing, I actually want to add a swirling vortex and a paralax effect.

This project is a good demonstration of intermidiate Java Script methods using a variety of features available in Java Script. I would like to in the futire continue developing an actual AI that can do a lot more than answer yes or no questions.


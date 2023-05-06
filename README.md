# TinyComponents

### Introduction

Thanks for checking out TinyComponents! TinyComponents is in itself a practice of could 
I, not should I and should be taken with a grain of salt as it is in no way claiming 
efficiency or domination over any similar library/package. I made this in an attempt to 
recreate the component based development we've grown to love as simply as possible using the most
barebone approach that anyone could understand. The Main goal was to write with clarity so that the
average programmer could clone this repository and immeadiatly understand whats happening "behind the curtain"
to say. Not that in this approach there ever was a curtain to hide behind.

### To get started:

<ol>
  <li>Clone this repository using your preffered method</li>
  <li> Navigate to your local location and run <blockquote>npm install</blockquote> </li>
  <li>Start the local server with the command <blockquote>npm start</blockquote></li>
</ol>

To build your application use the command
> npm build

Tinycomponents comes preloaded with a small example of how to use the code with the two component files

[LoginForm.js](https://github.com/Quinten97/TinyComponents/blob/main/components/LoginForm.js)

[LabledInput.js](https://github.com/Quinten97/TinyComponents/blob/main/components/LabledInput.js)

The LabledInput is imported into the LoginForm component which in turn is used in [App.js](https://github.com/Quinten97/TinyComponents/blob/main/App.js)

Feel free to organize your file structure however when adding your components remember that App.js is your main entrypoint for rendering your components.

###Creating a component

To create a component first:

  * create a new file either in the src folder or in my recommendation in the components folder ex: Example.js
  * within the file start your component by defining a function:
     
    > const ExampleComponent = () => {}
    
    or
    
    > function ExampleComponent() {}
    
  * next within your component you can then return your html, I recommend using template literals to allow dynamic attributes such as classname, disabled, etc.
  
  <blockquote> 
    const ExampleComponent (inputType, isRequired) => {
    
    const inputId = "exampleInput"
    
      return `
         <input 
            type="${inputType}" 
            id="${inputId} 
            name="${inputId}"
            ${isRequired ? " required" : ""}
         >
      `
    }
  </blockquote>
  
  Once you are done with your component make sure you have exported it
  
  ex: 
  > export const ExampleComponent = () => {}
  
  or
  
  <blockquote> 
    const ExampleComponent (inputType, isRequired) => {
    
    const inputId = "exampleInput"
    
      return `
         <input 
            type="${inputType}" 
            id="${inputId} 
            name="${inputId}"
            ${isRequired ? " required" : ""}
         >
      `
    }
    
    export { ExampleComponent };
  </blockquote>
  
  

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
     
    <blockquote>
      const ExampleComponent = () => {}
    </blockquote>
    
    or
    
    <blockquote>
      function ExampleComponent() {}
    </blockquote>
    
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
  <blockquote> 
                                           
    export const ExampleComponent = () => {} 
  </blockquote>
  
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
  
  Once your component is made you can render it by calling its function in App.js:
  
  <blockquote>

    import { ExampleComponent } from "./components/ExampleComponent.js";

    export const App = () => {
      return `
        ${LoginForm()}
      `;
    };
  </blockquote>
  
  or by calling from a parent component: 
  
 <blockquote>
  
    import { LabeledInput } from "./LabledInput.js";

    const LoginForm = () => {
      return `
        <form style="${style.mainForm}">
          ${LabeledInput("Email:", "email", true)}
          ${LabeledInput("Password:", "password", true)}
          <button type="submit">Submit</button>
        </form>
      `;
    };

    export { LoginForm };
  </blockquote>
  
  ### Adding CSS
  
  CSS can be added in multiple ways in addition the styles.css file located in the public directory you can also create CSS by importing a CSS file directly into your component like is done in [this example](https://github.com/Quinten97/TinyComponents/blob/main/components/LabledInput.js)
  
  Another way to add CSS is to pass your CSS directly to your html from within the same component file such as is done in [This Example](https://github.com/Quinten97/TinyComponents/blob/main/components/LoginForm.js)
  
  The bundler we are using can also be configurated to leverage more complex solutions to CSS you can read more by visiting [Parcels](https://parceljs.org/languages/css/) documentation
  

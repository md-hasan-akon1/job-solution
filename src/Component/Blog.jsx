import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Blog = () => {
    return (
        <div >
            <h1 className='text-3xl font-bold text-center my-4'>Question</h1>
            <div  data-aos="fade-up-right" className='border p-4 rounded my-4 shadow-lg shadow-slate-500 bg-slate-200' >
                <h1 className='text-3xl font-bold'>a. When should you use context API?</h1>
                <p className='text-2xl'><span className='font-bold'>Answer :-</span>The Context API gives a dependency injection system based on our component tree. This wasn’t possible in React before and it also integrates very well with function components and hooks.In situations where you have logic and configuration that needs to be accessed by multiple components but doesn’t interact with or depend on external modules.In this case, we can build multiple contexts that help to manage all of its internal events and configurations and they won’t be affected by any other instance of this widget . </p>
            </div>
            <div  data-aos="fade-up-right"  className='border p-4 rounded my-4 shadow-lg shadow-slate-500 bg-slate-200'>
            <h1 className='text-3xl font-bold'>  b. What is a custom hook?</h1>
        <p className='text-2xl'><span className='font-bold'>Answer :-</span> A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components:Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before. we can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. We can build Hooks that are just as easy to use as React’s built-in features.</p>
  </div>
            <div data-aos="fade-up-right" className='border p-4 rounded my-4 shadow-lg shadow-slate-500 bg-slate-200'>
            <h1 className='text-3xl font-bold'>c. What is useRef?</h1>
            <p className='text-2xl'> <span className='font-bold'>Answer :-</span> The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef. The object can persist a value for a full lifetime of the component.  </p>
            </div>
            <div   data-aos="fade-up-right" className='border p-4 rounded my-4 shadow-lg shadow-slate-500 bg-slate-200'>
            <h1 className='text-3xl font-bold'>c. What is useMemo?</h1>
                <p className='text-2xl'> <span className='font-bold'>Answer :-</span>useMemo in React is essential react hook for improving the performance and speed of your application by caching the output in the computer memory and returning it when the same input is given again. The React useMemo hook performs some calculations when requested and caches the result in the computer memory. Whenever the React memo hooks are asked to perform another operation with the same value, the old result will be returned without needing to waste computer resources calculating all over again.</p>
            </div>


        </div>
    );
};
AOS.init();
export default Blog;
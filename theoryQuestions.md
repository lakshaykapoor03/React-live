## What is Emmet ?
Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time.

##  Difference between a Library and Framework?
Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
A library is a piece of code that we can incorporate in our exixsting project via a CDN or as a package. A liberary does not affect our project structure. whereas a framework is a structured set of librraries and packages implementing a perticular methodology that we have to follow to create a project.

## What is CDN? Why do we use it?
CDN is known as Content Delivery Network, is a group of geographically distributed and interconnected servers.CDN provides us different type of assets / features / libraries created by others over the internet. Using a CND reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via CND.

 ## Why is React known as React?

React is named React because of its ability to react to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create performant user interfaces that always look up-to-date.

## What is crossorigin?
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

 (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

 simple words- crossorigin basically a request that helps to get and share resources such as style sheets, iframes, images, fonts, or scripts) from another domain.

## What is diference between React and ReactDOM
 React:
React is a open-source JS library. to develop UI (User Interface) on web application or site. Its fully component base. this is core library of react.

React Dom:
React DOM is the glue between React and the DOM. When u want to show your react component on DOM u need to use this ReactDOM.render(); from React Dom. it gives us access to Document object model which helps to render code on browser. 

Before v0.14 React Dom was part of ReactJs. The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.

## What is the difference between development build and production build?
The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds. The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.



Key differences between Hot reloading and Live reloading:

Hot Reloading

The idea behind hot reloading is to keep the app running and to inject new versions of the files that you edited at runtime. 
This way, you don’t lose any of your state which is especially useful if you are making the UI changes.

Live Reloading
Live reloading will reload the whole app and completely reinitialize the state.
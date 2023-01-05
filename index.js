// const heading= document.createElement("h1")
// heading.innerHTML="This is a Heading"

// const root= document.getElementById("root")
// root.appendChild(heading)

const heading= React.createElement("h1",{},"This is a heading")

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)





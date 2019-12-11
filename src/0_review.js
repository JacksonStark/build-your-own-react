// JSX WAY

// import React from 'react'
// import ReactDOM from 'react-dom'

// const element2 = <h1 title="foo">Hello</h1>
// const container2 = document.getElementById("root")
// ReactDOM.render(element2, container2)



// VANILLA JS WAY
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}

const container = document.getElementById("root")

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text) // append inner text to h1
container.appendChild(node) // and h1 to container




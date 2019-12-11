// JSX WAY

// import React from 'react'
// import ReactDOM from 'react-dom'

// const element2 = (
//   <div id="foo">
//     <a href="null">bar</a>
//     <b />
//   </div>
// )

// const container2 = document.getElementById("root")
// ReactDOM.render(element2, container2)



// VANILLA JS WAY

function createElement(type, props, ...children) {
  return {
    type, 
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    }
  }
}

const Didact = {
  createElement,
}

/** @jsx Didact.createElement */

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

// const element = Didact.createElement(
//   "div",
//   { id: "foo" },
//   Didact.createElement("a", null, "bar"),
//   Didact.createElement("b")
// )
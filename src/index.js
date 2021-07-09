import React from "react"
import ReactDOM from "react-dom"
import CardList from "./CardList"
import { robots } from "./robots"

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById("root")
)

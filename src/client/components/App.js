import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import socketIOClient from "socket.io-client";

import { setConfig } from "react-hot-loader"; //to remove

setConfig({
  reloadHooks: false
});

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       endpoint: "localhost:4001",

//       ///
//       color: "white"
//       ///
//     };
//   }

//   // sending sockets
//   send = () => {
//     const socket = socketIOClient(this.state.endpoint);
//     socket.emit("change color", this.state.color); // change 'red' to this.state.color
//   };
//   ///

//   // adding the function
//   setColor = color => {
//     this.setState({ color });
//   };

//   componentDidMount = () => {
//     const socket = socketIOClient(this.state.endpoint);
//     setInterval(this.send(), 1000);
//     socket.on("change color", col => {
//       document.body.style.backgroundColor = col;
//     });
//   };

//   render() {
//     // testing for socket connections

//     const socket = socketIOClient(this.state.endpoint);

//     return (
//       <div style={{ textAlign: "center" }}>
//         <button onClick={() => this.send()}>Change Color</button>

//         <button id="blue" onClick={() => this.setColor("blue")}>
//           Blue
//         </button>
//         <button id="red" onClick={() => this.setColor("red")}>
//           Red
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

function App() {
  const socket = socketIOClient("localhost:4001");
  return (
    <div>
      <Header />
      <Router hashType="noslash">
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default hot(module)(App);

import React, { Component } from 'react';
// import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends Component {
  render(){
    return(
      <div>
        {/* <Header>wkwkw</Header> */}
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul ='Halaman footer' nama='Thalib' />
      </div>
    );
  }
}
export default App
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



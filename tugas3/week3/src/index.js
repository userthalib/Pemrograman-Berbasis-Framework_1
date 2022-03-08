import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponents from './Component/HelloComponents.css';
import HelloComponent from './Component/HelloComponent.jsx';



// function HelloComponent() {
//   return HelloComponent
// }

class StateFullComponent extends React.Component {
  render() {
    return <p>StateFullComponent</p>

  }
}

ReactDOM.render(
    <HelloComponent />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

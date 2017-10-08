import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import keenImage from '../assets/keen.png';

class HelloMessage extends React.Component {
  render () {
    return (
      <div>
        Hello {this.props.name} to React!
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Jacob" />,
)

import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import keenImage from '../assets/keen.png';


ReactDOM.render(
  <div>
		Hello from React
		{ }
		<img src={keenImage} alt='keen commander' />
	</div>,
  document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text = 'Hello, World!';

const elem = (
    <div>
        <h2 className="text">Text: {text}</h2>
        <input type="text" />
        <label htmlFor=''>Label</label>
        <button tabIndex="0">Click</button>
    </div>
);

// const elem = React.createElement('h2', { className: 'greetings' }, 'Hello, World!');

// const element = {
//     type: 'h2',
//     props: {
//         className: 'greetings',
//         children: 'Hello, World!'
//     }
// }

ReactDOM.render(
    elem,
    document.getElementById('root')
);
    

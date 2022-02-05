import {Component, StrictMode} from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
    return <h2>Hello, World!</h2>
}

// const Field = () => {
//     const holder = "Enter here";
//     const styledField = {
//         width: '300px'
//     }
//     return <input 
//             placeholder={holder} 
//             type='text' 
//             style={styledField}/>
// }

class Field extends Component {
    render() {
        const holder = "Enter here";
        const styledField = {
            width: '300px'
        }

        return <input 
                placeholder={holder} 
                type='text' 
                style={styledField}/>
        }
}

//class component with states
class WhoAmI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            years: 27,
            text: '+++'
        }
    }

    nextYear = () => {
        console.log('+++');
        this.setState(state => ({ //use setState with callback function because setState is async function
            years: state.years + 1
        }));
    }

    render() {

        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name.firstName}, surname - {surname()}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
   
}

function App() {
  return (
    <div className="App">
        <WhoAmI name={{firstName: 'John'}} surname={() => {return 'Smith'}} link="https://facebook.com"/>
        <WhoAmI name={{firstName: 'Alex'}} surname={() => {return 'Shepard'}} link="https://instagram.com"/>
    </div>
  );
}

export {Header};
export default App;

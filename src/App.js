import { Component, StrictMode, Fragment } from 'react';
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
            text: '+++',
            position: ''
        }

        // this.nextYear = this.nextYear.bind(this); // 1st way to use standard class methods in react 
    }


    //standard class method
    // nextYear() {
    //     this.setState(state => ({ //use setState with callback function because setState is async function
    //         years: state.years + 1
    //     }));
    // }

    //preferable to use arrow functions
    nextYear = () => {
        this.setState(state => ({ //use setState with callback function because setState is async function
            years: state.years + 1
        }));
    }

    commitInputChanges = (e, color) => { 
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    //empty tag <></> can also be used instead of <Fragment></Fragment>

    render() {

        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <Fragment>
                <button onClick={this.nextYear}>{this.state.text}</button>
                {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> 2nd way to use standard class functions */}
                <h1>My name is {name.firstName}, surname - {surname()}, 
                    age - {years}, 
                    position - {position}</h1>
                <a href={link}>My profile</a>

                <form>
                    <span>Fill in a position</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/> {/* the way to pass arguments */}
                </form>
            </Fragment>
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

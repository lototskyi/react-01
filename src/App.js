import React, { Component, StrictMode, Fragment } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';
import logo from './logo.svg';
import './App.css';

// const Header = () => {
//     return <h2>Hello, World!</h2>
// }

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

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
            <EmpItem active>
                <Button onClick={this.nextYear}>{this.state.text}</Button>
                {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> 2nd way to use standard class functions */}
                <Header>My name is {name.firstName}, surname - {surname()}, 
                    age - {years}, 
                    position - {position}</Header>
                <a href={link}>My profile</a>

                <form>
                    <span>Fill in a position</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/> {/* the way to pass arguments */}
                </form>
            </EmpItem>
        )
    }
   
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'});
                })
            }
        </div>
    );
}

const Message = (props) => {
    return (
        <h2>The counter is {props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }

    render() {
        return (
            <>
                <button 
                    className={'btn btn-primary'}
                    onClick={this.changeCounter}>
                    Click me
                </button>
                {this.props.render(this.state.counter)}
            </>
        )
    }
}

function App() {
  return (
    <Wrapper>
        <Counter render={counter => (
            <Message counter={counter} />
        )} />

        <BootstrapTest
            left = {
                <DynamicGreating color={'primary'}>
                    <h2>This weel was hard</h2>
                    <h2>Hello world</h2>
                </DynamicGreating>
            }
            right = {
                <DynamicGreating color={'primary'}>
                    <h2>RIGHT</h2>
                </DynamicGreating>
            }
        />

        <WhoAmI name={{firstName: 'John'}} surname={() => {return 'Smith'}} link="https://facebook.com"/>
        <WhoAmI name={{firstName: 'Alex'}} surname={() => {return 'Shepard'}} link="https://instagram.com"/>
    </Wrapper>
  );
}

export {Header};
export default App;

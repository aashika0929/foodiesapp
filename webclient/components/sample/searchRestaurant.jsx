import React from 'react';
import ReactDOM from 'react-dom';
let ChildComponent1 = require('./displayRestaurants.jsx');
import {Button, Input} from 'semantic-ui-react';

var itemstyle1 = {
   marginLeft: '400px'
   
};


class Component1 extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: ''
        };
        this.state = {
            cuisine: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }
    handleSubmit() {
        this.props.search(this.state.cityName, this.state.cuisine)
    }
    render() {
        return (
            <div style={itemstyle1}>

                <Input type='text' value={this.state.cityName} name='cityName' onChange={this.handleChange} placeholder='Enter city name'/>

                <Input type='text' value={this.state.cuisine} name='cuisine' onChange={this.handleChange} placeholder='Enter cuisine'/>
                   <Button type='submit' color='teal' value='submit' onClick={this.handleSubmit.bind(this)}>SEARCH</Button>
            </div>
        );
    }
 }
module.exports = Component1;

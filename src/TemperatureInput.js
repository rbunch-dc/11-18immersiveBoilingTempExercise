import React, { Component } from 'react';

class TemperatureInput extends Component{
    // constructor(){
        // super()
        // this.state = {
        //     temperature: 80,
        //     msg: ""
        // }
        // this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(event){
    //     console.log(event.target.value);

    // }

    render(){
        return(
            <div>
                {/* <h1>{this.state.msg}</h1> */}
                <legend>Scale: </legend>
                <input onChange={this.props.onChange} value={this.props.temperature} />
            </div>
        )
    }
}

export default TemperatureInput
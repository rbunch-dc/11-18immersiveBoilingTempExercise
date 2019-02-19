import React, {Component} from 'react';

import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

class TemperatureApp extends Component{
    constructor(){
        super();
        this.state = {
            temperature: 18,
            scale: 'c'
        }
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    }

    handleCelsiusChange(value){        
        console.log("Someone changed teh Celsius input box to " +value);
        if(value.target.value.match(/^\d*$/)){      
            this.setState({
                temperature: value.target.value,
                scale: "c"
            })
        }
    }

    handleFahrenheitChange(value){
        console.log("Someone changed the Fahrenheit to " + value);
        if(value.target.value.match(/^\d*$/)){
            this.setState({
                temperature: value.target.value,
                scale: "f"
            })
        }        
    }

    render(){
        const scale = this.state.scale;
        const temp = this.state.temperature;
        let fTemp = '';
        let cTemp = '';
        if(scale === 'c'){
            // convert the celcius to f
            fTemp = Math.round((temp * 9 / 5) + 32);
            // no need to convert to c. it's already c.
            cTemp = temp;
        }else if(scale === 'f'){
            fTemp = temp;
            cTemp = Math.round((temp - 32) * 5 / 9);
        }

        return(
            <div id="temp-app">
                <TemperatureInput scale="f" temperature={fTemp} onChange={this.handleFahrenheitChange}/>
                <TemperatureInput scale="c" temperature={cTemp} onChange={this.handleCelsiusChange}/>
                <BoilingVerdict temperature={cTemp}/>
            </div>
        )
    }
}

export default TemperatureApp;
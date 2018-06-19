import React, { Component } from 'react';
import './temperature.css';

class Temperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp:this.props.temperatureInfo.temperatureIncelsius
        }
        this.changeTemp=this.changeTemp.bind(this);
        this.changeIntoFahrenheit=this.changeIntoFahrenheit.bind(this);
    }
    changeIntoFahrenheit(){
        this.setState({
        temp:this.props.temperatureInfo.temperatureInFahrenheit
        })
    }
    changeTemp(){
        this.setState({
            temp:this.props.temperatureInfo.temperatureIncelsius
        })
    }
    render() {
        return (
            <div class="banner-left">
                <div class="column1">
                    <img src={this.props.temperatureInfo.imageURL}></img>
                </div>
                <div class="column2" id="temp-disp">
                    <div class="col2_1">
                    <span id="t1">{this.state.temp}</span>
                           
                    </div>
                    <div class="col2_2">
                        <a className="buttons" onClick={this.changeTemp}>C</a>|
                <a className="buttons" onClick={this.changeIntoFahrenheit}>F</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Temperature;

import React, { Component } from 'react';

function Tpw(props){ 
        return (
            <div class="banner-right">
                <div class="row1">
                    <div class="pressure"> Pressure:{props.tpwInfo.Pressure}Hg</div>
                    <div class="humidity"> Humidity:{props.tpwInfo.Humidity} %</div>
                    <div class="wind"> Wind:{props.tpwInfo.Wind}kmph</div>
                </div>
                <div class="row2">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">Temperature</button>
                        <button type="button" class="btn btn-primary">Pressure</button>
                        <button type="button" class="btn btn-primary">Wind</button>
                    </div>
                </div>
            </div>
        );
}

export default Tpw;

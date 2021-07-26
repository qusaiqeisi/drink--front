import axios from 'axios';
import React, { Component } from 'react'
import FaverDrink from './FaverDrink'

export class DrinkCard extends Component {
    constructor(props){
        super(props);
        this.state={
            REACT_APP_SERVER:process.env.REACT_APP_SERVER,
            allFavDrink:[],
            showStatus:false
        }
    }

    componentDidMount=async()=>{
        let allFavDrink = await axios.get(`${this.state.REACT_APP_SERVER}/drinkFav`)
        this.setState({
            allFavDrink:allFavDrink.data,
            showStatus:true
        })
    }
    render() {
        return (
            <div>
                {this.state.showStatus && (
                    <FaverDrink allFavDrink={this.state.allFavDrink} ></FaverDrink>
                )}
            </div>
        )
    }
}

export default DrinkCard

import axios from 'axios';
import React, { Component } from 'react'
import DrinkCard from './DrinkCard'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            REACT_APP_SERVER:process.env.REACT_APP_SERVER,
            allDrink:[],
            showStatus:false
        }
    }

    componentDidMount=async (item)=>{
        let allDrink= await axios.get(`${this.state.REACT_APP_SERVER}/show`)
        this.setState({
            allDrink:allDrink.data,
            showStatus:true
        })
    }
    render() {
        return (
            <div>
                {this.state.showStatus && (
                    <DrinkCard allDrink={this.state.allDrink}></DrinkCard>
                )}
            </div>
        )
    }
}
export default Main

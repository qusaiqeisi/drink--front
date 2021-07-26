import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

export class DrinkCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            REACT_APP_SERVER: process.env.REACT_APP_SERVER,
        }
    }

    addFavDrink = async (item) => {
        let favDrink = item;
        await axios.post(`${this.state.REACT_APP_SERVER}/addFav`, favDrink)
    }
    render() {
        return (
            <div>
                {
                    this.props.allDrink.map((item, index) => {
                        return (
                            <Card style={{ width: '18rem', display: 'inline-block' }}>
                                <Card.Img variant="top" src={item.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>
                                    <Card.Text>
                                        {item.idDrink}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { this.addFavDrink(item) }}>add to fav</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default DrinkCard

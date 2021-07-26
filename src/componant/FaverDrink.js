import axios from 'axios';
import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm'

export class FaverDrink extends Component {
    constructor(props){
        super(props);
        this.state={
            REACT_APP_SERVER: process.env.REACT_APP_SERVER,
            allFavDrink:this.props.allFavDrink,
            id:'',
            strDrink:'',
            strDrinkThumb:'',
            idDrink:'',
            showstatus:false
        }
    }

    // ...............delete
    deleteFavDrink=async(item)=>{
        let id = item._id;
        let dataAfterDelete = await axios.delete(`${this.state.REACT_APP_SERVER}/showDelete/${id}`)
        this.setState({
            allFavDrink: dataAfterDelete.data 
        })
    }

//........................... sohw
showForm=(item)=>{
    this.setState({
        id:item._id,
        strDrink:item.strDrink,
        strDrinkThumb:item.strDrinkThumb,
        idDrink:item.idDrink,
        showstatus:true

    })
}
// .......................onchange
onChangeName=(e)=>{
    this.setState({
        strDrink:e.target.value 
    })
}

onChangeImg=(e)=>{
    this.setState({
        strDrinkThumb:e.target.value 
    })
}

onChangeNumber=(e)=>{
    this.setState({
        idDrink:e.target.value 
    })
}

// ..................... update

updateFavDrink= async (e)=>{
    e.preventDefault();
    let updateData = {
        strDrink:this.state.strDrink,
        strDrinkThumb:this.state.strDrinkThumb,
        idDrink:this.state.strDrink
    }

    let updateFavData = await axios.put(`${this.state.REACT_APP_SERVER}/showupdate/${this.state.id}`,updateData)

    this.setState({
        allFavDrink:updateFavData.data,
        showstatus:false
    })
}


    render() {
        return (
            <div>
                {
                    this.state.showstatus && (
                        <UpdateForm 
                        updateFavDrink={this.updateFavDrink}
                        onChangeName={this.onChangeName}
                        onChangeImg={this.onChangeImg}
                        onChangeNumber={this.onChangeNumber}
                        strDrink={this.state.strDrink}
                        strDrinkThumb={this.state.strDrinkThumb}
                        idDrink={this.state.idDrink}
                        ></UpdateForm>
                    )
                }

                {
                    this.state.allFavDrink.map((item,index)=>{
                        return(
                            <Card style={{ width: '18rem'  , display:'inline-block'}} >
                                <Card.Img variant="top" src={item.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>
                                    <Card.Text>
                                        {item.idDrink}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { this.deleteFavDrink(item) }}>delete from fav</Button>
                                    <Button variant="primary" onClick={() => { this.showForm(item) }}>show to fav</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default FaverDrink

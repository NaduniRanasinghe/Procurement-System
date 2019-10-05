import React, { Component } from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import const1 from '../assets/img/construction1.jpg';
import const2 from '../assets/img/construction2.jpg';
import const3 from '../assets/img/construction3.jpg';



class Cards extends Component{
render(){
    return(


<CardDeck>
    <Card>
        <Card.Img variant="top" src={const1} />
        <Card.Body>
            <Card.Title>Borella Luxury Apartments</Card.Title>
            <Card.Text>

            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"></small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src={const2} />
        <Card.Body>
            <Card.Title>Condominium at Battaramulla</Card.Title>
            <Card.Text>

            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"></small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src={const3} />
        <Card.Body>
            <Card.Title>7 Star Hotel at Galle</Card.Title>
            <Card.Text>

            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"></small>
        </Card.Footer>
    </Card>
</CardDeck>

)
}
}
export default Cards;
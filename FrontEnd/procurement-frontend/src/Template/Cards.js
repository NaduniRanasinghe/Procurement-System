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
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src={const2} />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
    <Card>
        <Card.Img variant="top" src={const3} />
        <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
</CardDeck>

)
}
}
export default Cards;
import Carousel from "react-bootstrap/Carousel";
import Building1 from '../assets/img/building.jpg';
import Building2 from '../assets/img/building1.jpg';
import Building3 from '../assets/img/building2.jpg';
import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";


class Carousel1 extends Component {
    render() {
        return (

<div>
            <Carousel>
                <Carousel.Item>
                    {/*<Jumbotron>*/}

                    {/*    <h1>Hello, world!</h1>*/}
                    {/*    <p>*/}
                    {/*        This is a simple hero unit, a simple jumbotron-style component for calling*/}
                    {/*        extra attention to featured content or information.*/}
                    {/*    </p>*/}
                    {/*    <p>*/}
                    {/*        <Button variant="primary">Learn more</Button>*/}
                    {/*    </p>*/}
                    {/*</Jumbotron>*/}

                    <img
                        className="d-block w-100"
                        src={Building1}

                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Building2}

                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Building3}

                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
</div>
        )
    }
}

export default Carousel1;
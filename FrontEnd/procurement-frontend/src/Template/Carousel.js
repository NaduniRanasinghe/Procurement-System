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
                        <h3>Committed to superior quality and results</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Building2}

                    />

                    <Carousel.Caption>
                        <h3>Attractive Architecture</h3>
                        <p>.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Building3}

                    />

                    <Carousel.Caption>
                        <h3>Always dedicated and devoted</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
</div>
        )
    }
}

export default Carousel1;
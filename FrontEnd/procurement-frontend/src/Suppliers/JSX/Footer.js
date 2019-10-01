import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className="fo" >
                <Card className="text-center" bg="secondary" text="white">

                    <Card.Body>
                        <Card.Text>
                            MAGA ENGINEERING - the saga of quality engineering
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>&copy; {new Date().getFullYear()} Copyright: Team NOVA</Card.Footer>
                </Card>
            </div>
        );
    }


}
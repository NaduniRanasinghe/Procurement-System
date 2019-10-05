import React, { Component } from 'react';
import axios from 'axios';

class CreditNoteView extends Component {
    constructor() {
        super()
        this.state = {
            creditNote: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8090/creditNoteItems').then(
            data => {
                this.setState({
                    creditNote: data.data
                });
            }
        )
    }

    render() {
        return (
            <div className="container" style={{marginTop:'50px'}}>

                <h1>CreditNote View</h1>
                <br>
                </br>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>RETURN CREDIT ID</th>
                        <th>CREDIT NOTE</th>
                    </thead>
                    <tbody>
                        {
                            this.state.creditNote.map( credit=> {
                                return (
                                    <tr key={credit.creditNoteId}>
                                        <td>{credit.creditNoteId}</td>
                                        <td>{credit.returnGoodID}</td>
                                        <td>{credit.creditnote}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default CreditNoteView
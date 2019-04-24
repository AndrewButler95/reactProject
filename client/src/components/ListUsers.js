import React, { Component } from 'react';
import axios from 'axios';
import '../css/ListUsers.css';

class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected : 0
        };
        this.hightlightRow = this.hightlightRow.bind(this);
    }

    hightlightRow(selected) {
        this.setState(state => ({
           selected : selected
        }));
      }

    componentDidMount() {
        axios.get('http://localhost:5000/getAllUsers')
            .then((result) => {
                let arraydata = []
                for (let i in result.data) {
                    arraydata.push(result.data[i].name)
                }
                this.setState({
                    data: arraydata
                })
            }
            )
    }


    render() {
        let renderArray = [];
        for (let i = 0; i < this.state.data.length; i++) {
            renderArray.push(<tr key={"id" + i}><td className={this.state.selected === i ? 'active': 'test'}  onClick={() => this.hightlightRow(i)}>{this.state.data[i]}</td></tr>)
        }
        return (
            <div className="userData">
                <table>
                    <tbody>
                    <tr><th>Name</th></tr>
                    {renderArray}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default ListUsers;
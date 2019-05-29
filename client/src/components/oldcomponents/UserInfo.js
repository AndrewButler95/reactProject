import React, { Component } from 'react';
import axios from 'axios';
import '../css/UserInfo.css';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/getUserInfo')
            .then((result) => {
                let arraydata = []
                for(let i in result.data){ 
                    arraydata.push(i + " : " + result.data[i])
                }
                this.setState({
                    data: arraydata
                })
            }
            )
    }


    render() {
        let renderArray = [];
        for(let i=0; i<this.state.data.length; i++){
            renderArray.push(<div className="test" key={"ids" + i}>{this.state.data[i]}</div>)
        }
        return (
            <div className="userData">  
                    {renderArray}
            </div>
        );
    }
}

export default UserInfo;

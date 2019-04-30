import React, { Component } from 'react';
import axios from 'axios';
import '../css/MatchHistory.css';
import MyButton from './MyButton';

class MatchHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
               
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getUserHistory')
            .then((result) => {
                let arraydata = []
                let test = JSON.parse(result.data.body)
                this.setState({
                    data: test
                })
            }
            )
    }


    render() {
        if(this.state.data.matches != undefined){
        let renderArray = [];
        let headers = Object.keys(this.state.data.matches[0]);
        for (let i = 0; i < this.state.data.matches.length; i++) {
            let temparray = [];
            Object.keys(this.state.data.matches[i]).map(function(key) {
                console.log(key)
                console.log(this.state.data.matches[i])
                temparray.push(<div>{ this.state.data.matches[i][key] }</div>)
             }.bind(this))
             renderArray.push(temparray)
        }
      
         
        console.log(renderArray)
        return (
            <div className="userData">  
data       {headers}
           {renderArray}
    </div>
        );
        }
        else { return <div></div>}
    }
}

export default MatchHistory;
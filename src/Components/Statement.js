import React from 'react'
import { yes, no } from '../objects.js'


class Statement extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            word: "no",
            statement: no["no-statement"],
            image: no["no-image"]
        }
    }

    handleClick = () => {
        if (this.state.word === "no") {
            this.setState({
                word: "yes",
                statement: yes["yes-statement"],
                image: yes["yes-image"]
            }) 
        } else {
            this.setState({
                word: "no",
                statement: no["no-statement"],
                image: no["no-image"]
            })
        }
    }

    render() {
        return (
        <div style={{textAlign: "center"}}>
            <h1>{this.state.statement}</h1>
            <img onClick={this.handleClick} src={this.state.image} alt={this.state.statement}/>
        </div>
        )
    }
}

export default Statement
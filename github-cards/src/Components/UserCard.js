import React from "react"

import axios from "axios"
import styled from "styled-components"


const User = styled.div`
display: flex;
border: 1px solid black
flex-direction: column;
align-items: center;
`

const Followers = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`

class UserCard extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/daltonwalkerdw')
            .then(result => {
                console.log(result)
                this.setState({
                    data: result.data
                })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            
            <User>
                <h2>{this.state.data.name}</h2>
                <a>link: {this.state.data.html_url}</a>
                <p>Location: {this.state.data.location}</p>
                <p>Bio: {this.state.data.bio}</p>
              <Followers>
                <p>Followers: {this.state.data.followers}</p>
                <p>Following: {this.state.data.following}</p>
              </Followers>
            </User>
        )
    }
}

export default UserCard
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

class FollowerCards extends React.Component {
    constructor() {
        super()
        this.state = {
            p1: [],
        }
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/daltonwalkerdw/followers')
            .then(result => {
                
                this.setState({
                    p1: result.data
                })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
         <div>
          {this.state.p1.map(followers=> {
              return(
                  <p>{followers.login}</p>
              )
          
          })}
         </div>
        )
    }
}

export default FollowerCards
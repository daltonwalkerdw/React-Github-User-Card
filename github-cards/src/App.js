import React from 'react';

import './App.css';
import axios from "axios"
import styled from "styled-components"
import FollowerCards from "./Components/FollowerCards"
import UserCard from "./Components/UserCard"
const User = styled.div`
display: flex;
border: 1px solid black
`

const FollowerFlex = styled.div`
display: flex;
`

class App extends React.Component {
 constructor(){
   super()
   this.state = ''
 }

  render(){
    return (
    <div>
      <h1>Github-Cards</h1>
      <UserCard />
      <h2>Followers</h2>
      <FollowerFlex>
        <FollowerCards />
      </FollowerFlex>
    </div>
    )
  }
}

export default App;

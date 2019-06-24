import React, { Component } from 'react';
import Coin from './Coin'
import { Button } from 'reactstrap'

class Manager extends Component{
  static defaultProps = {
    heads: "https://tinyurl.com/react-coin-heads-jpg",
    tails: "https://tinyurl.com/react-coin-tails-jpg"
  }

  state={
    side: null,
    numberFlips: 0,
    timesHead: 0,
    timesTail: 0
  }

  generateSide=()=>{
    var side = Math.round(Math.random())
    this.setState(curState => ({
      side: side === 0 ? this.props.heads : this.props.tails,
      numberFlips: curState.numberFlips + 1,
      timesHead:  side === 0 ? (curState.timesHead + 1) : curState.timesHead,
      timesTail:  side === 1 ? (curState.timesTail + 1): curState.timesTail
    }))
  }

  handleClick=()=>{
    this.generateSide()
  }

  render(){
    return(
      <div>
        <h2>Let's flip a coin</h2>
        {this.state.side ? <Coin coinSide={this.state.side} /> : ""}
        <br />
        <Button onClick={this.handleClick}>Flip It</Button>
        <h3>The Coin has been flipped {this.state.numberFlips}.</h3>
        <h3>We have gotten heads {this.state.timesHead} times and have gotten tails {this.state.timesTail} times.</h3>
      </div>
    )
  }
}

export default Manager;

import React, { Component } from 'react';
import Coin from './Coin'
import styled from 'styled-components'

const Button = styled.button`
  text-align: center;
  font-weight: bold;
  font-size: 1em;
  border-radius: 10%;
`

class Manager extends Component{
  static defaultProps = {
    heads: {url:"https://tinyurl.com/react-coin-heads-jpg", alt: "heads"},
    tails: {url:"https://tinyurl.com/react-coin-tails-jpg", alt: "tails"}
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

  handleClick=(e)=>{
    this.generateSide()
  }

  render(){
    return(
      <div>
        <h2>Let's flip a coin</h2>
        {this.state.side && <Coin coinSide={this.state.side} />}
        <br />
        <Button onClick={this.handleClick}>Flip It</Button>
        <h3>The Coin has been flipped {this.state.numberFlips} times.</h3>
        <h3>We have gotten heads {this.state.timesHead} times and have tails {this.state.timesTail} times.</h3>
        {this.state.numberFlips !== 0 ? <h4>Heads: {((this.state.timesHead/this.state.numberFlips)*100).toFixed()}% <br/> Tails: {((this.state.timesTail/this.state.numberFlips)*100).toFixed()}%</h4> : ""}

      </div>
    )
  }
}

export default Manager;

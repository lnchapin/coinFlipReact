import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height:100px;
`

const Coin = props =>{
  return(
    <>
      <Image src={props.coinSide}/>
    </>
  )
}

export default Coin;

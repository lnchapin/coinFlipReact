import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height:100px;
`

const Coin = props =>{
  return(
    <>
      <Image src={props.coinSide.url} alt={props.coinSide.alt}/>
    </>
  )
}

export default Coin;

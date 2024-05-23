import React from 'react'
import styled from 'styled-components'

const Button = ({children, onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 50px;
`;
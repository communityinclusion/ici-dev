import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: 100%;
  flex-grow: 1;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container

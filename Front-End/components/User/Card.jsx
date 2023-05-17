import React from 'react'
import Text from './Text';
import Container, { ContainerDefaultProps, ContainerSettings } from './Container';
import Button from './Button';
import { Element, useNode } from '@craftjs/core';

const CardTop = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Container)
  }
}

export { CardTop };

const CardBottom = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect}>
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    canMoveIn : (incomingNode) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
  }
}

export { CardBottom };
 
const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        <div className='text-only'>
          <Text text="Header" fontSize={25} />
          <Container background="#F1F1F1" padding={80}>
          </Container>
        </div>
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <div>
          <Container background="#F1F1F1" padding={100}>
          </Container>
          <Button size="small" variant="contained" color="primary" text="Learn More" >Learn More</Button>
          <Text></Text>
        </div>
      </Element>
    </Container>
  )
}

Card.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings
  }
}

export default Card


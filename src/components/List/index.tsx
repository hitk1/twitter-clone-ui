import React from 'react';

import { Container, Item, Title } from './styles';

interface Props {
    title: string
    elements: React.ReactNode[]
}

const List: React.FC<Props> = ({
    title,
    elements
}) => {
  return (
      <Container>
          <Item>
              <Title>{title}</Title>
          </Item>

          {elements.map((node, index) => (
              <Item key={index}>{node}</Item>
          ))}
      </Container>
  )
}

export default List;
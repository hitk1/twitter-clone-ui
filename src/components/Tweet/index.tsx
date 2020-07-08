import React from 'react';

import { 
    Container,
    Retweeded,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeded>
              <RocketseatIcon />
              Você retweetou
          </Retweeded>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Rockeseat</strong>
                      <span>@rockeseat</span>
                      <Dot />
                      <time>7 de julho</time>
                  </Header>

                  <Description>Foguete não tem ré</Description>

                  <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            150
                        </Status>
                        <Status>
                            <RetweetIcon />
                            100
                        </Status>
                        <Status>
                            <LikeIcon />
                            1509
                        </Status>
                    </Icons>
              </Content>
          </Body>
      </Container>
  )
}

export default Tweet;
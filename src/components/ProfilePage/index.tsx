import React from 'react';

import Feed from '../Feed'
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
          
              <EditButton outlined>Editar Perfil</EditButton>
              <h1>Luis Paulo</h1>
              <h2>@lpmdeg</h2>

              <p>
                  Developer at <a href="http://ciaintegrativa.com.br/">Cia Integrativa</a><br/>
                    Github <a href="https://github.com/hitk1">@Hitk1</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Pindorama, São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 17 de setembro de 1997.
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>100</strong>
                  </span>
                  <span>
                      <strong>100</strong> seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  )
}

export default ProfilePage;
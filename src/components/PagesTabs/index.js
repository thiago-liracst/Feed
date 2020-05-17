import React from 'react';

import {Container, TabsContainer, TabItem, Text} from './styles';
import Feed from '../../pages/Feed';

export default function Pages(){
    return(
        <Container>
            <TabsContainer >
                <TabItem>
                    <Feed />
                </TabItem>
                <TabItem>
                    <Text>Propostas</Text>
                </TabItem>
                <TabItem>
                    <Text>Perfil</Text>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}
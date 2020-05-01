import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {
    Container,
    Wrapper,
    Header,
    Balace,
    BalanceContainer,
    BalanceTitle,
} from './styles';

import Suggestions from '../../components/suggestions/index';
import Activities from '../../components/activities/index';
import Tips from '../../components/tips/index';
import Banner from '../../components/banner/index';

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons
                        name="qrcode-scan"
                        size={30}
                        color="#10c86e"
                    />
                    <BalanceContainer>
                        <BalanceTitle> Meu saldo:</BalanceTitle>
                        <Balace>R$ 0,00</Balace>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>
                <Suggestions />
                <Activities />
                <Tips />
                <Banner />
            </Container>
        </Wrapper>
    );
}

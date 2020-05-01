import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {
    Container,
    Header,
    Title,
    Card,
    CardBody,
    Cardfooter,
    CardHeader,
    Avatar,
    Description,
    Bold,
    UserName,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../assets/images/avatar.png';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@MelquiasRibeiro</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Melquias Ribeiro</UserName>
                </CardBody>
                <Cardfooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider />
                        <Feather name="lock" color="#fff" />
                        <Date>Há 2 anos</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons
                                name="comment-outline"
                                size={14}
                                color="#fff"
                            />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </Cardfooter>
            </Card>
        </Container>
    );
}

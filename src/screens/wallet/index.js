import React, { useState } from 'react';
import {
    Feather,
    MaterialCommunityIcons,
    FontAwesome,
    AntDesign,
} from '@expo/vector-icons';

import { Switch } from 'react-native';
import CreditCard from '../../assets/images/credit-card.png';

import {
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    Bold,
    BalanceContainer,
    Value,
    EyeButton,
    Info,
    Actions,
    Action,
    Label,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardDetailsTitle,
    CardDetailsInfo,
    Img,
    CardBody,
    AddContainer,
    AddLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketContainer,
} from './styles';

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleMoneyVisible() {
        setIsVisible((prevState) => !prevState);
    }

    function handleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }
    return (
        <Wrapper>
            <Header
                colors={
                    useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']
                }
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>
                        <EyeButton onPress={handleMoneyVisible}>
                            <Feather
                                name={isVisible ? 'eye' : 'eye-off'}
                                size={20}
                                color="#fff"
                            />
                        </EyeButton>
                    </BalanceContainer>
                    <Info>Seu saldo esta rendendo 100% do CDI</Info>
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons
                                name="cash"
                                color="#fff"
                                size={32}
                            />
                            <Label>Adicionar</Label>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" color="#fff" size={20} />
                            <Label>Sacar</Label>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>
            <UseBalance>
                <UseBalanceTitle>Usar saldo ao Pagar</UseBalanceTitle>

                <Switch value={useBalance} onValueChange={handleUseBalance} />
            </UseBalance>
            <PaymentMethods>
                <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardDetailsTitle>
                                Cadastre seu cartão de crédito
                            </CardDetailsTitle>
                            <CardDetailsInfo>
                                Cadastre seu cartão de crédito para poder fazer
                                pagamentos mesmo quando não tiver saldo no
                                PicPay.
                            </CardDetailsInfo>
                        </CardDetails>
                        <Img source={CreditCard} resizeMode="contain" />
                    </CardBody>
                    <AddContainer>
                        <AntDesign
                            name="pluscircleo"
                            size={30}
                            color="#0dd060"
                        />
                        <AddLabel>Adicionar Cartão de Credito</AddLabel>
                    </AddContainer>
                </Card>
                <UseTicketContainer>
                    <UseTicketButton>
                        <MaterialCommunityIcons
                            name="ticket-outline"
                            size={20}
                            color="#0dd060"
                        />
                        <UseTicketLabel>Usar código promocional</UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>
        </Wrapper>
    );
}

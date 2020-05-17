import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const Post = styled.View`

    background: #FFF;
    flex: 1;
    border-radius: 6px;
    height: 100%;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: #036;
`;

export const Header = styled.View`
    padding: 10px;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 10px;
`;

export const Name = styled.Text`
    color: #333;
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.Text`
    padding: 15px;
    line-height: 18px;
    font-size: 16px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999'
})`
    margin: 30px 0;
`;

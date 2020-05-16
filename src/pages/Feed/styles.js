import styled from 'styled-components';

export const Post = styled.View`
    margin-top: 90px;
    background: #FFF;
    flex: 1;
    border-radius: 6px;
    margin: 0 10px;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    margin-bottom: 5px;
`;

export const Header = styled.View`
    padding: 15px;
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

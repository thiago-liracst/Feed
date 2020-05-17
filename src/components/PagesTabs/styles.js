import styled from 'styled-components/native';
import {Animated } from 'react-native';

export const Container = styled(Animated.View)`
  height: 1000px;
  background: #036;
  
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false
})``;

export const TabItem = styled.View`
    width: 475px;
    height: 920px;
    background: #FFF;
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`;

export const Text = styled.Text`
    font-size: 27px;
    color: #999;
    margin-left: 20px;
`;
import React from 'react';
import {StatusBar} from 'react-native';

import Feed from './pages/Feed';
import Header from './components/Header';

export default function App(){
    return(
        <>
            <StatusBar barStyle="white-content" backgroundColor="#036" />
            <Header />
            <Feed />
        </>
    );
}

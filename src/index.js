import React from 'react';
import {StatusBar} from 'react-native';

import Header from './components/Header';
import PagesTabs from './components/PagesTabs';

export default function App(){
    return(
        <>
            <StatusBar barStyle="white-content" backgroundColor="#036" />
            <Header />
            <PagesTabs />
        </>
    );
}

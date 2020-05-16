import React from 'react';
import {StatusBar} from 'react-native';

import Feed from './pages/Feed';

export default function App(){
    return(
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <Feed />
        </>
    );
}

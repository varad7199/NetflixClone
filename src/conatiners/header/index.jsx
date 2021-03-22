import React from 'react';
import {Header} from '../../components';

export function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo src="/images/icons/Logo.png" alt="Logo"/>
                <Header.Button >
                    Sign in
                </Header.Button >
            </Header.Frame>
            {children}
        </Header>
    )
}
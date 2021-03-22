import React from 'react';
import {Link as  ReactRouterLink} from 'react-router-dom';
import {Background, Frame, Logo, Button} from './styles';
export default function Header({bg=true, children, ...restProps}){
    return bg? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame= function HeaderFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>;
}

Header.Logo= function HeaderLogo({to, ...restProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
}

Header.Button= function HeaderButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>;
}


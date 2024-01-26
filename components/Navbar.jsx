import React from 'react'
import { Logo } from './Logo'
import { NavbarWrapper,NavLinkWrapper,StyledNavLink } from '../styles/Navbar.styled'

export const Navbar = () => {
    const link=[
        {page:"Home",href:"/"},
        {page:"About",href:"/about"},
        {page:"Blog",href:"/blog"},
        {page:"Services",href:"/services"},
        {page:"Sign Up",href:"/sign-up"}
    ]
  return (
    <NavbarWrapper>
        <Logo/>
        <NavLinkWrapper>
            {link.map((link)=>(
                <StyledNavLink key={link.page} to={link.href}>{link.page}</StyledNavLink>
            ))}
        </NavLinkWrapper>
    </NavbarWrapper>
  )
}

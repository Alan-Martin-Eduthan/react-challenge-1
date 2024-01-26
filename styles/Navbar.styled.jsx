import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LogoImg=styled.img`
 width:150px;
`;

const NavbarWrapper=styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
background:black;
padding:1rem 3rem;
position:relative;
`;

const NavLinkWrapper=styled.div``;

const StyledNavLink=styled(NavLink)`
color:white;
text-decoration:none;
margin-left:2rem;
&:last-child{
    background:blue;
    padding:0.5rem 1rem;
    border-radius:30px;
}
`;

export {LogoImg,NavbarWrapper,NavLinkWrapper,StyledNavLink}
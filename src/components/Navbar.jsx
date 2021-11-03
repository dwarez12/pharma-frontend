import React from 'react'
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font.weight: bold;
    font-size: 40px;
`
const MenuItem =  styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{color:"gray", fontSize:16}}></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>PharmaHealth</Logo></Center>
                <Right>
                    <Link to = "/">
                    <MenuItem>HOME</MenuItem>
                    </Link>
                    <Link to = "/register">
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to = "/login">
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to ="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingBasketOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;

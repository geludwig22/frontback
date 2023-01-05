import { Facebook, Instagram, Phone, Room } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex; 
    ${mobile({ flexDirection: "column" })}
`;
const Left= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    diplay: flex;
`;

const SocialIcon  = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: whit;
    background-color: #${(props)=>props.color}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;

`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px; 
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-item: center;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Negocio.</Logo>
            <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, rerum itaque! Enim suscipit rem obcaecati at repudiandae culpa voluptatum quos magnam, ratione numquam soluta quibusdam commodi quisquam, animi ad beatae.
            </Description>
            <SocialContainer>
                <SocialIcon color="blue"> 
                   <Facebook/> 
                </SocialIcon >
                <SocialIcon color="red">
                   <Instagram/> 
                </SocialIcon >
            </SocialContainer>
        </Left>
        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}} />
                1553 Av. South Humpton 4568
            </ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}}/>
                +54 351 1111111
            </ContactItem>
            <ContactItem>
                @Pereyera Vega - Dev
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
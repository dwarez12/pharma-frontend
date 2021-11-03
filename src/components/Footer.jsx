import {
    InstagramIcon,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    TwitterIcon,
  } from "@mui/icons-material/";

  import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
  import styled from "styled-components";
  
  
  const Container = styled.div`
    display: flex;
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
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
    flex: 1;
    padding: 20px;

  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>PharmaHealth</Logo>
          <Desc>
          Pharma Health is created to facilitate your purchases of medical equipment online. 
          It is designed to respond to your query as quick as possible and the products being sold to you will be efficiently and instantly be at your place. 
          Our Goal is to make you have an amazing experience with this website. 
          This site provides wide range of medical equipment that you will need, do your search and have all equipment that you need. Payment will be made using Stripe.
          </Desc>
          <SocialContainer>
          </SocialContainer>
        </Left>
        <Center>
          
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Curepipe
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +230 5737 7859
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> pharmahealth@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
// Write your Character component here

import React from 'react';
// import {Card, CardTitle, Container, Row, Col, CardSubtitle} from 'reactstrap';
import styled from "styled-components";


// using styled components

const MyCard = styled.section`
width: 25%;
border: 15px solid blue;
padding: 20px;
margin: 20px;
display: flex;
flex-direction: column;
alight-items: center;
justify-content: space-between;
background: #0d7028;
`;

const Title = styled.h1`
font-size: 2 em;
color: aquamarine;
`

const Paragraph = styled.div`
font-size: 1.5 em;
color: chocolate; 
`

const MyContainer = styled.div`
border: 5px solid navy;
`


function Character(props){    
    return(
        <MyContainer>
            {props.mydata.map((element) => {
               return(                   
                   
                <MyCard>
                    <Title>{element.name} </Title>
                    <Paragraph> Height: {element.height} </Paragraph>
                    <Paragraph> Mass: {element.mass} </Paragraph>
                    <Paragraph> Hair Color: {element.hair_color}</Paragraph>
                </MyCard>
                    
                );
            })}
        </MyContainer>
    );
};

export default Character;


// using bootstrap
//
// function Character(props){    
//     return(
//         <Container>
//             <Row>
//             {props.mydata.map((element) => {
//                return(                   
//                    <Col sm ='2'>
//                    <Card key = {element.created} style ={{backgroundColor: '#0d7028'}}>
//                         <CardTitle tag="h4">{element.name}</CardTitle>
//                         <CardSubtitle tag="h5"> Height: {element.height} </CardSubtitle>
//                         <CardSubtitle tag="h5"> Mass: {element.mass} </CardSubtitle>
//                         <CardSubtitle tag="h6"> Hair Color: {element.hair_color}</CardSubtitle>                        
//                     </Card>
//                    </Col>                   
//                 );
//             })}
//             </Row>            
//         </Container>
//     );
// };

// export default Character;

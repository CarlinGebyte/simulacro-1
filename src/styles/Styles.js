import { Card, Nav } from "react-bootstrap";
import styled from "styled-components";

export const ContainerAll = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background-color: #000;
    padding-top: 28px;
`;

export const CardContain = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 100px;
`;

export const CardItem = styled(Card)`
    width: 30%;
    display: inline-block;
    margin: 5% 1.6%;
    align-items: center;
    height: 77vh;
`;

export const HeaderImgCard = styled(Card.Header)`
    height: 60%;
`;

export const ImgCard = styled(Card.Img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BodyCard = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;
`;
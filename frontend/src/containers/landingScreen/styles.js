import styled from 'styled-components'
import Card from "react-bootstrap/Card";

/**
 * Cover component
 */
export const CoverWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ImageWrapper = styled.img`
    @media (max-width: 768px) {
        width: 100vw;
    }
`;

export const ImageTextWrapper = styled.div``;

export const ImageText = styled.p`
    min-width: 400;
    font-size: 70px;
    line-height: 60px;
    font-style: italic;
    font-family: serif;
    font-weight: 900;
    margin-left: 150px;
    @media (max-width: 430px) {
        margin-left: 0px;
        font-size: 20vw;
        line-height: 12vw;
    }
    @media (max-width: 768px) {
        margin-left: 0px;
        font-size: 15vw;
        line-height: 12vw;
    }
`;
/**
 * End of Cover component
 */

/**
 * Article List component
 */
export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: space-around;
    flex-wrap: wrap;
`;

export const CardContainer = styled(Card)`
    width: 30rem;
    margin: 40px 0;
    min-height: 300px;
`

export const CardBody = styled(Card.Body)`
    padding-top: 20px;
    padding-right: 2rem;
    padding-bottom: 20px;
`
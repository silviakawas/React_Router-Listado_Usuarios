import styled from "styled-components";

const StyledContainer = styled.div`
    width: 600px;
    height: 100vh;
    margin: auto;
    padding: 20px 0;
`;
const StyledTitle = styled.h1`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`;
const StyledFilterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const StyledSearch = styled.input`
    width: 150px;
    height: 20px;
    border: 1px solid black;
    border-radius: 2px;
`;
const StyledActiveCont = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
`;
const StyledOnlyActive = styled.p`
    font-size: 16px;
`;
const StyledActiveCheckbox = styled.input`
    
`;
const StyledSelect = styled.select`
    font-size: 14px;
    color: black;
`;
const StyledOption = styled.option`
    font-size: 14px;
`;
const StyledUsersContainer = styled.div`
    width: 100%;
    box-shadow: 1px 1px 5px grey;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
`;
const StyledImageContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const StyledImage = styled.img`
    width: 50px;
    border-radius: 100%;
`;
const StyledNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
`;
const StyledH2 = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;
const StyledH3 = styled.h3`
    font-size: 14px;
    font-weight: 400;
    margin: 0;
`;
const StyledDetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;
const StyledisActive = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({active}) => active ? 'green' : 'red'};
`;
const StyledButton = styled.button`
    padding: 1px 5px;
`;

export {StyledContainer, StyledTitle, StyledFilterContainer, StyledSearch, StyledActiveCont, StyledOnlyActive, StyledActiveCheckbox, StyledSelect, StyledOption, StyledUsersContainer, StyledImageContainer, StyledImage, StyledNameContainer, StyledH2, StyledH3, StyledDetailContainer, StyledisActive, StyledButton};
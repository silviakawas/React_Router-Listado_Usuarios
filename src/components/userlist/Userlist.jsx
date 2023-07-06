import { useState } from "react";
import { StyledActiveCheckbox, StyledActiveCont, StyledContainer, StyledSelect, StyledFilterContainer, StyledOnlyActive, StyledSearch, StyledTitle, StyledUsersContainer, StyledOption, StyledImageContainer, StyledImage, StyledNameContainer, StyledH2, StyledH3, StyledDetailContainer, StyledisActive, StyledButton } from "./styles";
import {USERS} from '../../data/users';
import { useNavigate } from "react-router-dom";


const Userlist = ()=>{

    const navigate = useNavigate();
    const [onlyActive, setOnlyActive] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState(0);

    const filteredUsers = filterUserByActive(onlyActive, searchText, sortBy);

    console.log(onlyActive);

    return(
        <>
            <StyledContainer>
                <StyledTitle>Listado de usuarios</StyledTitle>
                <StyledFilterContainer>
                    <StyledSearch value={searchText} onChange={e => handleInput(setSearchText, e)}>
                    </StyledSearch>
                        <StyledActiveCont>
                            <StyledOnlyActive>Sólo activos</StyledOnlyActive>
                            <StyledActiveCheckbox type='checkbox' onChange={()=> handleCheckbox(onlyActive, setOnlyActive)}></StyledActiveCheckbox>
                        </StyledActiveCont>
                        <StyledSelect value={sortBy} onChange={e => setSortBy(Number(e.target.value))}>
                            <StyledOption value={0}>Por defecto</StyledOption>
                            <StyledOption value={1}>Por nombre</StyledOption>
                        </StyledSelect>
                </StyledFilterContainer>
                {filteredUsers.map(user =>(
                    <StyledUsersContainer key={user.userId}>
                        <StyledImageContainer>
                            <StyledImage src={user.profileImage}/>
                            <StyledNameContainer>
                                <StyledH2>{user.name}</StyledH2>
                                <StyledH3>@{user.username}</StyledH3>
                            </StyledNameContainer>
                        </StyledImageContainer>
                        <StyledDetailContainer>
                            <StyledisActive active={user.active}>
                                {user.active ? 'Activo' : 'Inactivo'}
                            </StyledisActive>
                            <StyledButton onClick={() => navigate(`/user/${user.userId}`)}>
                                Ver Detalles
                            </StyledButton>
                        </StyledDetailContainer>
                    </StyledUsersContainer>

                ))}
                
            </StyledContainer>
        </>
        
    );
    

};

const filterUserByActive = (onlyActive, searchText, sortBy) => {
    let filteredUsers = [...USERS];
    filteredUsers = onlyActive
        ? filteredUsers.filter(user => user.active)
        : filteredUsers;
    if(searchText) {
        filteredUsers = filteredUsers.filter(user =>
            user.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    if(sortBy === 1){
        filteredUsers.sort((a,b) =>{
            if(a.name < b.name){
                return -1;
            }
            if(a.name > b.name){
                return 1;
            }
            return 0;
        });
    }

    return filteredUsers;
};

const handleInput = (setSearchText, e) =>{
    setSearchText(e.target.value);
};

const handleCheckbox = (onlyActive, setOnlyActive) =>{
    setOnlyActive(!onlyActive);
};

export default Userlist;
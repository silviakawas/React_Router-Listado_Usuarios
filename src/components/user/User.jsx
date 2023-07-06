import { Link, useParams } from "react-router-dom";
import { StyledButton, StyledH1, StyledImage, StyledP, StyledUserContainer } from "./styles";
import {USERS} from '../../data/users';

const User = ()=>{

    const {userId} = useParams();

    const user = USERS.find(user => user.userId === userId);

    return(
        <>
            <StyledUserContainer>
                <StyledButton>
                    <Link to={'/'}>Back to users</Link>
                </StyledButton>
                <br/>
                <StyledImage src={user.profileImage}/>
                <StyledH1>{`Hi! My name is ${user.name}`}</StyledH1>
                <StyledP>{`I'm ${user.age}`}</StyledP>
                <StyledP>{`My usernamename is ${user.username}`}</StyledP>
                <StyledP>{`You can contact me at ${user.email}`}</StyledP>
                <StyledP>{`My address is:`}</StyledP>
                <StyledP>{user.address.street}</StyledP>
                <StyledP>{user.address.city}</StyledP>
                <StyledP>{user.address.zipCode}</StyledP>
                <StyledP>{`You can call me at ${user.phone}`}</StyledP>
            </StyledUserContainer>
        </>

    );

};

export default User;
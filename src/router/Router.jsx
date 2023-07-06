import { Route, Routes } from "react-router-dom";
import Userlist from "../components/userlist/Userlist";
import User from "../components/user/User";


const Router = ()=>{

    return(

        <Routes>
            <Route path='/' element={<Userlist/>}/>
            <Route path={'/user/:userId'} element={<User/>}/>
        </Routes>

    );

};

export default Router;
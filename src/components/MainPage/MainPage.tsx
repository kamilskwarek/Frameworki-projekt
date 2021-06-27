import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';


import { LeftMenu } from '../LeftMenu/LeftMenu';
import { TopBar } from '../TopBar/TopBar';
import { HomeSite } from '../HomeSite/HomeSite';
import { Entities } from '../../Entities/Entities';
import { Profile } from '../Profile/Profile';
import { TestSite } from '../TestSite/TestSite';

import { getUsers, getSomeData } from '../../actions/usersActions';
import { getComments, } from '../../actions/commentsActions';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
type GetSomeData = ReturnType<typeof getSomeData>







const Page = styled.div`
    background-color: F1EFE8;
`;


const Content = styled.div`
    max-width: 1200px;
    /* justify-content: center; */
    /* align-items: center; */
    display: flex;
    margin: auto;

`;

const MainPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
    }, []);

    useEffect(() => {
        dispatch<GetComments>(getComments());
    }, []);



    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch<GetSomeData>(getSomeData('lalalalala'));
    }






    return (
        <Router>
            <Page>
                <TopBar />
                <Content>
                    <LeftMenu />
                    <Switch>
                        <Route path='/' exact>
                            <HomeSite />
                        </Route>
                        <Route path='/homesite' exact>
                            <HomeSite />
                        </Route>

                        <Route path='/entities' exact>
                            <Entities />
                        </Route>

                        <Route path='/profile' exact>
                            <Profile />
                        </Route>

                        <Route path='/testsite' exact>
                            <TestSite />
                        </Route>

                    </Switch>

                </Content>
            </Page>
        </Router>
    )
}

export default MainPage;

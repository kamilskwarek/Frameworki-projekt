import { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const LeftPanel = styled.div`
    width: 120px;
    padding: 10px;
    height: 800px;
    width: 250px;
`;

const UserInfo = styled.div`
    margin-top: 20px;
    border-radius: 5px;
    width: 250px;
    height: 265px;
    float: left;
    box-shadow:0 0 20px -2px grey;
    background-color: white;

`;

const FotoContainer = styled.div`
    border-radius: 50px;
    width: 250px;
    height: 120px;
    background-color: white;
    justify-content: center;
    align-items: center;
    display: flex;

`;

const DivFoto = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

const ProfileFoto = styled.img`
    border-radius: 50px;
    width: 100px;
    height: 100px;
`;
const PersonData = styled.div`
    width: 250px;
    height: 50px;
    border-bottom: 2px solid lightgray;
    text-align: center;
    `;

const YourActions = styled.div`
    width: 250px;
    height: 90px;
`;

const UserCardBtn = styled.div`
    display: grid;
    align-items: center;
    width: 100%;
    height: 50px;
`;

const UserBtnDiv = styled.div`
    display: block;
    width: 240px;
    margin: auto;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 4px;
    :hover {
    background-color: lightgray;

    }
`;

const UserBtn = styled.button`
    width: 80%;
    /* border: 2px solid; */
    background: transparent;
    outline: 0;
    border: transparent;
`;

const Icon = styled.img`
    float: left;
`;

const BtnSpan = styled.span`
    float: left;
    margin-left: 5px;
    font-size: 16px;
`;

const IconBtn = styled.button`
    border: 2px solid gray;
    width: 10%;
    border-radius: 5px;
    height: 25px;
    box-shadow:0 0 10px -5px;
    padding-right: 20px;
    background-color: white;

`;

const BottomDivs = styled.div`
    margin-top: 250px;
    border-radius: 4px;
`;

const BottomBtnDiv = styled.div`
    display: block;
    width: 250px;
    height: 40px;
    /* justify-content: center; */
    align-items: center;
    display: flex;
    border-radius: 4px;
    :hover {
    background-color: lightgray;
    }

`;

const BottomBtn = styled.button`
    width: 80%;
    /* border: 2px solid; */
    background: transparent;
    outline: 0;
    border: transparent;
`;


export const LeftMenu: FC = () => {
    return (
        <LeftPanel>
            <UserInfo>
                <Link to='/profile'>
                    <FotoContainer>
                        <DivFoto>
                            <ProfileFoto src="./media/profile.jpg" />
                        </DivFoto>
                    </FotoContainer>
                </Link>


                <PersonData>
                    <Link to='/profile'>
                        <p>Kiwa Jakotako</p>
                    </Link>
                    <p>Job - company</p>
                </PersonData>

                <YourActions>
                    <UserCardBtn>
                        <Link to='/testsite'>
                            <UserBtnDiv>
                                <UserBtn>
                                    <Icon src='./media/icons/people.svg' />
                                    <BtnSpan>Your network</BtnSpan>
                                </UserBtn>
                                <IconBtn>
                                    <Icon src='./media/icons/user-plus.svg' />
                                </IconBtn>
                            </UserBtnDiv>
                        </Link>
                        <Link to='/testsite'>
                            <UserBtnDiv>
                                <UserBtn>
                                    <Icon src='./media/icons/publications.svg' />
                                    <BtnSpan>Your publications</BtnSpan>
                                </UserBtn>
                                <IconBtn>
                                    <Icon src='./media/icons/plus.svg' />
                                </IconBtn>

                            </UserBtnDiv>
                        </Link>
                    </UserCardBtn>
                </YourActions>
            </UserInfo>
            <BottomDivs>
                <Link to='/testsite'>
                    <BottomBtnDiv>
                        <BottomBtn>
                            <Icon src='./media/icons/publications.svg' />
                            <BtnSpan>Publications</BtnSpan>
                        </BottomBtn>


                    </BottomBtnDiv>
                </Link>
                <Link to='/testsite'>
                    <BottomBtnDiv>

                        <BottomBtn>
                            <Icon src='./media/icons/ecosystem.svg' />
                            <BtnSpan>Ecosystem</BtnSpan>
                        </BottomBtn>

                    </BottomBtnDiv>
                </Link>

                <Link to="/entities">

                    <BottomBtnDiv>
                        <BottomBtn>
                            <Icon src='./media/icons/entities.svg' />
                            <BtnSpan>Your Entities</BtnSpan>
                        </BottomBtn>
                    </BottomBtnDiv>
                </Link>
            </BottomDivs>

        </LeftPanel>
    );
};
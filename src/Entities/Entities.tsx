import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { IState } from '../reducers';
import { IUsersReducer } from '../reducers/usersReducers';

import { useSelector } from 'react-redux';




const EntitiesMain = styled.div`
    width: 100%;
    height:900px;
`;

const HeaderDiv = styled.div`
    position: relative;
    width: 900px;
    height: 80px;
    margin-top: 30px;
`;

const EntitesTitle = styled.div`
    position: absolute;
    width: 120px;
    height: 40px;
    
`;

const EntitiesSpan = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;

`;

const EntitiesImg = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 6px;
    left: 70px;
`;

const StyleDiv = styled.div`
    width: 80px;
    height: 40px;
    float: right;
`;

const StyleButton = styled.button`
    height: 40px;
    width: 40px;
    float: left;
    outline: transparent;
    border-radius: 5px;
    border: 1px solid lightgray;
    
`;
const StyleImg = styled.img`
    height: 30px;
    width: 30px;
    margin: -4px;
`;

const AllDiv = styled.div`
width: 100px;
height: 40px;
position: absolute;
background-color: #bebebe;
border-radius: 10px;
top: 40px;
`;

const AllImg = styled.img`
    width: 24px;
    top: 8px;
    left: 5px;
    position: absolute;
`;

const AllSpan = styled.span`
width: 40px;
height: 40px;
position: absolute;
left: 35px;
justify-content: center;
align-items: center;
display: flex;
`;

const AllArrowImg = styled.img`
    width: 10px;
    top: 17px;
    left: 78px;
    position: absolute;
`;

const Sortbtn = styled.button`
    width: 80px;
    height: 40px;
    top: 40px;
    left: 120px;
    border-radius: 10px;
    position: absolute;
    border: 1px solid lightgray;;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size:20px;
`;

const FilterInput = styled.input`
    width: 150px;
    height: 30px;
    position: absolute;
    border-radius: 5px;
    top: 40px;
    right: 0px;
`;

const EntitiesContainer = styled.div`
    width: 900px;
    height: 900px;
    float: left;
    position: absolute;
    box-shadow:0 0 20px -2px grey;
    top: 100px;

`;

const EntitiesElements = styled.div`
    width: 280px;
    height: 80px;
    float: left;
    position: relative;
    box-shadow:0 0 20px -2px grey;
    margin: 10px;

`;


const EntitieElementsImg = styled.img`
    width: 60px;
    left: 10px;
    /* height: 70px; */
    position: absolute;
`;

const EntitieName = styled.span`
    width:150px;
    /* height: 70px; */
    position: absolute;
    left: 90px;
    top: 10px;
    font-size: 14px;
`;

const EntitieStreat = styled.span`
    width:180px;
    height: 20px;
    /* height: 70px; */
    position: absolute;
    left: 90px;
    top: 50px;
    font-size: 14px;
`;




export const Entities: FC = () => {


    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const [inputText, setInputText] = useState<string>('');

    const [currentPage, setCurrentPage] = useState<number>(0);


    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setCurrentPage(selected)
    }

    const data = useSelector<IState, IUsersReducer>((state) => ({
        ...state.users,
    }));

    return (
        < EntitiesMain>
            <HeaderDiv>
                <EntitesTitle>
                    <EntitiesSpan>Entities</EntitiesSpan>
                    <EntitiesImg src='./media/icons/cog.png' />
                </EntitesTitle>
                <AllDiv>
                    <AllImg src='./media/icons/cog.png' />
                    <AllSpan>ALL</AllSpan>
                    <AllArrowImg src='./media/icons/arrow-down.png' />
                </AllDiv>
                <Sortbtn>Sort</Sortbtn>
                <FilterInput placeholder="Filter by title..." value={inputText} onChange={inputHandler} />
                <StyleDiv>


                    <StyleButton>
                        <StyleImg src='./media/mosaic.png' />
                    </StyleButton>
                    <StyleButton>
                        <StyleImg src='./media/list.png' />
                    </StyleButton>

                </StyleDiv>
                <EntitiesContainer>
                    {usersList.filter(commnet => commnet.company.name.toLocaleLowerCase().includes(inputText)).slice(currentPage, currentPage + 10).map(elem =>

                        <EntitiesElements>
                            <EntitieElementsImg src="./media/logo.png" />
                            <EntitieName>{elem.company.name}</EntitieName>
                            <EntitieStreat>{elem.address.street} {elem.address.suite}</EntitieStreat>
                        </EntitiesElements>

                    )}
                </EntitiesContainer>
            </HeaderDiv>
        </EntitiesMain>
    );
};
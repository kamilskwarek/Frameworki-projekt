import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultipleItems from '../MainPage/Slider/Slider';


import { IState } from '../../reducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { useSelector } from 'react-redux';

import ReactPaginate from 'react-paginate';




const MainSite = styled.div`
    width: 900px;
    min-height:100%;
    
`;
/* LastestPublication */
const LastestPublication = styled.div`
    position: relative;
    top: 30px;
    width: 100%;
    border-radius: 10px;
    height: 300px;
    box-shadow:0 0 20px -2px grey;
`;

const PublicationLeftDIv = styled.div`
    width: 300px;
    height: 300px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: green;
    float: left;
`;

const PublicationLeftImg = styled.img`
    width: 300px;
    height: 300px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const LeftPostDiv = styled.div`

    width: 300px;
    height: 100px;
    border-bottom-left-radius: 10px;
    top: 200px;
    position: absolute;
`;

const LeftPostUpperDiv = styled.div`
    width: 290px;
    height: 50px;
    position: absolute;
    padding-left: 10px;
    /* justify-content: center; */
    align-items: center;
    display: flex;
    color: white;

`;

const LeftPostLowerDiv = styled.div`
    top: 50px;
    width: 300px;
    height: 50px;
    position: absolute;
    border-bottom-left-radius: 10px;
    align-items: center;
    display: flex;

`;

const DateSpan = styled.span`
    width: 60px;
    float: left;
    margin-left: 10px;
    color: white;
    font-size: 12px;
`;

const PostSpan = styled.span`
    width: 100px;
    float: left;
    margin: 10px;
    color: white;
    font-size: 14px;
`;

const ProfileDiv = styled.div`
    width: 180px;
    float: left;
    margin: 10px;
    color: white;
    display: flex;
`;

const ProfilePhoto = styled.img`
    width: 30px;
    height: 30px;
    float: left;
    border-radius: 50px;
`;


const PublicationRightDIv = styled.div`
    width: 600px;
    height: 300px;
    float: right;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const RightPostDiv = styled.div`
    width: 630px;
    height: 60px;
    float: left;
    /* align-items: center;
    display: flex; */

`;
const H1 = styled.div`
    font-size: 30px;
    margin: 10px;
`;

const RightPhoto = styled.img`
    float: left;
    width:50px;
    height: 50px;
    margin: 5px;
`;

const RightDiv = styled.div`
    width: 400px;
    height: 30px;
    float: left;
    align-items: center;
    display: flex;

`;


const RightDateSpan = styled.span`
    width: 60px;
    float: left;
    margin-top: 9px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 12px;
`;

const RightPostSpan = styled.span`
    width: 100px;
    float: left;
    margin: 10px;
    font-size: 14px;
`;

const SeeMoreDiv = styled.div`
    width: 630px;
    height: 60px;
    float: left;
    align-items: center;
    display: flex;
    margin-left:10px;

`;


/* Workspaces */
const Workspaces = styled.div`
    position: relative;
    top: 50px;
    width: 100%;
    height: 270px;
    border-radius: 10px;
    box-shadow:0 0 20px -2px grey;
    align-items: center;
    /* display: flex; */
    /* flex-direction: row; */
    /* overflow: auto; */

`;



/* ResumeYourWork */
const ResumeYourWork = styled.div`
    position: relative;
    top: 70px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;
const ResumWokrHeader = styled.div`
    position: relative;
    top: 10px;
    width: 100%;
    height: 70px;
`;

const LeftTopic = styled.span`
    position: absolute;
    font-size: 30px;
    top: 10px;
    left: 10px;
`;

const RightFilterDiv = styled.div`
    position: absolute;
    width: 200px;
    height: 20px;
    border: 2px solid lightgray;
    border-radius: 5px;
    top: 10px;
    right: 120px;
`;

const RightFilterInput = styled.input`
    top: 1px;
    left: 5px;
    position: absolute;
    width: 170px;
    height: 16px;
    border: transparent;
    outline:none;
`;
const RightFilterImg = styled.img`
    position: absolute;
    top: 2px;
    right: 5px;
    width:16px;
    height: 16px;
`;

const RightSelect = styled.select`
    top: 12px;
    right: 10px;
    border-radius: 5px;
    position: absolute;
    width: 100px;
    height: 20px;
`;

const RightOption = styled.option`
    border-radius: 5px;
    border: 2px solid;
    width: 100px;
    height: 20px;
`;

const ResumeElementDiv = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    border: 2px solid lightgray;
    width: 900px;
    height: 90px;
    float:left;
    box-shadow:0 0 20px -2px grey;
`;

const ResumeTopic = styled.div`
width: 900px;
height: 30px;
left: 10px;
font-size: 18px;
margin-top: 10px;
position: absolute;
color: #008cff;
`;

const ResumeBody = styled.div`
width: 900px;
height: 30px;
left: 10px;
font-size: 13px;
margin-top: 30px;
position: absolute;
`;

const ResumeAccount = styled.div`

width: 900px;
height: 30px;
left: 10px;
font-size: 14px;
margin-top: 50px;
position: absolute;
`;

const AccountPhoto = styled.img`
width: 30px;
height: 30px;
border-radius: 50px;
`;
const ContractorPhoto = styled.img`
width: 25px;
height: 25px;
margin-left:120px;
`;

const AccountName = styled.span`
    width: 150px;
    height: 30px;
    position: absolute;
    margin-top: 10px;
    margin-left: 10px;
`;
const Contractor = styled.span`
    width: 50px;
    height: 30px;
    position: absolute;
    margin-top: 10px;
    margin-left: 10px;
`;
const Date = styled.span`
    width: 300px;
    height: 30px;
    position: absolute;
    margin-top: 10px;
    margin-left: 100px;
`;



export const HomeSite: FC = () => {



    const { commentsList } = useSelector<IState, ICommentsReducer>(state => ({
        ...state.comments
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
    const StyledPaginateContainer = styled.div`
    .pagination {
    float: left;
    
    & > li{
    display: inline-block;
    width: auto;
    border: 1px solid #e2e2e2;
    font-size: 25px;
    margin: 10px;
    & > ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    }
}
    & > active {
    border-color: transparent;
    background-color: #0366d6;
    color: white;
    }
}

;`

    return (
        <MainSite>
            <LastestPublication>
                < PublicationLeftDIv>
                    <LeftPostDiv>
                        <LeftPostUpperDiv>Lorem ipsum dolor mit samed</LeftPostUpperDiv>
                        <LeftPostLowerDiv>
                            <DateSpan>22 Jun 2021</DateSpan>
                            <Link to='./profile'>
                                <ProfileDiv>
                                    <ProfilePhoto src="./media/profile.jpg" />
                                    <PostSpan>Kiwa Jakotako</PostSpan>
                                </ProfileDiv>
                            </Link>
                        </LeftPostLowerDiv>
                    </LeftPostDiv>

                    <PublicationLeftImg src='./media/dog.jpg' />
                </PublicationLeftDIv>
                <PublicationRightDIv>
                    <RightPostDiv>
                        <H1>Lastest publications</H1>
                    </RightPostDiv>

                    <RightPostDiv>
                        <RightPhoto src='./media/dog.jpg' />
                        <RightDiv>
                            Lorem ipsum dolor mit samed
                        </RightDiv>
                        <RightDiv>
                            <Link to='./profile'>
                                <RightDateSpan>22 Jun 2021</RightDateSpan>
                                <ProfilePhoto src="./media/profile.jpg" />
                                <RightPostSpan>Kiwa Jakotako</RightPostSpan>
                            </Link>
                        </RightDiv>
                    </RightPostDiv>

                    <RightPostDiv>
                        <RightPhoto src='./media/dog.jpg' />
                        <RightDiv>
                            Lorem ipsum dolor mit samed
                        </RightDiv>
                        <RightDiv>
                            <Link to='./profile'>
                                <RightDateSpan>22 Jun 2021</RightDateSpan>
                                <ProfilePhoto src="./media/profile.jpg" />
                                <RightPostSpan>Kiwa Jakotako</RightPostSpan>
                            </Link>
                        </RightDiv>

                    </RightPostDiv>

                    <RightPostDiv>
                        <RightPhoto src='./media/dog.jpg' />
                        <RightDiv>
                            Lorem ipsum dolor mit samed
                        </RightDiv>
                        <RightDiv>
                            <Link to='./profile'>
                                <RightDateSpan>22 Jun 2021</RightDateSpan>
                                <ProfilePhoto src="./media/profile.jpg" />
                                <RightPostSpan>Kiwa Jakotako</RightPostSpan>
                            </Link>
                        </RightDiv>

                    </RightPostDiv>

                    <SeeMoreDiv>
                        <Link to='./testsite'>
                            See more publications
                        </Link>
                    </SeeMoreDiv>

                </PublicationRightDIv>
            </LastestPublication>

            <Workspaces>
                <MultipleItems />
            </Workspaces>





            <ResumeYourWork>
                <ResumWokrHeader>
                    <LeftTopic>
                        Resume your work
                    </LeftTopic>
                    <RightFilterDiv>
                        <RightFilterInput placeholder="Filter by title..." value={inputText} onChange={inputHandler} />
                        <RightFilterImg src='./media/icons/search.png' />

                    </RightFilterDiv>
                    <RightSelect>
                        <RightOption>All Items</RightOption>
                        <RightOption>all Items</RightOption>
                    </RightSelect>
                </ResumWokrHeader>



                {console.log(commentsList)}

                {commentsList.filter(commnet => commnet.name.toLocaleLowerCase().includes(inputText)).slice(currentPage, currentPage + 10).map(elem =>
                    <ResumeElementDiv>
                        <ResumeTopic>{elem.name}</ResumeTopic>
                        <ResumeBody>{elem.body}</ResumeBody>
                        <ResumeAccount>
                            <AccountPhoto src="./media/profile.jpg" />
                            <AccountName>Kiwa Jakotako</AccountName>
                            <ContractorPhoto src='./media/icons/page.png' />
                            <Contractor>Contractor</Contractor>
                            <Date>Updated 7 days ago by Kiwa Jakotako</Date>
                        </ResumeAccount>
                    </ResumeElementDiv>

                )}
                <StyledPaginateContainer>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(commentsList.length / 10)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </StyledPaginateContainer>
            </ResumeYourWork>
        </MainSite>

    );

};

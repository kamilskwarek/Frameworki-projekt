import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';





function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", borderRadius: `10px` }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", borderRadius: `10px`, }}
            onClick={onClick}
        />
    );
}

const SliderDiv = styled.div`
    margin: 10px;
    width: 200px;
    height: 200px;
    display: flex;
    border-radius: 10px;
    box-shadow:0 0 20px -2px grey;
    position: relative;
    flex-shrink: 0;
    

`;

const SliderPhoto = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 200px;
    height: 100px;
`;

const IconDiv = styled.div`
    top: 50px;
    width: 80px;
    height: 80px;
    background-color: white;
    position: absolute;
    border-radius: 10px;
    margin: 5px;
    box-shadow:0 0 20px -2px grey;
`;

const IconImg = styled.img`
    width: 70px;
    height: 70px;
    margin: auto;

`;

const SliderTopic = styled.span`
    width: 120px;
    height: 30px;
    position: absolute;
    top: 105px;
    left: 90px;
`;

const ContractDiv = styled.div`
    width: 90px;
    height: 30px;
    position: absolute;
    top: 140px;
`;

const InfoImg = styled.img`
    width: 20px;
    height: 20px;
    float: left;
    margin: 5px;
`;

const InfoSpan = styled.span`
    width: 50px;
    height: 20px;
    float: left;
    margin-top: 8px;
    font-size: 15px;
`;

const UsersDiv = styled.div`
    width: 90px;
    height: 30px;
    position: absolute;
    top: 140px;
    left: 90px;
`;

const DateSpan = styled.div`
    width: 150px;
    height: 30px;
    position: absolute;
    top: 170px;
    left: 10px;
`;



export default class MultipleItems extends Component {


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>

                            </DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                    <div>
                        <SliderDiv>
                            <SliderPhoto src='./media/snow.jpg' />
                            <IconDiv>
                                <IconImg src='./media/computer.png' />
                            </IconDiv>
                            <SliderTopic>Topic</SliderTopic>
                            <ContractDiv>
                                <InfoImg src='./media/icons/page.png' />
                                <InfoSpan>Cotnract</InfoSpan>
                            </ContractDiv>
                            <UsersDiv>
                                <InfoImg src='./media/icons/people.png' />
                                <InfoSpan>25 users</InfoSpan>
                            </UsersDiv>
                            <DateSpan>Last update 2 days ago</DateSpan>
                        </SliderDiv>
                    </div>
                </Slider>
            </div>
        );
    }
}
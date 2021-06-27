import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";


import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';

import { useSelector } from 'react-redux';


const ProfileMain = styled.div`
    width: 900px;
    height: 900px;
    box-shadow:0 0 20px -2px grey;
    position: absolute;
    top: 70px;
    left: 620px;
    border-radius: 10px;
`;

const HeaderDiv = styled.div`
    height:300px;
    width: 900px;
    border-bottom: 1px solid;
`;

const HeederSection = styled.div`
    height:300px;
    width: 200px;
    float: left;

`;

const ProfileImg = styled.img`
    width: 120px;
    position: absolute;
    border-radius: 80px;
    left: 40px;
    top: 80px;
`;

const SeeProvile = styled.span`
    width: 140px;
    position: absolute;
    height: 30px;
    top: 200px;
    left:35px;
    color: #73c0ff;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const PlaceHolder = styled.div`
    height:100px;
    width: 200px;
    position: relative;

`;

const TextPlace = styled.div`
    height:50px;
    width: 200px;
    position: relative;
    align-items: center;
    display: flex;
    font-size: 20px
`;

const EditButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: lightgray;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 50px;
    border: transparent;

`;

const EditImg = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 3px;
    right: 3px;


`;

interface IProfileState {
    imie: string,
    edit: boolean,
    name: string,
    city: string,
    partner: string,
    email: string,
    phone: string,
}



export class Profile extends React.Component<{}, IProfileState> {
    constructor(props: {}) {
        super(props);
        this.state = { imie: 'Kiwa Jakotako', name: 'Romaguera-Crona', city: 'Gwenborough', partner: 'partner', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442', edit: false }
    }

    render() {
        let { edit, imie, name, city, partner, email, phone } = this.state;
        return (

            < ProfileMain>

                <HeaderDiv>
                    <EditButton onClick={() => this.setState({ edit: !this.state.edit })}>
                        <EditImg src="./media/icons/settings.svg" />
                    </EditButton>

                    <HeederSection>
                        <ProfileImg src="./media/profile.jpg" />
                        <SeeProvile>See Profile</SeeProvile>
                    </HeederSection>
                    <HeederSection>
                        <PlaceHolder></PlaceHolder>
                        <PlaceHolder>

                            {!edit ? <TextPlace>{imie}</TextPlace> : <input value={imie} onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ imie: e.target.value })}></input>}

                            {!edit ? <TextPlace>{name}</TextPlace> : <input value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}></input>}
                        </PlaceHolder>
                        <PlaceHolder>
                            {!edit ? <TextPlace>{city}</TextPlace> : <input value={city} onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ city: e.target.value })}></input>}
                            {!edit ? <TextPlace>{partner}</TextPlace> : <input value={partner} onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ partner: e.target.value })}></input>}
                        </PlaceHolder>
                    </HeederSection>
                    <HeederSection>
                        <PlaceHolder>
                        </PlaceHolder>
                        <PlaceHolder></PlaceHolder>
                        <PlaceHolder>
                            {!edit ? <TextPlace>{email}</TextPlace> : <input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}></input>}
                            {!edit ? <TextPlace>{phone}</TextPlace> : <input value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ phone: e.target.value })}></input>}
                        </PlaceHolder>

                    </HeederSection>

                </HeaderDiv>

            </ProfileMain >
        );
    };

}
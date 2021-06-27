import { FC } from 'react';
import styled, { css } from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { ExpandedMenu } from './ExpandedMenu';



const Wrapper2 = styled(Wrapper)`
padding: 5px;
`;

const InnerWrapper = styled.div`
    width: 100%;
    background: ${Colors.white};
`;

const RightIcons = styled.div`
float: right;
`;

const IconBackground = styled.div<{ showBg: boolean }>`
    ${props => props.showBg && css`
    background: lightgray;
    border-radius: 50px;
    `} 
    margin-right:5px;
    float: left;
    outline: 0;
    width:32px;
    height:32px;
    justify-content: center;
    align-items: center;
    display: flex;
`

const InputWrapper = styled.div`
float: left;
position: relative;
left: 20%;
width: 40%;
border: 2px solid gray;
border-radius: 5px;
padding: 2px;
`;

const CustomImg = styled.img`
`;

const ImgNumber = styled.span`
    top: 5px;
    margin-right: -24px;
    width: 14px;
    height: 10px;
    font-size:10px;
    background-color: ${Colors.lightblue};
    position: absolute;
    color: white;
    border-radius: 20px;
    text-align: center;
    padding: 2px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const CustomInput = styled.input`
    float: left;
    margin-left: 5px;
    border: 0px transparent;
    width: 95%;
    outline: 0;
`;

const LogoImg = styled.img`
    height: 24px;
    float: left;
    padding: 0px 10px 0px 0px;
`;

const MenuWrapper = styled.div`
    border: 1px solid;
    float: left;
    cursor: pointer;
    position: relative;
    align-items: center;
    height: 30px;
    width: 212px;
    justify-content: space-between;
    border: 1px solid;
   border-radius: 10px;
`;

const LeftSide = styled.div`
    float: left;
    margin-top: 2px;
    margin-left: 5px;
    border: 0px transparent;
    

`;

const DropListSpan = styled.span`
    margin-left: 5px;
    margin-top: 5px;
    width: 160px;
    float: left;
`;

const DropListImg = styled.img`
    float: left;
`;

const DropListArrow = styled.img`
    margin-top: 10px;
`;



export const TopBar: FC = props => {
    const [wrapperRef, dropDownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    }


    return (
        <Wrapper2>
            <InnerWrapper>
                <LogoImg src="./media/logo.png" />

                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <DropListImg src='./media/icons/house.png' alt='' />
                        <DropListSpan>Home</DropListSpan>
                        <DropListArrow src='./media/icons/arrow-down.png' alt='' />
                    </LeftSide>

                    {dropDownOpen &&
                        <ExpandedMenu />
                    }
                </MenuWrapper>


                <InputWrapper>
                    <CustomInput type='text' />
                    <CustomImg src='./media/icons/search.png' alt="" title="" />
                </InputWrapper>
                <RightIcons>
                    <IconBackground showBg={false}>
                        <CustomImg src='./media/icons/house.png' />
                    </IconBackground>
                    <IconBackground showBg>
                        <ImgNumber>3</ImgNumber>
                        <CustomImg src='./media/icons/comments.png' />
                    </IconBackground>
                    <IconBackground showBg>
                        <ImgNumber>3</ImgNumber>
                        <CustomImg src='./media/icons/bell.png' />
                    </IconBackground>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    )
}
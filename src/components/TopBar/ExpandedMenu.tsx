import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const DropDownMenu = styled.div`
    height: 250px;
    width:180px;
`;


const DropDownMenuItems = styled.div`
    position: absolute;
    top: 79px;
    left: -1px;
    background: white;
    padding: 16px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 180px;
    width:180px;
    overflow:auto;

    &::-webkit-scrollbar {
        border-radius: 10px;
        width: 12px;
    }
    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
}
    &::-webkit-scrollbar-thumb {
    background: lightgray; 
    border-radius: 10px;
    }

`;


const DropDownMenuItem = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 180px;
    display: flex;
    border-radius: 4px;
    :hover {
    background-color: lightgray;
    }
`;

const DropDownMenuImg = styled.img`
width: 24px;
margin-right: 5px;
float: left;
`;
const DropDownMenuSpan = styled.span`
margin-top: 5px;
float: left;
`;

const DropDownMenuCategories = styled.span`
    font-family: 'Helvetica', Sans-serif;
    font-size: 14px;
`;

/* Profile */

const DropDownMenuProfile = styled.div`
    position: absolute;
    top: 279px;
    left: -1px;
    background: white;
    padding: 16px;
    border: 1px solid;
    border-radius: 10px;
    height: 160px;
    width:  180px;
    border: 1px solid;
`;

const DropDownMenuProfileItem = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 180px;
    display: flex;
    border-radius: 4px;
    :hover {
    background-color: lightgray;
    }
`;

const DropDownMenuProfileImg = styled.img`
    width: 24px;
    margin-right: 5px;
    float: left;
`;
const DropDownMenuProfileFoto = styled.img`
    margin-top: 5px;    
    border-radius: 50px;
    width: 30px;
    margin-right: 5px;
    float: left;
`;
const DropDownMenuProfileSpan = styled.span`
    margin-top: 5px;
    float: left;
`;


/* Search */

const DropDownMenuSearchContiner = styled.div`
    position: absolute;
    top: 30px;
    left: -1px;
    background: white;
    padding: 5px 5px 16px 5px;
    border-top: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 50px;
    width:  202px;
`;

const DropDownMenuSearchDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid;
    height: 26px;
    width:  202px;
    border-radius: 10px;
`;


const DropDownMenuSearchInput = styled.input`
    margin-left: 5px;
    margin-top: 2px;
    width: 160px;
    height: 20px;
    float: left;
    border: transparent;
    outline:none;

`;

const DropDownMenuSearchImg = styled.img`
    margin-right: 5px;
    margin-top: 4px;
    float: right;
`;


export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (

        <DropDownMenu>

            {/* profil */}

            <DropDownMenuProfile>
                <DropDownMenuProfileSpan>Account</DropDownMenuProfileSpan>
                <Link to='./profile'>

                    <DropDownMenuProfileItem>
                        <DropDownMenuProfileFoto src="./media/profile.jpg" />
                        <DropDownMenuProfileSpan>Kiwa Jakotako</DropDownMenuProfileSpan>
                    </DropDownMenuProfileItem>
                </Link>

                <Link to='./testsite'>
                    <DropDownMenuProfileItem>
                        <DropDownMenuProfileImg src='./media/icons/privacy.png' />
                        <DropDownMenuProfileSpan>Privacy</DropDownMenuProfileSpan>
                    </DropDownMenuProfileItem>
                </Link>

                <Link to='./testsite'>
                    <DropDownMenuProfileItem>
                        <DropDownMenuProfileImg src='./media/icons/settings.png' />
                        <DropDownMenuProfileSpan>Settings</DropDownMenuProfileSpan>
                    </DropDownMenuProfileItem>
                </Link>

                <hr />

                <Link to='./testsite'>
                    <DropDownMenuProfileItem>
                        <DropDownMenuProfileImg src='./media/icons/logout.png' />
                        <DropDownMenuProfileSpan>Logout</DropDownMenuProfileSpan>
                    </DropDownMenuProfileItem>
                </Link>
            </DropDownMenuProfile>

            {/* wyszukiwanie */}

            <DropDownMenuSearchContiner>
                <DropDownMenuSearchDiv>
                    <DropDownMenuSearchInput placeholder="Search" value={inputText} onChange={inputHandler} />
                    <DropDownMenuSearchImg src='./media/icons/search.png' />
                </DropDownMenuSearchDiv>
            </DropDownMenuSearchContiner>

            {/* items */}


            <DropDownMenuItems>
                <DropDownMenuCategories>Platform</DropDownMenuCategories>
                {'Home'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./homeSite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/house.png' />
                            <DropDownMenuSpan>Home</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'Publications'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/publications.png' />
                            <DropDownMenuSpan>Publications</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'People'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/people.png' />
                            <DropDownMenuSpan>People</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'Entities'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./entities'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/entities.png' />
                            <DropDownMenuSpan>Entities</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'Administration'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/administration.png' />
                            <DropDownMenuSpan>Administration</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }
                <br />
                <DropDownMenuCategories>Workspaces</DropDownMenuCategories>

                {'Client contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/page.png' />
                            <DropDownMenuSpan>Client contract</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'Supplier contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/page.png' />
                            <DropDownMenuSpan>Supplier contract</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'Corporate'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/entities2.png' />
                            <DropDownMenuSpan>Corporate</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'Group norms'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/book.png' />
                            <DropDownMenuSpan>Group norms</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

                {'Real Estate contracts'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='./testsite'>
                        <DropDownMenuItem>
                            <DropDownMenuImg src='./media/icons/page.png' />
                            <DropDownMenuSpan>Real Estate contracts</DropDownMenuSpan>
                        </DropDownMenuItem>
                    </Link>
                }

            </DropDownMenuItems>

        </DropDownMenu>
    );
};
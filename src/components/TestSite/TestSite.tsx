import { FC } from 'react';
import styled from 'styled-components';
const TestSiteMain = styled.div`
    width: 100%;
    min-height:100%;
`;

const Testspan = styled.span`
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 60px;
`;



export const TestSite: FC = () => {


    return (
        < TestSiteMain>
            <Testspan>
                TEST
            </Testspan>
        </TestSiteMain>
    );
};
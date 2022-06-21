import styled from "styled-components";

export const StyledAboutPage = styled.div`
    margin: 1.25rem;

    li {
        margin-left: 1rem;
    }

    line-height: 1.5;
        
    font-family: ${({ theme}) => theme.font };
`
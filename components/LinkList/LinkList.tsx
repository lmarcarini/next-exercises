import styled from "styled-components";

const LinkList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    z-index: 1;
    height: 60px;
    list-style: none;
    @media (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        height: auto;
        border-bottom: none;
    }
    }
`;

export default LinkList;

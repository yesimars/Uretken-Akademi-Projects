import styled from "styled-components";


export const CardContainer = styled.div`
width: 230px;
height: 270px;
padding: 1rem;
margin-left: 29px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
text-align: center;
box-sizing: border-box;
border-radius: 5px;
box-shadow: 0 4px 4px rgba(2, 15, 29, 0.242);
font-size: 1.1rem;
color: blueviolet;
background-color: #b1e9f8;


img{
    border-radius: 5px;
    width: 200px;
    display: flex;
    
}

button{
    border: none;
    outline: none;
    background-color: none;
    font-size: 15px;
    border: rgb(3 0 71/9%);
    width: 30px;
    height: 30px;
    background-color: transparent;
    color: blueviolet;
    border-radius: 2px;
    &:hover{
        cursor: pointer;
        background: red;
        color: #b1e9f8;
    }
}

`;

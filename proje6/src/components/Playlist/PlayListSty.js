import styled from "styled-components";

export const PlayListContainer = styled.div`
width: 340px;
height: 60px;
padding: 1rem;
color: blueviolet;
background-color: #b1e9f8;
border-radius: 5px;
box-shadow: 0 4px 4px rgba(2, 15, 29, 0.242);
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
box-sizing: border-box;
font-size: 1.1rem;
color: blueviolet;
background-color: #b1e9f8;
margin-top: 5px;


img{
    border-radius: 5px;
    width: 50px;
    display: flex;
    margin: 5px;
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

`
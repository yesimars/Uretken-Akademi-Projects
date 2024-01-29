import styled from "styled-components";

export const StyledButton= styled.button`
width: 150px;
padding: 8px 12px;
text-align: center;
transform: uppercase;
transition: 0ms.2s;
background-size: 200% auto;
border: 1px solid #CCCCFF;
margin-left: 37rem;
background-image: linear-gradient(to right, #9370DB 0%, #CCCCFF 51%, #9370DB 100%);
border-image: linear-gradient(to right, #9370DB 0%, #CCCCFF 51%, #9370DB 100%);;
color: #ffffff;
box-shadow: 0 0 20px #eee;
border-radius: 10px 4px;
display: block;
text-decoration: none;
box-shadow: 0 4px 4px rgba(2, 15, 29, 0.242);

&:hover{
    background-position: right center;
    color: #ffffff;
    text-decoration: none;
}
`
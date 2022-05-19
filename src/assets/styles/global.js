import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', 'Lato', 'Open Sans', sans-serif; 
    }

    html, body{
        margin:0;
        padding:0;
        outline:0;
    }

    input[type='text'],
    input[type='tel'],
    input[type='email'],
    input[type='password']{
        border: none;
        width: 100%;
        max-width: 500px;
        border-bottom: 1px solid #333;
        outline: 0;
        padding-bottom: 5px;
        margin-bottom: 10px;
        &:focus {
            border-color: green;
            caret-color: green;
            color: green;
        } 
    }
`
// sans-serif sem aspas pois é qualquer fonte sem serifa
// caret-color cor do cursor
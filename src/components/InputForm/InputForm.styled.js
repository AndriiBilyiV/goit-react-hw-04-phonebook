import  styled  from "styled-components";
import { ErrorMessage, Form } from 'formik';
 
export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
width: 300px; 
margin-bottom: 48px;
`

export const FieldTitle = styled.label`
font-size: 20px;
display: flex;
flex-direction: column;
min-height: 80px;
`

export const ValidError = styled(ErrorMessage)`
font-size: 12px;
color: red;
`

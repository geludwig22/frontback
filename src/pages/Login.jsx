import styled from "styled-components"
import {mobile} from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://img.freepik.com/free-photo/happy-overjoyed-ethnic-lady-with-bushy-crisp-hair-gives-positive-answer-with-thumbs-up-likes-awesome-idea-closes-eyes-from-laugh-dressed-mockup-t-shirt-isolated-yellow-wall_273609-27923.jpg?w=2000") center;

    backgroun-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;  
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green,
        cursor: not-allowed,
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
      };

  return (
    <Container>
        <Wrapper>
            <Title>SING IN</Title>
            <Form>
                <Input placeholder="user name" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>Something went wrong...</Error>}
                <Link>Do not remember the password</Link>
                <Link>Create a New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
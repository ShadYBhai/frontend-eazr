import React, { useState } from 'react';
import axios from 'axios';

import background from "../assets/background.png";
import styled from "styled-components";
import rocketform from "../assets/rocketform.png";
import { Link } from 'react-router-dom';

const Rocket = () => {

    const [email, setEmail] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('https://eazr.onrender.com/login', { email })
            .then((response) => {
                console.log('Logged in successfully:', response.data);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                window.location.href = '/dashboard';
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };

    return (
        <RocketComponent>
            <FormComponent>
                <div>
                    <h1>
                        Enter <span>{" "}Dogify</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="email" id="email" value={email} onChange={handleEmailChange} required placeholder='Enter You Email' />
                        </div>
                        <button type="submit">Launch</button>
                    </form>
                    <Link to='/' className='link'>Dont have an account? Sign up here</Link>
                </div>

            </FormComponent>
        </RocketComponent>
    );
};

export default Rocket;

const RocketComponent = styled.div`

h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 32px;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #ffffff;
  }

  h1 > span {
    color: #0358ac;
  }

  img {
  }

  width: 100%;
    height: 100vh;
    display: flex;
  background-image: url(${background});
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const FormComponent = styled.div`


  form {
    display: flex;
    flex-direction: column;
  }


    .link{
        display: flex;
        justify-content: center;
        color: #0358ac;
        margin-top: 1rem;
    }

input {
    flex-direction: row;
    width: 334px;
    height: 52px;
    margin-top: 28px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    background: linear-gradient(
      90deg,
      rgba(3, 88, 172, 0.2) 0%,
      rgba(45, 45, 134, 0.2) 100%
    );
    opacity: 0.8;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    color: rgba(250, 250, 250, 0.7);
    text-indent: 24px;
    border: 1px solid #0358ac;
  }

  form > button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(250, 250, 250, 0.7);
    width: 334px;
    height: 51px;
    margin-top: 32px;
    background: linear-gradient(89.98deg, #0358ac -23.44%, #2d2d86 125.38%);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    border-radius: 200px;
    border: none;
    cursor: pointer;
  }
`;

import React, { useState, useEffect } from 'react';
import '../styles/SignUp.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import background from '../assets/background.png'

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const history = useNavigate();


    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            history('/dashboard')
        }
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://eazr.onrender.com/signup', {
                name: name,
                email: email,
                dateOfBirth: dateOfBirth,
            });

        }
        catch (error) {
            console.error(error);
        }
        const userData = {
            name: name,
            email: email,
            dateOfBirth: dateOfBirth,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        history('/dashboard');
    };

    return (
        <RocketComponent>

            <div className=''>

                <h1 style={{ color: "white" }} >Signup to<span> Dogify</span></h1>
                <FormComponent>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                required

                            />
                        </div>

                        <div >
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required

                            />
                        </div>

                        <div >
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                value={dateOfBirth}
                                onChange={handleDateOfBirthChange}
                                required

                            />
                        </div>

                        <button type="submit" className="submit-button">Sign Up</button>
                    </form>
                    <Link to='/login' className="note">Already have an account?</Link>
                </FormComponent>
            </div>
        </RocketComponent >
    );
};

export default SignupPage;

const RocketComponent = styled.div`

background-image: url(${background});

 width: 100%;
    height: 100vh;
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
  width: 100%;
    height: 100vh;
    display: flex;

  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const FormComponent = styled.div`

  label{
    position: relative;
    top: 1rem;
  }


  form {
    display: flex;
    flex-direction: column;
  }


    .note{
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
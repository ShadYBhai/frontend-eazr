import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fade } from "../Animation";

export const Navbar = () => {
    const { pathname } = useLocation();
    const history = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('user')
        localStorage.removeItem('profilePicture')
        history('/signin');
    };

    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/dashboard">
                    DOG<span>IFY</span>
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/dashboard">Doggy</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/dashboard" ? "50%" : "0%" }}
                    />
                </li>

                <li>
                    <motion.button className="btn" onClick={handleLogout} variants={fade}>
                        Logout
                    </motion.button>
                </li>

            </ul>
        </StyledNav>
    );
};
const StyledNav = styled.nav`
  min-height: 4vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  .btn{
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
       padding: 10px;
       width: 100px;
        border-radius: 6px;
        border: 2px solid #0358ac;
;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter',sans-serif;


        &:hover{
            background-color: #ff0000;
        }
        
    
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Moul", cursive;
    font-weight: 400;
    @media (max-width: 1250px) {
      font-size: 1rem;
    }
  }
  span {
        color: #0358ac;
;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
  @media (max-width: 1250px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
    #logo {
      display: inline-block;
      margin: 1rem;
    }

    ul {
      padding-bottom: 2rem;
      justify-content: space-around;
      width: 80%;
      li {
        padding: 0;
      }
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: red;
  width: 5%;
  position: absolute;
  bottom: -20%;
  left: 63%;

  @media (max-width: 1250px) {
    left: 0%;
  }
`;

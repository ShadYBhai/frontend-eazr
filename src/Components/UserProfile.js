import React, { useState, useEffect } from 'react';
import '../styles/UserProfile.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import background from '../assets/background.png'

const UserProfile = () => {
    const [profilePicture, setProfilePicture] = useState('');
    const loginUser = JSON.parse(localStorage.getItem('userData'));
    const signUpUser = JSON.parse(localStorage.getItem('user'));
    const user = loginUser || signUpUser;

    useEffect(() => {
        const savedProfilePicture = localStorage.getItem('profilePicture');
        if (savedProfilePicture) {
            setProfilePicture(savedProfilePicture);
        } else {
            fetchProfilePicture();
        }
    }, []);

    const fetchProfilePicture = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            const imageUrl = response.data.message;
            setProfilePicture(imageUrl);
            localStorage.setItem('profilePicture', imageUrl);
        } catch (error) {
            console.error(error);
        }
    };

    const calculateAge = (dateOfBirth) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const age = calculateAge(user.dateOfBirth);
    return (
        <div className='main-container'>
            <div className="user-profile">
                <div className="profile-picture-container">
                    <motion.img
                        className="profile-picture"
                        src={profilePicture}
                        alt="Profile"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="user-details">
                    <h2 className="user-name">{user.name}</h2>
                    <div className="divider"></div>
                    <p className="user-age">Age: {age}</p>
                    <div className="divider"></div>
                    <p className="user-email">Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;




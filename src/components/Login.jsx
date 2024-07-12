import React from "react";
import styled from "styled-components";

export default function Login() {
    const handleClick = () => {
        alert("test")
    }
    return <Container>
        <img style={{width: 50 + "%"}} src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" />
        <button onClick={handleClick}>Connect Account</button>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    height: 100vh; 
    width: 100%; 
    background-color: #111;
    gap: 3rem;
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none; 
        background-color: #1db954;
        font-size: 1.4rem;
        cursor: pointer; 
    }
`;
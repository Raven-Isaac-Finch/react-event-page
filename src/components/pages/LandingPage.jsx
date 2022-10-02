import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StyledHome } from '../styles/Home.styled'
import fakeEvent from '../../assets/image_1.png'

export default function LandingPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/event'), [navigate]);

  return (
    <StyledHome>
        <div className='container'>
            <div className='top-container'>
                <h1>Imagine if <span>Snapchat</span> had events.</h1>
                <p className='home-text'>Easily host and share events with your friends across any social media.</p>
            </div>
            <div className='event-container'>
                <img src={ fakeEvent } alt="fake-event-img" onClick={ handleOnClick }/>
            </div>
            <div className='btn-container'>
                <Link className='create-btn' to={'/create'}>Create my event</Link>
            </div>
        </div>
    </StyledHome>
  )
}

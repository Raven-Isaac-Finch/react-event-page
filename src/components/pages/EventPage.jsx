import React from 'react'
import { useNavigate } from "react-router-dom";
import { StyledEvent } from '../styles/Event.styled'
import eventImg from '../../assets/event_image.png'
import calendarIcon from '../../assets/calendar-icon.png'
import locationIcon from '../../assets/location-icon.png'
import arrow from '../../assets/arrow-icon.svg'

export default function EventPage() {
  let history = useNavigate();

  return (
    <StyledEvent>
        <div className="page-container">
            <div className='img-container'>
                <img src={ eventImg } alt="event-img" className='event-img'/>
            </div>
            <div className='title-container'>
                <h2 id='title'>Birthday Bash</h2>
                <p>Hosted by <strong>Elysia</strong></p>
            </div>
            <div className='info-container'>
                <div className='info-section'>
                    <img src={ calendarIcon } alt="calendar-icon" className='icons'/>
                    <div className='text-cont'>
                        <p className='text-title'>18 August 6:00PM</p>
                        <p className='text'>to <strong>19 August 1:00PM</strong> UTC +10</p>
                    </div>
                    <img src={ arrow } alt="arrow-right" />
                </div>
                <div className='info-section'>
                    <img src={ locationIcon } alt="location-icon" className='icons'/>
                    <div className='text-cont'>
                        <p className='text-title'>Street name</p>
                        <p className='text'>Suburb, State, Postcode</p>
                    </div>
                    <img src={ arrow } alt="arrow-right" />
                </div>
                <div>
                    <button onClick={() => history(-1)}><img src={ arrow } alt="arrow-right" className='reverse-arrow'/>Back</button>
                </div>
            </div>
        </div>
    </StyledEvent>
  )
}

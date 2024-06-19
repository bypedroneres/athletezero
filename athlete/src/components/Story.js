import React from 'react'
import "../components/Story.css"

function Story() {
  return (
    <div className='story'>
        <h2>The Story Behind Our Name</h2>
        <div className='story_Content'>
          <div className='story_Image'>
          <img src='/images/logotype.png' alt='Logo' />
          </div>
        <div className='story_Text'>
        <p>At Athlete Zero, we firmly believe in the uniqueness of every athlete. We adopt individualized approaches for each athlete, treating them as if they are the very first of their kind.</p>
                <p>Much like the concept of a "patient zero" in epidemiology, each athlete we work with is considered our "athlete zero."</p>
                <p>This underscores our commitment to tailoring our services to the distinctive needs, goals, and potential of every individual athlete.</p>
        </div>
        </div>      
    </div>
  )
}

export default Story

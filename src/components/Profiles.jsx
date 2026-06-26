import React from 'react'

function Profiles() {
  return (
    <div className="profile-card">
      <img 
        src="https://picsum.photos/200/300" 
        alt="Profile" 
        className="profile-img" 
      />
      <h2>Alex Smith</h2>
      <p className="title">Web Developer</p>
      <p className="bio">Hi! I am learning React and building my very first website profile page.</p>
    </div>
  )
}

export default Profiles
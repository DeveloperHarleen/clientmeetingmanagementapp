// src/components/MeetingList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MeetingList.css'; // Assuming you have CSS for styling

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch meetings from the JSON server
    axios.get('http://localhost:5000/meetings')
      .then(response => {
        setMeetings(response.data); // Store the fetched meetings
      })
      .catch(error => {
        console.error('Error fetching meetings:', error);
      });
  }, []);


  const [meetingList, setMeetingList] = useState(JSON.parse(localStorage.getItem("meetings")) || []);
  
  return (

        
    
    <div className="meeting-list-container">
      <h2>Meeting List</h2>
      <ul>
        {meetingList.map(meeting => (
          <li key={meeting.id}>
            {meeting.topic} - {meeting.numberOfPeople} people at {meeting.startTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;

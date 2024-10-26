import axios from 'axios';

const API_URL = 'http://localhost:3000/meetings';

export const createMeeting = (meetingData) => {
  return axios.post(API_URL, meetingData);
};

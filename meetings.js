var meetings = [
    {
      "id": 1,
      "topic": "Project Kickoff",
      "numberOfPeople": 5,
      "startTime": "2024-10-10T10:00"
    },
    {
      "id": 2,
      "topic": "Budget Discussion",
      "numberOfPeople": 3,
      "startTime": "2024-10-12T14:00"
    }
  ]

  localStorage.setItem("meetings", JSON.stringify(meetings));

    var clients = [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "123-456-7890",
        "company": "Doe Architects"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "987-654-3210",
        "company": "Smith Builders"
      }
    ]
    localStorage.setItem("clients", JSON.stringify(clients));
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../actions/todoActions'; // Ensure this path is correct
import './CreateMeeting.css';

const CreateMeeting = () => {
  const [meetingTopic, setMeetingTopic] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [startTime, setStartTime] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  
  const todos = useSelector((state) => state.todos.todos); // Get todos from Redux state
  const dispatch = useDispatch(); // Dispatch actions

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      id: editIndex >= 0 ? todos[editIndex].id : Date.now(), // Keep the same ID for editing
      topic: meetingTopic,
      numberOfPeople,
      startTime,
    };

    if (editIndex >= 0) {
      dispatch(editTodo(newMeeting)); // Dispatch action to edit the meeting
      setEditIndex(-1); // Reset edit index after editing
    } else {
      dispatch(addTodo(newMeeting)); // Dispatch action to add a new meeting
    }

    clearForm(); // Clear the form after submission
  };

  const clearForm = () => {
    setMeetingTopic('');
    setNumberOfPeople(1);
    setStartTime('');
  };

  const handleEdit = (index) => {
    const meeting = todos[index]; // Get the meeting to edit
    setMeetingTopic(meeting.topic);
    setNumberOfPeople(meeting.numberOfPeople);
    setStartTime(meeting.startTime);
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id)); // Dispatch action to delete the meeting
  };

  // Function to format the start time
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const optionsDate = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);

    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime);

    return `${formattedDate} at ${formattedTime}`;
  };

  
  const [meetingList, setMeetingList] = useState(JSON.parse(localStorage.getItem("meetings")) || []);
  
  return (
    <Container>
      <Row className="mb-4">
        <Col className="text-center">
          <div className="d-flex justify-content-center">
            <Link to="/loginpagedashboard" className="nav-link mx-2">Dashboard</Link>
            <Link to="/" className="nav-link mx-2">Logout</Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="d-flex flex-column align-items-center">
          <h2 className="mb-4">Scheduling a Meeting</h2>
          <Form onSubmit={handleSubmit} className="mb-4" style={{ width: '100%' }}>
            <Form.Group controlId="meetingTopic">
              <Form.Label>Meeting Topic</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Meeting Topic"
                value={meetingTopic}
                onChange={(e) => setMeetingTopic(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="numberOfPeople">
              <Form.Label>Number of People</Form.Label>
              <Form.Control
                type="number"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(Number(e.target.value))}
                min={1}
                required
              />
            </Form.Group>

            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </Form.Group>

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <Button variant="secondary" onClick={clearForm}>Clear</Button>
              <Button variant="primary" type="submit">{editIndex >= 0 ? 'Update Meeting' : 'Submit'}</Button>
            </div>
          </Form>
        </Col>

        <Col md={6} className="d-flex flex-column align-items-center">
          <h2 className="mb-4">Meeting List</h2>
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>No.</th>
                <th>View Details</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div>
                      <strong>Meeting Topic:</strong> {todo.topic}
                    </div>
                    <div>
                      <strong>Number of People:</strong> {todo.numberOfPeople}
                    </div>
                    <div>
                      <strong>Start Time:</strong> {formatDateTime(todo.startTime)} {/* Use formatted time */}
                    </div>
                  </td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(index)}>Edit</Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateMeeting;

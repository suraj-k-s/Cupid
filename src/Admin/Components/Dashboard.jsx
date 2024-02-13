import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import FullPageLoader from './FullPageLoader';
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [checkLoad, setCheckBlur] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const handleViewAnswers = (row) => {
    setSelectedQuestion(row);
  };
  const handleBackToList = () => {
    setSelectedQuestion(null);
  };
  const handleAccept = (row) => {
    // Handle accept action here
    console.log('Accepted:', row);
  };
  const handleReject = (row) => {
    // Handle reject action here
    console.log('Rejected:', row);
  };
  
  const questionColumns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'question', headerName: 'Question', flex: 3 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 4,
      renderCell: (params) => (
        <Box>
          <Button variant="contained" color="primary" onClick={() => handleAccept(params.row)}>Accept</Button>
          <Button variant="contained" color="secondary" onClick={() => handleReject(params.row)}>Reject</Button>
          <Button variant="contained" onClick={() => handleViewAnswers(params.row)}>View Answers</Button>
        </Box>
      ),
    },
  ];
  const answerColumns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'answer', headerName: 'Answer', flex: 3 },
  ];
  useEffect(() => {
    setCheckBlur(true);
    const fetchData = async () => {
      const exampleData = [
        { id: 1, question: 'How are you?', status: 'Pending' },
        { id: 2, question: 'What is your name?', status: 'Approved' },
        { id: 3, question: 'Where are you from?', status: 'Rejected' },
      ];
      setUserData(exampleData);
      setTimeout(() => {
        setCheckBlur(false);
      }, 1000);
    };
    fetchData();
  }, []);

  const handleFilter = (status) => {
    setFilter(status);
  };
  return (
    <>
      {checkLoad ? (
        <FullPageLoader />
      ) : (
        <Box>
          {!selectedQuestion ? (
            <div>
              <Typography variant="h4" gutterBottom>
                New Questions List
              </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={userData.filter((row) => {
                    if (filter === 'all') return true;
                    return row.status.toLowerCase() === filter;
                  })}
                  columns={questionColumns}
                  pageSize={5}
                  rowsPerPageOptions={[5, 10]}
                />
              </div>
            </div>
          ) : (
            <div>
              <Typography variant="h5" gutterBottom>
                Question: {selectedQuestion.question}
              </Typography>
              <Button variant="contained" onClick={handleBackToList}>Back to List</Button>
              <div style={{ marginBottom: '1rem' }}>
                <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => handleFilter('all')}>All</Button>
                <Button variant={filter === 'new' ? 'contained' : 'outlined'} onClick={() => handleFilter('new')}>New</Button>
                <Button variant={filter === 'approved' ? 'contained' : 'outlined'} onClick={() => handleFilter('approved')}>Approved</Button>
                <Button variant={filter === 'rejected' ? 'contained' : 'outlined'} onClick={() => handleFilter('rejected')}>Rejected</Button>
              </div>
              <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={[]} // Pass answers data here
                  columns={answerColumns}
                  pageSize={5}
                  rowsPerPageOptions={[5, 10]}
                />
              </div>
            </div>
          )}
        </Box>
      )}
    </>
  );
};
export default Dashboard;
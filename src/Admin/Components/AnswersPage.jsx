import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import FullPageLoader from './FullPageLoader';
const AnswersPage = () => {
    const [userData, setUserData] = useState([]);
    const [checkLoad, setCheckBlur] = useState(false);
    const [filter, setFilter] = useState('all');
    const loadDashboard = async () => {
      // Simulating a delay with setTimeout
      setTimeout(() => {
        setCheckBlur(false);
      }, 1000);
    };
    useEffect(() => {
      setCheckBlur(true);
      // Fetch your data from Firebase or any other source here
      const fetchData = async () => {
        // Example data
        const exampleData = [
          { id: 1, question: 'How are you?', status: 'Pending' },
          { id: 2, question: 'What is your name?', status: 'Approved' },
          { id: 3, question: 'Where are you from?', status: 'Rejected' },
        ];
        setUserData(exampleData);
      };
      fetchData();
      loadDashboard();
    }, []);
    const handleAccept = (row) => {
      // Handle accept action here
      console.log('Accepted:', row);
    };
    const handleReject = (row) => {
      // Handle reject action here
      console.log('Rejected:', row);
    };
    const handleViewAnswers = (row) => {
      // Handle navigation to answers for the specific question
      console.log('View Answers:', row);
    };
    const handleFilter = (status) => {
      setFilter(status);
    };
    const getAnswerCounts = (status) => {
      return userData.filter((row) => row.status === status).length;
    };
    const columns = [
      { field: 'id', headerName: 'ID', flex: 1 },
      { field: 'question', headerName: 'Question', flex: 3 },
      { field: 'status', headerName: 'Status', flex: 2 },
      {
        field: 'actions',
        headerName: 'Actions',
        flex: 4,
        renderCell: (params) => (
          <Box>
            <Button variant="contained" color="primary" onClick={() => handleAccept(params.row)}>Accept</Button>
            <Button variant="contained" color="secondary" onClick={() => handleReject(params.row)}>Reject</Button>
          </Box>
        ),
      },
    ];
    return (
      <>
        {checkLoad ? (
          <FullPageLoader />
        ) : (
          <Box>
            <div>
              <Typography variant="h4" gutterBottom>
                Answers List
              </Typography>
              <div style={{ marginBottom: '1rem' }}>
                <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => handleFilter('all')}>All</Button>
                <Button variant={filter === 'new' ? 'contained' : 'outlined'} onClick={() => handleFilter('new')}>New</Button>
                <Button variant={filter === 'approved' ? 'contained' : 'outlined'} onClick={() => handleFilter('approved')}>Approved</Button>
                <Button variant={filter === 'rejected' ? 'contained' : 'outlined'} onClick={() => handleFilter('rejected')}>Rejected</Button>
              </div>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={userData.filter((row) => {
                    if (filter === 'all') return true;
                    return row.status.toLowerCase() === filter;
                  })}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5, 10]}
                />
              </div>
            </div>
          </Box>
        )}
      </>
    );
  };
export default AnswersPage;
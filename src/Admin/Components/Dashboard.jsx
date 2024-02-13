import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import FullPageLoader from './FullPageLoader';
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [checkLoad, setCheckBlur] = useState(false);
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
        { id: 2, question: 'What is your name?', status: 'Pending' },
        { id: 3, question: 'Where are you from?', status: 'Pending' },
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
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'question', headerName: 'Question', flex: 3 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 3,
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
              New Questions List
            </Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={userData}
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
export default Dashboard;
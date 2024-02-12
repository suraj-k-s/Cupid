import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

import { Box, Typography } from '@mui/material'
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import FullPageLoader from './FullPageLoader'

const Dashboard = () => {
  const [userData, setUserData] = useState([])
  const [checkLoad, setCheckBlur] = useState(false)

  const loadDashboard = async () => {
    setTimeout(() => {
        setCheckBlur(false);
    }, 1000); 
}


  useEffect(() => {
    setCheckBlur(true)
    loadDashboard()
  }, [])

  const columns = [
    { field: 'index', headerName: 'ID', flex: 1 },
    { field: 'Question', headerName: 'Question', flex: 3 },
    { field: 'Action', headerName: 'Action', flex: 3 },
  ]

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
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            </div>
          </div>
        </Box>
      )}
    </>
  )
}

export default Dashboard

import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AccountCircle from '@mui/icons-material/AccountCircle'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import { Stack } from '@mui/material'
import Dashboard from './Components/Dashboard'

const drawerWidth = 250

const ResponsiveDrawer = (props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const location = useLocation() 

  const drawer = (
    <div>
      <Toolbar>
        <Stack direction={'row'} sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src='logo.png'
            alt="Logo"
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
          />
          <Typography
            variant="h5"
            sx={{  fontWeight: '700' }}
            style={{ color: '#420D17' }}
          >
            <span style={{ color: '#FA0D28' }}>Cu</span>pid
          </Typography>
        </Stack>
      </Toolbar>

      <List className="sidebar-sty">
        <ListItem disablePadding className="inner-box">
          <Link
          style={{textDecoration:'none'}}
            to={'/Admin'}
            className={`sidebar-btn ${
              location.pathname === '/Admin' ? 'active-link' : ''
            }`}
            onClick={handleDrawerToggle}
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon className="icon-clr" />
              </ListItemIcon>
              <ListItemText primary="New" />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding className="inner-box">
          <Link
          style={{textDecoration:'none'}}
            to={'/Admin'}
            className={`sidebar-btn ${
              location.pathname === '/Admin' ? 'active-link' : ''
            }`}
            onClick={handleDrawerToggle}
          >
            <ListItemButton>
              <ListItemIcon>
                <ThumbUpIcon className="icon-clr" color='green' />
              </ListItemIcon>
              <ListItemText primary="Approved" />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding className="inner-box">
          <Link
          style={{textDecoration:'none'}}
            to={'/Admin'}
            className={`sidebar-btn ${
              location.pathname === '/Admin' ? 'active-link' : ''
            }`}
            onClick={handleDrawerToggle}
          >
            <ListItemButton>
              <ListItemIcon>
                <ThumbDownIcon className="icon-clr" />
              </ListItemIcon>
              <ListItemText primary="Rejected" />
            </ListItemButton>
          </Link>
        </ListItem>

      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white !important',
          color: 'black !important',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <div>
            <div className="profile-icon">
              <Typography variant="h7" sx={{ ml: 1, color: 'white' }}>
                Admin
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
              >
                <AccountCircle sx={{ color: 'white' }} />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Box>
    </Box>
  )
}


export default ResponsiveDrawer

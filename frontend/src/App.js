import React from 'react'
import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FaPen } from 'react-icons/fa'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import PostsList from './components/PostsList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  container: {
    marginTop: theme.spacing(3),
  },
  // Yeni stil
  inlineBlock: {
    display: 'inline-block'
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          
        <Toolbar justifyContent="space-between">
          <IconButton edge="start" className={classes.menuButton} /> 
          <Typography variant="h6" color="secondary" className={classes.title}>
            <a href="http://localhost:3000/posts" className={classes.inlineBlock}>Blogify</a>
          </Typography>
          <Button color="primary" variant="outlined" startIcon={<FaPen />} className={classes.inlineBlock}>Yeni Yazı</Button>
        </Toolbar>

        </AppBar>
        <Grid container className={classes.container}>
        <Router>
          <Routes>
            <Route path="/posts" element={<PostsList />} />
            <Route path="/" element={<Navigate to="/posts" />} />
          </Routes>
        </Router>
        </Grid>
      </Container>
    </>
  )
}

export default App
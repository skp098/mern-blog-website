import {AppBar,Toolbar,IconButton,Typography,makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';


const useStyles = makeStyles({
    component:{
      background: '#ffffff',
      color: 'black'
    },
    container:{
      justifyContent:'center',    
      '& > *':{
        padding:20
      }
    },
    link:{
      textDecoration:'none',
      color:'inherit'
    }
  });

const Header = () =>{

    const navigate = useNavigate();
    const { oktaAuth, authState } = useOktaAuth();    

    if (authState && authState.isPending) return null;

    const login = async () => navigate('/login');
  
    const logout = async () => oktaAuth.signOut();

    const button = authState.isAuthenticated ?
    <button onClick={logout}>Logout</button> :
    <button onClick={login}>Login</button>;    

    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
          <Toolbar className={classes.container}>
            <Link to={'/'} className={classes.link}><Typography>HOME</Typography></Link>
            <Typography>ABOUT</Typography>
            <Typography>CONTACT</Typography>
            <Typography>LOGIN</Typography>
            <Typography>{button}</Typography>
          </Toolbar>
        </AppBar>    
    );
}

export default Header;
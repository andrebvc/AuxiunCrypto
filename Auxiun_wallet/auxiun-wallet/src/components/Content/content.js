import ItemList from './Items/item-list';
import MarketPlace from './marketplace/marketplace';
import Balance from './balance/balance';
import LogIn from './login/login';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  marketplace: {
    background: '#333333'
  },
  logIn: {
    align: "center"  
  }
}))

export default function Content(props) {
  const classes = useStyles();
  

  return (
    <div>
      {props.loggedIn ? 
        // When logged in, display the homepage components
        <Grid container spacing={2}>
          { 
          // if Home is selected in the menu
          props.home ?
            <Grid item xs={8}>
              <ItemList></ItemList>
            </Grid>
          // else, if Marketplace is selected in the menu
            :
            <Grid item xs={8} className={classes.marketplace}>
              <MarketPlace></MarketPlace> 
            </Grid>
          }
          <Grid item xs={4}> 
            <Balance user={props.user}></Balance>
          </Grid>
        </Grid>
        :
        // else, display the login components
        <LogIn handleNewUser={props.handleNewUser} setUser={props.setUser} user={props.user}></LogIn>
      }   
    </div>
  )
}
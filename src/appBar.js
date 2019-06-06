import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

function DenseAppBar() {

    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {

        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (

        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >

            <List component="nav">

                <ListItem button onClick={() => { alert("Qui dovrebbe renderizzare la componente Fumetto.js"); }} >
                    <ListItemText primary="Alley" />
                </ListItem>

                <ListItem onClick={() => { alert("Qui dovrebbe renderizzare la componente Dipinto.js"); }}>
                    <ListItemText primary="Dipinto" />
                </ListItem>

            </List>

        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">

                <Toolbar variant="dense">

                    <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" color="inherit">
                        Infinite Comics
                    </Typography>

                </Toolbar>

                <SwipeableDrawer
                    open={state.left}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {sideList('left')}
                </SwipeableDrawer>

            </AppBar>
        </div>
    );
}

export default DenseAppBar;

import React from 'react'
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Button, Divider,
    Drawer,
    Grid, IconButton,
    List,
    ListItem, ListItemIcon, ListItemText,
    Paper, Toolbar, Typography
} from "@material-ui/core";
import classes from './Header.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive'
import ContactsIcon from '@material-ui/icons/Contacts';
import StarsIcon from '@material-ui/icons/Stars';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'

type PropsType = {}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Header: React.FC<PropsType> = (props) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor: Anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText><Link className={classes.headerMobileLink} to='/home'>Главная</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ContactsIcon/></ListItemIcon>
                    <ListItemText><Link className={classes.headerMobileLink} to='/contacts'>Контакты</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><StarsIcon/></ListItemIcon>
                    <ListItemText><Link className={classes.headerMobileLink} to='/catalog'>Товары</Link></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><LiveHelpIcon/></ListItemIcon>
                    <ListItemText><Link className={classes.headerMobileLink} to='/fqa'>Часто задаваемые вопросы</Link></ListItemText>
                </ListItem>
            </List>
            <Divider/>
        </div>
    );

    return (
        <>
            <Grid container className={classes.headerContainer}>
                <Grid item xs={12} justify='center' alignItems="center">
                    <AppBar position="static">
                        <Toolbar>
                            <MediaQuery maxWidth={776}>
                                {(['left'] as Anchor[]).map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <IconButton edge="start" color="inherit" aria-label="menu"
                                                    onClick={toggleDrawer(anchor, true)}>
                                            <MenuIcon/>
                                        </IconButton>
                                        <Button className={classes.homePageButton} color="inherit">Остров-Торг</Button>
                                        <Drawer anchor={anchor} open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}>
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </MediaQuery>
                            <MediaQuery minWidth={776}>
                                <Typography variant="h6" className={classes.brand}>
                                    Остров-Торг
                                </Typography>
                                <Link className={classes.headerLink} to='/home'><Button color="inherit">Главная</Button></Link>
                                <Link className={classes.headerLink} to='/contacts'><Button color="inherit">Контакты</Button></Link>
                                <Link className={classes.headerLink} to='/catalog'><Button color="inherit">Товары</Button></Link>
                                <Link className={classes.headerLink} to='/fqa'><Button color="inherit">Часто задаваемые вопросы</Button></Link>
                            </MediaQuery>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </>
    )
}

export default Header
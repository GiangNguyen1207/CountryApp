import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';

import SearchBar from '../SearchBar';
import DrawerComponent from '../Drawer';
import { AppState } from '../../type';
import ThemeContext from '../../Context/';
import { toggleDrawerAction } from '../../redux/actions/cart';

type SearchProps = {
  input: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '50%',
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const AppBarComponent = ({ input, handler }: SearchProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { theme, switchTheme } = useContext(ThemeContext);

  const quantity = useSelector((state: AppState) => state.cart.countryCart);

  const drawerStatus = useSelector((state: AppState) => state.cart.isOpen);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: theme.forground }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {['Blue', 'Green', 'Red'].map((color) => {
              return (
                <MenuItem
                  style={{ backgroundColor: color, color: 'white' }}
                  key={color}
                  onClick={() => switchTheme(color)}
                >
                  {color}
                </MenuItem>
              );
            })}
          </Menu>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <SearchBar input={input} handler={handler} />
          </div>
          <div className={classes.grow} />
          <IconButton color="inherit" edge="end">
            <Badge badgeContent={quantity.length} color="secondary">
              <ShoppingCartIcon
                onClick={() => dispatch(toggleDrawerAction(true))}
              />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        open={drawerStatus}
        toggleDrawer={() => dispatch(toggleDrawerAction(false))}
      />
    </div>
  );
};

export default AppBarComponent;

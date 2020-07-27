import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import { Link, Redirect } from 'react-router-dom';
import { Button, MenuItem } from '@material-ui/core';
// import * as ProdutosActions from "../store/produtos/actions";
import Menu from '@material-ui/core/Menu';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    flexGrow: 1,
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'flex',
  },
}));

const Header = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(null)
  const [redirect, setRedirect] = useState('')

  const handleMenuOpen = (event : any) => {
    setMenuOpen(event.currentTarget);
  }

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  const MenuPrincipal = () => <Menu
    id="simple-menu"
    anchorEl={menuOpen}
    keepMounted
    open={Boolean(menuOpen)}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={() => setRedirect('/')}>Tela Inicial</MenuItem>
    <MenuItem onClick={() => setRedirect('/minhaconta')}>Minha Conta</MenuItem>
  </Menu>;

  return (
    <div className='barra-topo'>
      {redirect &&
        <Redirect to={redirect} />
      }
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className='menuButton'
            color="inherit"
            aria-label="open drawer"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <MenuPrincipal />
          <Link to="/" className={classes.title}>
            <Typography variant="h6" noWrap>Tela inicial</Typography>
          </Link>
          <div className={classes.sectionDesktop}>
            <Link to="/minhaconta">
              <Button aria-label="Faça login" color="inherit">
                Entrar&nbsp;
                <Person />
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;

// function mapStateToProps(state) {
//   const { produtos } = state;
//   return {
//     filtroProdutos: produtos.filtroProdutos,
//   };
// }

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(ProdutosActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Header);

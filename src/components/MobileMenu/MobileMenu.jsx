import React from 'react';
import { BrowserRouter as  Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Link } from 'react-router-dom';


const ITEM_HEIGHT = 48;

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
        position: 'fixed', bottom: '40px', right: '40px'
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
    menuItems: [
        { icon: '/img/icons/info.png', name: 'На главную', page: '' },
        { icon: '/img/icons/info.png', name: 'О компании', page: 'about' },
        { icon: '/img/icons/design.png', name: 'Что мы проектируем', page: 'we-are' },
        { icon: '/img/icons/copyright.png', name: 'Лицензия на проектные работы', page: 'license' },
        { icon: '/img/icons/briefcase.png', name: 'Наши проекты', page: 'our-projects' },
        { icon: '/img/icons/abacus.png', name: 'Компания в цифрах', page: 'company-in-numbers' },
        { icon: '/img/icons/team.png', name: 'Наша команда', page: 'our-team' },
        { icon: '/img/icons/contacts.png', name: 'Контакты и реквизиты', page: 'contacts' },
      ],
    curPage: '',
    redirect: false
  };

//   handleClick = event => {
//     this.setState({ anchorEl: event.currentTarget });
//     console.log('state', this.state);
//   };

//   handleClose = page => {
//     //   if (typeof page !== 'object') {
//         //   console.log('page', typeof page);
//           this.setState( {curPage: page, redirect: true});
//         // }
//     this.setState({ anchorEl: null });
//     console.log('state', this.state);

//   };

handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (page) => {
       if (typeof page !== 'object') {
        //   console.log('page', typeof page);
          this.setState( {curPage: page, redirect: true}, () => this.setState({redirect: false}));
        }
    this.setState({ anchorEl: null });
    // console.log('state', this.state);
  };

  render() {
    const { anchorEl, menuItems, curPage, redirect } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;

    console.log('state', this.state);

    return (
      <div>
        <Fab color="primary" aria-label="Edit" className={classes.fab} onClick={this.handleClick} aria-label="Меню"
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true">
                <MenuIcon />
        </Fab>
        
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 8,
              width: 300,
            //   height: 400
            },
          }}
        >
          {menuItems.map(item => (
            <MenuItem key={item.page} selected={item.page === this.state.curPage} onClick={() => this.handleClose(item.page)}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>

        {this.state.redirect === true ? <Redirect to={`/${this.state.curPage}`} /> : false } 
      </div>
    );
  }
}

  
  export default withStyles(styles)(LongMenu);
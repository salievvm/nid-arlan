import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import VerticalMenuButton from '../VerticalMenuButton/VerticalMenuButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -28,
    marginRight: 10,
    marginTop: -18
  },
  button: {
    margin: theme.spacing.unit,
  },
  lightTooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
  arrowPopper: arrowGenerator(theme.palette.grey[900]),
  arrow: {
    position: 'absolute',
    fontSize: 12,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: '5px auto',
      display: 'block',
      width: 0,
      height: '50%',
      borderStyle: 'solid',
    },
  },
  bootstrapPopper: arrowGenerator(theme.palette.common.black),
  bootstrapTooltip: {
    backgroundColor: theme.palette.grey[900],
  },
  bootstrapPlacementLeft: {
    margin: '0 8px',
  },
  bootstrapPlacementRight: {
    margin: '0 36px',
  },
  bootstrapPlacementTop: {
    margin: '8px 0',
  },
  bootstrapPlacementBottom: {
    margin: '8px 0',
  },
  htmlPopper: arrowGenerator('#dadde9'),
  htmlTooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    '& b': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  buttonMenu: {
    padding: '0',
    minWidth: 'auto',
    minHeight: 'auto',
    height: '30px',
    borderRadius: '50%',
    margin: '15px 0',
    "&:first-child":{
      marginTop: '0'
    }
  }
});

class VerticalMenu extends Component {
  state = {
    arrowRef: null,
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    const { items, classes } = this.props;

    return (
        <nav className="vertical-menu">
            {/* <ButtonBurger /> */}
            <Toolbar variant="dense">
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
              
            </Toolbar>
            <div className="vertical-menu__items">
                {
                    items.map(item => {
                        return (<Tooltip placement="right" key={`m_`+item.page}
                        title={
                          <React.Fragment>
                            <Typography style={{padding: '5px'}} variant='body2'>{item.name}</Typography>
                            <span className={classes.arrow} ref={this.handleArrowRef} />
                          </React.Fragment>
                        }
                        classes={{ 
                          tooltip: classes.bootstrapTooltip,
                          popper: classes.arrowPopper,
                          tooltipPlacementRight: classes.bootstrapPlacementRight,}}
                        PopperProps={{
                          popperOptions: {
                            modifiers: {
                              arrow: {
                                enabled: Boolean(this.state.arrowRef),
                                element: this.state.arrowRef,
                              },
                            },
                          },
                        }}>
                        <Button className={classes.buttonMenu}>
                          <VerticalMenuButton
                            icon={item.icon}
                            name={item.name}
                            page={item.page}
                              />
                            </Button>
                            </Tooltip>)
                    })
                }
            </div>
        </nav>
    );
  }
}

export default withStyles(styles)(VerticalMenu);;
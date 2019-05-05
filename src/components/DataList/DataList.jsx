import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class DataList extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return(
      <Paper className={ this.props.root }>
        <Table className={ this.props.table }>
          <TableHead>
            <TableRow>
              { this.props.headers.map(header => (
                <TableCell key={ header }>{ header }</TableCell>
              )) }
            </TableRow>
          </TableHead>
          <TableBody>
            { this.props.rows.map(row => (
              <TableRow key={ row }>
                { row.map(category => (
                  <TableCell key={ category }>{ category }</TableCell>
                ))}
                <TableCell>
                  <IconButton variant="contained" onClick={this.handleClick}><MoreVert /></IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    { this.props.actions.map((action, i) => (
                      <MenuItem onClick={this.handleClose} key={`${action}-${i}`}>{ action }</MenuItem>
                    ))}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DataList.propTypes = {
  headers: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired
};

export default withStyles(styles)(DataList);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
              { this.props.data.headers.map(header => (
                <TableCell>{ header }</TableCell>
              )) }
            </TableRow>
          </TableHead>
          <TableBody>
            { this.props.data.rows.map(row => (
              <TableRow>
                { row.slice(0, row.length - 1).map(category => (
                  <TableCell>{ category }</TableCell>
                )) }
                <TableCell>
                  <Button variant="contained" onClick={this.handleClick}>Default</Button>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>Edit</MenuItem>
                    <MenuItem onClick={this.handleClose}>Assign</MenuItem>
                    <MenuItem onClick={this.handleClose}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DataList.propTypes = {
  data: PropTypes.array,
};

export default withStyles(styles)(DataList);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  render() {
    return(
      <Paper className={this.props.root}>
        <Table className={this.props.table}>
          <TableHead>
            <TableRow>
              <TableCell>Head 1</TableCell>
              <TableCell>Head 2</TableCell>
              <TableCell>Head 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Row 1</TableCell>
              <TableCell>Row 2</TableCell>
              <TableCell>Row 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }

  DataList.propTypes = {
    name: PropTypes.string;
    rows: PropTypes.number;
    cols: PropTypes.number;
  };
}

export default withStyles(styles)(DataList);

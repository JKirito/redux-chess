import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tableContainer: {
    marginBottom: 10,
  },
});

const TournamentGameTable = ({props}) => {
  const classes = useStyles();
  const state = useSelector(state => state);

  if (state.tournamentGameTable.open) {
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader size="small" aria-label="Chess Openings">
          <TableBody>
            {
              Object.entries(state.tournamentGameTable.game).map(([key, val]) => (
                <TableRow key={key}>
                  <TableCell align="right">{key}</TableCell>
                  <TableCell align="left">{val}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return null;
}

export default TournamentGameTable;

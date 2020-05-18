import React from "react";
import {
  createStyles,
  Grid,
  Grow,
  Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme, withStyles
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {exercises} from "../../mock_data/exercises";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // backgroundColor: '#fff'
    },
    paper: {
      backgroundColor: '#2B2D2E'
    },
    table: {
      minWidth: 650
    }
  }),
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      color: theme.palette.common.white,
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

export const Stats: React.FC = () => {

  const css = useStyles();

  return (
    <Grid container className={css.container} item justify={'center'} alignItems={'center'} spacing={1}>
      <Grid item>
        <Grow in={true}>
          <TableContainer className={css.paper} component={Paper}>
            <Table className={css.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Exercise</StyledTableCell>
                  <StyledTableCell align="left">Measurement Unit</StyledTableCell>
                  <StyledTableCell align="left">Points per Unit</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exercises.map((exercise) => (
                  <StyledTableRow key={exercise.id}>
                    <StyledTableCell component="th" scope="row">{exercise.title}</StyledTableCell>
                    <StyledTableCell align="left">{exercise.measurementUnit.title} ({exercise.measurementUnit.shortName})</StyledTableCell>
                    <StyledTableCell align="left">{exercise.pointsPerUnit}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grow>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import {createStyles, Grid, Grow, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // backgroundColor: '#fff'
    },
    paper: {
      backgroundColor: '#2B2D2E',
      height: '200px',
      width: '400px'
    }
  }),
);

export const Home: React.FC = () => {

  const css = useStyles();

  return (
    <Grid container className={css.container} item justify={'center'} alignItems={'center'} spacing={3}>
      <Grid item>
        <Grow in={true}>
          <Paper className={css.paper} elevation={3} />
        </Grow>
      </Grid>
      <Grid item>
        <Grow in={true}>
          <Paper className={css.paper} elevation={3} />
        </Grow>
      </Grid>
      <Grid item>
        <Grow in={true}>
          <Paper className={css.paper} elevation={3} />
        </Grow>
      </Grid>
    </Grid>
  );
};

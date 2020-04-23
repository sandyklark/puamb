import React, {useState} from "react";
import {Button, ButtonGroup, createStyles, Grid, Paper, Theme, Tooltip, Zoom} from "@material-ui/core";
import PetsIcon from '@material-ui/icons/Pets';
import {makeStyles} from "@material-ui/core/styles";
import {PageConfig, pages} from "../../pages/pages";
import {useHistory, useLocation} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: '#2B2D2E',
      padding: '20px'
    }
  }),
);


export const Navigation: React.FC = () => {

  const css = useStyles();
  const history = useHistory();
  const location = useLocation();

  const handleNavButtonClicked = (pageConfig: PageConfig) => {
    history.push(pageConfig.path);
  };

  const renderButtons = () => {

    return pages.map((pageConfig) => {

      const variant = pageConfig.path === location.pathname ? 'outlined' : 'contained';
      return (
        <Button variant={variant} endIcon={<pageConfig.icon/>} onClick={() => handleNavButtonClicked(pageConfig)}>
          {pageConfig.title}
        </Button>
      );
    });
  }

  return (
    <Paper className={css.paper} elevation={1}>
      <Grid container direction={'column'} justify={'center'} alignItems={'center'}>
        <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
          {renderButtons()}
        </ButtonGroup>
      </Grid>
    </Paper>
  );
};

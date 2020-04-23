import PetsIcon from "@material-ui/icons/Pets";
import {createStyles, Theme, Tooltip, Zoom} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    div: {
      textAlign: 'center',
      margin: '20px'
    },
    hoverCursor: {
      cursor: 'pointer'
    }
  })
);

export const Header: React.FC = () => {

  const history = useHistory();
  const css = useStyles();

  return (
    <div className={css.div}>
      <PetsIcon color={'secondary'}/>
        <Tooltip placement={"bottom"} arrow TransitionComponent={Zoom} title={'Push Up Against My Booty'}>
          <h1 className={css.hoverCursor} style={{color: '#fff'}} onClick={() => history.push('/')}>
            P.U.A.M.B
          </h1>
        </Tooltip>
    </div>
  );
}

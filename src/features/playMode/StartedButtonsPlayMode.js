import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { drawOfferDialogOpen } from '../../features/dialog/drawOfferDialogSlice';
import { resignAcceptDialogOpen } from '../../features/dialog/resignAcceptDialogSlice';
import { takebackOfferDialogOpen } from '../../features/dialog/takebackOfferDialogSlice';
import { modeName } from '../../features/modeConstant';

const useStyles = makeStyles({
  buttonGroup: {
    marginTop: 15,
  },
});

const StartedButtonsPlayMode = () => {
  const classes = useStyles();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  if (state.mode.name === modeName.PLAY) {
    if (state.mode.play.accepted) {
      if (
        !state.board.isMate &&
        !state.mode.play.draw &&
        !state.mode.play.resign &&
        !state.mode.play.leave &&
        !state.mode.play.timer.over
      ) {
        return (
          <ButtonGroup
            className={classes.buttonGroup}
            size="small"
            aria-label="Game Buttons"
            orientation="vertical"
            fullWidth={true}
          >
            <Button onClick={() => dispatch(takebackOfferDialogOpen())}>
              Propose a takeback
            </Button>
            <Button onClick={() => dispatch(drawOfferDialogOpen())}>
              Offer draw
            </Button>
            <Button onClick={() => dispatch(resignAcceptDialogOpen())}>
              Resign
            </Button>
          </ButtonGroup>
        );
      }
    }
  }

  return null;
}

export default StartedButtonsPlayMode;

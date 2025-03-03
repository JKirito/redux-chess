import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, ButtonGroup, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { createInviteCodeDialogOpen } from '../features/dialog/createInviteCodeDialogSlice';
import { enterInviteCodeDialogOpen } from '../features/dialog/enterInviteCodeDialogSlice';
import { loadFenDialogOpen } from '../features/dialog/loadFenDialogSlice';
import { loadPgnDialogOpen } from '../features/dialog/loadPgnDialogSlice';
import { openingSearchEcoDialogOpen } from '../features/dialog/openingSearchEcoDialogSlice';
import { openingSearchMovetextDialogOpen } from '../features/dialog/openingSearchMovetextDialogSlice';
import { openingSearchNameDialogOpen } from '../features/dialog/openingSearchNameDialogSlice';
import { playLikeGrandmasterDialogOpen } from '../features/dialog/playLikeGrandmasterDialogSlice';
import { progressDialogOpen } from '../features/dialog/progressDialogSlice';
import { watchDialogOpen } from '../features/dialog/watchDialogSlice';
import { modeName } from '../features/modeConstant';
import { modeStartAnalysis } from '../features/modeSlice';
import WsAction from '../ws/WsAction';

const MainButtons = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [anchorElPlayFriend, setAnchorElPlayFriend] = useState(null);
  const [anchorElAnalysis, setAnchorElAnalysis] = useState(null);
  const [anchorElTraining, setAnchorElTraining] = useState(null);
  const [anchorElOpeningSearch, setAnchorElOpeningSearch] = useState(null);

  const matches = useMediaQuery("(min-width:900px)");

  const handleClosePlayFriend = () => {
    setAnchorElPlayFriend(null);
  };

  const handleCloseAnalysis = () => {
    setAnchorElAnalysis(null);
  };

  const handleCloseTraining = () => {
    setAnchorElTraining(null);
  };

  const handleCloseOpeningSearch = () => {
    setAnchorElOpeningSearch(null);
  };

  const handleClickPlayFriend = (event) => {
    setAnchorElPlayFriend(event.currentTarget);
  };

  const handleClickAnalysis = (event) => {
    setAnchorElAnalysis(event.currentTarget);
  };

  const handleClickTraining = (event) => {
    setAnchorElTraining(event.currentTarget);
  };

  const handleClickOpeningSearch = (event) => {
    setAnchorElOpeningSearch(event.currentTarget);
  };

  return (
    <ButtonGroup
      orientation="vertical"
      size="small"
      variant="text"
      aria-label="Main Menu"
      fullWidth={matches ? false : true}
      disabled={state.mode.name === modeName.PLAY &&
        state.mode.play.accepted &&
        !state.mode.play.draw &&
        !state.mode.play.resign &&
        !state.mode.play.resign &&
        !state.mode.play.leave &&
        !state.mode.play.timer.over &&
        !state.board.isMate
      }>
      <Button
        startIcon={<LanguageIcon />}
        onClick={() => {
          dispatch(progressDialogOpen());
          WsAction.onlineGames(state);
        }}
      >
        Play Online
      </Button>
      <Button
        startIcon={<GroupAddIcon />}
        onClick={handleClickPlayFriend}
      >
        Play a Friend
      </Button>
      <Menu
        anchorEl={anchorElPlayFriend}
        keepMounted
        open={Boolean(anchorElPlayFriend)}
        onClose={handleClosePlayFriend}
      >
        <MenuItem onClick={() => {
          dispatch(createInviteCodeDialogOpen());
          dispatch(modeStartAnalysis());
          handleClosePlayFriend();
        }}>Create Invite Code</MenuItem>
        <MenuItem onClick={() => {
          dispatch(enterInviteCodeDialogOpen());
          handleClosePlayFriend();
        }}>Enter Invite Code</MenuItem>
      </Menu>
      <Button
        startIcon={<TuneIcon />}
        onClick={handleClickAnalysis}
      >
        Analysis Board
      </Button>
      <Menu
        anchorEl={anchorElAnalysis}
        keepMounted
        open={Boolean(anchorElAnalysis)}
        onClose={handleCloseAnalysis}
      >
        <MenuItem onClick={() => {
          WsAction.quit(state).then(() => WsAction.startAnalysis(state.server.ws));
          handleCloseAnalysis();
        }}>
          Start Position
        </MenuItem>
        <MenuItem onClick={() => {
          dispatch(loadFenDialogOpen());
          handleCloseAnalysis();
        }}>
          FEN String
        </MenuItem>
        <MenuItem onClick={() => {
          dispatch(loadPgnDialogOpen());
          handleCloseAnalysis();
        }}>
          PGN Movetext
        </MenuItem>
      </Menu>
      <Button
        startIcon={<PsychologyIcon />}
        onClick={handleClickTraining}
      >
        Training
      </Button>
      <Menu
        anchorEl={anchorElTraining}
        keepMounted
        open={Boolean(anchorElTraining)}
        onClose={handleCloseTraining}
      >
        <MenuItem onClick={() => {
          dispatch(playLikeGrandmasterDialogOpen());
          handleCloseTraining();
        }}>
          Guess the Move
        </MenuItem>
        <MenuItem onClick={() => {
          dispatch(progressDialogOpen());
          WsAction.quit(state).then(() => WsAction.randomGame(state));
          handleCloseTraining();
        }}>
          Random Tournament Game
        </MenuItem>
      </Menu>
      <Button
        startIcon={<SearchIcon />}
        onClick={handleClickOpeningSearch}
      >
        Opening Search
      </Button>
      <Menu
        anchorEl={anchorElOpeningSearch}
        keepMounted
        open={Boolean(anchorElOpeningSearch)}
        onClose={handleCloseOpeningSearch}
      >
        <MenuItem onClick={() => {
          dispatch(openingSearchEcoDialogOpen());
          handleCloseOpeningSearch();
        }}>
          ECO Code
        </MenuItem>
        <MenuItem onClick={() => {
          dispatch(openingSearchNameDialogOpen());
          handleCloseOpeningSearch();
        }}>
          Name
        </MenuItem>
        <MenuItem onClick={() => {
          dispatch(openingSearchMovetextDialogOpen());
          handleCloseOpeningSearch();
        }}>
          Movetext
        </MenuItem>
      </Menu>
      <Button
        startIcon={<OndemandVideoIcon />}
        onClick={() => dispatch(watchDialogOpen())}
      >
        Watch
      </Button>
    </ButtonGroup>
  );
}

export default MainButtons;

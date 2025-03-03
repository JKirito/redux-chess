import infoAlertReducer from '../features/alert/infoAlertSlice';
import createInviteCodeDialogReducer from '../features/dialog/createInviteCodeDialogSlice';
import drawAcceptDialogReducer from '../features/dialog/drawAcceptDialogSlice';
import drawOfferDialogReducer from '../features/dialog/drawOfferDialogSlice';
import enterInviteCodeDialogReducer from '../features/dialog/enterInviteCodeDialogSlice';
import heuristicsDialogReducer from '../features/dialog/heuristicsDialogSlice';
import loadFenDialogReducer from '../features/dialog/loadFenDialogSlice';
import loadPgnDialogReducer from '../features/dialog/loadPgnDialogSlice';
import openingSearchEcoDialogReducer from '../features/dialog/openingSearchEcoDialogSlice';
import openingSearchMovetextDialogReducer from '../features/dialog/openingSearchMovetextDialogSlice';
import openingSearchNameDialogReducer from '../features/dialog/openingSearchNameDialogSlice';
import playLikeGrandmasterDialogReducer from '../features/dialog/playLikeGrandmasterDialogSlice';
import playOnlineDialogReducer from '../features/dialog/playOnlineDialogSlice';
import progressDialogReducer from '../features/dialog/progressDialogSlice';
import rematchAcceptDialogReducer from '../features/dialog/rematchAcceptDialogSlice';
import rematchOfferDialogReducer from '../features/dialog/rematchOfferDialogSlice';
import resignAcceptDialogReducer from '../features/dialog/resignAcceptDialogSlice';
import takebackAcceptDialogReducer from '../features/dialog/takebackAcceptDialogSlice';
import takebackOfferDialogReducer from '../features/dialog/takebackOfferDialogSlice';
import watchDialogReducer from '../features/dialog/watchDialogSlice';
import gameTableReducer from '../features/table/gameTableSlice';
import openingAnalysisTableReducer from '../features/table/openingAnalysisTableSlice';
import boardReducer from '../features/boardSlice';
import heuristicsBarReducer from '../features/heuristicsBarSlice';
import historyReducer from '../features/historySlice';
import modeReducer from '../features/modeSlice';
import serverReducer from '../features/wsSlice';

const rootReducer = {
  board: boardReducer,
  heuristicsBar: heuristicsBarReducer,
  history: historyReducer,
  mode: modeReducer,
  server: serverReducer,
  infoAlert: infoAlertReducer,
  loadFenDialog: loadFenDialogReducer,
  takebackAcceptDialog: takebackAcceptDialogReducer,
  takebackOfferDialog: takebackOfferDialogReducer,
  createInviteCodeDialog: createInviteCodeDialogReducer,
  enterInviteCodeDialog: enterInviteCodeDialogReducer,
  heuristicsDialog: heuristicsDialogReducer,
  drawAcceptDialog: drawAcceptDialogReducer,
  drawOfferDialog: drawOfferDialogReducer,
  resignAcceptDialog: resignAcceptDialogReducer,
  loadPgnDialog: loadPgnDialogReducer,
  rematchAcceptDialog: rematchAcceptDialogReducer,
  rematchOfferDialog: rematchOfferDialogReducer,
  playLikeGrandmasterDialog: playLikeGrandmasterDialogReducer,
  playOnlineDialog: playOnlineDialogReducer,
  openingSearchEcoDialog: openingSearchEcoDialogReducer,
  openingSearchNameDialog: openingSearchNameDialogReducer,
  openingSearchMovetextDialog: openingSearchMovetextDialogReducer,
  progressDialog: progressDialogReducer,
  openingAnalysisTable: openingAnalysisTableReducer,
  gameTable: gameTableReducer,
  watchDialog: watchDialogReducer
};

export default rootReducer;

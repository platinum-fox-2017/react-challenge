import { 
  createStore, 
  applyMiddleware,
  combineReducers 
} from 'redux';
// import reducers from './reducer';
import thunk from 'redux-thunk';
import competitionListReducer from './competitionlist/competitionlist.reducer'
import leagueTableReducer from './leaguetable/leaguetable.reducer'
import detailClubReducer from './clubdetail/clubdetail.reducer'

const reducers = combineReducers({
  competitionListReducer: competitionListReducer,
  leagueTableReducer: leagueTableReducer,
  detailClubReducer: detailClubReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
import { combineReducers } from 'redux';
import { PlayerReducer } from './PlayersReducer';
import { EmojiReducer } from './EmojiReducer';
import { SelectedEmojiReducer } from './SelectedEmojiReducer';



//we have two reducers that are combined bec we wanna track state of boths.
export default combineReducers({
    Player: PlayerReducer,
    Emoji: EmojiReducer, 
    SelectedEmojiReducer: SelectedSongReducer,

})

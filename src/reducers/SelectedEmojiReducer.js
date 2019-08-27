
export const SelectedEmojiReducer = (selectedEmoji = null, action) => {
    if (action.type === 'Emoji_Selected'){
        return action.payload;
    }

    return selectedEmoji; 
}
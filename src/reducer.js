export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token: 'BQDeGhcJiqe0NXFvHJsn7WRYCXH_M5_SuUefNN1tGax4SP9cdVGSuVOFEkWPxCAEedvKvCM6a730ev2YKU7puA3U1C6Z_XXCiYdWxdxQUurelpRpew8aIFpLyqp-UCRnCVGWi1lIvopbaqnUC2AMm3-qBViZ',
}
        //authenticated, change to null when done

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default: 
            return state;
    }
}

export default reducer
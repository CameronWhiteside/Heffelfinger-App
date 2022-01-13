import { csrfFetch } from "./csrf"

const LOAD_EXTERNAL_LINKS = 'externalLinks/loadExternalLinks'
const ADD_EXTERNAL_LINKS = 'externalLinks/createExternalLinks'

export const loadExternalLinksAction = (externalLinks) => {
    return {
        type: LOAD_EXTERNAL_LINKS,
        externalLinks
    }
}


export const addExternalLinksAction = (newExternalLinks) => {
    return {
        type: ADD_EXTERNAL_LINKS,
        newExternalLinks,
    }
}


export const loadExternalLinks = () => async (dispatch) => {
    const response = await csrfFetch('/api/externallinks/');
    const externalLinks = await response.json();
    dispatch(loadExternalLinksAction(externalLinks))
    return externalLinks

}


export const addExternalLinks = (externalLinksData) => async (dispatch) => {
    const response = await csrfFetch('/api/externallinks/', {
        method: 'POST',
        body: JSON.stringify(externalLinksData)
    });

    const {newExternalLinks} = await response.json();
    dispatch(addExternalLinksAction(newExternalLinks))
    return newExternalLinks
}



const externalLinksReducer = (state = {} , action) => {

    let newState = { ...state }

    let id
    if (action.id) {
        id = action.id
    }

    switch (action.type) {
        case LOAD_EXTERNAL_LINKS:
            action.externalLinks.forEach(externalLinks => {
                    newState[externalLinks.id] = externalLinks
                }
             )
            return newState;

        case ADD_EXTERNAL_LINKS:
            newState = { ...newState, [action.id]: action.newExternalLinks }
            return newState

        // case EDIT_EXTERNAL_LINKS:
        //     newState[id] = action.editedExternalLinks
        //     return newState

        // case DELETE_EXTERNAL_LINKS:

        //     delete newState[id]
        //     return newState

        default:
            return state;
    }
}

export default externalLinksReducer

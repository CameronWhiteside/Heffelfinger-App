import { csrfFetch } from "./csrf"

const LOAD_EXTERNAL_LINKS = 'externalLinks/loadExternalLinks'
// const LOAD_EXternalLinks_DETAIL = 'externalLinks/loadExternalLinksDetail'
const ADD_EXTERNAL_LINKS = 'externalLinks/createExternalLinks'
// const EDIT_EXTERNAL_LINKS = 'externalLinks/editExternalLinks'
// const DELETE_EXTERNAL_LINKS = 'externalLinks/deleteExternalLinks'

export const loadExternalLinksAction = (externalLinks) => {
    return {
        type: LOAD_EXTERNAL_LINKS,
        externalLinks
    }
}

// export const loadExternalLinksDetailAction = (foundExternalLinks, id) => {
//     return {
//         type: LOAD_EXternalLinks_DETAIL,
//         foundExternalLinks,
//         id
//     }
// }

export const addExternalLinksAction = (newExternalLinks) => {
    return {
        type: ADD_EXTERNAL_LINKS,
        newExternalLinks,
    }
}

// export const editExternalLinksAction = (editedExternalLinks, id) => {
//     return {
//         type: EDIT_EXTERNAL_LINKS,
//         editedExternalLinks,
//         id
//     }
// }

// export const deleteExternalLinksAction = (deletedExternalLinks, id) => {
//     return {
//         type: DELETE_EXTERNAL_LINKS,
//         deletedExternalLinks,
//         id
//     }
// }

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

// export const editExternalLinks = (externalLinksData) => async (dispatch) => {
//     const response = await csrfFetch(`/api/externalLinks/${externalLinksData.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(externalLinksData)
//     });

//     const editedExternalLinks = await response.json();
//     const id = editedExternalLinks
//     dispatch(editExternalLinksAction(editedExternalLinks, id))
//     return editedExternalLinks
// }

// export const deleteCompanyLinks = (id) => async (dispatch) => {
//     const response = await csrfFetch(`/api/externallinks/companies/${id}`, {
//         method: 'DELETE',
//     });

//     const deletedCompanyLink = await response.json();
//     dispatch(deleteCompanyAction(id))
//     return deletedCompanyLink
// }

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

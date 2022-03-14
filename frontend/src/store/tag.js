import { csrfFetch } from "./csrf"

const LOAD_TAGS = 'tag/loadTags'
const ADD_TAG = 'tag/createTag'
const EDIT_TAG = 'tag/editTag'
const DELETE_TAG = 'tag/deleteTag'

export const loadTagsAction = (tags) => {
    return {
        type: LOAD_TAGS,
        tags
    }
}

export const addTagAction = (newTag) => {
    return {
        type: ADD_TAG,
        newTag,
    }
}

export const editTagAction = (editedTag, id) => {
    return {
        type: EDIT_TAG,
        editedTag,
        id
    }
}

export const deleteTagAction = (deletedTag, id) => {
    return {
        type: DELETE_TAG,
        deletedTag,
        id
    }
}

export const loadTags = () => async (dispatch) => {
    const response = await csrfFetch('/api/tags/');
    const tags = await response.json();
    dispatch(loadTagsAction(tags))
    return tags

}

export const addTag = (tagData) => async (dispatch) => {
    const response = await csrfFetch('/api/tags/', {
        method: 'POST',
        body: JSON.stringify(tagData)
    });

    const {newTag} = await response.json();
    dispatch(addTagAction(newTag))
    return newTag
}

export const editTag = (tagData) => async (dispatch) => {
    const response = await csrfFetch(`/api/tags/${tagData.id}`, {
        method: 'PUT',
        body: JSON.stringify(tagData)
    });

    const editedTag = await response.json();
    dispatch(editTagAction(editedTag))
    return editedTag
}


export const deleteTag = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/tags/${id}`, {
        method: 'DELETE',
    });

    const deletedTag = await response.json();
    dispatch(deleteTagAction(deletedTag.id))
    return deletedTag
}

const tagReducer = (state = {} , action) => {
    let newState = { ...state }

    let id
    if (action.id) {
        id = action.id
    }

    switch (action.type) {
        case LOAD_TAGS:
            action.tags.forEach(tag => { newState[tag.id] = tag });
            return newState;

        case ADD_TAG:
            // console.log({ action })
            // console.log(Object.keys(newState))
            newState = { ...newState, [action.newTag.id]: action.newTag }
            return newState

        case EDIT_TAG:
            newState = { ...newState.entries, [id]: action.editedTag }
            return newState

        case DELETE_TAG:
            delete newState[id]
            return newState

        default:
            return state;
    }
}

export default tagReducer

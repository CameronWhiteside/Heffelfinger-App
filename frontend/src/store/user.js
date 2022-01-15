import { csrfFetch } from "./csrf"

const LOAD_USERS = 'user/loadUsers'
// const LOAD_USER_DETAIL = 'user/loadUserDetail'
const ADD_USER = 'user/createUser'
const EDIT_USER = 'user/editUser'
const DELETE_USER = 'user/deleteUser'
const DELETE_USER_LINKS = 'user/deleteUserLinks'

export const loadUsersAction = (users) => {
    return {
        type: LOAD_USERS,
        users
    }
}


export const addUserAction = (newUser) => {
    return {
        type: ADD_USER,
        newUser,
    }
}

export const editUserAction = (editedUser, id) => {
    return {
        type: EDIT_USER,
        editedUser,
        id
    }
}

export const deleteUserAction = (deletedUser, id) => {
    return {
        type: DELETE_USER,
        deletedUser,
        id
    }
}

export const deleteUserLinksAction = (id) => {
    return {
        type: DELETE_USER_LINKS,
        id
    }
}


export const loadUsers = () => async (dispatch) => {
    console.log(`this is happening`)
    const response = await csrfFetch('/api/users/');
    const users = await response.json();
    console.log((users))
    dispatch(loadUsersAction(users))
    return users

}


export const addUser = (userData) => async (dispatch) => {
    const response = await csrfFetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify(userData)
    });

    const {newUser} = await response.json();
    dispatch(addUserAction(newUser))
    return newUser
}

export const editUser = (userData) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userData.id}`, {
        method: 'PUT',
        body: JSON.stringify(userData)
    });

    const editedUser = await response.json();
    const id = editedUser
    dispatch(editUserAction(editedUser, id))
    return editedUser
}


export const deleteUser = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}`, {
        method: 'DELETE',
    });

    const deletedUser = await response.json();
    dispatch(deleteUserAction(deletedUser, id))
    return deletedUser
}

export const deleteUserLinks = (id) => async (dispatch) => {
    console.log(`THE ID IS DEFINTED AND IT IS ${id}`)
    const response = await csrfFetch(`/api/externallinks/users/${id}`, {
        method: 'DELETE',
    });

    const deletedLinks = await response.json();
    dispatch(deleteUserLinksAction(id))
    return deletedLinks
}

const userReducer = (state = {} , action) => {
// const userReducer = (state = { } , action) => {
    let newState = { ...state }

    let id
    if (action.id) {
        id = action.id
    }

    switch (action.type) {
        case LOAD_USERS:
            action.users.forEach(user => {
                    newState[user.id] = user
                }
                )
            return newState;

        case ADD_USER:
            newState = { ...newState, [action.id]: action.newUser }
            return newState

        case EDIT_USER:
            newState[id] = action.editedUser
            return newState

        case DELETE_USER:

            delete newState[id]
            return newState

        case DELETE_USER_LINKS:

            delete newState[id]['ExternalLinks']
            return newState

        default:
            return state;
    }
}

export default userReducer

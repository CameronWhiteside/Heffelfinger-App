import { csrfFetch } from "./csrf"

const LOAD_COMPANIES = 'company/loadCompanies'
const ADD_COMPANY = 'company/createCompany'
const EDIT_COMPANY = 'company/editCompany'
const DELETE_COMPANY = 'company/deleteCompany'

export const loadCompaniesAction = (companies) => {
    return {
        type: LOAD_COMPANIES,
        companies
    }
}

export const addCompanyAction = (newCompany) => {
    return {
        type: ADD_COMPANY,
        newCompany,
    }
}

export const editCompanyAction = (editedCompany, id) => {
    return {
        type: EDIT_COMPANY,
        editedCompany,
        id
    }
}

export const deleteCompanyAction = (deletedCompany, id) => {
    return {
        type: DELETE_COMPANY,
        deletedCompany,
        id
    }
}

export const loadCompanies = () => async (dispatch) => {
    const response = await csrfFetch('/api/companies/');
    const companies = await response.json();
    dispatch(loadCompaniesAction(companies))
    return companies

}

export const addCompany = (companyData) => async (dispatch) => {
    const response = await csrfFetch('/api/companies/', {
        method: 'POST',
        body: JSON.stringify(companyData)
    });

    const newCompany = await response.json();
    dispatch(addCompanyAction(newCompany))
    return newCompany
}

export const editCompany = (companyData) => async (dispatch) => {
    const response = await csrfFetch(`/api/companies/${companyData.id}`, {
        method: 'PUT',
        body: JSON.stringify(companyData)
    });

    const editedCompany = await response.json();
    dispatch(editCompanyAction(editedCompany))
    return editedCompany
}


export const deleteCompany = (companyData) => async (dispatch) => {
    const response = await csrfFetch(`/api/companies/${companyData.id}`, {
        method: 'DELETE',
    });

    const deletedCompany = await response.json();
    dispatch(deleteCompanyAction(deletedCompany.id))
    return deletedCompany
}

const companyReducer = (state = {} , action) => {
    let newState = { ...state }

    let id
    if (action.id) {
        id = action.id
    }

    switch (action.type) {
        case LOAD_COMPANIES:
            action.companies.forEach(company => {newState[company.id] = company});
            return newState;

        case ADD_COMPANY:
            newState = { ...newState.entries, [action.newCompany.id]: action.newCompany }
            return newState

        case EDIT_COMPANY:
            newState = { ...newState.entries, [id]: action.editedCompany }
            return newState

        case DELETE_COMPANY:
            delete newState[id]
            return newState

        default:
            return state;
    }
}

export default companyReducer
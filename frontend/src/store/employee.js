import { csrfFetch } from "./csrf"

const LOAD_EMPLOYEES = 'employee/loadEmployees'
const ADD_EMPLOYEE = 'employee/createEmployee'
const EDIT_EMPLOYEE = 'employee/editEmployee'
const DELETE_EMPLOYEE = 'employee/deleteEmployee'

export const loadEmployeesAction = (employees) => {
    return {
        type: LOAD_EMPLOYEES,
        employees
    }
}

export const addEmployeeAction = (newEmployee) => {
    return {
        type: ADD_EMPLOYEE,
        newEmployee,
    }
}

export const editEmployeeAction = (editedEmployee, id) => {
    return {
        type: EDIT_EMPLOYEE,
        editedEmployee,
        id
    }
}

export const deleteEmployeeAction = (deletedEmployee, id) => {
    return {
        type: DELETE_EMPLOYEE,
        deletedEmployee,
        id
    }
}

export const loadEmployees = () => async (dispatch) => {
    const response = await csrfFetch('/api/employees/');
    const employees = await response.json();
    dispatch(loadEmployeesAction(employees))
    return employees

}


export const addEmployee = (employeeData) => async (dispatch) => {
    const response = await csrfFetch('/api/employees/', {
        method: 'POST',
        body: JSON.stringify(employeeData)
    });

    const {newEmployee} = await response.json();
    dispatch(addEmployeeAction(newEmployee))
    return newEmployee
}

export const editEmployee = (employeeData) => async (dispatch) => {
    const response = await csrfFetch(`/api/employees/${employeeData.id}`, {
        method: 'PUT',
        body: JSON.stringify(employeeData)
    });

    const editedEmployee = await response.json();
    const id = editedEmployee
    dispatch(editEmployeeAction(editedEmployee, id))
    return editedEmployee
}


export const deleteEmployee = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/employees/${id}`, {
        method: 'DELETE',
    });

    const deletedEmployee = await response.json();
    dispatch(deleteEmployeeAction(deletedEmployee, id))
    return deletedEmployee
}

const employeeReducer = (state = {} , action) => {
    let newState = { ...state }

    let id
    if (action.id) {
        id = action.id
    }

    switch (action.type) {
        case LOAD_EMPLOYEES:
            action.employees.forEach(employee => {
                newState[employee.id] = employee
                }
            )
            return newState;

        case ADD_EMPLOYEE:
            newState = { ...newState, [action.id]: action.newEmployee }
            return newState

        case EDIT_EMPLOYEE:
            newState[id] = action.editedEmployee
            return newState

        case DELETE_EMPLOYEE:

            delete newState[id]
            return newState

        default:
            return state;
    }
}

export default employeeReducer

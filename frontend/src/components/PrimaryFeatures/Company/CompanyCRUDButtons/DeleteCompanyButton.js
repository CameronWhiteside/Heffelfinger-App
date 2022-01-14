import { useDispatch, useSelector } from 'react-redux'
import { deleteCompany } from "../../../../store/company"
import './DeleteCompanyButton.css'
import { toggleClass } from "../../../utils"
import { useLocation, Redirect, useHistory } from 'react-router-dom'


export const DeleteCompanyButton = ({ entry }) => {

    const location = useLocation()
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    let hasPermission = false
    if (entry && entry.Users && sessionUser && entry.Users.map(user => user.id).includes(sessionUser.id)) hasPermission = true;
    if (!hasPermission) return null

    const handleDelete = () => {

        const currentPlace = location.pathname
        try {
            dispatch(deleteCompany(entry['id']))
            if (currentPlace !== '/companies') {
                history.push('/companies')
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div keep='true' className="delete-company-button">
                    <button
                        className="delete-confirm hidden"
                        onMouseOut={(e) => {
                            toggleClass(e.target, 'hidden')
                        }}
                        onClick={handleDelete}>
                        Are You Sure?
                    </button>
                    <button
                        className="delete-start"
                        onClick={(e) => {
                            toggleClass(e.target.previousElementSibling, 'hidden')
                        }}
                    >
                        DELETE PROJECT
                    </button>

                </div>

    );
}


export default DeleteCompanyButton

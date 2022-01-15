// import { useDispatch, useSelector } from "react-redux"
// import { useHistory } from "react-router-dom"
// import { addUser } from "../../../../store/user"
// import { addEmployee } from "../../../../store/employee"

// const AddUserButton = () => {

//     const dispatch=useDispatch()
//     const history = useHistory()

//     const sessionUser = useSelector(state => state.session.user);

//     const goToNewUserPage = async () => {

//         let newUser = {
//             location: ' ',
//             biography:' '
//         }

//         try {
//             let res = await dispatch(addUser(newUser))
//             let newUserId = res.id

//             let newEmployee = {
//                 userId: sessionUser.id,
//                 userId: newUserId,
//                 userRoleId: 3
//             }

//             let employeeRes = await dispatch(addEmployee(newEmployee))
//             console.log(employeeRes)


//             history.push(`/users/${res.id}`)
//         } catch (e) {
//             console.log({ e })
//         }
//     }

//     return (
//         <div className="view-user-button">
//             <button onClick={()=>goToNewUserPage()}>
//                     ADD A PROJECT
//            </button>
//         </div>
//     )
// }

// export default AddUserButton

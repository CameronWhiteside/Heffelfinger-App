import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { loadUsers } from "../../../store/user";
import ProfileFullPage from "../ProfileHelpers/ProfileFullPage";
import { useSelector } from "react-redux";
import EditUserButton from "./UserCRUDButtons/EditUserButton";
import DeleteUserButton from "./UserCRUDButtons/DeleteUserButton";
import AddUserForm from "./AddUserForm/AddUserForm";
import EditLinksButton from "../ProfileHelpers/ProfileCRUD/EditLinksButton";
import EditImageButton from '../ProfileHelpers/ProfileCRUD/EditImageButton'

const UserProfilePage = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    // let dataObject

    const dataObject = useSelector(state => {
        return state.user[id]
    })

    // dataObject = userState[id]

    useEffect(() => {
        dispatch(loadUsers())
            // .then(res => console.log('dispatch response', res))
    }, [dispatch])


    const sessionUser = useSelector(state => state.session.user);


    let defaultName, defaultLocation, createdAt, defaultBiography, year, shortInfo,
        isProfileOwner, defaultImageUrl

    if (dataObject) {

        console.log({dataObject})

        if (dataObject.location !== ' ') {
            defaultLocation = dataObject.location
        }
        if (dataObject.biography !== ' ') {
            defaultBiography = dataObject.biography
        }

        defaultName = `${dataObject.firstName} ${dataObject.lastName}`
        createdAt = dataObject.createdAt
        defaultImageUrl = dataObject.imageUrl
        // year = createdAt.slice(0, 4);
        // createdAt = `On board since ${year}`
        if (dataObject && sessionUser) {
            isProfileOwner = (dataObject.id === sessionUser.id)
        }
    }


    const StatefulUser = () => {

            const [pageTitle, setPageTitle] = useState(defaultName);
            const [biography, setBiography] = useState(defaultBiography);
            const [location, setLocation] = useState(defaultLocation);
            const [imageUrl, setImageUrl] = useState(defaultImageUrl);
            const [validationObject, setValidationObject] = useState({ test: true });
            const [databaseErrors, setDatabaseErrors] = useState([])

            const [editImageMode, setEditImageMode] = useState()
            const [editLinksMode, setEditLinksMode] = useState()
            const [editEmployeesMode, setEditEmployeesMode] = useState()

            shortInfo = [location, createdAt].filter(el => !(!el)).join(' · ')

            const [editInfoMode, setEditInfoMode] = useState(
                    !defaultBiography || defaultBiography.length < 2 ||
                    !defaultLocation || defaultLocation.length < 2
            )



        return (
            <div className="user-profile">
                <ProfileFullPage
                    id={id}
                    dataObject={dataObject}
                    profileType='user'
                    pageTitle={
                        pageTitle
                    }
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    imageSize='medium'
                    pageShortInfo={shortInfo}
                    pageDescription={biography}
                    externalLinksArray={[]}
                    isProfileOwner={isProfileOwner}
                    hasTags={false}
                    tagsAlias='Tags'
                    tagsSize='small'
                    ctaType={false}
                    hasUsers={false}
                    usersAlias='Contributors'
                    usersSize='medium'
                    hasEvents={false}
                    eventsAlias='Events'
                    eventsSize='medium'
                    // hasUsers={false}
                    // usersAlias={false}
                    // usersSize={false}
                    hasTickets={true}
                    ticketsAlias='Attended Events'
                    ticketsSize='medium'
                    hasCompanies={true}
                    companiesAlias='Projects'
                    companySize='medium'

                    editInfoMode={editInfoMode}
                    setEditInfoMode={setEditInfoMode}
                    editImageMode={editImageMode}
                    setEditImageMode={setEditImageMode}
                    editLinksMode={editLinksMode}
                    setEditLinksMode={setEditLinksMode}
                    editEmployeesMode={editEmployeesMode}
                    setEditEmployeesMode={setEditEmployeesMode}

                >
                    <EditUserButton entry={dataObject} setEditInfoMode={setEditInfoMode} />
                    <EditImageButton entry={dataObject} setEditImageMode={setEditImageMode} />
                    <EditLinksButton entry={dataObject} setEditLinksMode={setEditLinksMode} />
                    <DeleteUserButton entry={dataObject} />
                    <AddUserForm
                        id={id}
                        name={pageTitle}
                        setName={setPageTitle}
                        biography={biography}
                        setBiography={setBiography}
                        location={location}
                        setLocation={setLocation}
                        validationObject={validationObject}
                        setValidationObject={setValidationObject}
                        databaseErrors={databaseErrors}
                        setDatabaseErrors={setDatabaseErrors}
                        editInfoMode={editInfoMode}
                        setEditInfoMode={setEditInfoMode}
                    />

                </ProfileFullPage>
        </div>
        )
    }

    return (
        <>
            {dataObject &&
                <StatefulUser/>
            }
        </>
    )
}


export default UserProfilePage

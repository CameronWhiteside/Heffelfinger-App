import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { loadCompanies } from "../../../store/company";
import ProfileFullPage from "../ProfileHelpers/ProfileFullPage";
import { useSelector } from "react-redux";
import EditCompanyButton from "./CompanyCRUDButtons/EditCompanyButton";
import DeleteCompanyButton from "./CompanyCRUDButtons/DeleteCompanyButton";
import AddCompanyForm from "./AddCompanyForm/AddCompanyForm";
import EditLinksButton from "../ProfileHelpers/ProfileCRUD/EditLinksButton";
import EditImageButton from '../ProfileHelpers/ProfileCRUD/EditImageButton'

const CompanyProfilePage = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    let dataObject

    const companyState = useSelector(state => {
        return state.company
    })

    dataObject = companyState[id]

    useEffect(() => {
         dispatch(loadCompanies()).then(res => console.log('dispatch response', res))
    }, [dispatch])


    const sessionUser = useSelector(state => state.session.user);


    let defaultName, defaultHeadline, location, createdAt, defaultDescription, year, shortInfo, requirementsObject,
    isProfileOwner, defaultImageUrl

    if (dataObject) {
        if (dataObject.name !== ' ') {
            defaultName = dataObject.name
        }
        if (dataObject.headline !== ' ') {
            defaultHeadline = dataObject.headline
        }
        if (dataObject.location !== ' ') {
            location = dataObject.location
        }
        createdAt = dataObject.createdAt
        defaultDescription = dataObject.description
        defaultImageUrl = dataObject.imageUrl
        year = createdAt.slice(0, 4);
        createdAt = `On board since ${year}`
        if (dataObject.Users && sessionUser) {
            console.log(dataObject.Users)
            isProfileOwner = dataObject.Users.map(user => user.id).includes(sessionUser.id)
        }
        // isProfileOwner = dataObject.Users.map(user => user.id).includes(sessionUser.id)
    } else {
        console.log(`no data obj sorry`)
    }
    const StatefulCompany = () => {

            const [pageTitle, setPageTitle] = useState(defaultName);
            const [description, setDescription] = useState(defaultDescription);
            const [headline, setHeadline] = useState(defaultHeadline);
            const [imageUrl, setImageUrl] = useState(defaultImageUrl);
            const [validationObject, setValidationObject] = useState({ test: true });
            const [databaseErrors, setDatabaseErrors] = useState([])


            shortInfo = [headline, location, createdAt].filter(el => !(!el)).join(' · ')

            const [editInfoMode, setEditInfoMode] = useState(
                    !defaultName || defaultName.length < 2 ||
                    !defaultDescription || defaultDescription.length < 2 ||
                    !defaultHeadline || defaultHeadline.length < 2
            )


            const [editImageMode, setEditImageMode] = useState(false)
            const [editLinksMode, setEditLinksMode] = useState(false)
            const [editEmployeesMode, setEditEmployeesMode] = useState(false)

        return (
            <div className="company-profile">
                <ProfileFullPage
                    id={id}
                    dataObject={dataObject}
                    profileType='company'
                    pageTitle={
                        pageTitle
                    }
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    imageSize='medium'
                    pageShortInfo={shortInfo}
                    pageDescription={description}
                    externalLinksArray={[]}
                    isProfileOwner={isProfileOwner}
                    hasTags={false}
                    tagsAlias='Tags'
                    tagsSize='small'
                    ctaType={false}
                    hasUsers={true}
                    usersAlias='Contributors'
                    usersSize='medium'
                    hasEvents={true}
                    eventsAlias='Events'
                    eventsSize='medium'
                    hasCompanies={false}
                    companiesAlias={false}
                    companiesSize={false}
                    hasTickets={false}
                    ticketsAlias={false}
                    ticketsSize={false}

                    editInfoMode={editInfoMode}
                    setEditInfoMode={setEditInfoMode}
                    editImageMode={editImageMode}
                    setEditImageMode={setEditImageMode}
                    editLinksMode={editLinksMode}
                    setEditLinksMode={setEditLinksMode}
                    editEmployeesMode={editEmployeesMode}
                    setEditEmployeesMode={setEditEmployeesMode}

                >
                    <EditCompanyButton entry={dataObject} setEditInfoMode={setEditInfoMode} />
                    <EditImageButton entry={dataObject} setEditImageMode={setEditImageMode} />
                    <EditLinksButton entry={dataObject} setEditLinksMode={setEditLinksMode} />
                    <DeleteCompanyButton entry={dataObject} />
                    <AddCompanyForm
                        id={id}
                        name={pageTitle}
                        setName={setPageTitle}
                        description={description}
                        setDescription={setDescription}
                        headline={headline}
                        setHeadline={setHeadline}
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
                <StatefulCompany/>
            }
        </>
    )
}


export default CompanyProfilePage

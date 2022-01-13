import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
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

    const companyState = useSelector(state => {
        return state.company
    })

    // const currentCompanies = dispatch(loadCompanies())
    useEffect(() => {
        dispatch(loadCompanies())
    }, [])

    const dataObject = companyState[id]

    let defaultName, defaultTagline, location, createdAt, defaultDescription, year, shortInfo;

    if (dataObject) {
        defaultName = dataObject.name
        defaultTagline = dataObject.tagline
        location = dataObject.location
        createdAt = dataObject.createdAt
        defaultDescription = dataObject.description
        year = createdAt.slice(0, 4);
        createdAt = `On board since ${year}`
    }


    const [editInfoMode, setEditInfoMode] = useState(
            !defaultName || defaultName.length < 2 ||
            !defaultDescription || defaultDescription.length < 2 ||
            !defaultTagline || defaultTagline.length < 2
    )



    const [editImageMode, setEditImageMode] = useState(false)
    const [editLinksMode, setEditLinksMode] = useState(false)
    const [editEmployeesMode, setEditEmployeesMode] = useState(false)



    if (!defaultName || defaultName.length < 2) defaultName = ''
    if (!defaultDescription || defaultDescription.length < 2) defaultDescription = ''
    if (!defaultTagline || defaultTagline.length < 2) defaultTagline=('')


    const [name, setName] = useState(defaultName);
    const [description, setDescription] = useState(defaultDescription);
    const [tagline, setTagline] = useState(defaultTagline);
    const [validationObject, setValidationObject] = useState({ test: true });
    const [databaseErrors, setDatabaseErrors] = useState([])

    const sessionUser = useSelector(state => state.session.user);

    let isProfileOwner = (dataObject && dataObject.Users.map(user => user.id).includes(sessionUser.id))

    shortInfo = [tagline, location, createdAt].filter(el => !(!el)).join(' · ')

    return (
        <div className="company-profile">
            {dataObject &&
                <ProfileFullPage
                    id={id}
                    dataObject={dataObject}
                    profileType='company'
                    pageTitle={name}
                    imageUrl={dataObject.logo}
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
                        name={name}
                        setName={setName}
                        description={description}
                        setDescription={setDescription}
                        tagline={tagline}
                        setTagline={setTagline}
                        validationObject={validationObject}
                        setValidationObject={setValidationObject}
                        databaseErrors={databaseErrors}
                        setDatabaseErrors={setDatabaseErrors}
                        editInfoMode={editInfoMode}
                        setEditInfoMode={setEditInfoMode}
                    />

                </ProfileFullPage>
            }
        </div>
        )
}


export default CompanyProfilePage

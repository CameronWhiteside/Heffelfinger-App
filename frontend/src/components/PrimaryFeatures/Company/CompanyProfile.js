import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadCompanies } from "../../../store/company";
import ProfileFullPage from "../ProfileHelpers/ProfileFullPage";
import { useSelector } from "react-redux";
import EditCompanyButton from "./CompanyCRUDButtons/EditCompanyButton";
import DeleteCompanyButton from "./CompanyCRUDButtons/DeleteCompanyButton";
import AddCompanyForm from "./AddCompanyForm/AddCompanyForm";
// import AddCompanyButton from "./CompanyCRUDButtons/AddCompanyButton";

const CompanyProfilePage = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const companyState = useSelector(state => {
        return state.company
    })

    useEffect(() => {
        dispatch(loadCompanies())
    }, [dispatch])

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
        console.log(defaultDescription)
    }
    const [hasCrud, setHasCrud] = useState(
            !defaultName || defaultName.length < 2 ||
            !defaultDescription || defaultDescription.length < 2 ||
            !defaultTagline || defaultTagline.length < 2
        )

    // if (!defaultName || defaultName.length < 2) {
    //     defaultName = ''
    //     console.log('needs crud')
    //     // setHasCrud(true)
    // }
    console.log({hasCrud})

    if (!defaultName || defaultName.length < 2) defaultName = ''
    if (!defaultDescription || defaultDescription.length < 2) defaultDescription = ''
    if (!defaultTagline || defaultTagline.length < 2) defaultTagline=('')


    const [name, setName] = useState(defaultName);
    const [description, setDescription] = useState(defaultDescription);
    const [tagline, setTagline] = useState(defaultTagline);
    const [validationObject, setValidationObject] = useState({ test: true });
    const [databaseErrors, setDatabaseErrors] = useState([])

    // if (!name || name.length < 2) {
    //     setName('')
    //     setHasCrud(true)
    // }

    // if (!description || description.length < 2) setDescription('')

    shortInfo = [tagline, location, createdAt].filter(el => !(!el)).join(' · ')

    return (
        <div className="company-profile">
            {dataObject &&
                <ProfileFullPage
                    dataObject={dataObject}
                    profileType='company'
                    pageTitle={name}
                    imageUrl={dataObject.logo}
                    imageSize='medium'
                    pageShortInfo={shortInfo}
                    pageDescription={description}
                    externalLinksArray={[]}
                    isProfileOwner={true}
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
                    hasCrud={hasCrud}
                    setHasCrud={setHasCrud}
                >
                    <EditCompanyButton entry={dataObject} />
                    <DeleteCompanyButton entry={dataObject} />
                    <AddCompanyForm
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
                        hasCrud={hasCrud}
                        setHasCrud={setHasCrud}
                    />

                </ProfileFullPage>
            }
        </div>
        )
}


export default CompanyProfilePage

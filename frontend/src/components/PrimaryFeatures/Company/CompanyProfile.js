import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadCompanies } from "../../../store/company";
import ProfileFullPage from "../ProfileHelpers/ProfileFullPage";
import { useSelector } from "react-redux";
import EditCompanyButton from "./CompanyCRUDButtons/EditCompanyButton";
import DeleteCompanyButton from "./CompanyCRUDButtons/DeleteCompanyButton";
import AddCompanyForm from "./AddCompanyForm";
import AddCompanyButton from "./CompanyCRUDButtons/AddCompanyButton";

const CompanyProfilePage = () => {


    console.log('Rendering Company Profile Page Component')

    const dispatch = useDispatch();
    const { id } = useParams();

    const companyState = useSelector(state => {
        return state.company
    })

    useEffect(() => {
        dispatch(loadCompanies)
    }, [dispatch])

    let dataObject = Object.values(companyState)[id]

    //****LATEST ATTEMPT */


    // const [dataObject, setDataObject] = useState({})


    // useEffect(() => {
    //     setDataObject(Object.values(dispatch(loadCompanies()))[id])
    // })

    let { tagline, location, createdAt, description } = dataObject

    // console.log({ tagline })
    let year = createdAt.slice(0,4);
    createdAt = `On board since ${year}`
    // console.log({ location })

    let shortInfo = [tagline, location, createdAt].filter(el => !(!el)).join(' · ')
    // console.log({shortInfo})


    return (
        <>
            <ProfileFullPage
                dataObject={dataObject}
                profileType='company'
                pageTitle={dataObject.name}
                imageUrl={dataObject.logo}
                imageSize='large'
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
                hasCrud={true}
            >
                <EditCompanyButton entry={dataObject} />
                <DeleteCompanyButton entry={dataObject} />
                <AddCompanyForm />

            </ProfileFullPage>
        </>
    )
}


export default CompanyProfilePage

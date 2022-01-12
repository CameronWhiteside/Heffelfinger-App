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

    // const [dataObject, setDataObject] = useState();

    useEffect(() => {
        dispatch(loadCompanies())
    }, [dispatch])


    const dataObject = Object.values(companyState)[id-1]
    //****LATEST ATTEMPT */


    // const [dataObject, setDataObject] = useState({})


    // useEffect(() => {
    //     setDataObject(Object.values(dispatch(loadCompanies()))[id])
    // })

    let tagline, location, createdAt, description, year, shortInfo;

    if (dataObject) {
        tagline = dataObject.tagline
        location = dataObject.location
        createdAt = dataObject.createdAt
        description = dataObject.description
        year = createdAt.slice(0,4);
        createdAt = `On board since ${year}`
        shortInfo = [tagline, location, createdAt].filter(el => !(!el)).join(' · ')
    }



    // // console.log({ tagline })
    // createdAt = `On board since ${year}`
    // // console.log({ location })

    // // console.log({shortInfo})


    return (
        <>
            {dataObject &&
                <ProfileFullPage
                    dataObject={dataObject}
                    profileType='company'
                    pageTitle={dataObject.name}
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
                    hasCrud={true}
                >
                    <EditCompanyButton entry={dataObject} />
                    <DeleteCompanyButton entry={dataObject} />
                    <AddCompanyForm />

                </ProfileFullPage>
            }
        </>
        )
}


export default CompanyProfilePage

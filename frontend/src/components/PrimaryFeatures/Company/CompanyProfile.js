import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadCompanyDetail } from "../../../store/company";
import ProfileFullPage from "../ProfileHelpers/ProfileFullPage";
import { useSelector } from "react-redux";


const CompanyProfilePage = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(loadCompanyDetail(id))
    },[dispatch, id])

    const dataObject = useSelector(state => {
        return state.company[id]
    })


    let { tagline, location, createdAt } = dataObject

    console.log({ tagline })
    let year = createdAt.slice(0,4);
    createdAt = `On board since ${year}`
    console.log({ location })

    let shortInfo = [tagline, location, createdAt].filter(el => !(!el)).join(' · ')
    console.log({shortInfo})


    return (
        <>
            <ProfileFullPage
                dataObject={dataObject}
                profileType='company'
                pageTitle={dataObject.name}
                imageUrl={dataObject.logo}
                imageSize='large'
                pageShortInfo={shortInfo}
        externalLinksArray={[]}
        isProfileOwner={false}
        hasTags={false}
        tagsAlias={false}
        tagsSize={false}
        ctaType={false}
        hasUsers={false}
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
        />
        </>
    )
}


export default CompanyProfilePage

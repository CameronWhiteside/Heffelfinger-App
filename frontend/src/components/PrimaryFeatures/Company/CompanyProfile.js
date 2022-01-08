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

    const foundCompany = useSelector(state => {

        return state.company[id]
    })

    console.log({ foundCompany })

    return (
        <>
        <ProfileFullPage
        dataObject={foundCompany}
        profileType='company'
        pageTitle={`She is alive`}
        imageUrl='https://i.ibb.co/k5Kc5dV/600-px-oxley-logo.jpg'
        imageSize='large'
        pageShortInfo='short page info'
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CompanyDetails from '../CompanyDetails'
import EditCompanyButton from '../CompanyCRUDButtons/EditCompanyButton';
import DeleteCompanyButton from '../CompanyCRUDButtons/DeleteCompanyButton';
import BrowserInfoArea from '../../BrowserHelpers/BrowserInfoArea';

import BrowserGrid from '../../BrowserHelpers/BrowserGrid';

import './CompanyBrowser.css'


import { loadCompanies } from '../../../../store/company';
import ViewCompanyButton from '../CompanyCRUDButtons/ViewCompanyButton';
import AddCompanyButton from '../CompanyCRUDButtons/AddCompanyButton';

const CompanyBrowser = () => {

    const dispatch = useDispatch();

    const companies = useSelector(state => {
        return state.company
    })

    useEffect(() => {
        dispatch(loadCompanies())
    }, [dispatch])

    const companiesArr = Object.values(companies)

    const title = `
        LAUNCHPAD
    `

    const bodyCopy = `n venture hearts of the stars dream of the mind's eye the sky calls to us Sea of Tranquility? Brain is the seed of intelligence laws of physics consciousness extraplanetary concept of the number one great turbulent clouds? The only home we've ever known tingling of the spine rich in heavy atoms great turbulent clouds made in the interiors of collapsing stars two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions`

    return (
        <div className='company-browser'>
            <BrowserInfoArea
                title={title}
                bodyCopy={bodyCopy}
            >
                <AddCompanyButton/>
            </BrowserInfoArea>
            <BrowserGrid
                entries={companiesArr}
                hasUsers={true}
                usersAlias={'Contributors'}
            >
                <ViewCompanyButton />
                <EditCompanyButton />
                <DeleteCompanyButton />

            </BrowserGrid>
        </div>
    )

    // return (
    //     <section className='company-list'>
    //         <h2>All Companies</h2>
    //         <NavLink to='/companies/new' className="like-button">Add Company</NavLink>
    //         {!companiesArr.length && <span>No companies registered yet</span>}
    //         {companiesArr && companiesArr.map(company => <CompanyDetails key={company.id} company={company} /> )}
    //     </section>
    // )
}

export default CompanyBrowser

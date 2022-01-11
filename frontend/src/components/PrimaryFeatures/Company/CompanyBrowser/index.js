import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CompanyDetails from '../CompanyDetails'

import { loadCompanies } from '../../../../store/company';

import './CompanyBrowser.css'

import EditCompanyButton from '../CompanyCRUDButtons/EditCompanyButton';
import DeleteCompanyButton from '../CompanyCRUDButtons/DeleteCompanyButton';
import BrowserInfoArea from '../../BrowserHelpers/BrowserInfoArea';
import BrowserGrid from '../../BrowserHelpers/BrowserGrid';
import ViewCompanyButton from '../CompanyCRUDButtons/ViewCompanyButton';
import AddCompanyButton from '../CompanyCRUDButtons/AddCompanyButton';
import BrowserQuickStatsArea from '../../BrowserHelpers/BrowserQuickStats';
import BrowserCTAArea from '../../BrowserHelpers/BrowserCTAArea';



const CompanyBrowser = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadCompanies())
    },[])

    const companyState = useSelector(state => {
        return state.company
    })
    
    // useEffect(() => {
    // }, [dispatch])

    // useEffect(() => {
    //     // dispatch(loadCompanies())
    // }, [companyState])

    const companiesArr = Object.values(companyState.companyList)

    const title = `
        LAUNCHPAD
    `

    const bodyCopy = `Venture hearts of the stars dream of the mind's eye the sky calls to us Sea of Tranquility? Brain is the seed of intelligence laws of physics consciousness extraplanetary concept of the number one great turbulent clouds? The only home we've ever known tingling of the spine rich in heavy atoms great turbulent clouds made in the interiors of collapsing stars two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions`

    return (
        <div className='company-browser'>
            <div className='browser-left-col scroll-area'>
                <BrowserQuickStatsArea
                    title={title}
                />

                <BrowserInfoArea
                    bodyCopy={bodyCopy}
                >

                </BrowserInfoArea>

                <BrowserCTAArea>
                    <AddCompanyButton/>
                </BrowserCTAArea>
            </div>
            <div className='browser-right-col'>
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
        </div>
    )

}

export default CompanyBrowser

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import CompanyDetails from '../CompanyDetails'

import './CompanyBrowser.css'


import { loadCompanies } from '../../../store/company';

const CompanyBrowser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCompanies())
    }, [dispatch])

    const companies = useSelector(state => {
        console.log(state.company)
        return state.company
    })

    const companiesArr = Object.values(companies)


    console.log({ companiesArr })

    return (
        <section className='company-list'>
            <h2>All Companies</h2>
            {!companiesArr.length && <span>No companies registered yet</span>}
            {companiesArr.map(company => <CompanyDetails key={company.id} company={company} /> )}
        </section>
    )
}

export default CompanyBrowser

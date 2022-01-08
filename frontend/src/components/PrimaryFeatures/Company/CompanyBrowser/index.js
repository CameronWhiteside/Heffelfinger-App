import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CompanyDetails from '../CompanyDetails'

import './CompanyBrowser.css'


import { loadCompanies } from '../../../../store/company';

const CompanyBrowser = () => {
    const dispatch = useDispatch();

    const companies = useSelector(state => {
        return state.company
    })



    useEffect(() => {
        dispatch(loadCompanies())
    }, [dispatch])




    const companiesArr = Object.values(companies)

    return (
        <section className='company-list'>
            <h2>All Companies</h2>
            <NavLink to='/companies/new'>Add A Company</NavLink>
            {!companiesArr.length && <span>No companies registered yet</span>}
            {companiesArr && companiesArr.map(company => <CompanyDetails key={company.id} company={company} /> )}
        </section>
    )
}

export default CompanyBrowser

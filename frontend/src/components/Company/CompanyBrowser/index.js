import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompanyDetails from '../CompanyDetails'

import './CompanyBrowser.css'


import { loadCompanies } from '../../../store/company';

const CompanyBrowser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCompanies())
    }, [dispatch])

    const companies = useSelector(state => {
        return state.company
    })

    const companiesArr = Object.values(companies)

    return (
        <section className='company-list'>
            <h2>All Companies</h2>
            {!companiesArr.length && <span>No companies registered yet</span>}
            {companiesArr.map(company => <CompanyDetails key={company.id} company={company} /> )}
        </section>
    )
}

export default CompanyBrowser

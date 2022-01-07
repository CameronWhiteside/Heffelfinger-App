import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import CompanyDetails from './CompanyDetails'

import { loadCompanies } from '../../store/company';

const CompanyBrowser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCompanies())
    }, [dispatch])

    const companies = useSelector(state => state.companies)
    const companiesArr = Object.entries(companies)

    console.log(companies)

    return (
        <section className='company-list'>
            <h2>All Companies</h2>
            {!companiesArr.length && <span>No companies registered yet</span>}
            <ul>
                {companiesArr.map(company => <CompanyDetails key={company.id} company={company} /> )}
            </ul>
        </section>
    )
}

// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Children, cloneElement, isValidElement } from 'react';
// import CompanyOwnerButtons from '../CompanyOwnerButtons'
import './BrowserCard.css'
import ProfileImage from '../ProfileHelpers/ImageHelpers/ProfileImage';
import PrettyDate from '../../Basic/PrettyData/PrettyDate';
import PrettyHost from '../../Basic/PrettyData/PrettyHost';
import TinyCompanyPreview from '../Company/TinyCompanyPreview';
import TinyUserPreview from '../User/TinyUserPreview';
import StaticTagList from '../ProfileHelpers/TagHelpers/StaticTagList'
// import e from 'express';


// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

export const BrowserCard = ( { children, entry, hasUsers, usersAlias, hasHost, hasCompanies, companiesAlias } ) => {

    let id = entry.id

    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { entry })
        }
        return child;
    })

    //account for different 'name' variable aliases
    let name
    if (entry.name) name = entry.name
    if (entry.username) name = entry.username

    //acount for different 'url' variable aliases
    let url
    if (entry.logo) url = entry.logo
    if (entry.imageUrl) url = entry.imageUrl
    if (entry.picture) url = entry.imageUrl

    let startDateTime
    if (entry.startDateTime) startDateTime = entry.startDateTime

    let tagline
    if (entry.tagline) tagline = entry.tagline

    let location
    if (entry.location) location = entry.location

    let host
    if (hasHost && entry.Companies) host = entry.Companies

    console.log({entry})

    let users
    if (hasUsers) users = entry.Users
    if (users.length < 1) users = false

    let companies
    if (hasCompanies) companies = entry.Company

    let tags
    if (entry.Tag) tags = entry.Tag


    const imageSize = 'medium'

    const toggleClass = (target, className) => {

        if (target.className.includes(className)){
            let result = target.className.replace(className, '')
            target.className = result
        } else {
            target.className += ` ${className}`
        }

    }

    return (
        <div className='browser-card glass'>
                <NavLink to={`/companies/${id}`}>
                    <div className='browser-card-overlay'></div>
                    <div className='browser-card-image-area'>
                        <ProfileImage url={url} size={imageSize} name={name}/>
                    </div>
                    <div className='browser-card-info-area'>
                        {startDateTime && <PrettyDate date={startDateTime} />}
                        {name && <h2 className='browser-card-name'>{name}</h2>}
                        {tagline && <p className='tagline'>{tagline}</p>}
                        {location && <p className='browser-short-details'>{location}</p>}
                        {hasHost && <PrettyHost event={host} />}
                    </div>

                    <div className='browser-card-tiny-preview'>
                    {users && <h6 className='user-alias'>{usersAlias}</h6>}
                    {users && <TinyUserPreview type='users' users={users} />}
                    {companiesAlias &&  <h6 className='company-alias'>{companiesAlias}</h6>}
                    {companies && <TinyCompanyPreview type='companies' companies={companies} />}
                    </div>
                    <div className='tagList'>
                        {tags && <StaticTagList tags={tags} />}
                    </div>
                </NavLink>
                    <div className='browser-card-menu-button'>
                <i class="fas fa-chevron-circle-down" onClick={e => {
                    toggleClass(e.target, 'show-menu')
                    toggleClass(e.target.parentElement, 'show-menu')
                }}>
                        </i>
                        </div>
                    <div class="card-menu">
                        {childrenWithProps}
                    </div>

        </div>
  );
}


export default BrowserCard;

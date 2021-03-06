// import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
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
import { toggleClass } from '../../utils';
import DropDownMenu from '../../Basic/Navigation/Menus/DropDownMenu';


// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

export const BrowserCard = ( { children, renderOrder, entry, hasUsers, usersAlias, hasHost, hasCompanies, companiesAlias, urlPath } ) => {
    useHistory();

    let id = entry.id


    //account for different 'name' variable aliases
    let name
    if (entry.name) name = entry.name
    if (entry.firstName) name = entry.firstName
    // if (entry.username) name = entry.username

    //acount for different 'url' variable aliases
    let imageUrl
    if (entry.imageUrl) imageUrl = entry.imageUrl

    let startDateTime
    if (entry.startDateTime) startDateTime = entry.startDateTime

    let headline
    if (entry.headline) headline = entry.headline

    let location
    if (entry.location) location = entry.location

    let host
    if (hasHost && entry.Companies) host = entry.Companies

    let users
    // if(!entry.users)
    if (hasUsers && entry.Users) users = entry.Users
    if (!entry.Users || users.length < 1) users = false

    let companies
    if (hasCompanies) companies = entry.Company

    let tags
    if (entry.Tag) tags = entry.Tag


    const imageSize = 'large'

    return (
        <div className='browser-card glass' style={{ order: `${renderOrder}` }}>
                <NavLink to={`/${urlPath}/${id}`}>
                    <div className='browser-card-overlay'></div>
                    <div className='browser-card-image-area'>
                        <ProfileImage imageUrl={imageUrl} size={imageSize} defaultName={name}/>
                    </div>
                    <div className='browser-card-info-area'>
                        {startDateTime && <PrettyDate date={startDateTime} />}
                        {name && <h2 className='browser-card-name'>{name}</h2>}
                        {headline && <p className='headline'>{headline}</p>}
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
            <div className='browser-card-menu-adjuster'>
               
                <DropDownMenu entry={entry}>
                        {children}
                </DropDownMenu>
            </div>
        </div>
  );
}


export default BrowserCard;

// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import CompanyOwnerButtons from '../CompanyOwnerButtons'
import './BrowserCard.css'
import ProfileImage from '../ProfileHelpers/ImageHelpers/ProfileImage';
import PrettyDate from '../../Basic/PrettyData/PrettyDate';
import PrettyHost from '../../Basic/PrettyData/PrettyHost';
import TinyCompanyPreview from '../Company/TinyCompanyPreview';
import TinyUserPreview from '../User/TinyUserPreview';
import StaticTagList from '../ProfileHelpers/TagHelpers/StaticTagList'


export const BrowserCard = ({ entry, hasUsers, usersAlias, hasHost, hasCompanies, companiesAlias }) => {

    let id = entry.id

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
    if (hasHost && entry.Company) host = entry.Company

    let users
    if(hasUsers) users=entry.User

    let companies
    if (hasCompanies) companies = entry.Company

    let tags
    if (entry.Tag) tags = entry.Tag


    const imageSize = 'large'

    return (
        <div className='browser-card'>
            <div className='browser-card-menu-button'>
                <NavLink to={`/companies/${id}`}>
                    <div className='browser-card-overlay'></div>
                    <div className='browser-card-image-area'>
                        <ProfileImage url={url} size={imageSize} name={name}/>
                    </div>
                    <div className='browser-card-info-area'>
                        {startDateTime && <PrettyDate date={startDateTime} />}
                        {name && <h3 className='broswer-card-name'>{name}</h3>}
                        {tagline && <h4 className='browser-short-details'>{tagline}</h4>}
                        {location && <h4 className='browser-short-details'>{location}</h4>}
                        {location && <h4 className='browser-short-details'>{location}</h4>}
                        {hasHost && <PrettyHost event={host} />}
                    </div>

                    <div className='browser-card-tiny-preview'>
                    {usersAlias && <h6>{usersAlias}</h6>}
                    {users && <TinyUserPreview type='users' data={users} />}
                    {companiesAlias &&  <h6>{companiesAlias}</h6>}
                    {companies && <TinyCompanyPreview type='users' data={companies} />}
                    </div>
                    <div className='tagList'>
                        {tags && <StaticTagList tags={tags} />}
                    </div>
                </NavLink>
            </div>
        </div>
  );
}


export default BrowserCard;

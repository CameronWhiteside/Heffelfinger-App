

import ProfileImage from "./ImageHelpers/ProfileImage"
import ExternalLinksList from "./ExternalLinksHelpers/ExternalLinksList"
import EditProfileLink from "./ProfileCRUD/EditProfileLink"
import DeleteProfileLink from "./ProfileCRUD/DeleteProfileLink"

import './ProfileFullPage.css'

const ProfileFullPage = ({
    dataObject,
    profileType,
    pageTitle,
    imageUrl,
    imageSize,
    pageShortInfo,
    externalLinksArray,
    isProfileOwner,
    hasTags,
    tagsAlias,
    tagsSize,
    hasUsers,
    usersAlias,
    usersSize,
    hasEvents,
    eventsAlias,
    eventsSize,
    hasCompanies,
    companiesAlias,
    companiesSize,
    hasTickets,
    ticketsAlias,
    ticketsSize,
}) => {

    return (
    <section className='page-full-page'>
        <div className='primary-info'>
            <div className='top-banner'>
                <div className='image-container'>
                        <ProfileImage
                            url={imageUrl}
                            size={imageSize}
                        />
                </div>
                <div className='banner-text'>
                        <h2 className='page-title'>
                            {pageTitle}
                        </h2>
                        <div className='page-short-info'>
                            {pageShortInfo}
                        </div>
                        {hasTags && <TagGroup
                            tagsAlias={tagsAlias}
                            dataObject={dataObject}
                            tagsSize={tagsSize}
                        />}
                        {isProfileOwner && <EditTags
                            dataObject={dataObject}
                        />}
                </div>
            </div>
            <div className='page-links'>
                <div className='external-links'>
                    <ExternalLinksList externalLinksArray={externalLinksArray}/>
                </div>
                    <div className='interact-links'>
                        <CallToAction dataObject={dataObject} ctaType={ctaType}/>
                        <div className="menu-icon">
                            {isProfileOwner && <EditProfileLink />}
                            {isProfileOwner && <DeleteProfileLink />}
                        </div>
                    </div>
                </div>
        </div>

        <div className='secondary-info'>
                <div className='detail-column'>
                    <div className='detailed-description'></div>
                </div>
                <div className='action-column'>
                    <div className='owner-tasks'>
                        {isProfileOwner && <OwnerTasks />}
                    </div>
                    <div className='newsfeed'>
                    </div>
                </div>
        </div>
    </section>
    )
}

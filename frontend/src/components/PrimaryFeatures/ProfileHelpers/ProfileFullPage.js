

import ProfileImage from "./ImageHelpers/ProfileImage"
import ExternalLinksList from "./ExternalLinksHelpers/ExternalLinksList"
import EditProfileLink from "./ProfileCRUD/EditProfileLink"
import DeleteProfileLink from "./ProfileCRUD/DeleteProfileLink"
import TagsGroup from "./TagHelpers/TagsGroup"
import CallToAction from "./CTAHelpers/CallToAction"
import OwnerTaskList from "./OwnerTasksHelpers/OwnerTaskList"
import EventFeed from "../Event/EventFeed"
import TicketFeed from "../Ticket/TicketFeed"
// import UserFeed from "../User/UserFeed"
import CompanyFeed from "../Company/CompanyFeed"

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
    ctaType,
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
    <section className='profile full-page'>
        <div className='primary-info'>
            <div className='top-banner'>
                <div className='image-container'>
                        <ProfileImage
                            url={imageUrl}
                            size={imageSize}
                            name={
                                (dataObject && dataObject.name) || (dataObject && dataObject.userName) || 'H'
                            }
                        />
                </div>
                <div className='banner-text'>
                        <h2 className='page-title'>
                            {pageTitle}
                        </h2>
                        <div className='page-short-info'>
                            {pageShortInfo}
                        </div>
                        {hasTags && <TagsGroup
                            tagsAlias={tagsAlias}
                            dataObject={dataObject}
                            tagsSize={tagsSize}
                            isProfileOwner={isProfileOwner}
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
                        {isProfileOwner && <OwnerTaskList />}
                    </div>
                    <div className='newsfeed'>
                        {
                            hasTickets &&
                            <TicketFeed
                                dataObject={dataObject}
                                ticketsSize={ticketsSize}
                                ticketsAlias={ticketsAlias}
                            />
                        }
                        {
                            hasEvents &&
                            <EventFeed
                                dataObject={dataObject}
                                eventsSize={eventsSize}
                                eventsAlias={eventsAlias}
                            />
                        }
                        {/* {
                            hasUsers &&
                            <UserFeed
                                dataObject={dataObject}
                                usersSize={usersSize}
                                usersAlias={usersAlias}
                            />
                        } */}
                        {
                            hasCompanies &&
                            <CompanyFeed
                                dataObject={dataObject}
                                companiesSize={companiesSize}
                                companiesAlias={companiesAlias}
                            />
                        }
                    </div>
                </div>
        </div>
    </section>
    )
}

export default ProfileFullPage

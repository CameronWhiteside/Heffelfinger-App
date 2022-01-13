

import ProfileImage from "./ImageHelpers/ProfileImage"
import EditProfileLink from "./ProfileCRUD/EditProfileLink"
import DeleteProfileLink from "./ProfileCRUD/DeleteProfileLink"
import TagsGroup from "./TagHelpers/TagsGroup"
import ProfileCallToAction from "./CTAHelpers/ProfileCallToAction"
import OwnerTaskList from "./OwnerTasksHelpers/OwnerTaskList"

import FeedArea from './FeedHelpers/FeedArea'
import AddEventButton from "../Event/EventCRUDButtons/AddEventButton"
import AddEmployeeButton from "../Employee/EmployeeCRUDButtons/AddEventButton"
// import SocialLinksForm from "./ExternalLinksHelper/SocialLinksHelper/SocialLinksForm"
import ExternalLinks from "./ExternalLinksHelper/ExternalLinks"

import './ProfileFullPage.css'
import DropDownMenu from "../../Basic/Navigation/Menus/DropDownMenu"
import AddCompanyButton from "../Company/CompanyCRUDButtons/AddCompanyButton"

//pass in CRUD form as TRUE and include as child element

const ProfileFullPage = ({
    hasCrud,
    dataObject,
    profileType,
    pageTitle,
    pageDescription,
    imageUrl,
    imageSize,
    pageShortInfo,
    primaryLink,
    socialLinksArray,
    isProfileOwner,
    hasTags,
    tagsAlias,
    tagsSize,
    ctaType,
    hasUsers,
    hasEvents,
    hasCompanies,
    hasTickets,
    children,
}) => {


    return (
    <section className='profile-full-page'>



            { hasCrud && <div className="crud-left-col">

            </div>}



                    <div className='primary-info-col'>

                        <div className='top-banner glass'>
                            <div className='image-container'>
                                    <ProfileImage
                                        url={imageUrl}
                                        size={imageSize}
                                        name={ pageTitle || (dataObject && dataObject.name) || (dataObject && dataObject.firstName) || 'H'
                                        }
                                    />
                            </div>
                            <div className='banner-text'>
                                    <h1 className='page-title'>
                                        {pageTitle}
                                    </h1>
                                    <div className='page-short-info'>
                                        <p>
                                        {pageShortInfo}
                                        </p>
                                    </div>
                                    {hasTags && <TagsGroup
                                        tagsAlias={tagsAlias}
                                        dataObject={dataObject}
                                        tagsSize={tagsSize}
                                        isProfileOwner={isProfileOwner}
                                    />}
                            {isProfileOwner &&
                                <div className="owner-menu-container">
                                    <DropDownMenu entry={dataObject}>
                                        {children[0]}
                                        {children[1]}
                                    </DropDownMenu>
                                </div>
                            }

                            </div>
                        </div>


                    <div className='secondary-info'>
                    <div className='static-column'>
                       <ExternalLinks
                            socialLinksArray={socialLinksArray}
                            primaryLink={primaryLink}
                        ></ExternalLinks>

                        {pageDescription &&

                            <div className='detailed-description glass'>
                                <p>{pageDescription}</p>
                            </div>
                        }
                                <ProfileCallToAction className='glass'
                                    dataObject={dataObject}
                                    ctaType={ctaType}
                                />
                    </div>
                    <div className='action-column glass scroll-area'>

                                <div className='newsfeed'>
                                    {
                                        hasTickets &&
                                            <FeedArea
                                                entries={dataObject.Tickets}
                                                urlPathName='events'
                                                alias={`tickets`}
                                            >
                                        </FeedArea>
                                    }
                                    {
                                        hasEvents &&
                                        <FeedArea
                                            entries={dataObject.Events}
                                            urlPathName='events'
                                            alias={`${pageTitle}'s Events`}
                                            profileType={profileType}
                                        >
                                            {
                                                isProfileOwner && profileType === 'company' &&
                                                <AddEventButton />
                                            }
                                        </FeedArea>
                                    }
                                    {
                                        hasUsers &&
                                        profileType == 'company' &&
                                        <FeedArea
                                            entries={dataObject.Users}
                                            urlPathName='users'
                                            alias={`Contributors`}
                                            profileType={profileType}
                                        >
                                             {
                                                isProfileOwner  &&
                                                <AddEmployeeButton />
                                             }
                                        </FeedArea>

                            }

                            {/* //event attendee list */}
                                {
                                        hasUsers &&
                                        (profileType === 'event') &&
                                        <FeedArea
                                            entries={dataObject.Tickets.map(ticket => ticket.User)}
                                            urlPathName='users'
                                            alias={`Attendees`}
                                        >
                                             {/* {
                                                isProfileOwner  &&
                                                <AddEmployeeButton />
                                             } */}
                                        </FeedArea>

                            }

                            {/* //event attendee list */}
                                    {
                                        hasCompanies &&
                                            <FeedArea
                                                      entries={dataObject.Companies}
                                                      urlPathName='companies'
                                                      alias={`Contributors`}
                                            >
                                                {isProfileOwner && profileType === 'user'
                                                && <AddCompanyButton/>
                                                }
                                            </FeedArea>
                                    }
                                </div>
                            </div>
                </div>
                    <div className='crud-area'>
                        {hasCrud && <div className="cover-up" /> }
                        {hasCrud && children[2]}
                    </div>
                </div>
    </section>
    )
}

export default ProfileFullPage

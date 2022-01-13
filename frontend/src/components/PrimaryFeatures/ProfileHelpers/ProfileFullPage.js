import { useState } from "react"

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
import ExternalLinksForm from "./ExternalLinksHelper/ExternalLinksForm"
import ImageForm from './ImageHelpers/ImageForm'

//pass in CRUD form as TRUE and include as child element

const ProfileFullPage = ({
    id,
    hasCrud,
    setHasCrud,
    editInfoMode,
    setEditInfoMode,
    editImageMode,
    setEditImageMode,
    editLinksMode,
    setEditLinksMode,
    editEmployeesMode,
    setEditEmployeesMode,
    dataObject,
    profileType,
    pageTitle,
    pageDescription,
    imageSize,
    pageShortInfo,
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

    const [imageUrl, setImageUrl] = useState(dataObject.imageUrl)

    const [social1, setSocial1] = useState('')
    const [social2, setSocial2] = useState('')
    const [social3, setSocial3] = useState('')
    const [social4, setSocial4] = useState('')
    const [social5, setSocial5] = useState('')
    const [social1Icon, setSocial1Icon] = useState(``)
    const [social2Icon, setSocial2Icon] = useState(``)
    const [social3Icon, setSocial3Icon] = useState(``)
    const [social4Icon, setSocial4Icon] = useState(``)
    const [social5Icon, setSocial5Icon] = useState(``)
    const [primaryExternalLink, setPrimaryExternalLink] = useState(``)
    const [primaryExternalLabel, setPrimaryExternalLabel] = useState(``)

    let routeName
    if(profileType === 'company') routeName='companies'
    if(profileType === 'user') routeName='users'
    if(profileType === 'event') routeName='events'

    return (
    <section className='profile-full-page'>



            { hasCrud && <div className="crud-left-col">

            </div>}



                    <div className='primary-info-col'>

                        <div className='top-banner glass'>
                            <div className='image-container'>
                        <ProfileImage
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                            size={imageSize}
                            defaultName={pageTitle || (dataObject && dataObject.name) || (dataObject && dataObject.firstName) || 'H'}
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

                            </div>
                        </div>


                    <div className='secondary-info'>
                    <div className='static-column'>
                        {(

                            social1 ||
                            social2 ||
                            social3 ||
                            social4 ||
                            social5 ||
                            primaryExternalLabel
                        ) && <ExternalLinks
                            social1={social1}
                            social2={social2}
                            social3={social3}
                            social4={social4}
                            social5={social5}
                            social1Icon={social1Icon}
                            social2Icon={social2Icon}
                            social3Icon={social3Icon}
                            social4Icon={social4Icon}
                            social5Icon={social5Icon}
                            primaryExternalLink={primaryExternalLink}
                            primaryExternalLabel={primaryExternalLabel}
                        />}

                        {pageDescription &&

<div className='detailed-description glass'>
                                <p>{pageDescription}</p>
                            </div>
                        }
                        {ctaType &&<ProfileCallToAction className='glass'
                            dataObject={dataObject}
                            ctaType={ctaType}
                        />
                        }
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
                {
                    isProfileOwner &&
                    !(
                        editInfoMode ||
                        editEmployeesMode ||
                        editLinksMode ||
                        editImageMode
                    ) &&
                        <div className="owner-menu-container">
                            <DropDownMenu entry={dataObject}>
                                {children[0]}
                                {children[1]}
                                {children[2]}
                                {children[3]}
                            </DropDownMenu>
                        </div>
                }
                    <div className='crud-area'>
                        {(
                            editInfoMode ||
                            editEmployeesMode ||
                            editLinksMode ||
                            editImageMode
                        ) && <div className="cover-up" />
                        }

                        {editInfoMode && children[4]}
                        {editLinksMode &&

                        <ExternalLinksForm
                        idRowName={profileType}
                        idValue={dataObject.id}
                        routeName={routeName}
                        setHasCrud={setHasCrud}
                        social1={social1}
                        setSocial1={setSocial1}
                        social2={social2}
                        setSocial2={setSocial2}
                        social3={social3}
                        setSocial3={setSocial3}
                        social4={social4}
                        setSocial4={setSocial4}
                        social5={social5}
                        setSocial5={setSocial5}
                        social1Icon={social1Icon}
                        setSocial1Icon={setSocial1Icon}
                        social2Icon={social2Icon}
                        setSocial2Icon={setSocial2Icon}
                        social3Icon={social3Icon}
                        setSocial3Icon={setSocial3Icon}
                        social4Icon={social4Icon}
                        setSocial4Icon={setSocial4Icon}
                        social5Icon={social5Icon}
                        setSocial5Icon={setSocial5Icon}
                        primaryExternalLink={primaryExternalLink}
                        setPrimaryExternalLink={setPrimaryExternalLink}
                        primaryExternalLabel={primaryExternalLabel}
                        setPrimaryExternalLabel={setPrimaryExternalLabel}
                        setEditLinksMode={setEditLinksMode}

                        />

                    }

                    {editImageMode &&

                    <ImageForm
                        pageTitle={pageTitle}
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        setEditImageMode={setEditImageMode}
                        profileType={profileType}
                        id={id}
                    />

}
                    </div>
                </div>
    </section>
    )
}

export default ProfileFullPage

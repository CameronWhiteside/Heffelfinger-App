import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import FormInput from "../../../Basic/FormHelpers/FormInput"
import './ExternalLinksForm.css'



const linkMatch = [
    {
        name: 'alibaba',
        pattern: /^\S*alibaba[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/alibaba.svg')`
    },
    {
        name: 'angellist',
        pattern: /^\S*angel[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/angellist.svg')`
    },
    {
        name: 'facebook',
        pattern: /^\S*facebook[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/facebook.svg')`
    },
    {
        name: 'github',
        pattern: /^\S*github[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/github.svg')`
    },
    {
        name: 'google',
        pattern: /^\S*google[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/google.svg')`
    },
    {
        name: 'instagram',
        pattern: /^\S*instagram[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/instagram.svg')`
    },
    {
        name: 'kickstarter',
        pattern: /^\S*kickstarter[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/kickstarter.svg')`
    },
    {
        name: 'linkedin',
        pattern: /^\S*linkedin[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/linkedin.svg')`
    },
    {
        name: 'pinterest',
        pattern: /^\S*pinterest[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/pinterest.svg')`
    },
    {
        name: 'producthunt',
        pattern: /^\S*producthunt[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/producthunt.svg')`
    },
    {
        name: 'quora',
        pattern: /^\S*quora[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/quora.svg')`
    },
    {
        name: 'reddit',
        pattern: /^\S*reddit[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/reddit.svg')`
    },
    {
        name: 'snapchat',
        pattern: /^\S*snapchat[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/snapchat.svg')`
    },
    {
        name: 'stackshare',
        pattern: /^\S*stackshare[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/stackshare.svg')`
    },
    {
        name: 'tiktok',
        pattern: /^\S*tiktok[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/tiktok.svg')`
    },
    {
        name: 'twitch',
        pattern: /^\S*twitch[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/twitch.svg')`
    },
    {
        name: 'twitter',
        pattern: /^\S*twitter[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/twitter.svg')`
    },
    {
        name: 'udemy',
        pattern: /^\S*udemy[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/udemy.svg')`
    },
    {
        name: 'vimeo',
        pattern: /^\S*vimeo[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/vimeo.svg')`
    },
    {
        name: 'youtube',
        pattern: /^\S*youtu[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/youtube.svg')`
    }
]

const ExternalLinksForm = ({idRowName, idValue, routeName, setHasCrud}) => {
    const dispatch = useDispatch();

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

    const [primaryLink, setPrimaryLink] = useState()
    const [primaryLabel, setPrimaryLabel] = useState()

    const findMatchingUrl = (str) => {
        for (let i = 0; i < linkMatch.length; i++) {
            let pattern = linkMatch[i].pattern
            let backgroundImage = linkMatch[i].backgroundImage
            if (pattern.test(str)) return backgroundImage
        }

        return `url('/assets/icons/default.svg')`
    }

    useEffect(() => {
        setSocial1Icon(findMatchingUrl(social1))
    }, [social1])

    useEffect(() => {
        setSocial1Icon(findMatchingUrl(social2))
    }, [social2])

    useEffect(() => {
        setSocial1Icon(findMatchingUrl(social3))
    }, [social3])

    useEffect(() => {
        setSocial1Icon(findMatchingUrl(social4))
    }, [social4])

    useEffect(() => {
        setSocial1Icon(findMatchingUrl(social5))
    },[social5])

    let userId, companyId, eventId
    if (idRowName === 'user') userId = idValue
    if (idRowName === 'company') companyId = idValue
    if (idRowName === 'event') eventId = idValue


    const handleSubmit = async (e) => {
        e.preventDefault()
        let newLinks = [
            {
                url: social1,
                icon: social1Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId
            },
            {
                url: social2,
                icon: social1Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: social3,
                icon: social1Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: social4,
                icon: social1Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: social5,
                icon: social1Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: primaryLink,
                icon: social1Icon,
                primaryLink: true,
                primaryLinkName: primaryLabel,
                userId,
                eventId,
                companyId
            }
        ]

        let submission = newLinks.filter(link => link.url)

        try {
            // dispatch(addExternalLinks(submission))
            setHasCrud(false)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="external-links-form form-container">
            <h3>ExternalLinksForm</h3>
            <div className="form-container"/>
            <form
                className="add-external-links"
                onSubmit={handleSubmit}
            >
                <div className="all-inputs">

                    <div className="input-line">
                    <div className="icon-holder"
                        >
                        <div className="icon-image"
                            style={{backgroundImage: social1Icon}}
                        >
                        </div>
                        </div>
                        <FormInput
                            labelText={'Social Link'}
                            id={1}
                            type={'url'}
                            stateVar={social1}
                            setStateVar={setSocial1}
                            required={false}
                            placeholder={'Yay Social Media'}
                            >
                        </FormInput>

                    </div>


           </div>
            </form>
            </div>

    )
}

export default ExternalLinksForm

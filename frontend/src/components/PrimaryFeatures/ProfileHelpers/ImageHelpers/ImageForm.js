import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { editCompany } from "../../../../store/company"

import FormInput from "../../../Basic/FormHelpers/FormInput"
import './ImageForm.css'
import ProfileImage from "./ProfileImage"


const ImageForm = ({
    id,
    pageTitle,
    imageUrl,
    setImageUrl,
    setEditImageMode,
    profileType,
    dataObject
}) => {

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault()

        dataObject.imageUrl = imageUrl

        // let editedItem = {
        //       id,
        //       imageUrl: `${imageUrl}`,
        //   }

        try {
            if (profileType === 'company') {
                // name,
                // headline,
                // description,
                dispatch(editCompany(dataObject))

            }
            //   if (profileType === 'user') dispatch(editUser(editedItem))
            //   if (profileType === 'event') dispatch(editEventCompany(editedItem))
              setEditImageMode(false)
          } catch (e) {
            let res = await e.json()
            console.log({e})
            //   let errors = res.errors
            //   setDatabaseErrors([...errors])
          }
    }

    return (
        <div className="image-form">
            <div className="form-container">
            <form
                // className="add-external-links"
                onSubmit={handleSubmit}
            >
                    <div className="all-inputs">
                        <div className="image-preview">
                        <ProfileImage
                            imageUrl={imageUrl}
                            size={'large'}
                            defaultName={pageTitle}
                            ></ProfileImage>
                            </div>

                        <FormInput
                            labelText={'LINK IMAGE URL'}
                            id={1}
                            type={'url'}
                            stateVar={imageUrl}
                            setStateVar={setImageUrl}
                            required={false}
                            placeholder={`.JPG OR .PNG OR .SVG`}
                            >
                        </FormInput>
                   </div>

                <button
              className='fake-submit'
              type='submit'
              >UPDATE IMAGE</button>
                </form>
                </div>
            </div>

    )
}

export default ImageForm

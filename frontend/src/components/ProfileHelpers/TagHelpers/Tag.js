const { useEffect, useState } = require("react")
const { useDispatch } = require("react-redux")

const Tag = ({ tagsSize, tagName, canToggle=false }) => {

    const dispatch = useDispatch();

    const [selected, setSelected] = useState(true)

    //Some kind of useEffect to dispatch an add or delete from EventTags,
    //still need to manage that event Id and write that route

    const toggleTag = () => {
        const isSelected = selected
        setSelected(!isSelected)
    }

    return (
    <>
            {canToggle && <div className={`tag ${tagsSize}`} data-colorful={selected} onClick={() => toggleTag()}>
                {tagName}
            </div>
            }
            {!canToggle && <div className={`tag ${tagsSize}`} data-colorful={true}>
                {tagName}
            </div>
            }
        </>
    )

}

export default Tag

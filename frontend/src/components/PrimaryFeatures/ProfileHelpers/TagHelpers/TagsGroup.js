import Tag from "./Tag"
import EditTags from "./EditTags"

const TagsGroup = ({ dataObject, tagsSize, tagsAlias, isProfileOwner }) => {
    const tags = dataObject.tags

    return (
        <div className="tag-group">

            {!isProfileOwner && tags.map(tag => (
                <Tag key={tag.id} tagSize={tagsSize} tagName={tag.name}/>
            )
            )}

            {isProfileOwner &&
                <EditTags
                    tagsSize={tagsSize}
                    tagsAlias={tagsAlias}
                    tags={tags}
            />}
        </div>
    )

}

export default TagsGroup

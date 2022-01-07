
export const containsUnsafeCharacters = (str) => {
    const safePattern = new RegExp(/^[^<>%$]*$/, 'g')
    return safePattern.test(str)
}

export const unsafeInput = (str, paramName = 'entry') => {
    const charactersToRemove = new RegExp(/[<>%$]*$/, 'g')
    let newStr = str.replace(charactersToRemove, '').trim()
    console.log({newStr})

    if (newStr && containsUnsafeCharacters(str)) {
        return {
            warningText: `${str} is not a valid ${paramName}. Suggested ${paramName}: `,
            suggestion: newStr,
            isSafe: false
        }
    } else {
        return {
            isSafe: true
        }
    }
}


const isWebsite = (str) => {
    const websiteRegEx = new RegExp(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'g')
    return websiteRegEx.test(str)
}
const isImageUrl = (str) => {
    const imageRegEx = new  RegExp(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\.(?:jpg|gif|png|svg)/, 'g')
    return imageRegEx.test(str)
}

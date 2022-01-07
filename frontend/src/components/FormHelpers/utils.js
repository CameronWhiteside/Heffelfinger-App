export const containsUnsafeCharacters = (str) => {
    if(!str) return true
    const unsafePattern = new RegExp(/[<>%$]/, 'g')
    return unsafePattern.test(str)
}

export const unsafeInput = (str, paramName = 'entry', maxLength) => {
    const charactersToRemove = new RegExp(/[<>%$]/, 'g')
    let newStr
    if (str) {
        newStr = str.replace(charactersToRemove, '').trim()
        if (maxLength) {
            newStr = newStr.slice(0, maxLength)
        }
    }
    if (newStr && containsUnsafeCharacters(str)) {
        return {
            warningText: `Invalid ${paramName}. Suggested: `,
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

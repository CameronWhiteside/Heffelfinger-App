export const toggleClass = (target, className) => {

    if (target.className.includes(className)){
        let result = target.className.replace(className, '')
        target.className = result
    } else {
        target.className += ` ${className}`
    }

}

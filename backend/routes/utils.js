// const csrf = require('csurf');

// export const csrfProtection = csrf({ cookie: true });

export const asyncHandler = (handler) => {
    return (res, req, next) => {
        return handler(res, req, next).catch(next);
    }
};

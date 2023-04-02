export const success = (data = [], message = '', code = 200) => {
    return {
        data,
        message,
        code
    };
};

export const error = (message = '', code = 500) => {
    return {
        message,
        code
    };
}
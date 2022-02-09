
const handleDuplicateError = (err, res) => {
    const field = Object.keys(err.keyValue);
    const code = 409;
    const error = `An account with that ${field} already exists.`;
    console.log(error)
    res.status(code).send({messages: error, fields: field});
};

const handleError = (err, req, res, next) => {
    try {
        console.log(`congrats you hit the error middleware ${err.code}`);
        if(err.code && err.code == 11000) return err = handleDuplicateError(err, res);
    } catch(err) {
        res.status(500).send('An unknown error occured.');
    }
};
export { handleError };
const returnRes = (msg, status, res) => {
    if (!res || !status) {
        return msg
    }

    return res.status(status).send({ message: msg })
}

export default returnRes
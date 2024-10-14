const returnRes = (msg, status, res) => {
    if (!res || !status) {
        return msg
    }

    return res.status(201).send({ message: msg })
}

export default returnRes
export const validateDate = (req, res, next) => {
    const start = new Date(req.body.startTime);
    const end = new Date(req.body.endTime);
    if (end < start) {
        return res.status(400).send({ message: "date is not valid" });
    }
    next();
};

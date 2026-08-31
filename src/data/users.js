const users = [];

let nextId = 1;

const getNextId = () => {
    return nextId++;
};

module.exports = {
    users,
    getNextId
};
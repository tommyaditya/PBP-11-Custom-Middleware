let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
];

const getAllUsers = async () => {
    return users;
};

const getUserById = async (id) => {
    return users.find(user => user.id === parseInt(id));
};

const addUser = async (user) => {
    const newId = users.length + 1;
    const newUser = { id: newId, ...user };
    users.push(newUser);
    return newId;
};

module.exports = { getAllUsers, getUserById, addUser };

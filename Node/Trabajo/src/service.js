const data = require("./data-NALiu-JlQiJbLtx5Ap65L.json");

module.exports = {
    getUsers: () => data,
    getUser: (id) => {
        let idf = Number(id);
        let user = data.filter((person) => person.id === idf)[0];
        return user;
    },
    createUSer:(dataUser) => {
        let newUser ={
            id: data.length + 1,
            ...dataUser
        }
        data.push(newUser);
        return newUser;
    }
}
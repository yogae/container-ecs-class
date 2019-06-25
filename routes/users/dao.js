class UserMemory {
    constructor () {
        this.users = [];
        this.index = 0;
    }

    /**
     *
     *
     * @param {string} name
     * @param {string} email
     * @memberof UserMemory
     */
    addUser (name, email) {
        this.users.push({
            name,
            email,
        });
        return {
            name,
            email,
        }
    }

    /**
     *
     *
     * @returns
     * @memberof UserMemory
     */
    getUserList () {
        return this.users;
    }

    /**
     *
     *
     * @param {number} id
     * @returns
     * @memberof UserMemory
     */
    getOneUser (id) {
        return this.users[id];
    }

    /**
     *
     *
     * @param {number} id
     * @param {string} name
     * @param {string} email
     * @returns
     * @memberof UserMemory
     */
    updateUser (id, name, email) {
        const originUser = this.users[id];
        this.users[id] = {
            name: name || originUser.name,
            email: email || originUser.email
        }
        return this.users[id];
    }

    /**
     *
     *
     * @param {number} id
     * @memberof UserMemory
     */
    deleteUser (id) {
        const originUser = this.users[id];
        this.users.splice(id);
        return originUser;
    }
}

const userMemory = new UserMemory();

class UserDao {

    /**
     *
     *
     * @param {string} name
     * @param {string} email
     * @memberof UserDao
     */
    create (name, email) {
        return userMemory.addUser(name, email);
    }


    /**
     *
     *
     * @param {number} id
     * @param {string} name
     * @param {string} email
     * @returns
     * @memberof UserDao
     */
    update (id, name, email) {
        return userMemory.updateUser(id, name, email);
    }

    /**
     *
     *
     * @param {number} id
     * @returns
     * @memberof UserDao
     */
    readOne (id) {
        return userMemory.getOneUser(id);
    }

    /**
     *
     *
     * @returns
     * @memberof UserDao
     */
    readMany () {
        return userMemory.getUserList();
    }

    /**
     *
     *
     * @param {number} id
     * @returns
     * @memberof UserDao
     */
    remove (id) {
        return userMemory.deleteUser(id);
    }
}

module.exports = new UserDao();
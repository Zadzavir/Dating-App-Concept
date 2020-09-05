class Users{

    // get users
    async get(amount){
        const users = await fetch(`https://randomuser.me/api/?results=${amount}`);
        return await users.json();
    }

}


class Member {
    constructor(id, firstName, lastName, email, password, totalHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.totalHours = totalHours;
        this.name = this.firstName + ' ' + this.lastName;
        this.isAdmin = (this.email == "swpuvvada@gmail.com") ? true : false;
    }
}

module.exports = Member;

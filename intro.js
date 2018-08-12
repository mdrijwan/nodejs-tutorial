// module
var myName = {
    firsName: "Rijwan",
    lastName: "Razzaq",
    myIntro(firsName, lastName) {
        console.log(`My name is ${this.firsName} ${this.lastName}`)
    }
}

module.exports = myName.myIntro();
const giveAccess = (name) => console.log("Acesso garantido ao " + name)

function authenticate(verify){
    let array = [];

    for (let i = 0; i < verify; i++){
        array.push(i)
    }

    return true;
}

function letPerson(person, fn) {
    if(person.level === "admin") {
        fn(5000000)
    }
    else if (person.level === "user"){
        fn(1000000)
    }

    return giveAccess(person.name)
} 

letPerson({level: "admin", name: "Adam"}, authenticate)
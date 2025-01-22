// votre code ici

function checkAge(age) {
    var rep = "";
    if (age < 18) {
        rep = "Vous êtes mineur.";
    } else if (age > 18 & age < 66) {
        rep = "Vous êtes majeur.";
    } else {
        rep = "Vous êtes senior.";
    }

    return rep;
}


export default checkAge;

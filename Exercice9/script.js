// votre code ici

function checkAge(age) {
    var rep = "";
    if (age < 18) {
        rep = "Vous �tes mineur.";
    } else if (age > 18 & age < 66) {
        rep = "Vous �tes majeur.";
    } else {
        rep = "Vous �tes senior.";
    }

    return rep;
}


export default checkAge;

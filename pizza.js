const miSaludo = "Hola, soy una pizza"

const esUnaPizza = (frase) => {
    let output = false;

    const regexToMatch = /Hola soy una arepa/g
    if(regexToMatch.test(frase)) {
        output = true
    }
    return output
}
console.log("Cálculo do IMC");

const peso = 80;
const altura = 1.50;

const imc = (peso /(altura*altura));

console.log(imc);

if (imc<16){
    console.log("Magreza grave")
}
else if (imc>=16 && imc<=16.9){
    console.log("Magreza moderada")
}
else if (imc>=17 && imc<=18.5){
    console.log("Magreza leve")
}
else if (imc>=18.6 && imc<=24.9){
    console.log("Peso ideal")
}
else if (imc>=25 && imc<=29.9){
    console.log("Sobrepeso")
}
else if (imc>=30 && imc<=34.9){
    console.log("Obesidade grau 1")
}
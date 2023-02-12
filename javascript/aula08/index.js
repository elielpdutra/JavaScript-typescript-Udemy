/*
Eliel Porto Dutra tem 22 anos, pesa 60 kg
tem 1.8 de altura e seu IMC é de 18.51
Luiz Otávio nasceu em 2001
*/ 

const nome = 'Eliel';
const sobrenome = 'Porto Dutra';
const idade = 22;
const peso = 60;
const alturaEmM = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;
let dataAtual = new Date();

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = dataAtual.getFullYear() - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)}. ${nome} nasceu em ${anoNascimento}`);
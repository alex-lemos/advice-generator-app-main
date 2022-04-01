"use strict";

// # GLOBAL

// - API

let url = "https://api.adviceslip.com/advice"

// - DOM

let btnDice = document.querySelector(".space-dice__bg");
let id = document.querySelector(".text__id");
let advice = document.querySelector(".text__advice-api");

// # EVENT

btnDice.addEventListener("click", randonAdvice);

// # FUNCTION

onload = function(){
    randonAdvice();
}

function randonAdvice(){
    // console.log("teste");

    // O fetch me permite acessar a informação da api
    // A fetch retorna uma promisse, então é necessário o .then
    // A response, ou  melhor, resposta, não vem em formato JSON, então é necessário transformar em JSON.
    fetch(url)
    .then((response)=>{

        return response.json()
        // O json do response retorna uma promisse, tornando assim necessário
        // ter um novo .then

    })
    .then((data) => {

        // Toda manipulação do DOM vai aqui pq aqui o arquivo ja está em JSON
        // e consigo mostrar o resultado na tela
        id.innerText = data.slip.id // Pego o Id
        advice.innerText = data.slip.advice // Pego o advice
    })
}
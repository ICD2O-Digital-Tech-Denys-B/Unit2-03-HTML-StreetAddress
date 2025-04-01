// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

//Functions that calculate input and give answers
function calcPerimeter() {
    let length = document.getElementById("length-peri").value;
    let width = document.getElementById("width-peri").value;
    peri = 2*length + 2*width
    document.getElementById("answer-peri").innerHTML = "Answer:" + peri +" cm";
}

function calcArea() {
    let arealength = document.getElementById("length-area").value;
    let areawidth = document.getElementById("width-area").value;
    area = arealength*areawidth
    document.getElementById("answer-area").innerHTML = "Answer:" + area +" cm";
}
import $ from 'jquery';

var body = $('body');

const p = $("<p></p>").text("Inserindo texto").css("color", "red");

body.append(p);
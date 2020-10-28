'use strict';

$('#submit').addEventListener('click', e => {
  e.preventDefault()
  let input = $('#input').value
  $('#output').value = simplifySpelling(input)
});

function $(selector) {
  return document.querySelector(selector)
}


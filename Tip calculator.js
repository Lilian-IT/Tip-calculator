const cost_input = document.querySelector('.cost');
const service_input = document.querySelector('.service');
const people_input = document.querySelector('.people');
const tip_btn = document.querySelector('#tip-btn');

tip_btn.addEventListener('click', calc_tip);

function calc_tip () {
 let cost = Number(cost_input.value);
 let service = Number(service_input.value) / 100;
 let people = Number(people_input.value);
 let tip = (cost * service) / people;

 let tip_el = document.querySelector('.tip-wrap .tip');
 tip_el.innerText = 'MDL' + ' ' + tip.toFixed(1) + ((people > 1) ? ' each' : '');}
  //Pentru rotunjirea zecimalelor (prețuri), folosesc .toFixed 
//Semnul de întrebare ? este o alternativă la o declaratie ”if„ folosită cel mai bine în cazul în care una dintre cele două valori va fi atribuită unei variabile pe baza unei instrucțiuni condiționate.
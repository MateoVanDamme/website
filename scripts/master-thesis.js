import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

createNavbar("Master thesis");

//Add buttons
addButtonClickListener('btnLinkedInCasper', 'https://www.linkedin.com/in/casper-haems/');
addButtonClickListener('btnInfusion', 'https://nuclearfusion.ugent.be/');
addButtonClickListener('btnGradesAndFeedback', './master-thesis/PlatoMateo.pdf');
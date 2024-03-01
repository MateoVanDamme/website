import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

createNavbar("Master thesis");

//Add buttons
addButtonClickListener('btnPortfolioCasper', 'https://casper.wvg.be/home/');
// addButtonClickListener('btnLinkedInCasper', 'https://www.linkedin.com/in/casper-haems/');
addButtonClickListener('btnInfusion', 'https://nuclearfusion.ugent.be/');
addButtonClickListener('btnThesis', './master-thesis/masters_thesis_Leo_Baekeland.pdf');
addButtonClickListener('btnGradesAndFeedback', './master-thesis/PlatoMateo.pdf');
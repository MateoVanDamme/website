import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

//Add navbar
createNavbar("Quarkus project"); 

//Add buttons
addButtonClickListener('btnLinkedInJordi', 'https://www.linkedin.com/in/jordi-thijsman-73901913a/');
addButtonClickListener('btnLinkedInEwoud', 'https://www.linkedin.com/in/ewoud-allart-666a56278/');
// addButtonClickListener('btnLinkedInWout', 'https://www.linkedin.com/in/barre-d-haeseleer-53386b266/');
addButtonClickListener('btnGithubQuarkus', 'https://github.com/MateoVanDamme/java-quarkus-project');
addButtonClickListener('btnReportQuarkus', './quarkus/systeemontwerp.pdf');




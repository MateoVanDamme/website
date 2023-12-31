import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

//Add navbar
createNavbar("Scene generation"); 

//Add buttons
addButtonClickListener('btnLinkedInCasper', 'https://www.linkedin.com/in/casper-haems/');
addButtonClickListener('btnWebsiteSceneGeneration', 'https://mcabla.github.io/3D-rendering/');
addButtonClickListener('btnGithubSceneGeneration', 'https://github.com/mcabla/3D-rendering');
addButtonClickListener('btnReportSceneGeneration', './scene-generation/Project-report.pdf');
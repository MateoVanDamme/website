import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

//Add navbar
createNavbar("(Sm)Art Path"); 

//Add buttons
addButtonClickListener('btnLinkedInAhmad', 'https://www.linkedin.com/in/ahmad-alkaddor/');
addButtonClickListener('btnLinkedInEllen', 'https://www.linkedin.com/in/ellen-mullie/');
addButtonClickListener('btnLinkedInJonas', 'https://www.linkedin.com/in/jonas-neirynck/');
addButtonClickListener('btnGithubArtPath', 'https://github.ugent.be/jonneiry/cvisie_group_13');
addButtonClickListener('btnReportArtPath', './art-path/Project_CV_group13.pdf');

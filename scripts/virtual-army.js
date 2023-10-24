import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

createNavbar("Virtual army");

//Add buttons
addButtonClickListener('btnLinkedInJannes', 'https://www.linkedin.com/in/jannes-bryon-a4788a232/');
addButtonClickListener('btnLinkedInSam', 'https://www.linkedin.com/in/sam-van-dyck-b2607b9/');
addButtonClickListener('btnGithubVirtualArmy', 'https://github.com/MateoVanDamme/virtual-army');
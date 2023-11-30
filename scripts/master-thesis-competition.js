import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

createNavbar("Master thesis competition");
//Add buttons
addButtonClickListener('btnFutureProef', 'https://futureproef.gent/stem/');
addButtonClickListener('btnEos2023', 'https://www.eoswetenschap.eu/scriptieprijs2023');
//import fonts
import './fonts.css';
import './index.scss';

// import jquery
import $ from 'jquery';

// import Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBacon, faAnchor } from  '@fortawesome/free-solid-svg-icons';

// import bootstrap
import 'bootstrap';

library.add(faBacon);
library.add(faAnchor);
dom.watch();

var body = $('body');

const p = $("<p></p>").text("Inserindo texto").css("color", "red");

body.append(p);

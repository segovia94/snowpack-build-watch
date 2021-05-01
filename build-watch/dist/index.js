/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import '../_snowpack/pkg/jquery-hoverintent.v1.10.1.js';
import confetti from '../_snowpack/pkg/canvas-confetti.v1.4.0.js';

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

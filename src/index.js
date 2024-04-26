// src/index.js
import { initializeFirebase } from './utils/firebase';
import { greetUser } from './utils/helpers';

initializeFirebase();

document.addEventListener('DOMContentLoaded', function() {
    greetUser('Alice');
});

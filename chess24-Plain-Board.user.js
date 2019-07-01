// ==UserScript==
// @name         chess24-Plain-Board
// @namespace    https://louisasanaka.me
// @version      0.1
// @description  Replaces the chess24 board with a pure black & white one
// @author       Louis
// @match        https://chess24.com/en/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let tries = 0;

    function run() {
        var checkExist = setInterval(function() {
            let boardElement = document.querySelector("img.boardImage");
            if (boardElement != null) {
                replaceBoard(boardElement);
                clearInterval(checkExist);
            }
            if (tries > 5) {
                console.log("Failed to find board.");
                clearInterval(checkExist);
            }
            ++tries;
        }, 1000); // check every 1 second
    }

    function replaceBoard(boardElement) {
        let url = "https://raw.githubusercontent.com/LouisAsanaka/chess24-Plain-Board/master/plain.png";
        boardElement.setAttribute("src", url);
        console.log("> Board changed!");
    }
    window.addEventListener('load', run, false);
})();

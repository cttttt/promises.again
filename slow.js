/* eslint-disable no-console */

var async = require("async");

function sample(array) {
    var randomIndex = Math.floor(Math.random() * (array.length - 1));
    return array[randomIndex];
}

function randomOutcome() {
    var outcomeLabel =  sample([ 
        "fixable",
        "warnable",
        "bad",
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    ]);

    if (outcomeLabel) {
        var outcome = new Error();
        outcome.error = outcomeLabel;
        return outcome;
    }

    return undefined;
}

function slow () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var outcome = randomOutcome();

            if (outcome) {
                reject(outcome);
                return;
            }

            resolve();
        }, 1000);
    });
}

function slower () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

function slowest () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}

function slowesterer () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
}

slow()
.then(
    () => {
    }, 
    (e) => {
        console.log("Something happened: " + e.stack);
    }
);


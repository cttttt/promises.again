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

function slow (callback) {
    setTimeout(() => {
        callback(randomOutcome());
    }, 1000);
}

function slower(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

function slowest(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}

function slowesterer(callback) {

    setTimeout(() => {
        callback();
    }, 4000);
}

async.series([
    (callback) => {
        slow((err) => {
            if (err && err.error === "fixable") {
                // fix the error
            }

            if (err && err.error === "warnable") {
                console.log("Imma let you finish, but: " + err.stack);
            }

            if (err) {
                callback(err);
                return;
            }

            console.log(1);
            callback();
        });
    },
    (callback) => {
        slow((err) => {
            if (err && err.error === "fixable") {
                // fix the error
            }

            if (err && err.error === "warnable") {
                console.log("Imma let you finish, but: " + err.stack);
            }

            if (err) {
                callback(err);
                return;
            }

            console.log(2);
            callback();
        });
    },
    (callback) => {
        slower((err) => {
            if (err) {
                callback(err);
                return;
            }
            console.log(3);
            callback();
        });
    },
    (callback) => {
        slow((err) => {
            if (err && err.error === "fixable") {
                // fix the error
            }

            if (err && err.error === "warnable") {
                console.log("Imma let you finish, but: " + err.stack);
            }

            if (err) {
                callback(err);
                return;
            }

            console.log(4);
            callback();
        });
    },
    (callback) => {
        slowest((err) => {
            if (err) {
                callback(err);
                return;
            }
            console.log(5);
            callback();
        });
    },
    (callback) => {
        slower((err) => {
            if (err) {
                callback(err);
                return;
            }
            console.log(6);
            callback();
        });
    },
    (callback) => {
        slowesterer((err) => {
            if (err) {
                callback(err);
                return;
            }
            console.log(7);
            callback();
        });
    },
    (callback) => {
        slowest((err) => {
            if (err) {
                callback(err);
                return;
            }
            console.log(8);
            callback();
        });
    },
    (callback) => {
        slow((err) => {
            if (err && err.error === "fixable") {
                // fix the error
            }

            if (err && err.error === "warnable") {
                console.log("Imma let you finish, but: " + err.stack);
            }

            if (err) {
                callback(err);
                return;
            }
            console.log(9);
            callback();
        });
    },
    (callback) => {
        slower((err) => {
            if (err) {
                callback(err);
                return;
            }
            console.log(10);
            callback();
        });
    }
], (err) => {
    if (err) {
        console.log("Something happened: " + err.stack);
    } else {
        console.log("Success!");
    }
});


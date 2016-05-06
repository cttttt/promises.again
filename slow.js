/* eslint-disable no-console */

function sample(array) {
    var randomIndex = Math.floor(Math.random() * (array.length - 1));
    return array[randomIndex];
}

function randomOutcome() {
    return sample([ 
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

slow(function (err) {
    if (err === "fixable") {
        // fix the error
    }

    if (err === "warnable") {
        console.log("Imma let you finish, but: " + err);
    }

    if (err) {
        console.log("Something Happened!");
        return;
    }

    console.log(1);

    slow(function (err) {
        if (err === "fixable") {
            // fix the error
        }

        if (err === "warnable") {
            console.log("Imma let you finish, but: " + err);
        }

        if (err) {
            console.log("Something Happened!");
            return;
        }

        console.log(2);

        slower(function (err) {
            if (err) {
                console.log("Something Happened!");
                return;
            }
            console.log(3);

            slow(function (err) {
                if (err === "fixable") {
                    // fix the error
                }

                if (err === "warnable") {
                    console.log("Imma let you finish, but: " + err);
                }

                if (err) {
                    console.log("Something Happened!");
                    return;
                }

                console.log(4);

                slowest(function (err) {
                    if (err) {
                        console.log("Something Happened!");
                        return;
                    }
                    console.log(5);

                    slower(function (err) {
                        if (err) {
                            console.log("Something Happened!");
                            return;
                        }
                        console.log(6);

                        slowesterer(function (err) {
                            if (err) {
                                console.log("Something Happened!");
                                return;
                            }
                            console.log(7);

                            slowest(function (err) {
                                if (err) {
                                    console.log("Something Happened!");
                                    return;
                                }
                                console.log(8);

                                slow(function (err) {
                                    if (err === "fixable") {
                                        // fix the error
                                    }

                                    if (err === "warnable") {
                                        console.log("Imma let you finish, but: " + err);
                                    }

                                    if (err) {
                                        console.log("Something Happened!");
                                        return;
                                    }
                                    console.log(9);

                                    slower(function (err) {
                                        if (err) {
                                            console.log("Something Happened!");
                                            return;
                                        }
                                        console.log(10);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});


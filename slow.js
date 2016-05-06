/* eslint-disable no-console */

function slow (callback) {
    setTimeout(() => {
        callback();
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

slow(function () {
    console.log(1);

    slow(function () {
        console.log(2);

        slower(function () {
            console.log(3);

            slow(function () {
                console.log(4);

                slowest(function () {
                    console.log(5);

                    slower(function () {
                        console.log(6);

                        slowesterer(function () {
                            console.log(7);

                            slowest(function () {
                                console.log(8);

                                slow(function () {
                                    console.log(9);

                                    slower(function () {
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


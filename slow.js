/* eslint-disable no-console */

function slow (callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

slow(function () {
    console.log("done");
});


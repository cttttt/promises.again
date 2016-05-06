/* eslint-disable no-console */

function slow() {
    return new Promise((resolve/*, reject*/) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

slow()
.then(() => {
    console.log("done");
});

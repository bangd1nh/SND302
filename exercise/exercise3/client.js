const http = require("http");

const options = {
    hostname: "127.0.0.1",
    port: 3000,
    path: "/",
    method: "GET",
};

const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
        process.stdout.write(d);
    });
});

req.on("error", (error) => {
    console.error(error);
});

req.end();

//------------------------------------------------------------

const axios = require("axios");

axios
    .get("http://127.0.0.1:3000")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

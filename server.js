const http = require('http');


const requestListener = (request, response) => {
    // set up costume header response
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    // mengambil fungsi dari global method request.
    const { method, url } = request;

    if (url === "/"){
        // logika respon jika url '/'
        if (method === "GET"){
            // logika ketika method GET
            response.statusCode = 200;
            response.statusMessage = "Success"
            response.end(JSON.stringify({
                message: "Ini adalah homepage!"
            }));
        } else {
            // logika ketika method selain diatas
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggukanakn ${method} request`
            }));
        }
    } else if (url === "/about"){
        // logika respon jika url '/about'
        if (method === "GET"){
            // logika ketika method GET
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if (method === "POST"){
            // logika ketika method POST
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            // logika ketika method selain diatas!
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        // logika respon url selain diatas
        response.statusCode = 400;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
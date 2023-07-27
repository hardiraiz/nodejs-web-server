const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    // mengambil fungsi dari global method request.
    const { method, url } = request;

    if (url === "/"){
        // logika respon jika url '/'

    } else if (url === "/about"){
        // logika respon jika url '/about'

    } else {
        // logika respon url selain diatas
        response.end('<h2>Halaman tidak ditemukan!</h2>')
    }


    // if(method === 'GET') {
    //     response.end('<h1>Hello!</h1>');
    // }

    // if(method === 'POST') {
    //     let body = [];
    
    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body);
    //         response.end(`<h1>Hai, ${name}!</h2>`);
    //     });
    // }
};
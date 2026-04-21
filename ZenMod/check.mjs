import fetch from 'node-fetch';

fetch('http://localhost:3000/api/get-sandbox-files')
    .then(r => r.json())
    .then(data => {
        if (data.files && typeof data.files === 'object') {
            const paths = Object.keys(data.files);
            console.log('Found ' + paths.length + ' files:');
            paths.forEach(p => console.log(p));

            if (data.files['src/App.jsx']) {
                console.log('\n--- src/App.jsx content ---');
                console.log(data.files['src/App.jsx'].substring(0, 300));
            }
        } else {
            console.log('unexpected structure', Object.keys(data));
        }
    });

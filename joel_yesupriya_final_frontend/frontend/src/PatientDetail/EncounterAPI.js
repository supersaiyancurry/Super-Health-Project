//This is where you put your API link
const API = 'http://localhost:8080/encounter/';

export const fetchEncounters = () => {
    let myInit = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    };
    return new Promise((resolve, reject) => {
        return fetch(API, myInit)
            .then(response => {
                let jsonResponse = response.json();
                if (response.status !== 200) {
                    throw response;
                }
                return jsonResponse;
            })
            .then(jsonResponse => {
                resolve(jsonResponse);
            })
            .catch(() => {
                reject('There was an error fetching data');
            });
    });
};

// export const createEncounters = () => {
//     let encounters = [];
//     let myInit = {
//         method: 'POST',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json'
//         }
//     };
//     return new Promise((resolve, reject) => {
//         return fetch(API, myInit)
//             .then(response => {
//                 let jsonResponse = response.json();
//                 if (response.status !== 200) {
//                     throw response;
//                 }
//                 return jsonResponse;
//             })
//             .then(jsonResponse => {
//                 resolve(jsonResponse);
//             })
//             .catch(() => {
//                 reject('There was an error fetching data');
//             });
//     });
// };
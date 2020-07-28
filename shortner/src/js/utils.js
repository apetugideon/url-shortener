import fetch from 'isomorphic-fetch';
const base_url = 'http://localhost:8080';


export function postData(data, dUrl) {
    return fetch(`${base_url}${dUrl}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .catch((error) => console.log(error));
}


export function getData(dUrl) {
    return fetch(`${base_url}${dUrl}`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}


export function notEmpty(obj) {
    return Object.keys(obj).length !== 0 && obj.constructor === Object
}
  

export function notEmptyArray(array) {
    return (Array.isArray(array) && (array.length > 0)) ? true : false;
}


export function localStore(arr, desc, actn) {
    try {
        let retn;
        if (typeof(Storage) !== undefined) {
            if (actn === "add") {
                let stringifyd = JSON.stringify(arr);
                if (localStorage.setItem(desc, stringifyd)) { 
                    retn = true; 
                } else { 
                    retn = false; 
                }
            } else if(actn === "get") {
                retn = localStorage.getItem(desc);
                if (retn !== "" && retn !== "undefined") {
                    retn = JSON.parse(retn); 
                }
            } else if(actn === "remove") {
                if (localStorage.removeItem(desc)) { 
                    retn = true; 
                } else { 
                    retn = false; 
                }
            }
        } else {/**Sorry! No Web Storage support..**/}
        return retn;
    } catch (e) { console.log(e); }
}

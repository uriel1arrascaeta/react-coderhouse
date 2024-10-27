import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        if (data) { 
            setTimeout(() => {
                resolve(data); 
            }, 500);
        } else {
            reject('No se encontro el producto'); 
        }
    });
}

export const pedirItemPorId =  (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((el) => el.id === id);
        if (item){
            resolve (item)
        }else {
            reject('No se encontro el product'); 
        }
    })
}
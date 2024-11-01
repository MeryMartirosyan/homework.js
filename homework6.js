/* Given an object. Invert it (keys become values and values
become keys) */   

function reverse(obj) { 
   debugger;
    let newObj = {};
    for(let key in obj) {
        if(newObj[key] !== undefined) {
            newObj[key] = obj[key];
        }
            newObj[obj[key]] = key;
        }
    return newObj
}

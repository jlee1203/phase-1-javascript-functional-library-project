function myEach(collection, alert){
    const collect = Object.values(collection);
    collect.forEach(element => alert(element))
    return collection;
}

function myMap(collection, duplex){
    const arr = Object.values(collection);
    const newArr = [];
    for(let ele of arr){
        newArr.push(duplex(ele))
    }
    return newArr;

}

function myReduce(collection, callback, ...acc){
    let arr = Object.values(collection);
    let newAcc;
    let i;
    if(acc.length > 0){
        newAcc = acc[0];
        i = 0;
    } else{
        newAcc = arr[0]
        i = 1;
    }

    for(i; i<arr.length; i++){
        newAcc = callback(newAcc, arr[i], collection)
    }
    return newAcc;
}

function myFind(collection, predicate){
    let arr = Object.values(collection);
    for(let i = 0; i < arr.length; i++){
        if(predicate(collection[i]))
        return collection[i]
    }
}

function myFilter(collection, predicate){
    let arr = Object.values(collection);
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(predicate(collection[i]))
        newArr.push(collection[i])
    }
    return newArr;
}

function mySize(collection){
    let arr = Object.values(collection);
    return arr.length;
}

const myFirst = function(array, stop=false){
   return (stop) ? array.slice(0, stop) : array[0];
}

const myLast = function(array, start = false){
    return (start) ? array.slice(array.length - start, array.start) : array[array.length - 1];
}

function myKeys(obj){
    const keys = [];
    for(let key in obj){
        keys.push(key);
    }
    return keys;
}

function myValues(obj){
    const values = [];
    for(let value in obj){
        values.push(obj[value])
    }
    return values;
}
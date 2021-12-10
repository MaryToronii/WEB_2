

function fact(integer) {
    let i = integer;
    let result = 1;
    while (i>0) {
        result *=i;
        i--;
    }
    return result;
}

let res = fact(10);



console.log(res);
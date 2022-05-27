const param = {
    u_Sample: {
        a : 1, 
        b: 2,
        c : 3,
    },
    aaaa: {
        d:1
    }
}
for (let a of [{a:1},{b:2}]) {
    console.log(a.key())
}
// console.log(Object.entries(param))
const data = [
    { id: 1, uid: 10000 },
    { id: 2, uid: 10000 },
    { id: 3, uid: 10001 }
]
const final_data = data.uniqueBy(it => it.uid);    // => [{ id: 1, uid: 10000 }, { id: 3, uid: 10001 }]
console.log(final_data);
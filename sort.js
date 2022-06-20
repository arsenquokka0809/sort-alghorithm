const b = [{ name: "test1", score: 3 }, { name: "test2", score: 5 }, { name: "test3", score: 6 }];

const a = [{ name: "test4", score: 10 }, { name: "test5", score: 15 }, { name: "test6", score: 8 }];

const res = mergeAndSort(a, b);
console.log(res);

function mergeAndSort(a, b) {
    return Object.values([...a, ...b].reduce((prev, c, index) => {
        const key = c.score;
        prev[key] = { ...c };
        return prev;
    }, {})).reverse();
}




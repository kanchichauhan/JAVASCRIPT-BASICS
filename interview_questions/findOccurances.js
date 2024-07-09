const dupArr = ['s', 't', 'y', 't', 'y', 'y', 'w', 'a'];
const occObj = {};

dupArr.forEach((eachStr) => {
    (occObj[eachStr])
        ? occObj[eachStr] += 1
        : occObj[eachStr] = 1
})
console.log(JSON.stringify(occObj))

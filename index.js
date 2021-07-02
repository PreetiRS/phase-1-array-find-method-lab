// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//     //...
//   ] 
// it('returns a year the KC Chiefs won the superbowl', function () {
//     expect(superbowlWin(record)).to.equal('1969');
//   });

//   it('returns undefined if the record has no win objects', function() {
//     const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
//     expect(superbowlWin(sadReality)).to.equal(undefined)
//   });
// });
// #########################################
function findWin (record){
     return record.result === "W";
 }
// const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
function superbowlWin(record) {
    // const result = record.find(findWin)
    const result = record.find(findWin); //=> {year: 1990, result: "W"} || undefined
    console.log(record)
    if (result){
        return result.year;
    }
    else {
        return undefined;
    }
    
}

// function myFind(arr, callback){
//     for(const element of arr){
//         const result = callback(element);
//         if(result){
//             return element
//         }
//     }
//     return undefined
// }
// myFind(record, (record) => record.result ==="W")
// const return = record.find(record => record.result === "W");
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
// function findWin (record){
//     return record.result === "W";
// }
// const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
function superbowlWin(record) {
    // const result = record.find(findWin)
    return record.find(record => record.result === "W");
    // if (result === true){
    //     return record.year;
    // }
    // else {
    //     return undefined;
    // }
}
// const return = record.find(record => record.result === "W");

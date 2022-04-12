// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].


// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || !intervals.length) {
        return [];
    }
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });    
    let res = [intervals[0]];
    console.log('test',res.length)
    console.log(intervals);
    
    for (let i = 1; i < intervals.length; i++) {
        let start1 = res[res.length - 1][0];
        let end1 = res[res.length - 1][1];
        let start2 = intervals[i][0];
        let end2 = intervals[i][1];
        
        if (end1 >= start2) {
            res[res.length - 1] = [start1, Math.max(end1, end2)];
        } else {
            res.push(intervals[i]);
        }
    }
    
    return res;

};
let intervals = [[1,3],[2,6],[8,10],[15,18]];

console.log(merge(intervals));

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104
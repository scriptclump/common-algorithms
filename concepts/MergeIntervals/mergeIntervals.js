// Description
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104
// Solution

const merge = (intervals) => {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let previous = intervals[0];

  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      console.log('i->', intervals[1]);
      console.log('ri->',intervals[i][0]);
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }

  result.push(previous);

  return result;
};


const mergeIntervals = (intervals) => {
  if (intervals.length <= 2) return intervals;

  // Sort the interval
  intervals.sort((a ,b ) => a[0] - b[0])
  console.log(intervals)
  let merged = []
  let start = intervals[0][0];
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if(interval[0] <= end){
      // overlapping intervals
      end = Math.max(interval[1], end)
    } else{
      // non-overlapping interval, add the previous interval and reset
      merged.push([start, end])
      start = interval[0]
      end = interval[1]
    }                
  }
  merged.push([start, end])
  return merged;
}

const intervals = [[1,3],[8,10],[2,6],[15,18]];
// console.log(merge(intervals))
console.log(mergeIntervals(intervals))
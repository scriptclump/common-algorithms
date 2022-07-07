// Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

// You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

 

// Example 1:

// Input: time = "19:34"
// Output: "19:39"
// Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.
// It is not 19:33, because this occurs 23 hours and 59 minutes later.
// Example 2:

// Input: time = "23:59"
// Output: "22:22"
// Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22.
// It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.
 

// Constraints:

// time.length == 5
// time is a valid time in the form "HH:MM".
// 0 <= HH < 24
// 0 <= MM < 60


/**
 * @param {string} time
 * @return {string}
 */

 const getTime = (h, m) => {
    let hours = h < 10 ? "0" + h : h;
    let minutes = m < 10 ? "0" + m : m;
    return hours + ":" + minutes;
}

const sameDigits = (t1, t2) => {
    for (let i = 0; i < 5; i++) {
        if (t2.indexOf(t1[i]) === -1) { return false; }
    }
    return true;
}

const nextClosestTime = time => {
    let hours = parseInt(time.substring(0, 3));
    let minutes = parseInt(time.substring(3));
    
    for (let h = hours; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            if (h === hours && m <= minutes) { continue; }
            
            let potentialClosest = getTime(h, m);
            if (sameDigits(potentialClosest, time)) {
                return potentialClosest;
            }   
        }
    }
    
    for (let h = 0; h < hours; h++) {
        for (let m = 0; m < hours; m++) {
            let potentialClosest = getTime(h, m);
            if (sameDigits(potentialClosest, time)) {
                return potentialClosest;
            }
        }
    }
    
    return time;
};
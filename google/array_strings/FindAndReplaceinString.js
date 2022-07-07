// Find And Replace in String


var findReplaceString = function(S, indexes, sources, targets) {
    let str ='', map = {};
    for(i=0;i<indexes.length;i++) 
        map[indexes[i]] = [sources[i], targets[i]];
		
    for(i=0;i<S.length;i++){
	let ist =  map[i]; // ist = index source target length; coudnt come up with a better word
        if(ist) {
            let len = ist[0].length;
             let sub = S.substring(i,i+len); 
            if(sub == ist[0]){ // if substring from original string equals source string
                str+=ist[1]; // add target string instead of that
               i=i+len-1; // skip extra letters in for loop iteration
            } else {
              str+=S[i];  // is the substring doesnt match with source, continue with original string
            }
        }
        else {
            str+=S[i]; //if the index is not found in map, continue with original string
        }
    }
    return str;
};
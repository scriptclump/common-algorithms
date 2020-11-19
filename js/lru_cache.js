var LRUCache = function(capacity) {
    this.cache = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    if(this.cache.has(key)){
        let found = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key,found)
        return found
    }
    return -1
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
    if(this.cache.has(key)){
        this.cache.delete(key)
        this.cache.set(key,value)
    }
    else{
        if(this.cache.size === this.capacity){
            for([k,v] of this.cache){
                this.cache.delete(k)
                break;
            }
        }
        this.cache.set(key,value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:*/
//  capacity = 5;
//  var obj = new LRUCache(capacity);
//  //var param_1 = obj.get(20);
//  obj.put(1,100);
//  obj.put(2,200);
//  obj.put(3,300);
//  obj.get('1');
//  obj.put(4,400);
//  obj.get('2');
//  //obj.put(5,500);
//  obj.get('3');
 

// class LRU {
//     cache = new Map();
//     constructor(capacity=0){
//         this.capacity=capacity;
//         console.log(this.cache); 
//     }
    
//     get(key){
//         if(this.cache.has(key)){
//             let found = this.cache.get(key);
//             this.cache.delete(key);
//             this.set(key,found);
//             return found;
//         }
               
//         return -1;
//     }

//     set(key, value){
//         if(this.cache.has(key)){
//             this.cache.delete(key);
//             this.cache.set(key,value);
//         }else{
//             if(this.cache.size === this.capacity){
//                 for([k,v] of this.cache){
//                     this.cache.delete(k);
//                     break;
//                 }
//             }
//             this.cache.set(key,value);
//         }
//     }
// }

// lru = new LRU(5);
// lru.set(10);
// lru.set(20);
// lru.set(30);
// lru.set(40);
// lru.set(50);
// getIndex = 30;
// console.log(lru.get(getIndex));

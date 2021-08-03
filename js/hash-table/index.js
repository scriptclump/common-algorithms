class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    // Common Hashing function
    _hash(key){
        let hash = 0;
        for (let i=0; i<key.length; i++){
            hash = ( hash + key.charCodeAt(i) * i ) % this.data.length;
        }
        return hash;
    }

    // Set the value in Hashtable
    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value])
        return this.data;
    }

    // Get the value from HashTable
    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        for(let i=0; i< currentBucket.length; i++){
            if(currentBucket[i][0] === key){
                return currentBucket[i][1];
            }
        }       
        return undefined;
    }
}

const myHashTable = new HashTable(50);
myHashTable._hash('grapes');
console.log(myHashTable.set('grapes', 100));
console.log(myHashTable.get('grapes'));
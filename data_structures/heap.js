function Heap(){
    this.store = []
}

Heap.parentIndex = function(childIdx){
    if(childIdx === 0){
        return;
    }else{
        return Math.floor((childIdx -1)/2);
    }
}

Heap.childIndices = function(len, parentIdx){
    var indices = [];
    var potential_childs = [(2*parentIdx)+1, (2*parentIdx)+2]
    potential_childs.forEach(child => {
        if(child < len){
            indices.push(child);
        }
    })

    return indices;
}

Heap.heapifyUp = function(arr, childIdx, len = arr.length, comp){
    if(!comp){
        comp = function(a, b){
            return a-b;
        }
    }

    var swapped = true;
    while(swapped){
        swapped = false;
        var parentIdx = Heap.parentIndex(childIdx);
        if(parentIdx !== undefined){
            if(comp(arr[childIdx], arr[parentIdx]) < 0){
                var temp = arr[childIdx];
                arr[childIdx] = arr[parentIdx];
                arr[parentIdx] = temp;
                swapped = true;
                childIdx = parentIdx;
            }
        }
    }
    return arr;
}

Heap.heapifyDown = function(arr, parentIdx, len = arr.length, comp){
    if(!comp) {
        comp = function(a,b){
            return a-b;
        }
    }

    var swapped = true;
    while(swapped){
        swapped = false;
        var minIndex;
        var childIndices = Heap.childIndices(len, parentIdx);
        if(childIndices.length > 1){
            var compVal = comp(arr[childIndices[0]], arr[childIndices[1]]);
            if(compVal > 0){
                minIndex = childIndices[1];
            }else{
                minIndex = childIndices[0];
            }
        }else if(childIndices.length === 1){
            minIndex = childIndices[0];
        }else{
            return arr;
        }

        if(comp(arr[parentIdx], arr[minIndex]) > 0){
            var temp = arr[parentIdx];
            arr[parentIdx] = arr[minIndex];
            arr[minIndex] = temp;
            swapped = true;
            parentIdx = minIndex;
        }
    }
    return arr;
}

Heap.prototype.push = function(val){
    this.store.push(val);
    var childIdx = this.store.length -1;
    Heap.heapifyUp(this.store, childIdx);
}

Heap.prototype.peek = function(){
    return this.store[0];
}

Heap.prototype.extract = function(){
    var temp = this.store[0];
    this.store[0] = this.store[this.store.length-1];
    this.store[this.store.length-1] = temp;
    var el = this.store.pop();
    Heap.heapifyDown(this.store, 0);
    return el;

}

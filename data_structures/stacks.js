// max stack

function maxStack(){
    this.store = [];
    this.max = [];
}

maxStack.prototype.push = function(n){
    this.store.push(n);
    if( n >= this.getMax() || this.getMax() === undefined){
        this.max.push(n);
    }
}

maxStack.prototype.pop = function(){
    var el = this.store.pop();
    if(el === this.getMax()){
        this.max.pop();
    }
}

maxStack.prototype.getMax = function(){
    return this.max[this.max.length-1];
}

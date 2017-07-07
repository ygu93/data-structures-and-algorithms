// hacker rank no prefix set Trie

function Trie(){
    this.store = {};
}

Trie.prototype.add = function(name){
        var current = this.store;
        for(var i=0;i<name.length;i++){
            if(current[name[i]]){
                if(current[name[i]]['*']){
                    return false;
                }
                current = current[name[i]];
            }else{
                current[name[i]] = {};
                current = current[name[i]];
             }
        }
        if(Object.keys(current).length > 0){
            return false
        }
        current['*'] = true;
        return true;
}

// hacker rank big sorting
function bigSorting() {
    var n = parseInt(readLine());
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    }
    // your code goes here
    unsorted = unsorted.sort((a,b) => {
        if(a.length < b.length){
            return -1;
        }else if(a.length > b.length){
            return 1;
        }else if(a.length === b.length){
            for(var i =0;i<a.length;i++){
                if(parseInt(a[i]) < parseInt(b[i])){
                    return -1
                }else if(parseInt(a[i]) > parseInt(b[i])){
                    return 1;
                }
            }
        }
        return 0;
    })
    unsorted.forEach(num => console.log(num));
}

1.
function getFirstValue(array) {
    var first = array.filter(x => true)[0];
    console.log(first);
    }

getFirstValue([1,2,3,4,5])


3.
 function checkStr(a){
    if(a.length == ""){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

checkStr("amar")

function last(array) {
     let ele= array[array.length - 1];
  console.log(ele);
}

last([1,2,3])

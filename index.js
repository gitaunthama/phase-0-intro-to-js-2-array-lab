let cats =["Milo","Otis","Garfield"];
 let names='Ralph'
function destructivelyAppendCat(_names) {
cats.push(_names)

}

// names = []; 

function destructivelyPrependCat(name) {
    cats.unshift(name); 
}

function destructivelyRemoveLastCat() {
    cats.pop();
    }
 function destructivelyRemoveFirstCat() {
    cats.shift();
    }

function appendCat(_name) {
    const newCatsArray= [...cats, _name];
    return newCatsArray;
}


function prependCat(_name) {
    const prependCatArray= [_name, ...cats];
    return prependCatArray;
}


function removeLastCat() {
   const newCatArray= cats.slice(0,-1);
   return newCatArray;
}
function removeFirstCat(){
const newCatArray=cats.slice(1);
return newCatArray;
}
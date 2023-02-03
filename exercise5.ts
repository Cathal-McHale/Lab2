
function string_length(value: string):number {

    return value.length;
    
}

console.log ("the length of the string is: "+string_length("test 1"));


function string_length_nospaces(value: string): number {
    return value.replace(" ", "").length;
}

console.log ("the length of the string is: "+string_length_nospaces("test 1"));


function string_length_acceptsBoth(value: string, spaces?: boolean): number {
    if(spaces){
       return value.length;
    } else{
       return value.replace(" ", "").length;
    }
}
console.log ("the length of the string is: "+string_length_acceptsBoth("test 1",true));

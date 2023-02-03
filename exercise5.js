function string_length(value) {
    return value.length;
}
console.log("the length of the string is: " + string_length("test 1"));
function string_length_nospaces(value) {
    return value.replace(" ", "").length;
}
console.log("the length of the string is: " + string_length_nospaces("test 1"));
function string_length_acceptsBoth(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
console.log("the length of the string is: " + string_length_acceptsBoth("test 1"));

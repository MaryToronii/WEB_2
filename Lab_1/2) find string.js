function search(string_to_find, basic_string) {

    if (basic_string.indexOf(string_to_find) == -1)
        return "Your sentence doesn't include this world";
    else return "The number of your word position is: " + (basic_string.indexOf(string_to_find)+1);
}



let str_1 = "Hello my dear friend";
let str_2 = "my";

console.log(search(str_2, str_1));

let my_date_arr = [
    "2002-08-27",
    "2011-10-16",
    "1976-01-29",
    "1977-08-11",
    "2000-08-09",
    "2001-12-31"
];

var sorted = my_date_arr.slice()
    .sort(function(a, b) {
        return new Date(a) - new Date(b);
    });

// get the first and last values
console.log(
    'Max date is:', sorted.pop()
);
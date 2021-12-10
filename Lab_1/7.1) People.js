class person {

    constructor(f_name, s_name, birth) {
        this.first_name = f_name;
        this.second_name = s_name;
        this.birth = birth;
    }

    add(arr_to_add) {
        arr_to_add.push(this);
        return arr_to_add;
    }

    delete(arr_to_del) {
        arr_to_del = arr_to_del.filter((item) => item.first_name != this.first_name && item.second_name != this.second_name);
        return arr_to_del;
    }

    edit(new_name, new_s_name) {
        this.first_name = new_name;
        this.second_name = new_s_name;
    }

}

class client extends person {
    constructor(f_name, s_name, birth, money_limit) {
        super(f_name, s_name, birth);
        this.money_limit = money_limit;
    }
}

class doer extends person {
    constructor(f_name, s_name, birth, rating) {
        super(f_name, s_name, birth);
        this.rating = rating;
    }
}


function find_person(name, array) {
    return array.find(person => person.first_name === name );
}

class project {
    constructor(title, status, client, doer) {
        this.title = title;
        this.status = status;
        this.client = client;
        this.doer = doer;
    }

    add(arr_to_add) {
        arr_to_add.push(this);
        return arr_to_add;
    }

    delete(arr_to_del) {
        arr_to_del = arr_to_del.filter((item) => item.title != this.title);
        return arr_to_del;
    }

    edit(new_title, new_status) {
        this.title = new_title;
        this.status = new_status;
    }
}

function only_active(arr) {
    arr = arr.filter((project) => project.status == true);
    return arr;
}

function client_project(arr, client) {
    arr = arr.filter((project) => project.client === client);
    return arr;
}

function doer_project(arr, doer) {
    arr = arr.filter((project) => project.doer === doer);
    return arr;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////




let cl_1 = new  client('Mary', 'Toronii', '2002-08-27', 10000);
let cl_2 = new  client('John', 'Shusterman', '1996-04-17', 20000);
let cl_3 = new  client('Carry', 'Stark', '2010-08-13', 300);
let cl_4 = new  client('Mickey', 'Mouse', '1752-05-07', 5000);

let client_array = [cl_1, cl_2, cl_3];
let arr_2 = cl_1.delete(client_array);
let arr_3 = cl_4.add(client_array);
let finded_person = find_person('John', client_array);

//console.log(arr_2);
//console.log(arr_3);
//console.log(finded_person);

//cl_3.edit('Jane', 'Sunny');
//console.log(cl_3);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let doer_1 = new doer('Tom', 'Rich', '1984-03-12', 4);
let doer_2 = new doer('Lucy', 'Rich', '1986-03-12', 2);



let pr_1 = new project('GreenCity', true, cl_3, doer_1);
let pr_2 = new project('RedCity', false, cl_1, doer_2);
let pr_3 = new project('BlackCity', false, cl_3, doer_1);
let pr_4 = new project('Halloween City', true, cl_3, doer_2);

let project_array = [pr_1, pr_2, pr_3, pr_4];


//let arr_pr = pr_1.delete(project_array);
//console.log(arr_pr);

console.log(doer_project(project_array, doer_1));
//console.log(client_project(project_array, cl_4));
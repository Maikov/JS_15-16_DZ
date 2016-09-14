'use strict'
$(function () {

    function Human() {
        this.name = 'Barak';
        this.age = 55;
        this.sex = 'male';
        this.height = '185';
        this.weight = '80';
    }

    function Worker() {
        this.company = 'GoIT';
        this.salary = 10000;
        this.work = function() {
            console.log("I work hard");
        }
    }

    function Student() {
        this.institution = 'DonNU';
        this.scholarship = '500';
        this.watch = function () {
            console.log('I watch soap movies');
        }
    }

    Worker.prototype = new Human();
    Student.prototype = new Human();

    var student = new Student;

    student.name = 'Anton';
    student.age = 34;
    student.sex = 'male';
    student.height = '175cm';
    student.weight = '78';
    student.institution = 'GoIT';
    student.scholarship = '1500';

    console.log(student);

    var worker = new Worker;

    worker.name = 'Bill';
    worker.age = 45;
    worker.sex = 'male';
    worker.height = '182cm';
    worker.weight = '100';
    worker.company = 'GM';
    worker.salary = '20000';

    console.log(worker);
});
// Question 3 - A program to determine the subjects Bolatito will be taking for the session using her class group 

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

let classGroup = artsSubjects;

if (classGroup === scienceSubjects){
    console.log('These are the list of sujects for your class group; ' + scienceSubjects + ', ' + generalSubjects);
} else if (classGroup === socialScienceSubjects) {
    console.log('These are the list of sujects for your class group; ' + socialScienceSubjects + ', ' + generalSubjects);
} else if (classGroup === artsSubjects){
    console.log('These are the list of sujects for your class group; ' + artsSubjects + ', ' + generalSubjects);
} else {
    console.log ('These are the general subjects; ' + generalSubjects);
};


// Question 3 - The output should be the General subjects in the case of an invalid class group


let sciencesubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialscienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artssubjects = "Government, Economics, Literature, History";
let generalsubjects = "English, Mathematics";


let classgroup = generalsubjects;

if (classgroup === sciencesubjects){
    console.log('These are the list of subjects for your class group; ' + sciencesubjects + ', ' + generalsubjects);
} else if (classgroup === socialscienceSubjects) {
    console.log('These are the list of subjects for your class group; ' + socialscienceSubjects + ', ' + generalsubjects);
} else if (classgroup === artssubjects) {
    console.log('These are the list of subjects for your class group; ' + artssubjects + ' ' + generalsubjects);
} else {
    console.log('These are the General Subjects; '+ generalsubjects);
} ;
               

//Question 5 - Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr.

let positivenumber = "62";
let positivenumber2 = "68";
let positivenumber3 = "69";
let pwr = "64";

let powerOf2Nearest = positivenumber;

if (powerOf2Nearest === positivenumber){
    console.log('The number ' + pwr + ' is the power of 2 nearest to ' + positivenumber);
} else if (powerOf2Nearest === positivenumber2) {
    console.log('The number ' + pwr + ' is the power of 2 nearest to ' + positivenumber2 );
} else {
    console.log('The number ' + pwr + ' is the power of 2 nearest to ' + positivenumber3 );
};

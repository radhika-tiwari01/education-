burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})
let userName='';
userName=prompt('What is your Name?');
alert('Welcome to our educational platform, '+  userName  + '!');

let course=['PERSONALIZED LEARNING','EXPERIMENTAL LEARNING','PROJECT BASED LEARNING'];
alert('Here are the available courses:\n\n' + course.join('\n'));

function enrollCourse(course){
    alert('you have enrolled in the'  + course +   'course.');
}
let chosenCourse=prompt('which course would you like to enroll in?');

enrollCourse(chosenCourse);
let progress = {
    PERSONALIZEDLEARNING:50,
    EXPERIMENTALLEARNING:40,
    PROJECTBASEDLEARNING:79,
    };
    
    
    alert('your progress:\n\n' +
    'PERSONALIZED LEARNING: '+ progress.PERSONALIZEDLEARNING + '%\n'+
    'EXPERIMENTAL LEARNING: '+ progress.EXPERIMENTALLEARNING + '%\n'+
    'PROJECT BASED LEARNING:'+ progress.PROJECTBASEDLEARNING + '%\n');
    function updateprogress(course, newprogress){
        progress[course]= newprogress;
        alert('your progress in'+course+'has been updated to'+ newprogress+'%.');
    }
    let coursetoupdate = prompt('which course would you like to update your progress in?');
    let newprogress = prompt('what is your newprogress percentage?');
    updateprogress(coursetoupdate, newprogress);
    
    












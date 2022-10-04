let day = moment().format("dddd, MMMM Do YYYY");
let currentHour = moment().format("k");
const workHourStart = 9;
const workHourEnd = 17;
const workHours = 9;

$('#currentDay').text(day);

function init(){
    let trueTime = 9
    for(let i = 0; i<workHours; i++){
        let hour = 9+i;
        if(hour > 12) hour -= 12;
        
        if(hour >= 9&& hour != 12)
       {     
            $('.container').append('<div class = "row" id = "block'+trueTime+'"><p class = "hour">'+hour+'AM</p><textarea id = "text'+trueTime+'">Your event here</textarea><button class = "saveBtn">Submit</button></div>');
        }
        else
        {
            $('.container').append('<div class = "row" id="block'+trueTime+'"><p class = "hour">'+hour+'PM</p><textarea id = "text'+trueTime+'">Your event here</textarea><button class = "saveBtn">Submit</button></div>');
        }
        trueTime++;
        
    }

    $('.saveBtn').click(function(e){
        let parentEl = e.target.parentElement;
        let textEl = e.target.previousElementSibling;

        console.log(textEl)
        console.log(parentEl)

        localStorage.setItem(parentEl.id, textEl.value);

        console.log(localStorage.getItem(parentEl.id))
    })
}

init();

function tick(){
    let hour = moment().format("H");
    
    //for loop applies past present and future background colors, gets local storage content and applies
    for(let i = 9; i<=17; i++){
        let hourEl = document.getElementById('block'+i)
        if(i<hour) hourEl.classList.add("past");
        if(i==hour) hourEl.classList.add("present");
        if(i>hour) hourEl.classList.add("future");

        let textEl = document.getElementById('text'+i)
        textEl.textContent = localStorage.getItem('block'+i);

    }
    console.log('tick');
}

tick();
setInterval(tick, 1000);



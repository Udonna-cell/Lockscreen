//let target the elements 
let time = document.querySelector('.time');
let date = document.querySelector('.date');
//let now get the current date information
let currentTime = new Date();
//let get what we need from the current time
let weekday = currentTime.toLocaleString('default',{
				weekday: 'long'
});
let month = currentTime.toLocaleString('default',{
				month: 'short'
});
let monthDate = currentTime.getDate();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
// call a function to implement the date information to the website.
window.addEventListener('load',()=>{
				date.innerText = `${weekday}, ${month} ${monthDate}`;
				time.innerText = `${hours}:${minutes}`
})
// let make an updating program 
let updateTime = setInterval(()=>{
				//let now get the current date information
let currentTime = new Date();
//let get what we need from the current time
let weekday = currentTime.toLocaleString('default',{
				weekday: 'long'
});
let month = currentTime.toLocaleString('default',{
				month: 'short'
});
let monthDate = currentTime.getDate();
let hours = currentTime.getHours();
if (hours<10) {
				hours= "0"+hours;
}
let minutes = currentTime.getMinutes();
if (minutes<10) {
				minutes= "0"+minutes;
}
// call a function to implement the date information to the website.
				date.innerText = `${weekday}, ${month} ${monthDate}`;
				time.innerText = `${hours}:${minutes}`;
},1000);



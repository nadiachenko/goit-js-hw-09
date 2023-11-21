import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    day: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
dateInput: document.querySelector('#datetime-picker')
}

const currentDate = Date.now();
refs.startBtn.disabled = true;

flatpickr("#datetime-picker", {
enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < currentDate) {
        window.alert("Please choose a date in the future");
      } 
      else {
        refs.startBtn.disabled = false;
      }
  },
});

const timer = {
    
    isActive: false,
    start() {
        
        if(this.isActive){
           
            return;
        }
        this.isActive = true;
        const id = setInterval(() => {
            
            const ccurrentDate = Date.now();
            const selectedDate = new Date(refs.dateInput.value);
            selectedDate.getTime();
           const timeDifference = selectedDate.getTime() - ccurrentDate;
           //const convertedTime = convertMs(timeDifference);
           const { days, hours, minutes, seconds } = convertMs(timeDifference);
          
           refs.day.textContent = days;
           refs.hours.textContent = hours;
           refs.minutes.textContent = minutes;
           refs.seconds.textContent = seconds;

           if (refs.day.textContent == '00' && refs.hours.textContent == '00' && refs.minutes.textContent == '00' && refs.seconds.textContent == '00') {
            clearInterval(id);
           }
           
     }, 1000);
    }

};

refs.startBtn.addEventListener('click', () => {
    timer.start();
    refs.startBtn.disabled = true;
    
})

function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('.button'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let intervalID = null;

const SECOND = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date('2022-06-22T18:00:00'),
  minuteIncrement: 1,
  onClose(selectedDates) {
  },
};

const timePicker = flatpickr(refs.dateInput, options);

refs.startBtn.addEventListener('click', onStart);

function onStart() {

  countdown();
};

function countdown() {
  intervalID = setInterval(() => {
    const timeDifference = timePicker.selectedDates[0] - Date.now();
    
    updateTimerValues(convertMs(timeDifference));

    if (timeDifference < SECOND) {
      clearInterval(intervalID);

      Notify.success("Timer has finished its work!")
    }
  }, SECOND)
}

function addZero(value) {
  return String(value).padStart(2, "0");
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function updateTimerValues({ days, hours, minutes, seconds }) {
  refs.days.textContent = addZero(days);
  refs.hours.textContent = addZero(hours);
  refs.minutes.textContent = addZero(minutes);
  refs.seconds.textContent = addZero(seconds);
};

function empty() {
  
}
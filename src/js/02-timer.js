import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from './02-convertms';
import makeTimer from "./02-maketime";
import {refs} from './02-refs';
import Notiflix from 'notiflix';



refs.btnStart.setAttribute('disabled', true);

let timerValue = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    const dateCalendar = selectedDates[0];
    const delta = currentDate -  dateCalendar;
    if(delta > 0){
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } 
    refs.btnStart.removeAttribute("disabled");
    timerValue = dateCalendar;
  },
};

flatpickr(refs.input, options);

refs.btnStart.addEventListener('click', onStart);

function onStart(e){
  let delta = null;
  const intervalId =  setInterval(() => {
    delta = timerValue.getTime() - Date.now();
    console.log(delta);
    if(delta < 0){
      Notiflix.Notify.info('Timer off');
      clearInterval(intervalId);
      refs.btnStart.setAttribute('disabled', true);
      return;
      }
    const timeComponent = convertMs(delta);
    makeTimer(timeComponent);
  }, 1000);

  
};
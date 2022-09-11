import {refs} from './02-refs';
export default function makeTimer ({days, hours, minutes, seconds }){
    refs.span[0].textContent = `${days}`;
    refs.span[1].textContent = `${hours}`;
    refs.span[2].textContent = `${minutes}`;
    refs.span[3].textContent = `${seconds}`;
  }
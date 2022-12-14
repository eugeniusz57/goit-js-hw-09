import {refs} from './03-refs';

import Notiflix from 'notiflix';

refs.form.addEventListener('input',  onInputObject,);
refs.form.addEventListener('submit', onSubmit);

const Date = {};

function onInputObject(e){
Date[e.target.name] = e.target.value;
}

function onSubmit(e){
  e.preventDefault();

  const amount = Number(Date.amount);
  let delay = Number(Date.delay);

  if(Number(Date.delay) < 0 || Number(Date.step) < 0 || Number(Date.amount) < 0){
    Notiflix.Notify.failure(`❌ The value in the field cannot be negative`);
    return;
  } for (let i = 1, delay =  Number(Date.delay); i <= amount;  i+=1, delay += Number(Date.step) ){
  setTimeout(() => {
    createPromise(i, delay).then(result => console.log(result)).catch(error => console.log(error))
  }, delay);
}
  
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  })
 
}
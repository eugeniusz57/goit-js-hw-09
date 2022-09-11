import {refs} from './03-refs';

import Notiflix from 'notiflix';

const position = refs.inputDelay.value;
console.log(position);

refs.form.addEventListener('input',  onInputObject,);
refs.form.addEventListener('submit', onSubmit);

const Date ={};

function onInputObject(e){
Date[e.target.name] = e.target.value;
}

function onSubmit(e){
  e.preventDefault();

  const amount = Number(Date.amount);
  let delay = Number(Date.delay);

  for (let i = 1, delay =  Number(Date.delay); i <= amount;  i+=1, delay += Number(Date.step) ){
    setTimeout(() => {
      createPromise(i, delay)
    }, delay);
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

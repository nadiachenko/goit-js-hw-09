import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    amountField: document.querySelector('input[name="amount"]'),
    stepField: document.querySelector('input[name="step"]'),
    firstDelayField: document.querySelector('input[name="delay"]'),
    form: document.querySelector('.form'),
    startBtn: document.querySelector('button[type="submit"]')
}

refs.startBtn.addEventListener('click', reer);



function createPromise(position, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {

            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
                res({ position, delay });
            } else {
                rej({ position, delay });
            }
        }, delay);
        console.log("firstDelay promise", delay)
    });

}
//console.log("firstDelay promise", delay2)
function reer(e) {
    e.preventDefault();
    const amount = Number(refs.amountField.value);
    console.log(amount)
    const step = Number(refs.stepField.value);
    let firstDelay = Number(refs.firstDelayField.value);
    //console.log("firstDelay2", firstDelay)
    createPromise(1, firstDelay)
        .then(({ position, delay }) => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    for (let i = 2; i <= amount; ++i) {
        //console.log("firstDelay loop", firstDelay)
        createPromise(i, firstDelay += step)
            .then(({ position, delay }) => {
                Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            })
    }
}

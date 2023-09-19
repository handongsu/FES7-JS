document.addEventListener('DOMContentLoaded', function () {
            const secInput = document.querySelector('.sec');
            const minInput = document.querySelector('.min');
            const hourInput = document.querySelector('.hour');
            const startBtn = document.querySelector('.start-btn');
            const resetBtn = document.querySelector('.reset-btn');
            const startImg = document.getElementById('.start');


            secInput.addEventListener('click', function () {
                let currentSec = parseInt(secInput.value);
                let currentMin = parseInt(minInput.value);
                let currentHour = parseInt(hourInput.value);

                if (currentSec <= 50) {
                    currentSec+= 10;
                }else if(currentSec > 50){
                    currentSec = 0;
                    currentMin++;
                }else if(currentMin > 59){
                    currentMin = 0;
                    currentHour++;
                }
                secInput.value = currentSec.toString().padStart(2, '0');
                minInput.value = currentMin.toString().padStart(2, '0');
                hourInput.value = currentHour.toString().padStart(2, '0');

                startBtn.disabled = false;
                resetBtn.disabled = false;
            })
        });
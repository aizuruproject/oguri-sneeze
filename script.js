
const oguri = document.getElementById('kuda');
const sneeze = document.getElementById('proboro');
oguri.addEventListener('click', () => {
    sneeze.currentTime = 0;
    sneeze.play();
    oguri.classList.add('animasi-blobbing');
    setTimeout(() => {
        oguri.classList.remove('animasi-blobbing');
    }, 600);
});
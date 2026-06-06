//OGURIIIII

const firebscfg = {
    databaseURL: "https://oguri-sneeze-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
firebase.initializeApp(firebscfg);
const dbg = firebase.database().ref('click_counter');


const oguri = document.getElementById('oguri');
const sneeze = document.getElementById('proboro');
const num_display = document.getElementById('num-count');

let click_count = 0;


dbg.on('value', (snapshot) => {
    const data_in = snapshot.val();
    if (data_in !== null) {
        click_count = data_in;
        num_display.toLocaleString();
        num_display.innerText = data_in.toLocaleString();
    } else {
        num_display.innerText = "0";
    }
});

oguri.addEventListener('click', () => {
   
    sneeze.currentTime = 0;
    sneeze.play();
  

    dbg.set(click_count + 1);
    oguri.classList.remove('animasi-blobbing');
    void oguri.offsetWidth; 
    oguri.classList.add('animasi-blobbing');
});

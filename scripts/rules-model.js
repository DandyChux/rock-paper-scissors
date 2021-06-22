let model = document.querySelector('.rules-model');
let btn = document.querySelecto('.btn-rules');
let close = doument.querySelector('.rules-model__content--close');

//  show / hide the rules model 
function toggleModel() {
    model.classList.toggle('show-model');
}

//  hide the rules when user clicks outside the model window 
function windowOnClick(event) {
    if (event.target === model) {
        toggleModel();
    }
}

//  add function when the buttons/window are clicked 
btn.addEventListener('click', toggleModel);
close.addEventListener('click', toggleModel);
window.addEventListener('click', windowOnClick);
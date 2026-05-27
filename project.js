
function showCard(element) {
    let item1 = element.querySelector('.initial');
    let item2 = element.querySelector('.final');
    let button = element.querySelector('.button2');
    item1.classList.toggle('hidden');
    item2.classList.toggle('hidden');
    if (button.innerHTML == '+') {
        button.innerHTML = 'x';
        button.style.backgroundColor = 'grey';
    } else {
        button.innerHTML = '+';
        button.style.backgroundColor = '#4285F4';
    }
}

var typed = new Typed('#typed-target', {
    strings: ['Get the best of Google AI'],
    typeSpeed: 60,
    backSpeed: 60,
    color: 'white',
    showCursor: true,
});

function showAll() {
    var element = document.getElementsByClassName('faq_item .answer')
    for (i = 0; i < element.length; i++) {
        element[i].classList.toggle('hidden');
    }

}
function show(item) {
    let element = item.querySelector('.answer')
    element.classList.toggle('hidden');
}

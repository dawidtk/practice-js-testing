document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');
    const errorEl = document.querySelector('.alert')

    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'), errorEl);
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'), errorEl);

    errorEl.addEventListener('click', () => {
        errorEl.classList.add('alert--hidden')
    })

}

function setRandomPosition(element, error = null) {
    element.style.top = Math.random() * 600 + 'px';
    element.style.left = Math.random() * 800 + 'px';

    if(error) {
        throw error;
    }
}

function initEventWithError(element, eventName, error, errorEl) {
    element.addEventListener(eventName, function() {
        try {
            setRandomPosition(this, error)
        } catch(err) {
            showError(errorEl, err.message)
        }
    })
}

function showError(element, message) {
    element.classList.remove('alert--hidden')
    const messageEl = element.querySelector('.alert__message')
    messageEl.innerText = message
}
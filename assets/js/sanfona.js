
const sanfonaTriggers = document.querySelectorAll('.sanfona .trigger')

sanfonaTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const sanfona = trigger.parentElement
        const isOpen = sanfona.classList.contains('open')

        if (isOpen) {
            sanfona.classList.remove('open')
        } else {
            sanfona.classList.add('open')
        }
    })
})
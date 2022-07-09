
const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const steps =  document.querySelectorAll('.step')

let currentActive = 1 ;

nextBtn.addEventListener('click',()=>{
    currentActive++

    if(currentActive > steps.length) {
        currentActive = steps.length
    }

    update()
})

prevBtn.addEventListener('click',()=>{
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    steps.forEach((step, idx) => {
        if(idx < currentActive) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prevBtn.disabled = true
    } else if(currentActive === steps.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}

const cursorParallax = new CursorParallax()

const $header = document.querySelector('header')
const $title = $header.querySelector('.title')
const $title1 = $title.querySelector('.title1')
const $title2 = $title.querySelector('.title2')

const $main = document.querySelector('main')
const $slide = $main.querySelectorAll('.section')
const $footer = document.querySelector('footer')
const $progressBar = $footer.querySelector('.progress')
const $fillBar = $progressBar.querySelector('.fillBar')

const init = () => {
    let id = null
    for (let i = 0; i < $slide.length; i++) {
        if ($slide[i].classList.contains('active')) {
            id = i
            console.log(id)
        }
    }

    let ratio = (id / ($slide.length - 1)) * 100
    $fillBar.style.width = ratio + '%'

    switch (id) {
        case 0:
            $title.classList.remove('active')
            break;
        case 1:
            $title.classList.add('active')
            $title1.classList.add('active')
            $title2.classList.remove('active')
            break;
        case 2:
            $title.classList.add('active')
            $title1.classList.add('active')
            $title2.classList.remove('active')
            break;
        case 3:
            $title.classList.add('active')
            $title1.classList.remove('active')
            $title2.classList.add('active')
            break;
    }
}
window.setInterval(init, 100)
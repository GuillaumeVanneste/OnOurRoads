const cursorParallax = new CursorParallax()

const $body = document.querySelector('body')

const $header = $body.querySelector('header')
const $title = $header.querySelector('.title')
const $title1 = $title.querySelector('.title1')
const $title2 = $title.querySelector('.title2')
const $line = $title.querySelector('.line')

const $main = $body.querySelector('main')
const $slide = $main.querySelectorAll('.section')
const $infoButtons = $main.querySelectorAll('.infoButton')
const $infoSideBars = $main.querySelectorAll('.infoSideBar')
const $opacityBack = $main.querySelectorAll('.opacityBack')

const $footer = $body.querySelector('footer')
const $progressBar = $footer.querySelector('.progress')
const $fillBar = $progressBar.querySelector('.fillBar')
const $volumeButton = $footer.querySelector('.volume')
const $chapter = $footer.querySelector('.chapter')
const $chapterNumber = $chapter.querySelector('.number')
const $chapterTitle = $chapter.querySelector('.chapterTitle')


const $opacity = $body.querySelector('.opacity')
const $audio = $body.querySelector('audio')
let muted = true

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
            $chapterNumber.innerHTML = ''
            $chapterTitle.innerHTML = ''
            break;
        case 1:
            $title.classList.add('active')
            $title1.classList.add('active')
            $title2.classList.remove('active')
            $chapterNumber.innerHTML = '1'
            $chapterTitle.innerHTML = 'Histoire et formes'
            break;
        case 2:
            $title.classList.add('active')
            $title1.classList.add('active')
            $title2.classList.remove('active')
            $chapterNumber.innerHTML = '1'
            $chapterTitle.innerHTML = 'Histoire et formes'
            break;
        case 3:
            $title.classList.add('active')
            $title1.classList.remove('active')
            $title2.classList.add('active')
            $chapterNumber.innerHTML = '2'
            $chapterTitle.innerHTML = 'Géographie et economie'
            break;
    }
}
window.setInterval(init, 100)

const initSound = () => {
    if (muted) {
        $audio.play()
        muted = false
    } else {
        $audio.pause()
        muted = true
    }
}

$volumeButton.addEventListener('mousedown', () => {
    initSound()
})

for (let i = 0; i < $infoButtons.length; i++) {
    const button = $infoButtons[i]
    // Player send a malus
    button.addEventListener("mouseup", () => {
        const sideBar = $infoSideBars[i]
        if (sideBar.classList.contains('active')) {
            $line.classList.remove('active')
            sideBar.classList.remove('active')
            $opacity.classList.remove('active')
            $opacityBack[i].classList.remove('active')
        } else {
            $line.classList.add('active')
            sideBar.classList.add('active')
            $opacity.classList.add('active')
            $opacityBack[i].classList.add('active')
        }
    })
}

window.addEventListener('mousewheel', () => {
    $line.classList.remove('active')
    $opacity.classList.remove('active')
    for (let i = 0; i < $infoButtons.length; i++) {
        const sideBar = $infoSideBars[i]
        sideBar.classList.remove('active')
        $opacityBack[i].classList.remove('active')
    }
})

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        $line.classList.remove('active')
        $opacity.classList.remove('active')
        for (let i = 0; i < $infoButtons.length; i++) {
            const sideBar = $infoSideBars[i]
            sideBar.classList.remove('active')
            $opacityBack[i].classList.remove('active')
        }
    }
})
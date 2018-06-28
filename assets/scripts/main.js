const cursorParallax = new CursorParallax()

const $body = document.querySelector('body')

const $header = $body.querySelector('header')
const $title = $header.querySelector('.title')
const $title1 = $title.querySelector('.title1')
const $title2 = $title.querySelector('.title2')
const $title3 = $title.querySelector('.title3')
const $line = $title.querySelector('.line')

const $main = $body.querySelector('main')
const $slide = $main.querySelectorAll('.section')
const $infoButtons = $main.querySelectorAll('.infoButton')
const $infoSideBars = $main.querySelectorAll('.infoSideBar')
const $infoSideBars2 = $main.querySelectorAll('.infoSideBarTwo')
const $next = $main.querySelectorAll('.next')
const $previous = $main.querySelectorAll('.previous')
const $opacityBack = $main.querySelectorAll('.opacityBack')

const $footer = $body.querySelector('footer')
const $progressBar = $footer.querySelector('.progress')
const $fillBar = $progressBar.querySelector('.fillBar')
const $keypoints = $progressBar.querySelectorAll('.keypoints div')
const $volumeButton = $footer.querySelector('.volume')
const $chapter = $footer.querySelector('.chapter')
const $chapterNumber = $chapter.querySelector('.number')
const $chapterTitle = $chapter.querySelector('.chapterTitle')

const $opacity = $body.querySelector('.opacity')
const $audio = $body.querySelector('audio')
let muted = true
let progressOffset = (innerWidth * 8) / 100
let progressWidth = innerWidth - progressOffset * 2

const init = () => {
    let id = null
    for (let i = 0; i < $slide.length; i++) {
        if ($slide[i].classList.contains('active')) {
            id = i
        }
    }

    let ratio = (id / ($slide.length - 1)) * 100
    $fillBar.style.width = ratio + '%'
    console.log(ratio)

    if($main.dataset.page === 'home') {
        switch (id) {
            case 0:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.remove('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Histoire et formes'
                break;
            case 1:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Histoire et formes'
                break;
            case 2:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Histoire et formes'
                break;
            case 3:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Géographie et economie'
                break;
            case 4:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Géographie et economie'
                break;
            case 5:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Géographie et economie'
                break;
            case 6:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.add('active')
                $chapterNumber.innerHTML = '3'
                $chapterTitle.innerHTML = 'Choisir une histoire'
                break;
        }
    } else {
        switch (id) {
            case 0:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.remove('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Histoire et formes'
                break;
            case 1:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Histoire et formes'
                break;
            case 2:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Histoire et formes'
                break;
            case 3:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Géographie et economie'
                break;
            case 4:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Géographie et economie'
                break;
            case 5:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Géographie et economie'
                break;
            case 6:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.add('active')
                $chapterNumber.innerHTML = '3'
                $chapterTitle.innerHTML = 'Choisir une histoire'
                break;
            case 7:
                for (let i = 0; i < $keypoints.length; i++) {
                    const keypoint = $keypoints[i]
                    if (i <= id) {
                        keypoint.classList.add('borderChange')
                    } else {
                        keypoint.classList.remove('borderChange')
                    }
                }
                $title.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.add('active')
                $chapterNumber.innerHTML = '3'
                $chapterTitle.innerHTML = 'Choisir une histoire'
                break;
        }
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
            $infoSideBars2[i].classList.remove('active')
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
        $infoSideBars2[i].classList.remove('active')
    }
})

$opacity.addEventListener('mousedown', () => {
    $line.classList.remove('active')
    $opacity.classList.remove('active')
    for (let i = 0; i < $infoButtons.length; i++) {
        const sideBar = $infoSideBars[i]
        sideBar.classList.remove('active')
        $opacityBack[i].classList.remove('active')
        $infoSideBars2[i].classList.remove('active')
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
            $infoSideBars2[i].classList.remove('active')
        }
    }
})

for (let i = 0; i < $next.length; i++) {
    const next = $next[i]
    // Player send a malus
    next.addEventListener('mousedown', () => {
        $infoSideBars2[i].classList.add('active')
    })
}

for (let i = 0; i < $previous.length; i++) {
    const previous = $previous[i]
    // Player send a malus
    previous.addEventListener('mousedown', () => {
        $infoSideBars2[i].classList.remove('active')
    })
}
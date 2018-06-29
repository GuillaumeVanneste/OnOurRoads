const cursorParallax = new CursorParallax()

const $body = document.querySelector('body')

const $header = $body.querySelector('header')
const $title = $header.querySelector('.title')
const $title0 = $title.querySelector('.title0')
const $title1 = $title.querySelector('.title1')
const $title2 = $title.querySelector('.title2')
const $title3 = $title.querySelector('.title3')
const $title4 = $title.querySelector('.title4')
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
const $audioBackground = $body.querySelector('.backgroundSound')
const $audioVoixOff = $body.querySelector('.voixOff')
let muted = true

$audioVoixOff.volume = 1
$audioBackground.volume = 0.4

const init = () => {
    let id = null
    for (let i = 0; i < $slide.length; i++) {
        if ($slide[i].classList.contains('active')) {
            id = i
        }
    }

    let ratio = (id / ($slide.length - 1)) * 100
    $fillBar.style.width = ratio + '%'

    if($main.dataset.page === 'home') { // Home page
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
                $title0.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $line.style.opacity = 1
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
                $audioBackground.play()
                $audioVoixOff.play()
                $title.classList.add('active')
                $title0.classList.remove('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $line.style.opacity = 1
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
                $audioVoixOff.play()
                $title.classList.add('active')
                $title0.classList.remove('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $line.style.opacity = 1
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
                $audioVoixOff.pause()
                $title.classList.remove('active')
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $line.style.opacity = 1
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Chiffres Clés ( Data )'
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
                $audioVoixOff.pause()
                $title.classList.remove('active')
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $line.style.opacity = 0
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Chiffres Clés ( Data )'
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
                $audioVoixOff.pause()
                $title.classList.remove('active')
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $line.style.opacity = 0
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Chiffres Clés ( Data )'
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
                $audioVoixOff.pause()
                $title.classList.add('active')
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $line.style.opacity = 0
                $chapterNumber.innerHTML = '3'
                $chapterTitle.innerHTML = 'Un trafic mondial'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.add('active')
                $line.style.opacity = 1
                $chapterNumber.innerHTML = '4'
                $chapterTitle.innerHTML = 'Choisir une histoire'
                break;
        }
    } else if ($main.dataset.page === 'prostitution') { // prostitution page
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
                $title0.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = ''
                $chapterTitle.innerHTML = 'Kebe Biba'
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
                $title0.classList.remove('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Pauvreté et précarité'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'La quête d\'argent'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.add('active')
                $chapterNumber.innerHTML = '3'
                $chapterTitle.innerHTML = 'Exportation et menace'
                break;
        }
    } else if ($main.dataset.page === 'migrant') { // migrant page
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
                $title0.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $title4.classList.remove('active')
                $line.style.opacity = 1
                $chapterNumber.innerHTML = ''
                $chapterTitle.innerHTML = 'Samire Nesri'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $title4.classList.remove('active')
                $line.style.opacity = 0
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Les migrant'
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
                $title0.classList.remove('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $title4.classList.remove('active')
                $line.style.opacity = 1
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Les migrant'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $title4.classList.remove('active')
                $line.style.opacity = 1
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Guerre et violence'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.add('active')
                $title4.classList.remove('active')
                $line.style.opacity = 1
                $chapterNumber.innerHTML = '3'
                $chapterTitle.innerHTML = 'Kidnapping et esclavagisme'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $title4.classList.add('active')
                $line.style.opacity = 1
                $chapterNumber.innerHTML = '4'
                $chapterTitle.innerHTML = 'La voie de la mer'
                break;
        }
    } else if ($main.dataset.page === 'organe') { // organe page
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
                $title0.classList.add('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $title4.classList.remove('active')
                $chapterNumber.innerHTML = ''
                $chapterTitle.innerHTML = 'Alexandre Dixton'
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
                $title0.classList.remove('active')
                $title1.classList.add('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $title4.classList.remove('active')
                $chapterNumber.innerHTML = '1'
                $chapterTitle.innerHTML = 'Le départ'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.add('active')
                $title3.classList.remove('active')
                $title4.classList.remove('active')
                $chapterNumber.innerHTML = '2'
                $chapterTitle.innerHTML = 'Arrivé au Pakistan'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.add('active')
                $title4.classList.remove('active')
                $chapterNumber.innerHTML = '3'
                $chapterTitle.innerHTML = 'Hopital'
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
                $title0.classList.remove('active')
                $title1.classList.remove('active')
                $title2.classList.remove('active')
                $title3.classList.remove('active')
                $title4.classList.add('active')
                $chapterNumber.innerHTML = '4'
                $chapterTitle.innerHTML = 'Et après ?'
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
    button.addEventListener("mousedown", () => {
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
        if ($main.dataset.page !== 'home')
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
        if ($main.dataset.page !== 'home')
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
            if ($main.dataset.page !== 'home')
                $infoSideBars2[i].classList.remove('active')
        }
    }
})

for (let i = 0; i < $next.length; i++) {
    const next = $next[i]
    // Player send a malus
    next.addEventListener('mousedown', () => {
        if ($main.dataset.page === 'migrant')
            if (i === 0)
                $infoSideBars2[i+1].classList.add('active')
            else
                $infoSideBars2[i+2].classList.add('active')
        else
            $infoSideBars2[i].classList.add('active')
    })
}

for (let i = 0; i < $previous.length; i++) {
    const previous = $previous[i]
    // Player send a malus
    previous.addEventListener('mousedown', () => {
        if ($main.dataset.page === 'migrant')
            if (i === 0)
                $infoSideBars2[i+1].classList.remove('active')
            else
                $infoSideBars2[i+2].classList.remove('active')
        else
            $infoSideBars2[i].classList.remove('active')
    })
}
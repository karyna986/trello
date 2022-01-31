// изменение цвета на кaрточке

function appBlock(e) {
    const board = document.querySelector(`#boards_${e}`)
    const setingsBoard = document.querySelector(`#boards_${e}>.setings_board`)
    setingsBoard.style.display = 'block'
  
}
function boardClose(e) {
    const setingsBoard = document.querySelector(`#boards_${e}>.setings_board`)
    setingsBoard.style.display = 'none'
}

function styleboard1(e) {
    const board = document.querySelector(`#boards_${e}`)
    board.style.background = `rgb(179, 7, 7)`
}
function styleboard2(e) {
    const board = document.querySelector(`#boards_${e}`)
    board.style.background = `rgb(7, 179, 7)`
}
function styleboard3(e) {
    const board = document.querySelector(`#boards_${e}`)
    board.style.background = `rgb(0, 0, 0)`
}
function styleboard4(e) {
    const board = document.querySelector(`#boards_${e}`)
    board.style.background = `rgb(7, 39, 179)`
}
function styleboard5(e) {
    const board = document.querySelector(`#boards_${e}`)
    board.style.background = `rgb(184, 21, 162)`
}
function styleboard6(e) {
    const board = document.querySelector(`#boards_${e}`)
    board.style.background =  `rgb(204, 94, 5)`
}

// settings__background

const setClose = document.querySelector('.close_settings')
const setIcons = document.querySelector('.settings__item')
const setImg1 = document.querySelector('#photo_1')

function styleOpen() {
    let setOpen = document.querySelector('.general-settings')
    setOpen.style.display = 'block'
}
function styleClose() {
    let setOpen = document.querySelector('.general-settings')
    setOpen.style.display = 'none'
}

function styleImg1() {
        const app = document.querySelector('.app')
        app.style.background = `url(https://million-wallpapers.ru/wallpapers/2/14/10119406661687565247.jpg)`
        app.style.backgroundRepeat = 'no-repeat'
        app.style.backgroundSize = 'cover'
    }
function styleImg2() {
        const app = document.querySelector('.app')
        app.style.background = `url(https://content2.rozetka.com.ua/goods/images/big/17785280.jpg`
        app.style.backgroundRepeat = 'no-repeat'
        app.style.backgroundSize = 'cover'
    }
    function styleImg3() {
        const app = document.querySelector('.app')
        app.style.background = `url(https://vjoy.cc/wp-content/uploads/2019/09/1-6.jpg)`
        app.style.backgroundRepeat = 'no-repeat'
        app.style.backgroundSize = 'cover'
    }
    function styleImg4() {
        const app = document.querySelector('.app')
        app.style.background = `url(https://content.rozetka.com.ua/goods/images/big/17934293.jpg)`
        app.style.backgroundRepeat = 'no-repeat'
        app.style.backgroundSize = 'cover'
    }
    function styleImg5() {
        const app = document.querySelector('.app')
        app.style.background = `url(https://poster.nicefon.ru/2016_06/17/1080x610/42021eddcdcfdefcfdfff.jpg)`
        app.style.backgroundRepeat = 'no-repeat'
        app.style.backgroundSize = 'cover'
    }
    function styleBgr1() {
        const app = document.querySelector('.app')
        app.style.background = `rgb(179, 7, 7)`
    }
    function styleBgr2() {
        const app = document.querySelector('.app')
        app.style.background = `rgb(7, 179, 7)`
    }
    function styleBgr3() {
        const app = document.querySelector('.app')
        app.style.background = `rgb(0, 0, 0)`
    }
    function styleBgr4() {
        const app = document.querySelector('.app')
        app.style.background = `rgb(7, 39, 179)`
    }
    function styleBgr5() {
        const app = document.querySelector('.app')
        app.style.background = `rgb(184, 21, 162)`
    }
    function styleBgr6() {
        const app = document.querySelector('.app')
        app.style.background = `rgb(204, 94, 5)`
    }

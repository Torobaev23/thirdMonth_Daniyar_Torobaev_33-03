// MAIL CHECKER

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NO OK'
        gmailResult.style.color = 'red'
    }
}

// SQUARE

const square = document.querySelector('.child_block')

    let i = 0
    const moveTheSquare = () => {
        i++
        if (i < 449) {
            square.style.left=`${i}px`
            setTimeout(() =>  moveTheSquare() , 15)
        }
    }
    moveTheSquare()

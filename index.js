let homePoints = document.getElementById('homePoints')
let guestPoints = document.getElementById('guestPoints')

homePoints.textContent = 0
guestPoints.textContent = 0



const add1 = () => {
    //console.log(event.target.parentElement.id)
    if (event.target.parentElement.id === 'homes'){
        homePoints.innerText = parseInt(homePoints.textContent) + 1
    }

    if (event.target.parentElement.id === 'guests'){
        guestPoints.innerText = parseInt(guestPoints.textContent) + 1
    }
}


const add2 = () => {
    if (event.target.parentElement.id === 'homes'){
        homePoints.innerText = parseInt(homePoints.textContent) + 2
    }

    if (event.target.parentElement.id === 'guests'){
        guestPoints.innerText = parseInt(guestPoints.textContent) + 2
    }
}


const add3 = () => {
    if (event.target.parentElement.id === 'homes'){
        homePoints.innerText = parseInt(homePoints.textContent) + 3
    }

    if (event.target.parentElement.id === 'guests'){
        guestPoints.innerText = parseInt(guestPoints.textContent) + 3
    }
}
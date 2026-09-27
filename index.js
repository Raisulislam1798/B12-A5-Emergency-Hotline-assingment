// heart increase

const heartIcon = document.querySelectorAll('.fa-heart')
heartIcon.forEach(function (heart) {
    heart.addEventListener('click', function () {
        const add = document.getElementById('heart-couny')
        let fa = parseInt(add.innerText)
        fa = fa + 1
        add.innerText = fa
    })
})


// call function

const callHistoryData = []


// card-1 
document.getElementById('call-1').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling National Emergency Service \nNumber : " + 999)
        const data = {
            name: "National Emergency",
            Number: 999,
            data: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)

        const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }

    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }

})

// card-2 
document.getElementById('call-2').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Police Helpline Emergency Service \nNumber : " + 999)

        const data = {
            name: "Police Helpline ",
            Number: 999,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }
    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }

})

// card-3 
document.getElementById('call-3').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Emergency Fire Service \nNumber : " + 999)
        const data = {
            name: "Fire Service",
            Number: 999,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }
    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }

})

// card-4
document.getElementById('call-4').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Emergency Ambulance Service \nNumber : " + 1994 + "-" + 999999)

        const data = {
            name: "Emergency Ambulance",
            Number: 1994 + "-" + 999999,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }

    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }
})

// card-5 
document.getElementById('call-5').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Women & Child Helpline \nNumber : " + 109)
        const data = {
            name: "Women & Child",
            Number: 109,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }

    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }
})

// card-6 
document.getElementById('call-6').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Anti-Corruption Helpline \nNumber : " + 106)
        const data = {
            name: "Anti-Corruption",
            Number: 106,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }
    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }

})

// card-7 
document.getElementById('call-7').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Electricity Helpline \nNumber : " + 16216)
        const data = {
            name: "Electricity Helpline",
            Number: 16216,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }
    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }

})

// card-8 
document.getElementById('call-8').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Brac Helpline \nNumber : " + 16445)
        const data = {
            name: "Brac Helpline",
            Number: 16445,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }

    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }
})

// card-9
document.getElementById('call-9').addEventListener('click', function () {
    const coinElement = document.getElementById('coin');
    let currentCoins = parseInt(coinElement.innerText);
    if (currentCoins >= 20) {

        currentCoins = currentCoins - 20
        document.getElementById('coin').innerText = currentCoins
        alert("Calling Bangladesh Railway Helpline Service \nNumber : " + 163)
        const data = {
            name: "Railway Helpline",
            Number: 163,
            data: new Date().toLocaleTimeString()

        }
        callHistoryData.push(data)

         const callHistory = document.getElementById('call-history')
        callHistory.innerText= ""

        for (const data of callHistoryData) {
            const div = document.createElement("div")
            div.innerHTML = `
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-xl my-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${data.name} Number</h3>
                        <p class="text-sm text-gray-500 mt-1">${data.Number}</p>
                    </div>
                    <span class="text-xs text-gray-500 font-medium">${data.data}</span>
                </div>
            `
            callHistory.appendChild(div)
        }
    }
    else {
        alert("You don't have enough coins.At least 20 coins are required to call")
    }

})



// history clear

document.getElementById('clear-btn').addEventListener('click',function(){
    callHistoryData.length=0
    const callHistoryDiv=document.getElementById('call-history')
    callHistoryDiv.innerText= ''
})





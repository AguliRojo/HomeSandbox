const getRecipeBtn = document.querySelector('#getrecipe')
const result = document.querySelector('#result')

const getStatusBtn = document.querySelector('#getstatus')
const result_status = document.querySelector('#result_status')

// gets data from API and sets the content of #result div
const getData = function () {
    result.innerText = 'Loading....'

    const randomId = Math.floor(Math.random() * 30) + 1

    fetch(`https://dummyjson.com/products/${randomId}`)
        .then(res => res.json())
        .then(data => {
            result.innerText = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
}

// add event listener for #fetchdata button
getRecipeBtn.addEventListener('click', getData)



getStatusBtn.addEventListener("click", async () => {
    result_status.innerText = "Loading..."

    const res = await fetch("http://127.0.0.1:8000/api/status")
    const data = await res.json()

    result_status.innerText = JSON.stringify(data, null, 2)
})

const deleteLine = document.querySelectorAll('.fa-trash')
const editLine = document.querySelectorAll('.fa-pencil-alt')

Array.from(deleteLine).forEach((element) => {
    element.addEventListener('click', deleteSession)
})

Array.from(thumbText).forEach((element) => {
    element.addEventListener('click', addLike)
})

async function deleteSession() {
    const date = this.parentNode.parentNode.childNodes[1].innerText
    const startTime = this.parentNode.parentNode.childNodes[3].innerText
    if (confirm("Are you sure you want to delete?")) {
        try {

            const response = await fetch('deleteSession', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'date': date,
                    'startTime': startTime
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        } catch (err) {
            console.log(err)
        }
    }

}

// Allows user to choose whether to include data from this session in the chart

async function showData() {
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try {
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'stageNameS': sName,
                'birthNameS': bName,
                'likesS': tLikes
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    } catch (err) {
        console.log(err)
    }
}
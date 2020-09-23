const baseUrl = 'http://localhost:5001'

const getScales = (key) => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}?key=${encodeURIComponent(key)}`).then(response => {
            if (response.status === 200) {
                resolve(response.json())
            } else {
                reject(`Error ${response.status}`)
            }
        }
        )
    })
}

export default {
    getScales
}
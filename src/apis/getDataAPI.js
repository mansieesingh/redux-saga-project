export default class API {
    constructor() {}

    getDataAPI = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            let data = await response.json();
            console.log('API response received :: ', data)
            return data
        } catch (e) {
            console.log("ERROR !!!")
        }
    }
}
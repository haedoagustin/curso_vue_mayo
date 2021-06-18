import http from './api/apiClient';

let getData = async (url) => {
    try {
        let {data} = await http.get(url)
        return data.data
    } catch (err) {
        return err
    }
}

const getApiList = async () => await getData('apis')
const getAmountOfApiList = async (amount) => await getData(`apis?limit=${amount}`)

const exported = {
    getApiList,
    getAmountOfApiList
}

export default exported;

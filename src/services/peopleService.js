let getData = async (resource) => {
    try {
        let data = await localStorage.getItem(resource)
        return JSON.parse(data)
    } catch (err) {
        return err
    }
}

let pushData = async (resource, data) => {
    try {
        let existingData = await getData(resource)
        if (!Array.isArray(existingData) || existingData == null )
            existingData = [];
        
        existingData.push(data);
        await localStorage.setItem(resource, JSON.stringify(existingData))
        return data
    } catch (err) {
        return err
    }
}

const getPeople = async () => await getData('people')

const pushPeople = async (person) => await pushData('people', person)

const exported = {
    getPeople,
    pushPeople
}

export default exported;

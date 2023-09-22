export default async function fetchData(link, value) {
    const data = await fetch(`https://fakestoreapi.com/${link}=${value}`)
        .then(res => res.json())
        .catch((error) => {
            alert(error, 'something went wrong')
        })
        .finally(() => {
            'finally'
        })
    return data
}
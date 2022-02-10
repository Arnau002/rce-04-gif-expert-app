

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=dEtkMG88FHP1E1i4w8UdyBkL2791uuus`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
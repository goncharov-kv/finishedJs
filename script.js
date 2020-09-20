const input = document.querySelector('input');
const btn = document.querySelector('.btn');
const div = document.querySelector('div');
const func = (event) => {
    event.preventDefault();
    const query = input.value;
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=12&key=15900106-2c235e732bb321ca7ec900d93`
    fetch(url)
.then(data => data.json())
.then(data => {
    console.log(data)
    const {hits} = data;
    for (let i = 0;i < hits.length;i++) {
        const img = document.createElement('img');
        img.setAttribute('src', hits[i].largeImageURL);
        div.appendChild(img)
    
    }
})
}
btn.addEventListener('click', func);


// Call Api 

 for(let i = 1 ; i <= 28 ; i++){
    fetch(`https://projectheist.herokuapp.com/characters/${i}`).then(async (response)=> {
    return response.json();
}).then(  (data)=> {
    let div = document.createElement('div');
    div.innerHTML = `<img src="${data.image}" alt="">`;
    div.innerHTML += `<span class="info px-4 d-block"><h2 class="py-2 text-center">${data.alias}</h2><p>Name : ${data.name}</p><p>Gender : ${data.gender}</p><p>Occupation : ${data.occupation}</p><p>Status : ${data.status}</p></span>`;
    document.querySelector('div.caracters').appendChild(div);
})
}
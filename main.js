const p = document.querySelector('p');

document.addEventListener('click', e =>{
    const isOutside = !e.target.closest('.outside');
    p.textContent = `You Clicked ${isOutside? 'Outside' : 'Inside'}!`
})
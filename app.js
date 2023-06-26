const liElements = document.querySelectorAll('nav ul li');
const contents = document.querySelectorAll('.content');

liElements.forEach((li, idx) =>{
    li.addEventListener('click', () =>{
        hideAllContents();
        hideAllLiElements();
        li.classList.add("active");
        contents[idx].classList.add('show');
    })
})

function hideAllContents(){
    contents.forEach(content => {
        content.classList.remove('show')
    })
}

function hideAllLiElements(){
    liElements.forEach(li => {
        li.classList.remove('active')
    })
}
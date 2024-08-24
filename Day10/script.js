const h1=document.getElementById('text');

const hideElement =()=>{
    h1.classList.add('hidden');

}

const showElement=()=>{
    h1.classList.remove('hidden')
}

const replaceElement=()=>{
    h1.textContent="angha ";
}

const toggleElement=()=>{
    h1.classList.toggle('highlight');
}



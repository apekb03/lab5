cconst searchField=document.getElementById('searchField');
const insertField=document.getElementById('insertField');
const searchBtn=document.getElementById('searchBtn');
const insertBtn=document.getElementById('insertBtn');
const resultsDiv=document.getElementById('results');
//listens to when search btn is clicked
searchBtn.addEventListener('click',()=>{
    fetch('/search?find='+searchField.value) //whenever the search is clicked, it fetches the value in the search box.
    .then(r=>r.text())
    .then(txt=>{
        resultsDiv.innerText=txt
    })
});


insertBtn.addEventListener('click',()=>{
    fetch('/insert?doc='+insertField.value) //whenever the search is clicked, it fetches the value in the search box.
    .then(r=>r.text())
    .then(txt=>{
        resultsDiv.innerText=txt
    });
});
function practiceHTTP() {
    
    axios.request({
        method : "POST",
        url : "https://jsonplaceholder.typicode.com/posts",
        
    }).then(postSucuess).catch(postError);
}

function postSucuess(response) {
    console.log(response);
    document.getElementById('message1').innerText="post sucessful!"
}
function postError(error) {
    console.log(error);
}

function practicePATCH() {
    axios.request({
        method : "PATCH",
        url : "https://jsonplaceholder.typicode.com/posts/1"
    }).then(patchSucess).catch(patchSucess);
}

function patchSucess(response) {
    console.log(response.data.title);
    let patch = response.data.title;
    document.getElementById('message').innerText = patch;
    document.getElementById('message1').innerText = "changed post sucessfully"
}
function patchError(error) {
    console.log(error);
}

function practiceDelete() {
    axios.request({
        method : "DELETE",
        url : "https://jsonplaceholder.typicode.com/posts/1"
    }).then(deleteSucess).catch(deleteSucess);
}
function deleteSucess(response) {
    console.log(response);
    let deletes = response.statusText;
    document.getElementById('message').innerText= deletes;
    document.getElementById('message1').innerText = "deleted post"
}

function deleteError(error) {
    console.log(error);
}

function practiceGet() {
    axios.request({
        method : "GET",
        url : "https://jsonplaceholder.typicode.com/posts"
    }).then(getSucess).catch(getError);
}

function getSucess(response) {
    console.log(response.data[0].title);
    let gets = response.data[0].title;
    document.getElementById('message').innerText = gets;
    document.getElementById('message1').innerText = "all posts displayed"
}
function getError(error) {
    console.log(error);
}
document.getElementById('post2').addEventListener('click', practiceGet);
document.getElementById('delete').addEventListener('click', practiceDelete);
document.getElementById('patch').addEventListener('click', practicePATCH);
document.getElementById('post1').addEventListener('click', practiceHTTP);
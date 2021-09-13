document.getElementById('content').addEventListener('mouseenter', addImage);
document.getElementById('content').addEventListener('mouseleave', changeImage);

function addImage() {
    document.getElementById("content").innerHTML = '<img src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="bg" height="300" width="300">';
}

function changeImage() {
    document.getElementById("content").innerHTML = '<img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlnaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="bg" height="300" width="300">';
}
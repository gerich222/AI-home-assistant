function reset(){
    fetch('../settings.json')
    .then(response => response.json())
        .then(JSON.stringify("name", "undefiened"))
}
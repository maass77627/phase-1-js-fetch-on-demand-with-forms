const init = () => {
    
    fetch("http://localhost:3003/movies")
    .then((response) => response.json())
    .then((json) => findMovie(json))

    function findMovie(movies) {
    console.log(movies)
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target.children[1].value)
        let id = e.target.children[1].value
        console.log(id)
        let movie = movies.find((movie) => movie.id == id)
        console.log(movie)
        let title = document.querySelector('h4')
        title.innerHTML = movie.title
        let summary = document.querySelector('p')
        summary.innerHTML = movie.summary

    })
    
    }
   

    
  
}

document.addEventListener('DOMContentLoaded', init);
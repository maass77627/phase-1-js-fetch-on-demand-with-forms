const init = () => {
    document.querySelector('form').addEventListener('submit', (e) => handleSubmit(e));

    function handleSubmit(e) {
        e.preventDefault();
        const movieId = e.target.children[1].value;
        
        fetch(`http://localhost:3000/movies/${movieId}`)
            .then((response) => response.json())
            .then((movie) => displayMovie(movie));

    }

    function displayMovie(movie) {
        console.log(movie);
        const title = document.querySelector('h4');
        title.innerHTML = movie.title;
        const summary = document.querySelector('p');
        summary.innerHTML = movie.summary;

    }
    
};
document.addEventListener('DOMContentLoaded', init);
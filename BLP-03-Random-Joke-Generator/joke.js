const jokeElem = document.querySelector(".joke");
const generateNewJokeBtn = document.querySelector(".generateNewJoke");

const randomJoke = () => {
    jokeElem.innerText = "Loading...";
    const apiUrl = "https://official-joke-api.appspot.com/jokes/random";
    fetch(apiUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            jokeElem.innerText = data.setup;
        })
        .catch((err) => {
            console.log(err);
            jokeElem.innerText = "Error while fetching the joke";
        })
        .finally(() => {
            console.log("Data fetching process completed");
        });
};
randomJoke();
generateNewJokeBtn.addEventListener("click", randomJoke);

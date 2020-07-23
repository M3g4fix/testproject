'use strict';

document.addEventListener('DOMContentLoaded',()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const advert = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        genreListItems = document.querySelectorAll('.promo__interactive-item'),
        button = document.querySelector('button'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input'),
        checkBox = document.querySelector('[type="checkbox"]');
        
    addForm.addEventListener('submit', addFilm);
    advert.forEach(item => {
        item.remove();
    });
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    updateFilms(movieDB.movies,movieList);
    
    function addFilm(e) {
        e.preventDefault();
        let filmName=addInput.value;
        if(filmName.length >21){
           filmName=filmName.substr(0,20)+'...';
        }
        movieDB.movies.push(filmName);
        if (checkBox.checked) {console.log('Adding favourite film');}
        e.target.reset();
        movieDB.movies.sort();
        updateFilms(movieDB.movies, movieList);
    }
    
    function removeFilm (e) {
        let filmName = document.querySelector('.adding__input').value,
            recordValue=e.target.parentElement.innerText;
        recordValue=+recordValue.substr(0,1);
        movieDB.movies.splice(recordValue-1,1);
        updateFilms(movieDB.movies, movieList);
    }
    
    function updateFilms(films, parent) {
        parent.innerHTML = "";
        films.forEach((value, index) => {
            parent.innerHTML += `<li class="promo__interactive-item">${index+1}. ${value}
                                        <div class="delete"></div>
                                    </li>`;
        });
        let deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', removeFilm);
        });
    }
    
    
});
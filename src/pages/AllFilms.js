/* ОПИСАНИЕ КОНТЕНТА
    Тут будет 2 колонки: 
    1. список с фильмами слева
    2. карточка с фильмом для редактиврования [FilmView с установленными полями фильма]

    Над FilmView с фильмом будет кнопка, чтобы начать редактировать этот фильм 
    Под FilmView кнопка сохранить
*/

import React from 'react'
import FilmView from '../components/FilmView';
// const styles = { }

export default function AllFilms() {
    return (
        <div>
            
            <div className="container">
            <div className="row">
                {/* список фильмов */}
                <div className="col-sm">
                One of three columns
                </div>
                
                {/* Редактирование фильма */}
                <div className="col-m">
                    <FilmView />
                </div>
            </div>
            </div>
        </div>
    )
}

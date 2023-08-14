import { getPhotos } from '../js/api';

const divRef = document.querySelector(`.film-card`)

export async function createCardMarkup(data) {
  
  const tamplate = data.map(
      ({ id, src, name, price, title }) => {
    
return
         `<li class="table-item film-card__item" data-id="${id}">
                            <div class="film-card__box-img">
                            <img class="film-card__img" src="${src}" alt="${name}" loading="lazy" width="350" height="750"/>
                            </div>
                            <div class="film-card__box-info">
                              <h3 class="film-card__title">${title}</h3>
                              
                            </div>
                          </li> `;

        
      }
    )
        .join('');
    divRef.innerHTML = '';
  divRef.insertAdjacentHTML('beforeend', tamplate); 
}
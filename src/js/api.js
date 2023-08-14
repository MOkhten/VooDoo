import axios from 'axios';

axios.defaults.baseURL = 'https://voodoo-sandbox.myshopify.com/products.json?limit=12';

export async function getData() {
    const apiData = await axios.get(
      `https://voodoo-sandbox.myshopify.com/products.json?limit=12'`
    );
    return apiData;
  }

// export async function getData() {
//     const apiData = await axios.get(
//       `https://voodoo-sandbox.myshopify.com/products.json?limit=12`
//     );
//     return apiData;
//   }
// export class VooDooAPI {
//     #page = 1;
//     #totalPages = 0;
//     #perPage = 12;
    
    
//     async getPhotos() {
//         const urlAXIOS = `?per_page=${this.#perPage}&page=${this.#page}`;
//         const data  = await axios.get(urlAXIOS);
//         return data;
//     }

    

    
//     incrementPage() {
//         this.#page += 1;
//     }

//     resetPage() {
//         this.#page = 1;
//     }
//     calculateTotalPages(total) {
//         this.#totalPages = Math.ceil(total / this.#perPage);
//     }

//     get isShowLoadMore() {
//         return this.#page < this.#totalPages;
//     }
// }
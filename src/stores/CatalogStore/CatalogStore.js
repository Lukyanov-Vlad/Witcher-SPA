import { makeAutoObservable, runInAction } from "mobx";

class CatalogStore {

    categories = undefined;
    categoryId = undefined;
    catalog = undefined;
    currentPage = 1;
    catalogPerPage = 12;
    currentCatalogData = undefined;

    loadingCategoriesStatus = false;
    loadingCatalogStatus = false;


    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind: true,
        })
    }

    async loadCategories() {

        this.loadingCategoriesStatus = true;
        try {
            const response = await fetch('http://localhost:3001/card_category');
            if (response.status >= 400) {
                throw new Error(`Response Error: ${response.statusText}`);
            }
            const data = await response.json();
            runInAction(() => {

                this.categories = [...data];
                this.loadingCategoriesStatus = false;
            })
        } catch (err) {
            console.log(err);
        } finally {
            runInAction(() => {
                this.loadingCategoriesStatus = false;
            })

        }

    }

    async loadCatalog(catsId) {
        this.loadingCatalogStatus = true;
        try {

            let response = undefined;
            if (catsId) {
                let { cats_title } = this.categories.find((item) => item.id === catsId);
                response = await fetch(`http://localhost:3001/cart?_sort=price&_order=asc&deck_like=${cats_title}`);
            } else {
                response = await fetch('http://localhost:3001/cart?_sort=price&_order=desc');
            }
            if (response.status >= 400) {
                throw new Error(`Response Error: ${response.statusText}`);
            }
            let data = await response.json();
            runInAction(() => {
                if (catsId) {
                    data = data.sort((a, b) => {
                        if (a['cart_class'] < b['cart_class']) return -1;
                    });

                }
                this.catalog = [...data];
                const indexOfLastPage = this.currentPage * this.catalogPerPage;

                const indexOfFirstPage = indexOfLastPage - this.catalogPerPage;
                this.currentCatalogData = this.catalog.slice(indexOfFirstPage, indexOfLastPage);
                this.loadingCatalogStatus = false;
            });

        } catch (err) {
            console.log(err);
        } finally {
            runInAction(() => {
                this.loadingCatalogStatus = false;
            })

        }


    }



    setCategoryId(newId) {
        this.categoryId = newId;

    }

    setCurrentPage(page) {



        this.currentPage = page;
    }
}

const catalogStore = new CatalogStore();
export default catalogStore;
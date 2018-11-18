//Create instance
const newsService = new NewsService(new CustomHttp());
const newsUI = new NewsUI();


// UI Elements
const countrySelect = document.querySelector('.country');
const categorySelect = document.querySelector('.category');

const changeCountryCategoryHandler = () => {
    const country = countrySelect.value;
    const category = categorySelect.value;

    newsService.fetchTopHeadlines((res) => {
        const { articles , totalResults } = res;
        //todo check the mount of news
        newsUI.clearContainer();
        articles.forEach(news => newsUI.addNews(news));
    }, country, category);
};

countrySelect.addEventListener('change', changeCountryCategoryHandler);
categorySelect.addEventListener('change', changeCountryCategoryHandler);
window.addEventListener('load',changeCountryCategoryHandler);
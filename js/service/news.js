class NewsService {
    constructor(http) {
        this._key = 'c9434099fd47477bb6d998dff1cfb5e5';
        this._url = 'https://newsapi.org/v2';
        this._country = 'ua';
        this._category = 'technology';
        this._http = http;
    }
    /**
     * 
     * @param {*} callback 
     * @param {*} country 
     * @param {*} category 
     */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    }
}












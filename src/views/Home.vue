<template>
  <div class="home">
   <Navbar/>
   <div class="search-field" style="display:flex; justify-content: center; align-items:center">
        <input type="text" v-model="search" name="search" placeholder="Search worldwide news...">
        <button type="button" @click="searchNews" class="btn btn-primary ml-4">Search</button>
     </div>
     <div class="container mt-5">
        <div class="row">
          <div class="col-lg-4 mt-4" v-for="(article, index) in articles" :key="index">
            <div class="results">
              <img v-if="article.urlToImage" :src="article.urlToImage" :alt="article.ttitle" class="img-fluid">
              <img v-else src="https://www.signagekings.ng/wp-content/uploads/2016/04/dummy-post-horisontal.jpg" :alt="article.ttitle" class="img-fluid">
              <div class="card__body p-4">
                <h5>{{article.title}}</h5>
                <p>{{article.description}}</p>
                <div>{{article.content}} <a :href="article.url">Read more...</a></div>
                <p>Author: {{article.author}}</p>
                <p>{{article.publishedAt | moment}}</p>
              </div>
            </div>
          </div>
        </div>
        <scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore">
        </scroll-loader>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import moment from 'moment'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  data:() => ({
    articles: [],
    search: '',
    country: 'us',
    loading: false,
    loadMore: true,
    currentPage: 1,
    maxPerPage: 21,
    totalResults: 0
  }),
  components: {
    Navbar,
  },
  mounted() {
    if(localStorage.getItem('token') === null) {
        localStorage.removeItem('token');
        this.$router.push('/Login')
    } else {
      this.getTopNews()
      this.getImagesInfo()
    }
  },
  methods: {
    moment: function () {
      return moment();
    },
    resetData() {
      this.articles = []
    },
    getTopNews() {
      this.loading = true
      const api_key = 'ee2383b8f68a464a96757a4af730ee62';
      axios.get(`http://newsapi.org/v2/top-headlines?country=${this.country}&pageSize=${this.maxPerPage}&apiKey=${api_key}`, {
         params: {
              currentPage: this.currentPage++,
              maxPerPage: this.maxPerPage,
              // totalResults: this.totalResults
            }
      })
      .then(response => {
        this.loading = false
        this.articles = response.data.articles;
        response.data.articles.length < this.maxPerPage && (this.loadMore = false)
      }).catch(error => {
        console.log(error)
      })
    },
     searchNews() {
       if(this.search !== '') {
         this.loading = true
         const api_key = 'ee2383b8f68a464a96757a4af730ee62';
         const current_date = moment().format();
         axios.get(`http://newsapi.org/v2/everything?q=${this.search}&from=${current_date}&sortBy=publishedAt&apiKey=${api_key}`)
         .then(response => {
           this.loading = false
           this.search = ''
           this.articles = response.data.articles;
         }).catch(error => {
           alert(error)
         }) 
        this.resetData();
       } else {
        this.getTopNews()
       }
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }

}
</script>

<style scoped>
  .body {
    font-family: 'Roboto', sans-serif;
  }
  .search-field {
    margin-top: 30px;
  }
    .search-field input {
      width: 40%;
      height: 40px;
      padding: 20px 10px;
      border: 1px solid #e7e7e7;
      font-size: 15px;
      outline: none;
      font-family: 'Roboto', sans-serif;
  }
  .btn-primary {
      border-radius: 0;
      outline: none;
      font-family: 'Roboto', sans-serif;
  }
  h5, p {
    font-family: 'Roboto', sans-serif;
  }
  .card__body {
     box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);  
  }
</style>
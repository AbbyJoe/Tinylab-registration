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
        <div ref="infinteScrollTrigger">
          <div v-if="loading" class="text-center mt-5">
                <div id="loading"></div>
            </div> 
            <div v-else class="text-center">No more top news for now...</div>
        </div>
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
    currentPage: 1,
    maxPerPage: 6,
    totalResults: 100
  }),
  components: {
    Navbar,
  },
 
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults/this.maxPerPage)
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
      const api_key = '886f03f701624f8a983ec136ff054946';
      axios.get(`http://newsapi.org/v2/top-headlines?country=${this.country}&pageSize=${this.maxPerPage}&apiKey=${api_key}&page=${this.currentPage}`)
      .then(response => {
        this.loading = false
        this.articles.push(...response.data.articles)
      }).catch(error => {
        console.log(error)
      })
    },
     searchNews() {
       if(this.search !== '') {
         this.loading = true
         const api_key = '886f03f701624f8a983ec136ff054946';
        //  const current_date = moment().format();
         axios.get(`https://newsapi.org/v2/everything?q=${this.search}&apiKey=${api_key}&page=${this.currentPage}`)
         .then(response => {
            this.loading = false
            this.search = ''
            this.articles.push(...response.data.articles)
         }).catch(error => {  
           alert(error)
         }) 
        this.resetData();
       }
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.intersectionRatio  > 0 && this.currentPage < this.pageCount) {
            this.loading = true;
            this.currentPage += 1;
            if(this.search){
              this.searchNews()
            } else {
              this.getTopNews();
            }
          }
        });
      });
       observer.observe(this.$refs.infinteScrollTrigger)
    }
  },
   mounted() {
    if(localStorage.getItem('token') === null) {
        localStorage.removeItem('token');
        this.$router.push('/Login')
    } else {
      this.getTopNews();
      this.scrollTrigger()
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

  /* spinner */
    #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #007bff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
</style>
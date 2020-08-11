<template>
  <div>
    <Navbar/>
    <Sidebar/>
    
      <div class="content__container">
        <div class="container-fluid">
            <div class="sub__header">
              <h4>Employees</h4>
              <button type="button" data-toggle="modal" data-target="#exampleModal">Add New</button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" >Add New Employee</h5>
                    <button type="button" class="close bg-danger" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-row">
                        <div class="col-md-6 form-group">
                          <label for="firstName">First Name</label>
                          <div class="d-flex align-items-center">
                            <input type="text" name="name" v-model="firstname" class="form-control" id="name" placeholder="First Name" required/>
                          </div>
                        </div>
                        <div class="col-md-6 form-group">
                          <label for="LastName">Last Name</label>
                          <div class="d-flex align-items-center">
                            <input type="text" v-model="lastname" class="form-control" name="Last Name" placeholder="Last Name" />
                          </div>
                        </div>
                        <div class="col-md-6 form-group">
                          <label for="firstName">Email</label>
                          <div class="d-flex align-items-center">
                            <input type="email" v-model="email" name="email" class="form-control" placeholder="Email"/>
                          </div>
                        </div>
                        <div class="col-md-6 form-group">
                          <label for="LastName">Phone</label>
                          <div class="d-flex align-items-center">
                            <input type="text" v-model="phone" class="form-control" name="phone" placeholder="Phone" />
                          </div>
                        </div>
                      </div>
                        <div class="form-group">
                          <label for="password">Role</label>
                          <div class="d-flex align-items-center">
                            <input type="text" v-model="role" class="form-control" name="Role" placeholder="Role" required/>
                          </div>
                        </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary"  @click="addNew">
                      <div v-if="loading">
                          <div id="loading"></div>
                      </div>
                      <div v-else>Add New</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        <div class="sub__header__content">
          <h4>Josh Bakery Ventures</h4>
          <p>62, Bode Thomas, Surulere, Lagos</p>
        </div>
        <div class="footer d-md-flex py-4 ">
            <div class="mr-md-auto text-center text-md-left">
              <div class="section__1 d-flex">
                  <div class="select">
                    <select name="select" id="select">
                      <option selected disabled>Change role</option>
                      <option value="1">Admin</option>
                      <option value="2">Staff</option>
                    </select>
                      <button type="button" @click="changeRole" class="change__btn ml-4">Change</button>
                  </div>
                  <div class="d-flex align-items-center">
                    <input class="searchbox" v-model="search" type="text" value="" placeholder="Enter staff name here…">
                    <button type="button" class="search__btn"><search-icon size="1.5x" class="custom-class search__icon"></search-icon></button>
                  </div>
            </div>
            </div>
            <div class="text-center copyright text-md-right pt-3 pt-md-0">
              <div class="section__2">
                <div class="pagination">
                  <p><span>1&nbsp;</span>&nbsp; &nbsp;of 2 </p>
                  <chevron-left-icon size="1.5x" class="custom-class ml-2 chev__icon"></chevron-left-icon>
                  <chevron-right-icon size="1.5x" class="custom-class ml-2 chev__icon"></chevron-right-icon>
                </div>
            </div>
            </div>
          </div>
          <div class="table__section">
            <div class="row">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <thead>
                      <tr class="table__header">
                        <th scope="col"><input type="radio" name="muhRadio" disabled /></th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">role</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table__body" v-for="(object, index) in filterdUsers" :key="object.id">
                        <th scope="row" @click="selectRole(index, object)"><input type="radio" :value="index + 1" name="muhRadio"/></th>
                        <td>{{object.firstname}}</td>
                        <td>{{object.lastname}}</td>
                        <td>{{object.email}}</td>
                        <td>{{object.phone}}</td>
                        <td>{{object.role}}</td>
                        <td><trash-2-icon size="1.5x" @click="handleDelete(index, object.id)" class="custom-class trash-btn"></trash-2-icon></td>
                      </tr>
                    </tbody>
                  </table>     
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import $ from 'jquery'
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon, Trash2Icon   } from 'vue-feather-icons'
import axios from 'axios'
export default {
    components: {
      Navbar,
      Sidebar,
      SearchIcon,
      ChevronLeftIcon,
      ChevronRightIcon,
      Trash2Icon 
    },
    data:()=>({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      role: '',
      search: '',
      roles: {
        admin: 'Admin'
      },
      tableJSON:[{
        firstname: 'Jane',
        lastname: 'Clement',
        email: 'josh.bakery@gmail.com	',
        phone: '+2348012345678',
        role: 'Admin'
      },
      {
        firstname: 'Joshua',
        lastname: 'Bakare',
        email: 'josh.bakery@gmail.com	',
        phone: '+2348012345678',
        role: 'Staff'
      },
      {
        firstname: 'Hannah',
        lastname: 'Johnson',
        email: 'josh.bakery@gmail.com	',
        phone: '+2348012345678',
        role: 'Admin'
      },
      {
        firstname: 'John',
        lastname: 'Ngoka',
        email: 'josh.bakery@gmail.com	',
        phone: '+2348012345678',
        role: 'staff'
      }],
      selectedIndex: '',
      selectedId: '',
      roleId: '',
      loading: false
    }),
    mounted () {
      if (localStorage.getItem('tableJSON')) {
        try {
          this.tableJSON = JSON.parse(localStorage.getItem('tableJSON'))
        } catch (e) {
          console.log(e)
        }
      }
    },
    methods: {
      addNew() {
        this.loading = true
        axios.post('employee', {
          firstname: this.firstname,
          lastname: this.lastname,
          phone: this.phone,
          email:this.email,
          role: this.role
        }).then((response) => {
          this.loading = false
          this.firstname = '',
          this.lastname = '',
          this.email = '',
          this.phone = '',
          this.role = '',
          this.tableJSON.unshift(response.data)
          $('#exampleModal').modal('hide');

          // LocalStorage
        localStorage.setItem('tableJSON', JSON.stringify(this.tableJSON))
          console.log(response.data)
        }).catch((error) => {
          console.log(error)
        })
      },
      handleDelete(index, id) {
        axios.delete('employee' + id)
        .then(this.tableJSON.splice(index, 1)),
        
        localStorage.removeItem('tableJSON', JSON.stringify(this.tableJSON))
        .catch((error) => {
          console.log(error)
        }) 
      },
      selectRole(index, object) {
          this.selectedIndex = index;
          this.selectedId = object.id;
          this.roleId = object.role
      },
      changeRole() {
        axios.put('employee' + this.selectedId, {
            'role': this.roleId
        }).then((response) => {
          this.$set(this.tableJSON, this.selectedIndex, response.data);
        })
      }
    },
    computed: {
       filterdUsers() {
        return this.tableJSON.filter(user => {
          return user.firstname.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
}
</script>

<style scoped>
  .content__container {
    background: #f6f8f8 !important;
    padding-top: 130px;
    padding-bottom: 140px ;
    padding-left: 120px;
    padding-right: 40px;
    height: 100%;
  }
  .sub__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sub__header h4 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 15px;
    letter-spacing: -0.65px;
    color: #013C61;
  }
  .sub__header button {
    border: 0;
    width: 200px;
    height: 44px;
    background: #2BDA53;
    box-shadow: 0px 7px 15px rgba(43, 218, 83, 0.2);
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    transition: all 1s;
  }
  .sub__header button:focus {
    outline: none;
  }
  .sub__header__content {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF !important;
    border-radius: 5px;
    padding: 32px 27px;
  }
  .sub__header__content h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 29px;
    /* line-height: 15px; */
    letter-spacing: -0.9px;
    color: #013C61;
  }
  .sub__header__content p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    /* line-height: 15px; */
    letter-spacing: -0.55px;

    color: #013C61;
  }

  /* spinner */
    #loading {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }

/* Header__Section */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
 /* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  background: #FFFFFF;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;

}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  /* width: 180px; */
  height: 43px;
  line-height: 3;
  overflow: hidden;
}
select {
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.08px;
  color: #6A7E8A;
  width: 140px;
}
/* Arrow */
.select::after {
  content: url('../assets/images/Group 3.svg');
  position: absolute;
  top: 0;
  left: 6rem;
  padding: 0 1em;
  /* background: #34495e; */
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
.change__btn {
  background: #2BDA53;
  border-radius: 3px;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  width: 118px;
  height: 43px;
  color: #FFFFFF;
  border: 0;
}
.searchbox {
  background: #FFFFFF;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;
  width: 300px;
  height: 43px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.08px;
  font-family: 'Roboto', sans-serif;
  color: rgba(106, 126, 138, 0.4);
  padding-left: 10px ;
  margin-left: 1.5rem;
}
.search__icon {
  margin-left: -60px;
  color: #6A7E8A;
}
.searchbox:focus, .change__btn:focus, .search__btn:focus {
  outline: 0;
}
.search__btn {
  border: none;
  background: none;
}
.chev__icon {
  background: #2BDA53;
  border-radius: 50%;
  padding: 5px;
  color: #fff;
  cursor: pointer;
}
.pagination p {
  font-family: 'Roboto', sans-serif;
  color: #013C61;
}
.pagination p span {
  border: 1px solid rgba(1, 60, 97, 0.1);
  box-sizing: border-box;
  border-radius: 3px;
  padding: 5px;
}

/* table__section */
.table__section {
  margin-top: 20px;
}
.table__header th {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: #013C61;
  font-family: 'Roboto', sans-serif;
}
tr td {
  font-size: 16px;
  line-height: 31px;
  letter-spacing: -0.0914285px;
  color: #6A7E8A;
  font-family: 'Roboto', sans-serif;
}

table {
  border-collapse: separate;
  border-spacing: 0 16px;
  border-radius: 10px ;
  overflow: hidden;
}

.table__body {
  background: #FFFFFF;
}
input[type=radio] {
  border-radius: 0.5px;
  border: 1.2px solid rgba(106, 126, 138, 0.4);
  width: 13px;
  height: 13px;
  -webkit-appearance: none;
}

input[type=radio]:checked {
  background: #2BDA53 center center; 
}

input[type=radio]:focus {
  outline-color:#E5E5E5 !important;
}
.trash-btn {
  cursor: pointer;
}
 .form-control:focus {
    border-color: #2BDA53;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
    outline: 0 none;
  }
  .modal-title {
    color: #6A7E8A;
    font-family: 'Roboto', sans-serif;
  }

/* MEDIA QUERIES */
@media only screen and (max-width: 768px) {
  .content__container {
    padding-left: 45px;
    padding-right: 0px;
    margin-top: 0px;
  }
  .sub__header__content {
    flex-direction: column;
    text-align: center;
    padding: 16px;
  }
  .sub__header__content h4 {
    font-size: 26px ;
  }
  .sub__header h4 {
    font-size: 22px;
  }
  .sub__header button {
    width: 120px;
    height: 37px;
  }
  .section__1 {
    display: flex;
    flex-direction: column !important;
  }
  .searchbox {
    margin-left: 0rem;
    margin-top: 15px;
    width: 100%;
  }
  .search__icon {
    margin-top: 15px;
  }
  .table__section {
    margin-top: 0px;
  }
}
</style>
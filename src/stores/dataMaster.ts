import { defineStore } from 'pinia';
import axios from 'axios';

interface Data {
  list: any
  parameter: {
    size: number
    search: string | null
    page: number
  }
  pagination:any
  backpack:any
  createUser:{
    user: string | null
    backpackid: number | null
  }
}

export const Datas = defineStore('datas', {
  state: (): Data => ({
    list: [],
    parameter: {
      size: 5,
      search: null,
      page: 1,
    },
    pagination:[],
    backpack:[12012, 12013, 12014, 12015, 12016],
    createUser:{
      user: null,
      backpackid: null
    }
  }),
  actions: {
    getData() {
      return new Promise((resolve, reject) => {
        const { size, search, page } = this.parameter;
        axios.get("http://localhost:8000/api/master", {
            params: {
              size,
              search,
              page
            }
          })
          .then((res) => {
            resolve(res.data.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    postData(){
      return new Promise((resolve, reject) => {
        const { size, search, page } = this.parameter
        const {user, backpackid} = this.createUser;
        axios.post("http://localhost:8000/api/master", {size, search, page, user, backpackid})
        .then((res) => {
          resolve(res.data.data)
        })
        .catch((err) => {
          reject(err)
        })
      })
    },
    putData(){
      return new Promise((resolve, reject) => {
        const { size, search, page } = this.parameter
        const {user, backpackid} = this.createUser;
        const id = 2
        axios.put("http://localhost:8000/api/master/" + id , {size, search, page, user, backpackid})
        .then((res) => {
          resolve(res.data.data)
        })
        .catch((err) => {
          reject(err)
        })
      })
    },
  },
})

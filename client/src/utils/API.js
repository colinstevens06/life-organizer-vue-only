import axios from "axios"

// import fire from './fire'

// const url = "http://localhost:3000/api/notes"
const baseURL = 'http://localhost:3001'

const API = {
  getNotes: function () {
    return axios.get(baseURL + "/api/notes")
  },

  // getNote: function (id) {
  //   return axios.get("/api/notes/" + id)
  // },

  // getUser: function (id) {
  //   return axios.get("/api/notes/" + id)
  // },

  // addNote: function (note) {
  //   return axios.post("/api/notes", note)
  // },

  // updateNote: function (id, note) {
  //   return axios.put("/api/notes/" + id, note)
  // },

  // deleteNote: function (id) {
  //   return axios.delete("/api/notes/" + id)
  // },

  // createToken: async () => {
  //   const user = fire.auth().currentUser
  //   const token = user && (await user.getIdToken())

  //   const payloadHeader = {
  //     header: {
  //       'Content-Type': 'application/jason',
  //       Authorization: 'Bearer ' + token,
  //     }
  //   }

  //   return payloadHeader
  // }

}

export default API;

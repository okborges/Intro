import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'JonSnow@gmail.com'
    }
  },
  products: [
    {
      id: 1,
      name: 'Chuteira',
      price: 100
    },
    {
      id: 2,
      name: 'Bola',
      price: 200
    },
    {
      id: 3,
      name: 'Meião',
      price: 50
    }
  ]
})

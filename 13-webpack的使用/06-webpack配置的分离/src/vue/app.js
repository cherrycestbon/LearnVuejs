export default {
  template:`
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>`,
  data() {
    return {
      message: '滟滟随波千万里，何处春江无月明。'
    }
  },
  methods: {
    btnClick(){

    }
  }
}
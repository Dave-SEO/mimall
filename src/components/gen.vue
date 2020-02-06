<template>
  <div>
      {{authors}}
      <ul>
          <li v-for="item in authors" :key="item">{{item}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        authors: ''
    };
  },
  watch: {},
  created() {},
  async mounted() {
    let {data: {allAuthors}} =  await axios.get('/authors')
    const author = new Proxy(allAuthors, {
        has(target, key){
          const keys = Reflect.ownKeys(target) // 获取所有对象的key
           window.console.log(keys)
           for (let item of keys) {
                if (target[item].includes(key)){
                    return true
                }
            }
            return false
        }
    })
    
    author[Symbol.iterator] = function * (){
        const all = this
        const keys = Reflect.ownKeys(this).slice(0,-2)
        let values = []
        while (1) {
          if(!values.length){
              if(keys.length){
                  values = [].concat(all[keys[0]])
                   window.console.log('this', values)
                   keys.shift()
                   window.console.log('this1', keys)
                   yield values.shift()
                   window.console.log('this2', keys)
              }else{
                  return false
              }
              } else {
                  window.console.log('else',values)
                  yield values.shift()
              }
              window.console.log(values)
          }
          
        }
        this.authors = author
        window.console.log('111', author)
  },
  methods: {},
  components: {}
};
</script>
<style lang="less" scoped></style>

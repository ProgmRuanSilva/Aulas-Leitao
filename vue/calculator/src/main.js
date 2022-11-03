import Vue from "vue";
import App from './App'

new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App)
    }
}).$mount("#app") //outro jeito para fazer o mesmo el.
//note que se vc mudar no componente será substituida pelo do componente
//render: h => h(App) (mesma forma de fazer sem el e return) linha: 5
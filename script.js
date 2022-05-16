const app = new Vue({
    el: '#root',
    mounted() {
        this.compilatoreArray();
    },
    data: {
        arrayIndirizzi: [],
    },
    methods: {
        compilatoreArray() {
            for(let i = 0; i < 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((datiApi) => {
                    let indirizzo = datiApi.data.response;
                    this.arrayIndirizzi.push(indirizzo);
                })
            }
        },
    },
});

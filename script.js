const app = new Vue(
    {
        el: '#root',
        data: {
            arrayIndirizzi: [],

        },

        methods: {
            compilatoreArray() {
                let arrayInterno = []
                do {
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                        .then((datiApi) => {
                            let indirizzi = datiApi.data.response;
                            arrayInterno.push(indirizzi);
                        })
                } while (arrayInterno.length < 10)
                this.arrayIndirizzi = arrayInterno;

            },


        },
    });

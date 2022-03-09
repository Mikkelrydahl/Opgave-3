Vue.createApp({
    data() {
        return {
            word: null,
            message: null,
            message1: null,
            message2: null,
            message3: null,
            message4: null,
            message5: null,
        }
    },
    methods: {
        Skrivetord() {
            if (this.word == null || "") {
                this.word = "Skriv noget"
            }
            else {
                this.message = this.word
                this.message1 = this.word.toLowerCase()
                this.message2 = this.word.toUpperCase()
                this.message3 = this.word.charAt(0).toUpperCase() + this.word.slice(1)
                this.message4 = this.word.slice(0, -1) + this.word.charAt(this.word.length-1).toUpperCase()
                this.message5 = this.word.split("").reverse().join("")
            }
        },
    }
}).mount("#app")
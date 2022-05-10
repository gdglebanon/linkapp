const { createApp } = Vue
// CODED BY MASHOUN
// v1
createApp({
    data() {
        return {
            spinner:true,
            profile: '',
            api:'https://script.google.com/macros/s/AKfycbxjztrATDw_A8mbI8TAjLlSZgrRcH9YO2EPryhApaax80FgumsHL11TjT6rmRuyUby3tw/exec'
        }
    },
    mounted() {
        fetch(this.api).then(res => res.json()).then(res => {
            this.profile = res
            // console.log(this.profile)
            this.spinner = false;
        })
    }
}).mount('#app')
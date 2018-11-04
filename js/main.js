"use strict";
(function(){

    Vue.component('popup', {
        props: ['type'],
        template: `<div id="type" v-html="type" class="invisible"></div>`
    });

    let app = new Vue({
        el: '#app',
        data: {
            message: 'Hello with Vue',
            cookies: getContent('cookies'),
            age: 'confirm age',
            location: 'display location allow'
        },
        // methods: {
        //     getCookies: getContent('cookies')
        // }
    });

    function getContent(type){
        let content;
        switch (type) {
            case 'cookies':
                content = `A cookie is a small text file containing information that a website transfers to your computer’s hard disk for record-keeping purposes and allows us to analyse our site traffic patterns. It does not contain chocolate chips, you cannot eat it and there is no special hidden jar.`;
                break;
        }
        return content;
    }

})();
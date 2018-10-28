"use strict";
(function(){

    let app = new Vue({
        el: '#app',
        data: {
            message: 'Hello with Vue'
        }
    });

    let cookies = new Vue({
       el: '#cookies',
       data: {
           message: 'A cookie is a small text file containing information that a website transfers to your computer’s hard disk for record-keeping purposes and allows us to analyse our site traffic patterns. It does not contain chocolate chips, you cannot eat it and there is no special hidden jar.'
       }
    });

})();
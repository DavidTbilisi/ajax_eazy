
;var Ajax = (function (){
    function Ajax(obj) {
        console.log('კარგად');
        obj = obj==undefined? {} : obj;
        this.req        = new XMLHttpRequest();
        this.method     = obj.method || "GET";
        this.url        = obj.url || 'https://jsonplaceholder.typicode.com/todos/1';
        this.isSync     = obj.isSync === undefined? '': obj.isSync;
        this.data       = obj.data === undefined? "": obj.data;
        this.headers    = obj.headers === undefined? '': obj.headers;
        this.promise;
        This = this;

        // set handler;
        this.req.onreadystatechange = function () {
            console.log(this.readyState);
            if (this.readyState == 4 && this.status == 200) {
                    // done ოპერაცია დასრულებულია
                    // console.log(this.responseText);
                        var response = this.responseText;
                        This.promise = new Promise(function(resolve, reject){
                            resolve(response)
                        });
                        This.ok();
            }
        };
        // Open connection and send request;
        this.req.open(this.method, this.url);
        // send request
        if (this.method == "POST") {
            this.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            this.req.send(this.data);
        } else {
            if (this.headers != null) {
                for (var i = 0; i< this.headers.length; i++) {
                    var header = this.headers[i].split(',');
                    this.req.setRequestHeader(header[0],header[1]);
                }
            }
            this.req.send();
        }
        Ajax.prototype.ok = function () {
            return this.promise
        }
    }
    return Ajax;
})();
var ajax = new Ajax();

ajax.ok()
    .then(function(myresponse){
        console.log(myresponse)
    });



;var Ajax = (function (){
    function Ajax(obj) {
        obj = obj==undefined? {} : obj;
        this.req        = new XMLHttpRequest();
        this.method     = obj.method || "GET";
        this.url        = obj.url || 'https://jsonplaceholder.typicode.com/todos/1';
        this.isSync     = obj.isSync === undefined? '': obj.isSync;
        this.data       = obj.data === undefined? "": obj.data;
        this.headers    = obj.headers === undefined? '': obj.headers;
        This = this;
        this.ok = new Promise(function(resolve, reject){


        // set handler;
        This.req.onreadystatechange = function () {
            // console.log(this.readyState);
            if (this.readyState == 4 && this.status == 200) {
                // done ოპერაცია დასრულებულია
                var response = JSON.parse(this.responseText);
                resolve(response);
                reject(This.req.status)
            }
        };
        // Open connection and send request;
        This.req.open(This.method, This.url, true);
        // send request
        if (This.method == "POST" || This.method == 'post') {
            This.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var sendData = '';
            Object.keys(This.data).forEach(function (p1, p2, p3) {
                sendData += p1 +"="+ This.data[p1] + "&";
            });
            This.req.send(sendData);
            return this.ok;
        } else {
            if (This.headers != null) {
                for (var i = 0; i< This.headers.length; i++) {
                    var header = This.headers[i].split(',');
                    This.req.setRequestHeader(header[0],header[1]);
                }
            }
            This.req.send();
            return this.ok;
        }
            reject('false');
            });
    }
    return Ajax;
})();
var ajax = new Ajax({
    method:"POST",
    url:"https://httpbin.org/post",
    data:{name:"david",lname:'chincharashvili'}
});


ajax.ok
    .then(function(hand) {console.log(hand)})
    .catch(function(some) {console.log(some)});

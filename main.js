
;var Ajax = (function (){
    function Ajax(obj) {
        obj = obj==undefined? {} : obj;
        this.req        = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        this.method     = obj.method || "GET";
        this.url        = obj.url || 'https://jsonplaceholder.typicode.com/todos/1';
        this.isSync     = obj.isSync === undefined? '': obj.isSync;
        this.data       = obj.data === undefined? "": obj.data;
        this.headers    = obj.headers === undefined? '': obj.headers;
        This = this;
        this.ok = new Promise(function(resolve, reject){
        function setHeaders(req){
            if(This.headers != ''){
                Object.keys(This.headers).forEach(function (p1) {
                    req.setRequestHeader(p1+'',This.headers[p1]+'');
                })
            }
        }
        function dataConverted() {
            var sendData = This.method == 'POST'||This.method == 'post' ?'':'?';
            Object.keys(This.data).forEach(function (p1) {
                sendData += p1 +"="+ This.data[p1] + "&";
            });
            return sendData = sendData.slice(0,-1);
        }
        // set handler;
        This.req.onreadystatechange = function () {
            // console.log(this.readyState);
            if (this.readyState == 4 && this.status == 200) {
                // done ოპერაცია დასრულებულია
                try{
                    var response = this.responseText;
                } catch (e){
                    console.warn(e);
                }
                resolve(response);
                reject(This.req.status)
            }
        };

        // send request
        if (This.method == "POST" || This.method == 'post') {
            This.req.open(This.method, This.url, true);
            setHeaders(This.req);
            This.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            This.req.send(dataConverted());
            return this.ok;
        } else {
            if (This.data != undefined && This.data != '' && This.data != null) {
                sendData = '' || dataConverted();
            } else {
                sendData = '';
            }
            This.req.open(This.method, This.url+sendData, true);
            setHeaders(This.req);
            This.req.send(sendData);
            return this.ok;
        }
            // reject('false');
            });
    }
    return Ajax;
})();
//
// var ajax = new Ajax({
//     url:location.href,
//     method:'post',
//     data:{
//         name:'john',
//         lname:'doe'
//     }
// });
//
//
// ajax.ok
//     .then(function(data) {console.log(data)})
//     .catch(function(error) {console.log(error)});

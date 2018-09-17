# ajax_eazy
http requests
### USAGE EXAMPLES:

**define**
```js
var ajax = new Ajax({url:location.href});
```
**usage**  
```js
ajax.ok  
    .then(function(data) {console.log(data)})  
    .catch(function(error) {console.log(error)});
```
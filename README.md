# ajax_eazy
http requests
## USAGE EXAMPLES:

**define**
```js
var ajax = new Ajax({url:location.href});
```
**use**  
```js
ajax.ok  
    .then(function(data) {console.log(data)})  
    .catch(function(error) {console.log(error)});
``` 
## POST EXAMPLE
```js
var ajax = new Ajax({
    url:location.href,
    method:'post',
    data:{
        name:'john',
        lname:'doe'
    }
});


ajax.ok
    .then(function(data) {console.log(data)})
    .catch(function(error) {console.log(error)});
``` 

## GET EXAMPLE (with data)
```js
var ajax = new Ajax({
    url:location.href,
    data:{
        name:'john',
        lname:'doe'
    }
});


ajax.ok
    .then(function(data) {console.log(data)})
    .catch(function(error) {console.log(error)});
``` 
## GET EXAMPLE (without data)
```js
var ajax = new Ajax({
    url:location.href
});


ajax.ok
    .then(function(data) {console.log(data)})
    .catch(function(error) {console.log(error)});
``` 

## PARAMS
**url**
------  
__default:"https://jsonplaceholder.typicode.com/todos/1"__
```js
var ajax = new Ajax({url:location.href});
```
**methods**
------  
__default:get__
```js
var ajax = new Ajax({method:"post"});
```
**data**
------  
__default:""__  

**type: object**
```js
var ajax = new Ajax({data: {} });
```

**headers**
------  
__default:""__  

**type: object**
```js
var ajax = new Ajax({headers: {} });
```
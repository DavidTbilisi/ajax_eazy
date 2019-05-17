
# ajax_eazy

*http requests*


just for _GET_ and _POST_ requests.
- Pure JavaScript
- Easy to read code
- Easy to fork 


## USAGE EXAMPLES:

**DEFINE REQUEST PARAMS**

```js
// only required parameter is url
var  ajax = new  Ajax({url:location.href});

```

**BIND FUNCTIONS TO REQUEST**

```js
// if url is correct and you have data
ajax.then(function(data) {console.log(data)})
// if you get error
.catch(function(error) {console.log(error)});

```

## POST EXAMPLE

```js

var  getData = new  Ajax({
	url:location.href,
	method:'post',
	data:{
		name:'john',
		lname:'doe'
	}
});

  
  

getData.then(function(data) {console.log(data)})

.catch(function(error) {console.log(error)});

```

  

## GET EXAMPLE (with data)

```js
var  search = new  Ajax({
	url:location.href,
	data:{
			name:'john',
			lname:'doe'
		}
	});
search.then(function(data) {console.log(data)})

.catch(function(error) {console.log(error)});
  ```

## GET EXAMPLE (without data)

```js
var  ajax = new  Ajax({url:location.href});
  

ajax.then(function(data) {console.log(data)})

.catch(function(error) {console.log(error)});
```

  

## PARAMS

**url**

------

__default : "https://jsonplaceholder.typicode.com/todos/1"__

```js
var  ajax = new  Ajax();
```

**method**

------

__default : GET__

```js
// for POST method you need to specify it;
var  ajax = new  Ajax({method:"post"});
```

**data**

------

__default:""__

  

**type : object**

```js
var  ajax = new  Ajax({data: {} });
```

  

**headers**

------

__default:""__
**type: object**

```js
// in case of GET parameter 
// 'Content-type', 'application/x-www-form-urlencoded
// is defult
// you can specify as many headers as you wish
var  ajax = new  Ajax({headers: {} });
```
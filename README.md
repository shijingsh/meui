
## 模块化


```js
//meui模块的定义
meui.define([mods], function(exports){
  
  //……
  
  exports('mod', api);
});  
 
//meui模块的使用
meui.use(['mod1', 'mod2'], function(args){
  var mod = meui.mod1;
  
  //……
  
});    
```

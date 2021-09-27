# Various

RequireJS(AMD) + React

https://variousjs.github.io/various/


### error type

| Type | Description | Reloadable
| --- | ----------- | ---
| LOADING_ERROR | Component loading error | yes |
| DEPENDENCIES_LOADING_ERROR | Component Dependencies loading error | yes |
| NOT_DEFINED | Component not defined in configuration | no |
| INVALID_COMPONENT | Invalid component | no |
| SCRIPT_ERROR | Component script error | yes |
| ROUTER_ERROR | React-Router catch error | no |
| CONTAINER_ERROR | Global container error | no |

### 注意

requirejs 问题：不能同一个组件（同一个 url）多个名字定义，会造成加载超时

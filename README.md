#### 切换页面布局  
通过不同claaName控制layout文件中的index，不同页面之间的内容分开写。通过读取pathname判断页面
```
location.pathname
```  
同时，使用<Layout>标签包裹布局内容
* 页面边栏布局创建单独组件，之后直接再布局栏中引入，不要在布局栏中编写组件。class组件中，创造函数不同特意写出funct/const ，但是在函数组件中,必须使用function或者const创造函数

#### 解构赋值 

const {取出键名1, 取出键名2}=取出的位置
解构赋值相当于将之前的内容取出来，开一个同名的盒子
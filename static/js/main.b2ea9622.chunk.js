(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},19:function(e,t,i){},20:function(e,t,i){},21:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){"use strict";i.r(t);var a=i(10),l=i.n(a),n=(i(18),i(13)),s=i(4),r=i(5),d=i(8),m=i(7),o=i(1),c=i.n(o),b=(i(19),i(2)),h=(i(20),i(21),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,l=e.imdbUrl;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:a,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:t})})]}),Object(h.jsxs)("div",{className:"content",children:[i,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:l,children:"IMDB"})]})]})]})},u=function(e){var t=e.movies;return Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},v=i(6),g=(i(23),i(3)),f=i.n(g),p=function(e){var t=e.field;return Object(h.jsx)("div",{className:"form__error",children:"Incorrect ".concat(t)})},O=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(s.a)(this,i);for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={newMovie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},validation:!1,isImgUrlValid:null,isImdbUrlValid:null,isTitleValid:null,isImdbIdValid:null},e.validation=function(t){var i=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,a=e.state.newMovie,l=a.imgUrl,n=a.imdbUrl,s=a.title,r=a.imdbId;"imgUrl"===t&&(i.test(l)?e.setState({isImgUrlValid:!0}):e.setState({isImgUrlValid:!1}));"imdbUrl"===t&&(i.test(n)?e.setState({isImdbUrlValid:!0}):e.setState({isImdbUrlValid:!1}));"title"===t&&(s.trim().length?e.setState({isTitleValid:!0}):e.setState({isTitleValid:!1})),"imdbId"===t&&(r.trim().length?e.setState({isImdbIdValid:!0}):e.setState({isImdbIdValid:!1})),e.setState((function(e){return{validation:e.isImdbUrlValid&&e.isImgUrlValid&&e.isTitleValid&&e.isImdbIdValid}}))},e.movieCreate=function(){var t=e.state.newMovie,i=t.title,a=t.description,l=t.imgUrl,n=t.imdbUrl,s=t.imdbId;e.props.addMovie({title:i.trim(),description:a.trim().length>0?a:"No description",imgUrl:l.trim(),imdbUrl:n.trim(),imdbId:s.trim()}),e.clearState()},e.handleChange=function(t){var i=t.target,a=i.name,l=i.value;e.setState((function(e){return{newMovie:Object(b.a)(Object(b.a)({},e.newMovie),{},Object(v.a)({},a,l))}}))},e.clearState=function(){e.setState({newMovie:{description:"",imgUrl:"",imdbUrl:"",imdbId:"",title:""},validation:!1,isImgUrlValid:null,isImdbUrlValid:null,isTitleValid:null,isImdbIdValid:null})},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this,t=this.state,i=!1===t.isImdbUrlValid,a=!1===t.isImgUrlValid,l=!1===t.isImdbIdValid,n=!1===t.isTitleValid;return Object(h.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.movieCreate()},children:[Object(h.jsxs)("label",{htmlFor:"title",className:"form__label",children:["Title:"," ",Object(h.jsx)("input",{required:!0,className:f()("form__field",{form__invalid:n}),type:"text",name:"title",id:"title",value:this.state.newMovie.title,onChange:this.handleChange,onBlur:function(){e.validation("title")}}),n&&Object(h.jsx)(p,{field:"title"})]}),Object(h.jsxs)("label",{htmlFor:"description",className:"form__label",children:["Description:"," ",Object(h.jsx)("input",{className:"form__field",type:"text",name:"description",id:"description",onChange:this.handleChange,value:this.state.newMovie.description})]}),Object(h.jsxs)("label",{htmlFor:"imgUrl",className:"form__label",children:["imgUrl:"," ",Object(h.jsx)("input",{required:!0,className:f()("form__field",{form__invalid:a}),type:"text",name:"imgUrl",id:"imgUrl",value:this.state.newMovie.imgUrl,onChange:this.handleChange,onBlur:function(){e.validation("imgUrl")}}),a&&Object(h.jsx)(p,{field:"link"})]}),Object(h.jsxs)("label",{htmlFor:"imdbUrl",className:"form__label",children:["imdbUrl:"," ",Object(h.jsx)("input",{required:!0,className:f()("form__field",{form__invalid:i}),type:"text",name:"imdbUrl",id:"imdbUrl",value:this.state.newMovie.imdbUrl,onChange:this.handleChange,onBlur:function(){e.validation("imdbUrl")}}),i&&Object(h.jsx)(p,{field:"link"})]}),Object(h.jsxs)("label",{htmlFor:"imdbId",className:"form__label",children:["imdbId:"," ",Object(h.jsx)("input",{required:!0,className:f()("form__field",{form__invalid:l}),type:"text",name:"imdbId",id:"imdbId",value:this.state.newMovie.imdbId,onChange:this.handleChange,onBlur:function(){e.validation("imdbId")}}),l&&Object(h.jsx)(p,{field:"imdbId"})]}),Object(h.jsx)("button",{type:"submit",disabled:!this.state.validation,children:"Add movie"})]})}}]),i}(o.Component),w=i(12),M=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(s.a)(this,i);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={movies:w},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(n.a)(e.movies),[t])}}))},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"page-content",children:Object(h.jsx)(u,{movies:e})}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(O,{addMovie:this.addMovie})})]})}}]),i}(c.a.Component);l.a.render(Object(h.jsx)(M,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b2ea9622.chunk.js.map
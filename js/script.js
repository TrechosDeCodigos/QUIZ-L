const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"imagens/letraL",
               structure:[
                           {question:"L",options:['L.jpg','L.jpg','L.jpg','L.jpg'],key:3},

                           {question:"L",options:['L.jpg','L.jpg','L.jpg' ,'L.jpg'],key:2},

                           {question:"L",options:['L.jpg','L.jpg','L.jpg','L.jpg'],key:0},
 
                           {question:"L",options:['L.jpg','L.jpg','L.jpg','L.jpg'],key:1},
                     
                           {question:"L",options:['L.jpg' ,'L.jpg','L.jpg','L.jpg'],key:0}

                          ]
              },
     
        { 
               type:" PALAVRAS ",
               msg:" ",
               path:"imagens/letraL",
               structure:[
                           {question:"LOCOMOTIVA",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LANCHE",options:['LANCHE.jpg','LIVRO.jpg','LANTERNA.jpg','LAREIRA.jpg'],key:0},
                     
                           {question:"LEÃO",options:['LIMAO.jpg','LEITE.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                           
                           {question:"LAMPADA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LAGOA.jpg','LAMPADA.jpg'],key:3},


                           {question:"LANTERNA",options:['LAGARTIXA.jpg','LIMPEZA.jpg','LOUSA.jpg' ,'LANTERNA.jpg'],key:3},

                           {question:"LAREIRA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LARANJA",options:['L.jpg' ,'LARANJA.jpg','L.jpg','L.jpg'],key:1},
                           
                           {question:"LAGOSTA",options:['LAGOSTA.jpg','L.jpg','L.jpg','L.jpg'],key:0},


                           {question:"LAGO",options:['L.jpg','L.jpg','L.jpg','LAGOA.jpg'],key:3},
                           
                           {question:"LASANHA",options:['L.jpg','LASANHA.jpg','L.jpg', 'L.jpg',],key:1},

                           {question:"LÁPIS",options:['LAPIS.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LIMPEZA",options:['L.jpg','L.jpg','LIMPEZA.jpg','L.jpg'],key:2},


                           {question:"LAGARTIXA",options:['L.jpg','LAGARTIXA.jpg','L.jpg','L.jpg'],key:1},

                           {question:"LEITE",options:['L.jpg','L.jpg','LEITE.jpg','L.jpg'],key:2},

                           {question:"LEOPARDO",options:['L.jpg','L.jpg','L.jpg' ,'LEOPARDO.jpg',],key:3},

                           {question:"LEQUE ",options:['LEQUE.jpg','L.jpg','L.jpg','L.jpg'],key:0},


                           {question:"LEOA",options:['L.jpg','L.jpg','LEOA.jpg','L.jpg',],key:2},

                           {question:"LENHA",options:['LENHA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LEITÃO",options:['L.jpg','L.jpg','L.jpg','LEITÃO.jpg'],key:3},

                           {question:"LESMA",options:['L.jpg','LESMA.jpg','L.jpg','L.jpg'],key:1},


                           {question:"LUNETA",  options:['L.jpg','L.jpg','LUNETA.jpg', 'L.jpg'],key:2},                     

                           {question:"LIXEIRA",options:['L.jpg','LIXEIRA.jpg','L.jpg', 'L.jpg'],key:1},

                           {question:"LIMONADA",options:['LIMONADA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LIQUIDIFICADOR",options:['L.jpg','L.jpg','L.jpg','LIQUIDIFICADOR.jpg'],key:3},


                           {question:"LIVRARIA",options:['L.jpg','LIVRARIA.jpg','L.jpg','L.jpg'],key:1},
                             
                           {question:"LINGUA",options:['L.jpg','L.jpg','LINGUA.jpg','L.jpg'],key:2},

                           {question:"LOUSA",options:['LOUSA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LOBO",options: ['L.jpg', 'L.jpg','L.jpg','LOBO.jpg'],key:3},


                           {question:"LIMOSINE",options:['LIMOSINE.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LONTRA",options:['L.jpg','LONTRA.jpg','L.jpg','L.jpg'],key:1},

                           {question:"LOUÇA",options:['L.jpg','L.jpg','L.jpg','LOUCA.jpg'],key:3},

                           {question:"LOJA",options:['L.jpg','L.jpg','LOJA.jpg' ,'L.jpg'],key:2},


                           {question:"LOBISOMEM",options:['L.jpg','L.jpg','L.jpg', 'LOBISOMEM.jpg'],key:3},

                           {question:"LUA",options:['L.jpg','L.jpg','LUA.jpg','L.jpg'],key:2},

                           {question:"LUNETA",options:['LUNETA.jpg','L.jpg','L.jpg','L.jpg'],key:0},

                           {question:"LUTA",options:['L.jpg','LUTA.jpg','L.jpg','L.jpg' ],key:1},


                           {question:"LUVA",options:['L.jpg','L.jpg','LUVA.jpg','L.jpg'],key:2},
                           
                           {question:"LAVANDERIA",options:['LAVANDERIA.jpg' ,'L.jpg','L.jpg', 'L.jpg'],key:0},

                           {question:"LULA",options:['L.jpg' ,'L.jpg','L.jpg', 'LULA.jpg'],key:3},

                           {question:"LOCOMOTIVA",options:['L.jpg','LOCOMOTIVA.jpg','L.jpg','L.jpg'],key:1},

                           {question:"LUSTRE",options:['L.jpg','LUSTRE.jpg','L.jpg','L.jpg'],key:0}

                              

                        ]
              }

    ] 


// create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();

                
                
                
              

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
               var options=this.optionEle.children;
               for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }
           
           
           
           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              if (this.score > this.quizSize/2){
              this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
           
  
            

              }
               
             
           //Confetti começa aqui
             var confetti={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};
             !function(){confetti.start=s,confetti.stop=w,confetti.toggle=function(){e?w():s()},confetti.pause=u,confetti.resume=m,confetti.togglePause=function(){i?m():u()},confetti.isPaused=function(){return i},confetti.remove=function(){stop(),i=!1,a=[]},confetti.isRunning=function(){return e};
             var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,n=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],e=!1,i=!1,o=Date.now(),a=[],r=0,l=null;
             function d(t,e,i){return t.color=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.color2=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.x=Math.random()*e,t.y=Math.random()*i-i,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function u(){i=!0}function m(){i=!1,c()}function c(){if(!i)if(0===a.length)l.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var n=Date.now(),u=n-o;
             (!t||u>confetti.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,n=window.innerWidth,i=window.innerHeight;r+=.01;
             for(var o=0;o<a.length;o++)t=a[o],!e&&t.y<-15?t.y=i+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(r)-.5,t.y+=.5*(Math.cos(r)+t.diameter+confetti.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>n+20||t.x<-20||t.y>i)&&(e&&a.length<=confetti.maxCount?d(t,n,i):(a.splice(o,1),o--))}(),function(t){for(var n,e,i,o,r=0;r<a.length;r++){if(n=a[r],t.beginPath(),t.lineWidth=n.diameter,i=n.x+n.tilt,e=i+n.diameter/2,o=n.y+n.tilt+n.diameter/2,confetti.gradient){var l=t.createLinearGradient(e,n.y,i,o);l.addColorStop("0",n.color),l.addColorStop("1.0",n.color2),t.strokeStyle=l}else t.strokeStyle=n.color;
             t.moveTo(e,n.y),t.lineTo(i,o),t.stroke()}}(l),o=n-u%confetti.frameInterval),requestAnimationFrame(c)}}function s(t,n,o){var r=window.innerWidth,u=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,confetti.frameInterval)};
             var m=document.getElementById("confetti-canvas");
             null===m?((m=document.createElement("canvas")).setAttribute("id","confetti-canvas"),m.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(m),m.width=r,m.height=u,window.addEventListener("resize",function(){m.width=window.innerWidth,m.height=window.innerHeight},!0),l=m.getContext("2d")):null===l&&(l=m.getContext("2d"));
             var s=confetti.maxCount;
             if(n)if(o)if(n==o)s=a.length+o;
             else{if(n>o){var f=n;
             n=o,o=f}s=a.length+(Math.random()*(o-n)+n|0)}else s=a.length+n;
             else o&&(s=a.length+o);
             for(;a.length<s;)a.push(d({},r,u));
             e=!0,i=!1,c(),t&&window.setTimeout(w,t)}function w(){e=!1}}();
              
       
       
// custom js        
  const startit = () => {
   setTimeout(function() {
    confetti.start();
   },1000);
  };
 // Stops
   const stopit = () => {
       setTimeout(function(){
         confetti.stop();
       }, 5000);
     };
     //playing start
     startit();
     //stoping it
     stopit();
              
       
           
       }


      //28-06-2021 - 2 Tentativa - SUMIU TUDO
      
 
     }
    // add 28 - 06 - 2021 - APARECEU DESTE A PRIMEIRA PÁGINA
      

       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

     

   
   
 

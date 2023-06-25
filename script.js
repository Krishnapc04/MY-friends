(function (){
    const friendimg=document.getElementById('cardimg')
    const friendname=document.getElementById('name')
    const finfo=document.getElementById('info')
    const btn=document.querySelectorAll('.btn');
    // but.backgroungcolor='red'
    let index=0;
const friends=[];

function friend(img,fname,info){
    this.img=img;
    this.fname=fname;
    this.info=info;
}
 function makefriend(img,fname,info){
    let photo=`img/${img}.jpg`
    let myfriend=new friend(photo,fname,info)
    friends.push(myfriend);
 }

 makefriend(0,'KRISHNA',`Krishna is boy from Nanded. He loves adventure.His department is Metallurgicsl and material engineering. He lives in gokhale hall of residence. He is pursuing 4 yr course. He is free fire lover `)
 makefriend(1,'PRANAY','Pranay is boy from Degloor. He loves to listen songs.His department is Mechanical Engineering. He lives in Madan moahn malviya hall of residence. He is pursuing 4 yr course. He is Pub-G lover')
 makefriend(2,'SAYLI','Sayli is girl from Nanded. He loves computing.His department is Computer science. He lives in SNVH. He is pursuing 4 yr course. He is nothing lover')
 makefriend(3,'SANKET','Sanket is boy from Nanded. He loves adventure.His department is Mechanicalengineering. He lives in Vidya sagar hall of residence. He is pursuing 4 yr course. He is Solid works lover')
 makefriend(4,'VAIBHAV','Vaibhav is boy from Gondia. He loves adventure.His department is Metallurgicsl and material engineering. He lives in MS hall of residence. He is pursuing 4 yr course. He is free fire lover')
 makefriend(5,'KRISHNA PAIKINE','Krishna is boy from Pusad. He loves adventure.His department is Electrical engineering. He lives in gokhale hall of residence. He is pursuing 4 yr course. He is free fire lover')
 makefriend(6,'SOHAN','Sohan is boy from Latur. He loves adventure.His department is minning engineering. He lives in MMM hall of residence. He is pursuing 5 yr course. He is COD lover')
 makefriend(7,'JAYESH','Jayesh is boy from MAlegaon. He loves adventure.His department is Agriculture  engineering. He lives in MMM hall of residence. He is pursuing 4 yr course. He is Nothing lover')
 makefriend(8,'PRATHEMESH','Prathemnesh is boy from Washim. He loves nothing.His department is Electrical engineering. He lives in vidyasagar hall of residence. He is pursuing 4 yr course. He is free fire lover')


        let prevbtn=document.getElementById('prevbtn');
        let nextbtn=document.getElementById('nextbtn')
        prevbtn.addEventListener('click',()=>{
            if(index===0){
                index=friends.length;
            }
            index--
            console.log("i ma previous")
             friendimg.src=friends[index].img
             friendname.textContent=friends[index].fname
             finfo.textContent=friends[index].info
            
        })
        nextbtn.addEventListener('click',()=>{
            index++;
            if(index===friends.length){
                index=0;
            }
            console.log("i ma next")
             friendimg.src=friends[index].img
             friendname.textContent=friends[index].fname
             finfo.textContent=friends[index].info
        })
})()


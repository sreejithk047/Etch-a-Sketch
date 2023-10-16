const container=document.querySelector('.container');
let square=[];
for(let i=0;i<16;i++)
{     
     square[i] = [];     
     for(let j=0;j<16;j++)
     {  square[i][j]=document.createElement('div');
        container.appendChild(square[i][j]);
        square[i][j].classList.add('square'); 

     }

}   

const click=document.querySelectorAll('.square');
click.forEach(box=>{
    box.addEventListener('click',()=>{

    });

});
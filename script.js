function draw()
{
const container=document.querySelector('.container');
let square=[];
let clicked=0;
let side=16;

function creategrid()
{
    for(let i=0;i<side;i++)
    {     
        square[i] = [];     
        for(let j=0;j<side;j++)
        {  square[i][j]=document.createElement('div');
            container.appendChild(square[i][j]);
            square[i][j].classList.add('square'); 
            square[i][j].addEventListener('click', () => {
                if(clicked==1)
                    clicked=0;
                else
                    clicked=1;

                square[i][j].classList.toggle('color');
            
            });  

            square[i][j].addEventListener('mouseover',()=>
            {   if(clicked==1)
                { square[i][j].classList.add('color');}
            });  

            
        }

    }   
}   

creategrid(); 
const reset=document.querySelector('#reset');
reset.addEventListener('click',()=>
{   for(let i=0;i<side;i++)
    {    
        for(let j=0;j<side;j++)
        {   
            square[i][j].classList.remove('color');
        }
    }
    clicked=0;     
});

const resize=document.querySelector('#resize');
resize.addEventListener('click',()=>
{  side=prompt(" number of squares per side for the new grid?");     
   container.innerHTML='';
   creategrid(); 
});

}

draw();


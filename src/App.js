import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import {add,sub,multiply,div} from './components/calc'
import Cards from './components/cards';
import "./index.css";
import Sdata from './components/sdata';
import Adata from './components/Adata';
import Netflix from './components/Netflix';
import Amazon from './components/amazon';



// function select(){
// let x=document.getElementsByClassName('e')

//  let favseries=x.value;
// }
const favseries="netflix"
// const ncard=(val)=>{
   
//   if(val.series==='netflix'){
//     return( 
//  <Cards 
//  key={val.id}
//  imgsrc={val.imgsrc} 
//  title={val.title} 
//  sname={val.sname} 
//  link={val.link}
// />
//     )
//   }


// }


function App() {
  
  //   // <Heading/>
  //   let curDate=new Date(2022,5,23,2);
  //   curDate=curDate.getHours();
    
  //   let greeting='';
    
  //   const cssStyle={
  //     // color:'green'
  //    }
    
  //   if(curDate>=1 && curDate<12){
  //   greeting='Good Morning';
  //   cssStyle.color='green';
  //   }
  //   else if(curDate>=12 && curDate<20){
  //     greeting="Good Afternoon";
  //     cssStyle.color='orange';
  //   }else{
  //     greeting="good night";
  //     cssStyle.color='yellow';
  //   }
  //  
// return(
//   <>
//   <h1>addition of two number {add(5,3)}</h1>
//   <h1>subtraction of two number {sub(5,3)}</h1>
//   <h1>multiplication of two number {multiply(5,3)}</h1>
//   <h1>division of two number {div(5,3)}</h1>
  
//   </>
// )

//--------------------------------------------

//  function ncard(val){
//    console.log(val)
//       return(
//         <Cards 
//         key={val.id}
//         imgsrc={val.imgsrc} 
//         title={val.title} 
//         sname={val.sname}  
//         link={val.link}/>
//       )
// }
 
return(   
  <>
  <h1 className='heading_style'>this is netflix series</h1>
  {/* <button className="button" value='e' onclick='select()'>NETFLIX</button>

  <button className="button" value='e' onclick='select()'>AMAZON</button>
   */}

  {favseries==="netflix"?<Netflix/> :<Amazon/>}

  {/* {Sdata.map((val,index)=>{
    return(
      <Cards 
              key={val.id}
              imgsrc={val.imgsrc} 
              title={val.title} 
              sname={val.sname} 
              link={val.link}
      />
    )
  })} */}

  {/* <Cards 
  imgsrc={sdata[0].imgsrc} 
  title={sdata[0].title} 
  sname={sdata[0].sname} 
  link={sdata[0].link}/>

  <Cards 
  imgsrc={sdata[1].imgsrc} 
  title={sdata[1].title} 
  sname={sdata[1].sname} 
  link={sdata[1].link}/>
  
  <Cards 
  imgsrc={sdata[2].imgsrc} 
  title={sdata[2].title} 
  sname={sdata[2].sname} 
  link={sdata[2].link}/> */}
  
 

</>

)
}


export default App;

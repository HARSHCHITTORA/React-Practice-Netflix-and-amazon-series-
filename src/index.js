import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//---------------------------------------------------------------------------

// let curDate=new Date(2022,5,23,2);
// curDate=curDate.getHours();

// let greeting='';

// const cssStyle={
//   // color:'green'
//  }

// if(curDate>=1 && curDate<12){
// greeting='Good Morning';
// cssStyle.color='green';
// }
// else if(curDate>=12 && curDate<20){
//   greeting="Good Afternoon";
//   cssStyle.color='orange';
// }else{
//   greeting="good night";
//   cssStyle.color='yellow';
// }


// ReactDOM.render(
//   <>

//   <h1>hello sif,<span style={cssStyle}>{greeting}</span></h1>
//   </>
//   ,document.getElementById('root')
// )

//-----------------------------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
<App/>
  </>

)

  
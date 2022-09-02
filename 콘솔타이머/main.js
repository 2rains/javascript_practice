let hour = 16;
let min = 30;
let sec = 0;
let id;

/*const timerId = setInterval(()=>{
    console.log(`${hour}:${min}:${sec}`);
    sec++;
    if(60<=sec){
        sec = 0;
        min++;
        if(60<min){
            min = 0;
            hour++;
        }
    }
},1);*/

//setTimeout(()=>clearInterval(timerId),1200);

id = setInterval(() => {
  if (sec < 10) {
    // 만약에 초가 10보다 작거나 같으면
    console.log(`${hour}:${min}:0${sec}`);
    sec++;
  } else {
    // 아니면
    console.log(`${hour}:${min}:${sec}`);
    sec++;
  }
  //   console.log(`${hour}:${min}:${sec}`);
  //   sec++;
  if (60 <= sec) {
    sec = 0;
    min++;
    if (60 < min) {
      min = 0;
      hour++;
    }
  }
}, 1 * 100);

setTimeout(() => {
  console.log("시계 종료");
  clearInterval(id);
}, 10 * 1000);

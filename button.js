let startTime;
let updatedTime;
let difference;
let timerId;
let count=0;//カウンタ数量
let running = false;//ストップウオッチ稼働中
let tgl = true;//キーバッファ防止

//時間計測中
function updateTime() {

    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    document.getElementById('nowtime').textContent = difference+' mSec';
}

//キー離す
document.addEventListener('keyup', function(event) {
    const counter1=document.getElementById("counter1");
    const counter2=document.getElementById("counter2");
    const counter3=document.getElementById("counter3");  
    const Checkd1=counter1.checked;
    const Checkd2=counter2.checked;
    const Checkd3=counter3.checked;
    
    console.log("KeyUp:"+new Date().getTime())
    tgl=true;

    if(Checkd1===true){
        //処理無し
    }else if(Checkd2 ===true){
        clearInterval(timerId);
    }else if(Checkd3 ===true){
        //処理無し
    }

});

//キー押下
document.addEventListener('keydown', function(event) {
    
    const startKey=document.getElementById("input");
    const counter1=document.getElementById("counter1");
    const counter2=document.getElementById("counter2");
    const counter3=document.getElementById("counter3");  
    const Checkd1=counter1.checked;
    const Checkd2=counter2.checked;
    const Checkd3=counter3.checked;
    const keyCode = event.keyCode;
    const keyName = event.key;

    document.getElementById('output1').textContent = "Key Pressed: "+keyName;
    document.getElementById('output2').textContent = "(KeyCode: "+keyCode+")";
    
    //コードが無い場合は登録
    if(startKey.value===""){
        startKey.value=keyCode
        return;
    }

    //カウンター
    if(keyCode==startKey.value){
        //ストップウオッチ
        if(Checkd1===true){
            if(running===true　&& tgl===true){
                running = false;
                clearInterval(timerId);
                console.log("End:"+new Date().getTime())
            }else if(running===false && tgl===true){
                running=true;
                tgl=false;
                startTime = new Date().getTime() 
                timerId = setInterval(updateTime, 10);
                console.log("Start:"+new Date().getTime())
            } 

        //パルス幅計測
        }else if(Checkd2===true){
            if(tgl===true){
                tgl=false
                startTime = new Date().getTime() 
                timerId = setInterval(updateTime, 10);
            }
        //カウンタ    
        }else if(Checkd3===true){
            if(tgl===true){
                count=count+1;
                tgl=false
                document.getElementById('nowtime').textContent = count+" Counts"
            }
        }
    }
});

//コードリセット
document.getElementById('Button1').addEventListener('click', function() {
    const startKey=document.getElementById("input");
    document.getElementById('nowtime').textContent = '-----';
    startKey.value=null
    count=0;
});


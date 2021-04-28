var oBegin = document.getElementById('begin'),
    oTimeInp = document.getElementById('timeInp'),
    oCountInp = document.getElementById('countInp'),
    oScoreInp = document.getElementById('scoreInp'),
    oMsgScore = document.getElementById('msg_score'),
    oMsg0=document.getElementById('msg0'),
    oMsg = document.getElementById('msg'),
    aImg = document.getElementsByTagName('img'),
    src1 = "./images/mouse2.png",
    src2 = "./images/mouse.png",
    time = 30,
    count = 0,
    score = 0;


oBegin.onclick = function () {
    function init() { //初始化
        oMsg.style.display = 'none';
        time = 30,
            count = 0,
            score = 0;
        oCountInp.value = 0,
            oScoreInp.value = 0,
            oBegin.value = "START",
            timer2 = null;
    }
    init();

    oMsg0.style.display='block';
    setTimeout(function () {
        oMsg0.style.display='none'; 
    }, 1200)

    
    timer2 = setInterval(showMouse, 1200);

    function showMouse() {
        var i = Math.round(Math.random() * 15) //获取0~15的随机数

        aImg[i].style.display = 'block'; //随机显示一张地鼠图
        setTimeout(function () {
            aImg[i].style.display = 'none'; //0.8秒延迟后地鼠消失
        }, 800)

        setTimeout(function () {
            aImg[i].setAttribute("src", src2); //显示图片前1毫秒重置地鼠状态
            // console.log(aImg[i].getAttribute("src"));
        }, 1)
    }

    function timing() { //计时器
        var timer1 = setInterval(function () {
            time--;
            oTimeInp.value = time;

            if (time == 0) { //关闭计时器，显示得分块
                clearInterval(timer1);
                clearInterval(timer2);
                setTimeout(function () {
                    oMsgScore.innerHTML = score;
                    oMsg.style.display = 'block';
                    oBegin.value = "RESTART";
                }, 2000)

                // clearInterval(timer1);
                // clearInterval(timer2);
                // oMsgScore.innerHTML = score;
                // oMsg.style.display = 'block';
                // oBegin.value = "重新开始";
            }
        }, 1000);
    }
    timing();

    for (var i = 0; i < aImg.length; i++) {
        aImg[i].onclick = function () {
            if (this.style.display === 'block') {
                $(this).attr("src", src1); //修改地鼠状态
                count++; //击打成功个数累加
                score += 5; //得分累加
                oCountInp.value = count;
                oScoreInp.value = score;
            }
        }
    }
};
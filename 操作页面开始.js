function ks(){
    k=0;
    while (k===0){
        k=Math.floor(Math.random()*4);
        if (k===0){
            gaw();
            setTimeout("ha()",300);
            setTimeout("gcw()",300);
            setTimeout("hc()",600);
            setTimeout("a=(a+c)%10",600);
            setTimeout("document.getElementById('a').innerHTML=a",600);
            setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
            setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
            break
        }
        if (k===1){
            gaw();
            setTimeout("ha()",300);
            setTimeout("gdw()",300);
            setTimeout("hd()",600);
            setTimeout("a=(a+d)%10",600);
            setTimeout("document.getElementById('a').innerHTML=a",600);
            setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
            setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
            break
        }
        if (k===2){
            gbw();
            setTimeout("hb()",300);
            setTimeout("gcw()",300);
            setTimeout("hc()",600);
            setTimeout("b=(b+c)%10",600);
            setTimeout("document.getElementById('b').innerHTML=b",600);
            setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
            setTimeout("document.getElementById('four').innerHTML=d+'碰'+b",600);
            break
        }
        if (k===4){
            gbw();
            setTimeout("hb()",300);
            setTimeout("gdw()",300);
            setTimeout("hd()",600);
            setTimeout("b=(b+d)%10",600);
            setTimeout("document.getElementById('b').innerHTML=b",600);
            setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
            setTimeout("document.getElementById('four').innerHTML=d+'碰'+b",600);
            break
        }
        var k=0;
    }
    jg1();
    document.getElementById("a").innerHTML=a;
    document.getElementById("b").innerHTML=b;
    document.getElementById("c").innerHTML=c;
    document.getElementById("d").innerHTML=d;
    setTimeout("jg2()",600);
}
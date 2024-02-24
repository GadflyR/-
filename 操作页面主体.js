var a=1;
var b=1;
var c=1;
var d=1;


function jz(){
    if (a===0 && b!==null && c!==null && d!=null){
        try{
            a=b;
            document.getElementById("one").innerHTML=c+"碰"+a;
            document.getElementById("three").innerHTML=d+"碰"+a;
            document.getElementById("a").innerHTML=a;
            b=null;
            var my=document.getElementById("b");
            my.parentNode.removeChild(my);
            var my=document.getElementById("two");
            my.parentNode.removeChild(my);
            var my=document.getElementById("four");
            my.parentNode.removeChild(my);
            var my=document.getElementById("a");
            my.style.left=0;
        }
        catch(err){}
    }
    if(b===0 && a!==null && c!==null && d!=null){
        try{
            b=null;
            document.getElementById("one").innerHTML=c+"碰"+a;
            document.getElementById("three").innerHTML=d+"碰"+a;
            var my=document.getElementById("b");
            my.parentNode.removeChild(my);
            var my=document.getElementById("two");
            my.parentNode.removeChild(my);
            var my=document.getElementById("four");
            my.parentNode.removeChild(my);
            var my=document.getElementById("a");
            my.style.left=0;
        }
        catch(err){}
    }

    if (a===0 && b===null){
        try{
            var my=document.getElementById("one");
            my.parentNode.removeChild(my);
            var my=document.getElementById("three");
            my.parentNode.removeChild(my);
        }
        catch(err){}
        finally{
            alert("您输了");
        }
    }

    if (c===0 && b===null && a!==null && d!==null){
        try{
            c=d;
            d=null;
            document.getElementById("c").innerHTML=c;
            document.getElementById("one").innerHTML="继续";
            var my=document.getElementById("three");
            my.parentNode.removeChild(my);
            var my=document.getElementById("d");
            my.parentNode.removeChild(my);
            var my=document.getElementById("c");
            my.style.left=0;
        }
        catch(err){}
    }
    if (d===0 && b===null && a!==null && c!==null){
        try{
            d=null;
            document.getElementById("one").innerHTML="继续";
            var my=document.getElementById("three");
            my.parentNode.removeChild(my);
            var my=document.getElementById("d");
            my.parentNode.removeChild(my);
            var my=document.getElementById("c");
            my.style.left=0;
        }
        catch(err){}
    }
    if (c===0 && b!==null && a!==null && d!==null){
        try{
            c=d;
            d=null;
            document.getElementById("c").innerHTML=c;
            var my=document.getElementById("three");
            my.parentNode.removeChild(my);
            var my=document.getElementById("four");
            my.parentNode.removeChild(my);
            var my=document.getElementById("d");
            my.parentNode.removeChild(my);
            var my=document.getElementById("c");
            my.style.left=0;
        }
        catch(err){}
    }
    if (d===0 && b!==null && a!==null && c!==null){
        try{
            d=null;
            var my=document.getElementById("three");
            my.parentNode.removeChild(my);
            var my=document.getElementById("four");
            my.parentNode.removeChild(my);
            var my=document.getElementById("d");
            my.parentNode.removeChild(my);
            var my=document.getElementById("c");
            my.style.left=0;
        }
        catch(err){}
    }
    if (a===0 && b!==null && c!==null && d===null){
        try{
            a=b;
            b=null;
            document.getElementById("a").innerHTML=a;
            document.getElementById("one").innerHTML="继续";
            var my=document.getElementById("two");
            my.parentNode.removeChild(my);
            var my=document.getElementById("b");
            my.parentNode.removeChild(my);
            var my=document.getElementById("a");
            my.style.left=0;
        }
        catch(err){}
    }
    if (b===0 && a!==null && c!==null && d===null){
        try{
            b=null;
            document.getElementById("one").innerHTML="继续";
            var my=document.getElementById("two");
            my.parentNode.removeChild(my);
            var my=document.getElementById("b");
            my.parentNode.removeChild(my);
            var my=document.getElementById("a");
            my.style.left=0;
        }
        catch(err){}
    }
}

function jg1(){
//间隔加判断输赢
    if (a!==null && b!==null && c!==null && d!==null){
        try{
            one.disabled = true;
            one.style.color="black";
            two.disabled = true;
            two.style.color="black";
            three.disabled = true;
            three.style.color="black";
            four.disabled = true;
            four.style.color="black";
            one.style.border="0px #B8860B solid";
            two.style.border="0px #B8860B solid";
            three.style.border="0px #B8860B solid";
            four.style.border="0px #B8860B solid";
        }
        catch(err){}
    }

    if (a!==null && b===null && c!==null && d===null){
        try{
            one.disabled = true;
            one.style.color="black";
            one.style.border="0px #B8860B solid";
        }
        catch(err){}
    }
    if (a!==null && b===null && c!==null && d!==null){
        try{
            one.disabled = true;
            one.style.color="black";
            three.disabled = true;
            three.style.color="black";
            one.style.border="0px #B8860B solid";
            three.style.border="0px #B8860B solid";
        }
        catch(err){}
    }
    if (a!==null && b!==null && c!==null && d===null){
        try{
            one.disabled = true;
            one.style.color="black";
            two.disabled = true;
            two.style.color="black";
            one.style.border="0px #B8860B solid";
            two.style.border="0px #B8860B solid";
        }
        catch(err){}
    }
}

function jg2(){
    if (a!==null && b!==null && c!==null && d!==null){
        try{
            one.disabled = false;
            two.disabled = false;
            three.disabled = false;
            four.disabled = false;
            one.style.color="#B8860B";
            two.style.color="#B8860B";
            three.style.color="#B8860B";
            four.style.color="#B8860B";
            one.style.border="4px #B8860B solid";
            two.style.border="4px #B8860B solid";
            three.style.border="4px #B8860B solid";
            four.style.border="4px #B8860B solid";
        }
        catch(err){}
    }
    if (a!==null && b===null && c!==null && d===null){
        try{
            one.disabled = false;
            one.style.color="#B8860B";
            one.style.border="4px #B8860B solid";
        }
        catch(err){}
    }
    if (a!==null && b===null && c!==null && d!==null){
        try{
            one.disabled = false;
            three.disabled = false;
            one.style.color="#B8860B";
            three.style.color="#B8860B";
            one.style.border="4px #B8860B solid";
            three.style.border="4px #B8860B solid";
        }
        catch(err){}
    }
    if (a!==null && b!==null && c!==null && d===null){
        try{
            one.disabled = false;
            two.disabled = false;
            one.style.color="#B8860B";
            two.style.color="#B8860B";
            one.style.border="4px #B8860B solid";
            two.style.border="4px #B8860B solid";
        }
        catch(err){}
    }
}

function gaw(){
    document.getElementById("a").style.color='white';
}

function gbw(){
    document.getElementById("b").style.color='white';
}

function gcw(){
    document.getElementById("c").style.color='white';
}

function gdw(){
    document.getElementById("d").style.color='white';
}

function gar(){
    document.getElementById("a").style.color='red';
}

function gbr(){
    document.getElementById("b").style.color='red';
}

function gcr(){
    document.getElementById("c").style.color='red';
}

function gdr(){
    document.getElementById("d").style.color='red';
}

function ha(){
    document.getElementById("a").style.color='#B8860B';
}

function hb(){
    document.getElementById("b").style.color='#B8860B';
}

function hc(){
    document.getElementById("c").style.color='#B8860B';
}

function hd(){
    document.getElementById("d").style.color='#B8860B';
}

function ca(){
    if (a!==null && b!==null && c!==null && d!==null){
        gcr();
        setTimeout("hc()",300);
        setTimeout("gar()",300);
        setTimeout("ha()",600);
        setTimeout("c=(c+a)%10",600);
        setTimeout("document.getElementById('c').innerHTML=c",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);
     }
    if (a!==null && b===null && c!==null && d!==null){
        gcr();
        setTimeout("hc()",300);
        setTimeout("gar()",300);
        setTimeout("ha()",600);
        setTimeout("c=(c+a)%10",600);
        setTimeout("document.getElementById('c').innerHTML=c",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);
    }
    if (a!==null && b===null && c!==null && d===null){
        gcr();
        setTimeout("hc()",300);
        setTimeout("gar()",300);
        setTimeout("ha()",600);
        setTimeout("c=(c+a)%10",600);
        setTimeout("document.getElementById('c').innerHTML=c",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);
    }
    if (a!==null && b!==null && c!==null && d===null){
        gcr();
        setTimeout("hc()",300);
        setTimeout("gar()",300);
        setTimeout("ha()",600);
        setTimeout("c=(c+a)%10",600);
        setTimeout("document.getElementById('c').innerHTML=c",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);
    }
}
function cb(){
    if (a!==null && b!==null && c!==null && d!==null){
        gcr();
        setTimeout("hc()",300);
        setTimeout("gbr()",300);
        setTimeout("hb()",600);
        setTimeout("c=(c+b)%10",600);
        setTimeout("document.getElementById('c').innerHTML=c",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);
    }
    if (a!==null && b!==null && c!==null && d===null){
        gcr();
        setTimeout("hc()",300);
        setTimeout("gbr()",300);
        setTimeout("hb()",600);
        setTimeout("c=(c+b)%10",600);
        setTimeout("document.getElementById('c').innerHTML=c",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);

    }
}
function da(){
    if (a!==null && b!==null && c!==null && d!==null){
        gdr();
        setTimeout("hd()",300);
        setTimeout("gar()",300);
        setTimeout("ha()",600);
        setTimeout("d=(d+a)%10",600);
        setTimeout("document.getElementById('d').innerHTML=d",600);
        setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
        setTimeout("document.getElementById('four').innerHTML=d+'碰'+b",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);
    }
    if (a!==null && b===null && c!==null && d!==null){
        gdr();
        setTimeout("hd()",300);
        setTimeout("gar()",300);
        setTimeout("ha()",600);
        setTimeout("d=(d+a)%10",600);
        setTimeout("document.getElementById('d').innerHTML=d",600);
        setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
        setTimeout("jz()",600);
        jg1();
        setTimeout("peng()",600);
    }
}

function db(){
    gdr();
    setTimeout("hd()",300);
    setTimeout("gbr()",300);
    setTimeout("hb()",600);
    setTimeout("d=(d+b)%10",600);
    setTimeout("document.getElementById('d').innerHTML=d",600);
    setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
    setTimeout("document.getElementById('four').innerHTML=d+'碰'+b",600);
    setTimeout("jz()",600);
    jg1();
    setTimeout("peng()",600);
}

function ac(){
    if (a!==null && b!==null && c!==null && d!==null){
        gaw();
        setTimeout("ha()",300);
        setTimeout("gcw()",300);
        setTimeout("hc()",600);
        setTimeout("a=(a+c)%10",600);
        setTimeout("document.getElementById('a').innerHTML=a",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
    if (a!==null && b===null && c!==null && d!==null){
        gaw();
        setTimeout("ha()",300);
        setTimeout("gcw()",300);
        setTimeout("hc()",600);
        setTimeout("a=(a+c)%10",600);
        setTimeout("document.getElementById('a').innerHTML=a",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
    if (a!==null && b===null && c!==null && d===null){
        gaw();
        setTimeout("ha()",300);
        setTimeout("gcw()",300);
        setTimeout("hc()",600);
        setTimeout("a=(a+c)%10",600);
        setTimeout("document.getElementById('a').innerHTML=a",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
    if (a!==null && b!==null && c!==null && d===null){
        gaw();
        setTimeout("ha()",300);
        setTimeout("gcw()",300);
        setTimeout("hc()",600);
        setTimeout("a=(a+c)%10",600);
        setTimeout("document.getElementById('a').innerHTML=a",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
}

function ad(){
    if (a!==null && b!==null && c!==null && d!==null){
        gaw();
        setTimeout("ha()",300);
        setTimeout("gdw()",300);
        setTimeout("hd()",600);
        setTimeout("a=(a+d)%10",600);
        setTimeout("document.getElementById('a').innerHTML=a",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
    else if (a!==null && b===null && c!==null && d!==null){
        gaw();
        setTimeout("ha()",300);
        setTimeout("gdw()",300);
        setTimeout("hd()",600);
        setTimeout("a=(a+d)%10",600);
        setTimeout("document.getElementById('a').innerHTML=a",600);
        setTimeout("document.getElementById('one').innerHTML=c+'碰'+a",600);
        setTimeout("document.getElementById('three').innerHTML=d+'碰'+a",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
}
function bc(){
    if (a!==null && b!==null && c!==null && d===null){
        gbw();
        setTimeout("hb()",300);
        setTimeout("gcw()",300);
        setTimeout("hc()",600);
        setTimeout("b=(b+c)%10",600);
        setTimeout("document.getElementById('b').innerHTML=b",600);
        setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
    if (a!==null && b!==null && c!==null && d!==null){
        gbw();
        setTimeout("hb()",300);
        setTimeout("gcw()",300);
        setTimeout("hc()",600);
        setTimeout("b=(b+c)%10",600);
        setTimeout("document.getElementById('b').innerHTML=b",600);
        setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
        setTimeout("document.getElementById('four').innerHTML=d+'碰'+b",600);
        setTimeout("jz()",1000);
        setTimeout("jg2()",1000);
    }
}

function bd(){
    gbw();
    setTimeout("hb()",300);
    setTimeout("gdw()",300);
    setTimeout("hd()",600);
    setTimeout("b=(b+d)%10",600);
    setTimeout("document.getElementById('b').innerHTML=b",600);
    setTimeout("document.getElementById('two').innerHTML=c+'碰'+b",600);
    setTimeout("document.getElementById('four').innerHTML=d+'碰'+b",600);
    setTimeout("jz()",1000);
    setTimeout("jg2()",1000);
}

function peng() {
    var k=0;
    var a_c=(a+c)%10;
    var a_d=(a+d)%10;
    var b_c=(b+c)%10;
    var b_d=(b+d)%10;
    var acbcd=a_c+","+b+","+c+","+d;
    var adbcd=a_d+","+b+","+c+","+d;
    var abccd=a+","+b_c+","+c+","+d;
    var abdcd=a+","+b_d+","+c+","+d;
    var bcd=b+","+c+","+d;
    var acd=a+","+c+","+d;
    var abcd=a+","+b+","+c+","+d;
    var cdacb=c+","+d+","+a_c+","+b;
    var cdadb=c+","+d+","+a_d+","+b;
    var cdabc=c+","+d+","+a+","+b_c;
    var cdabd=c+","+d+","+a+","+b_d;
    var accd=a_c+","+c+","+d;
    var adcd=a_d+","+c+","+d;
    var acbc=a_c+","+b+","+c;
    var abcc=a+","+b_c+","+c

    if (a!=null && b!=null && c!=null && d!=null){
        if (双手单数阶必胜.indexOf(abcd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*4);
                if (k===0 && 双手双数阶必胜.indexOf(acbcd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 双手双数阶必胜.indexOf(adbcd)>-1){
                    ad();
                    break
                }
                else if(k===2 && 双手双数阶必胜.indexOf(abccd)>-1){
                    bc();
                    break
                }
                else if(k===3 && 双手双数阶必胜.indexOf(abdcd)>-1){
                    bd();
                    break
                }
                var k=0;
            }
            setTimeout("alert('必胜')",1000)
        }
        else if (双手可一阶诱导.indexOf(abcd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*4);
                if (k===0 && 双手一阶诱导.indexOf(acbcd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 双手一阶诱导.indexOf(adbcd)>-1){
                    ad();
                    break
                }
                else if(k===2 && 双手一阶诱导.indexOf(abccd)>-1){
                    bc();
                    break
                }
                else if(k===3 && 双手一阶诱导.indexOf(abdcd)>-1){
                    bd();
                    break
                }
                var k=0;
            }
            setTimeout("alert('一阶诱导')",1000)
        }
        else if (双手可二阶诱导.indexOf(abcd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*4);
                if (k===0 && 双手二阶诱导.indexOf(acbcd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 双手二阶诱导.indexOf(adbcd)>-1){
                    ad();
                    break
                }
                else if(k===2 && 双手二阶诱导.indexOf(abccd)>-1){
                    bc();
                    break
                }
                else if(k===3 && 双手二阶诱导.indexOf(abdcd)>-1){
                    bd();
                    break
                }
                var k=0;
            }
            setTimeout("alert('二阶诱导')",1000)
        }
        else if (双手可三阶诱导.indexOf(abcd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*4);
                if (k===0 && 双手三阶诱导.indexOf(acbcd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 双手三阶诱导.indexOf(adbcd)>-1){
                    ad();
                    break
                }
                else if(k===2 && 双手三阶诱导.indexOf(abccd)>-1){
                    bc();
                    break
                }
                else if(k===3 && 双手三阶诱导.indexOf(abdcd)>-1){
                    bd();
                    break
                }
                var k=0;
            }
            setTimeout("alert('三阶诱导')",1000)
        }
        //随机
        else {
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*4);
                if (k===0 && 双手双数阶禁忌.indexOf(acbcd)===-1){
                    ac();
                    break
                }
                else if (k===1 && 双手双数阶禁忌.indexOf(adbcd)===-1){
                    ad();
                    break
                }
                else if (k===2 && 双手双数阶禁忌.indexOf(abccd)===-1){
                    bc();
                    break
                }
                else if (k===3 && 双手双数阶禁忌.indexOf(abdcd)===-1){
                    bd();
                    break
                }
                var k=0;
            }
            setTimeout("alert('随机')",1000)
        }
    }


    else if (b===null && a!==null & c!==null && d!==null){
        if (单双手单数阶必胜.indexOf(acd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*2);
                if (k===0 && 单双手双数阶必胜.indexOf(accd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 单双手双数阶必胜.indexOf(adcd)>-1){
                    ad();
                    break
                }
                var k=0;
            }
            setTimeout("alert('必胜')",1000)
        }
        else if (单双手可一阶诱导.indexOf(acd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*2);
                if (k===0 && 单双手一阶诱导.indexOf(accd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 单双手一阶诱导.indexOf(adcd)>-1){
                    ad();
                    break
                }
                var k=0;
            }
            setTimeout("alert('一阶诱导')",1000)
        }
        else if (单双手可二阶诱导.indexOf(acd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*2);
                if (k===0 && 单双手二阶诱导.indexOf(accd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 单双手二阶诱导.indexOf(adcd)>-1){
                    ad();
                    break
                }
                var k=0;
            }
            setTimeout("alert('二阶诱导')",1000)
        }
        else if (单双手可三阶诱导.indexOf(acd)>-1){
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*2);
                if (k===0 && 单双手三阶诱导.indexOf(accd)>-1){
                    ac();
                    break
                }
                else if(k===1 && 单双手三阶诱导.indexOf(adcd)>-1){
                    ad();
                    break
                }
                var k=0;
            }
            setTimeout("alert('三阶诱导')",1000)
        }
        else {
            var k=0;
            while (k===0){
                var k=Math.floor(Math.random()*2);
                if (k===0 && 单双手双数阶禁忌.indexOf(accd)===-1){
                    ac();
                    break
                }
                else if (k===1 && 单双手双数阶禁忌.indexOf(adcd)===-1){
                    ad();
                    break
                }
                var k=0;
            }
            setTimeout("alert('随机')",1000)
        }
    }

    else if (b===null && a!==null & c!==null && d===null){
    //单手对单手
        ac();
    }

    else if (b!==null && a!==null & c!==null && d===null){
        var k=0;
        while (k===0){
            var k=Math.floor(Math.random()*2);
            if (k===0 && 双单手双数阶必胜.indexOf(acbc)>-1){
                ac();
                break
            }
            else if(k===1 && 双单手双数阶必胜.indexOf(abcc)>-1){
                bc();
                break
            }
            var k=0;
        }
    }
    else{}
}

function white(n) {
    document.getElementById(n).style.color="#E6E8FA";
}

function gold(n) {
    document.getElementById(n).style.color="#B8860B";
}
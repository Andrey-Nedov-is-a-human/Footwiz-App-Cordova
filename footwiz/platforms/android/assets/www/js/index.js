    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    function onDeviceReady() {
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

var func
var name

var yzhe=false
var yzhenum
var qi
var change1=false;
var change2=false;
var funclString
var funcl2
var funcd2

    if(localStorage.getItem('lang')==null){
        localStorage.setItem('lang', 'false');
    }

    if(localStorage.getItem('lang')=='false'){
        $('lang').innerHTML='language'
        $('novich').innerHTML='beginner'
        $('lubitel').innerHTML='amateur'
        $('prodv').innerHTML='advanced'
        $('opyt').innerHTML='experienced'
        $('profess').innerHTML='professional'
        $('mini').innerHTML='difficult'
        $('clearl').innerHTML='clean section deferred'
        $('cleard').innerHTML='clean section performed'
    }else{
        $('clearl').innerHTML='очистить раздел отложенные'
        $('cleard').innerHTML='очистить раздел освоенные'
        $('lang').innerHTML='язык'
        $('novich').innerHTML='новичок'
        $('lubitel').innerHTML='любитель'
        $('prodv').innerHTML='продвинутый'
        $('opyt').innerHTML='опытный'
        $('profess').innerHTML='профессионал'
        $('mini').innerHTML='сложность'
    }


var storednamel = JSON.parse(localStorage.getItem('namel'))
    var storedfuncl = JSON.parse(localStorage.getItem('funcl'))
var storednamed = JSON.parse(localStorage.getItem('named'))
    var storedfuncd = JSON.parse(localStorage.getItem('funcd'))


var namel = new Array(150) /*массивы*/

    var funcl = new Array(150)


var named = new Array(150)

    var funcd = new Array(150)  /*массивы конец*/

    if(localStorage.getItem('oner')!='false'){
        namel.fill(0);
        funcl.fill(0);
        named.fill(0);
        funcd.fill(0);
        localStorage.setItem('namel', JSON.stringify(namel))
        localStorage.setItem('funcl', JSON.stringify(funcl))
        localStorage.setItem('named', JSON.stringify(named))
        localStorage.setItem('funcd', JSON.stringify(funcd))
        localStorage.setItem('arn','0')
        localStorage.setItem('arn2','0')
        localStorage.setItem('oner', 'false')
}

/*for(i=0; i<150; i++){
    if(parseInt(localStorage.getItem('namel'))[i]===undefined){namel[i]=0; localStorage.setItem('namel', namel)}
    if(parseInt(localStorage.getItem('named'))[i]===undefined){named[i]=0; localStorage.setItem('named', named)}
    if(parseInt(localStorage.getItem('funcl'))[i]===undefined){funcl[i]=0; localStorage.setItem('funcl', funcl)}
    if(parseInt(localStorage.getItem('funcd'))[i]===undefined){funcd[i]=0; localStorage.setItem('funcd', funcd)}
}*/


document.getElementById('anim').play()

var arn=parseInt(localStorage.getItem('arn'))
var arn2=parseInt(localStorage.getItem('arn2'))

namel = JSON.parse(localStorage.getItem('namel'))
 
    funcl = JSON.parse(localStorage.getItem('funcl'))


named = JSON.parse(localStorage.getItem('named'))

    funcd = JSON.parse(localStorage.getItem('funcd'))

function russian() {
    setTimeout(function(){
        $('lanset').style.display='none';
        localStorage.setItem('lang', 'false')
        $('clearl').innerHTML='clean section deferred'
        $('cleard').innerHTML='clean section performed'
        $('lang').innerHTML='language'
        $('novich').innerHTML='beginner'
        $('lubitel').innerHTML='amateur'
        $('prodv').innerHTML='advanced'
        $('opyt').innerHTML='experienced'
        $('profess').innerHTML='professional'
        $('mini').innerHTML='difficulty'
    }, 150);
}

function english() {
    setTimeout(function(){
        $('lanset').style.display='none';
        localStorage.setItem('lang', 'true')
        $('clearl').innerHTML='очистить раздел отложенные'
        $('cleard').innerHTML='очистить раздел освоенные'
        $('lang').innerHTML='язык'
        $('novich').innerHTML='новичок'
        $('lubitel').innerHTML='любитель'
        $('prodv').innerHTML='продвинутый'
        $('opyt').innerHTML='опытный'
        $('profess').innerHTML='профессионал'
        $('mini').innerHTML='сложность'
    }, 150);
}

function russian1() {
    setTimeout(function(){
        localStorage.setItem('lang', 'false')
        $('clearl').innerHTML='clean section deferred'
        $('cleard').innerHTML='clean section performed'
        $('lang').innerHTML='language'
        $('novich').innerHTML='beginner'
        $('lubitel').innerHTML='amateur'
        $('prodv').innerHTML='advanced'
        $('opyt').innerHTML='experienced'
        $('profess').innerHTML='professional'
        $('mini').innerHTML='setting'
        $('lanset2').style.display='none';
    }, 150);
}

function english1() {
    setTimeout(function(){
        localStorage.setItem('lang', 'true')
        $('clearl').innerHTML='очистить раздел отложенные'
        $('cleard').innerHTML='очистить раздел освоенные'
        $('lang').innerHTML='язык'
        $('novich').innerHTML='новичок'
        $('lubitel').innerHTML='любитель'
        $('prodv').innerHTML='продвинутый'
        $('opyt').innerHTML='опытный'
        $('profess').innerHTML='профессионал'
        $('mini').innerHTML='настройки'
        $('lanset2').style.display='none'
    }, 150);
}

function start(){
    $('nach').style.display='none';
    $('main').style.display='block';
    if(localStorage.getItem('lanch')!='true'){
        $('lanset').style.display='block'
        localStorage.setItem('lanch','true')
    }
}

function yes1() {
    setTimeout(function(){
        namel.fill(0);
        funcl.fill(0);
        localStorage.setItem('namel', JSON.stringify(namel))
        localStorage.setItem('funcl', JSON.stringify(funcl))
        $('cllat').style.display='none'
    }, 150);
        
}

function yes2() {
    setTimeout(function(){
        named.fill(0);
        funcd.fill(0);
        localStorage.setItem('named', JSON.stringify(named))
        localStorage.setItem('funcd', JSON.stringify(funcd))
        $('cldon').style.display='none' 
    }, 150);
           
}

function no1() {
    setTimeout(function(){$('cllat').style.display='none'}, 150);
    
}

function no2() {
    setTimeout(function(){$('cldon').style.display='none'}, 150);
      
}

function clearl() {
    setTimeout(function(){$('cllat').style.display='block'}, 150);
    
}

function cleard() {
    setTimeout(function(){$('cldon').style.display='block'}, 150);
    
}



function onBackKeyDown() {
    if($('page').style.display=='block'){back2()}else{
        if($('action').style.display=='block'){back()}
        if($('nov').style.display=='block'){back()}
        if($('lub').style.display=='block'){back()}
        if($('pro').style.display=='block'){back()}
        if($('op').style.display=='block'){back()}
        if($('prof').style.display=='block'){back()}
    }
}


function tolater() {
    $('later').style.display='block';
    $('action').style.display='none';
    $('done').style.display='none';
    $('setting').style.display='none';
    $('lbut').style.backgroundImage="url('img/LaterZ.png')";
    $('sbut').style.backgroundImage="url('img/Setting.png')";
    $('dbut').style.backgroundImage="url('img/Done.png')";
    $('abut').style.backgroundImage="url('img/Action.png')";
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='отложенные'
        }else{
            $('mini').innerHTML='deferred'
        }

    $('later').innerHTML='<button class="invis2"></button>'

    for (i = 0; i < arn; i++) {
        if(JSON.parse(localStorage.getItem('namel'))[i]!=0){
            var d=document.createElement('button');
            d.className = "list";
            d.innerHTML=JSON.parse(localStorage.getItem('namel'))[i]
            d.onclick=eval('('+JSON.parse(localStorage.getItem('funcl'))[i]+')')
            d.id=JSON.parse(localStorage.getItem('namel'))[i]
            $('later').appendChild(d);
        }
    }

}

function toaction() {
    $('later').style.display='none';
    $('action').style.display='block';
    $('done').style.display='none';
    $('setting').style.display='none';
    $('lbut').style.backgroundImage="url('img/Later.png')";
    $('sbut').style.backgroundImage="url('img/Setting.png')";
    $('dbut').style.backgroundImage="url('img/Done.png')";
    $('abut').style.backgroundImage="url('img/ActionZ.png')";    
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='сложность'
        }else{
            $('mini').innerHTML='difficulty'
        }

}

function todone() {
    $('later').style.display='none';
    $('action').style.display='none';
    $('done').style.display='block';
    $('setting').style.display='none';
    $('lbut').style.backgroundImage="url('img/Later.png')";
    $('sbut').style.backgroundImage="url('img/Setting.png')";
    $('dbut').style.backgroundImage="url('img/DoneZ.png')";
    $('abut').style.backgroundImage="url('img/Action.png')";
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='освоенные'
        }else{
            $('mini').innerHTML='performed'
        }

    $('done').innerHTML='<button class="invis2"></button>'

    for (i = 0; i < arn2; i++) {
        if(JSON.parse(localStorage.getItem('named'))[i]!=0){
            var d=document.createElement('button');
            d.className = "list";
            d.innerHTML=JSON.parse(localStorage.getItem('named'))[i]
            d.onclick=eval('('+JSON.parse(localStorage.getItem('funcd'))[i]+')')
            d.id=JSON.parse(localStorage.getItem('named'))[i]
            $('done').appendChild(d);
        }
    }

}

function tosetting() {
    $('later').style.display='none';
    $('action').style.display='none';
    $('done').style.display='none';
    $('setting').style.display='block';
    $('lbut').style.backgroundImage="url('img/Later.png')";
    $('sbut').style.backgroundImage="url('img/SettingZ.png')";
    $('dbut').style.backgroundImage="url('img/Done.png')";
    $('abut').style.backgroundImage="url('img/Action.png')";
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='настройки'
        }else{
            $('mini').innerHTML='setting'
        }

}

function q() {
    setTimeout(function(){
        $('nov').style.display='block';
        $('action').style.display='none';
        $('back').style.display='block';
        $('fbut').style.display='none';
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='новичок'
        }else{
            $('mini').innerHTML='beginner'
        }

    }, 150);
}

function w() {
    setTimeout(function(){
        $('lub').style.display='block';
        $('action').style.display='none';
        $('back').style.display='block';
        $('fbut').style.display='none';
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='любитель'
        }else{
            $('mini').innerHTML='amateur'
        }
     
    }, 150);
}

function e() {
    setTimeout(function(){
        $('pro').style.display='block';
        $('action').style.display='none';
        $('back').style.display='block';
        $('fbut').style.display='none';
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='продвинутый'
        }else{
            $('mini').innerHTML='advanced'
        }
     
    }, 150);
}

function r() {
    setTimeout(function(){
        $('op').style.display='block';
        $('action').style.display='none';
        $('back').style.display='block';
        $('fbut').style.display='none';
        $('mini').innerHTML='опытный'
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='опытный'
        }else{
            $('mini').innerHTML='experienced'
        }
    
    }, 150);
}

function t() {
    setTimeout(function(){
        $('prof').style.display='block';
        $('action').style.display='none';
        $('back').style.display='block';
        $('fbut').style.display='none';
        $('mini').innerHTML='профессионал'
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='профессионал'
        }else{
            $('mini').innerHTML='professional'
        }
    
    }, 150);
}

function back() {
    setTimeout(function(){
        $('back').style.display='none';
        $('fbut').style.display='block';
        $('action').style.display='block';
        $('nov').style.display='none';
        $('lub').style.display='none';
        $('pro').style.display='none';
        $('op').style.display='none';
        $('prof').style.display='none';
        
        if(localStorage.getItem('lang')=='true'){
            $('mini').innerHTML='сложность'
        }else{
            $('mini').innerHTML='difficulty'
        }
    
    }, 150);
}

function back2() {
    setTimeout(function(){
        $('main').style.display='block';
        $('page').style.display='none';
    }, 150);

    $('later').innerHTML='<button class="invis2"></button>'

    for (i = 0; i < arn; i++) {
        if(JSON.parse(localStorage.getItem('namel'))[i]!=0){
            var d=document.createElement('button');
            d.className = "list";
            d.innerHTML=JSON.parse(localStorage.getItem('namel'))[i]
            d.onclick=eval('('+JSON.parse(localStorage.getItem('funcl'))[i]+')')
            d.id=JSON.parse(localStorage.getItem('namel'))[i]
            $('later').appendChild(d);
        }
    }

    $('done').innerHTML='<button class="invis2"></button>'

    for (i = 0; i < arn; i++) {
        if(JSON.parse(localStorage.getItem('named'))[i]!=0){
            var d=document.createElement('button');
            d.className = "list";
            d.innerHTML=JSON.parse(localStorage.getItem('named'))[i]
            d.onclick=eval('('+JSON.parse(localStorage.getItem('funcd'))[i]+')')
            d.id=JSON.parse(localStorage.getItem('named'))[i]
            $('done').appendChild(d);
        }
    }


}

function golater() {

    for (i = 0; i < 150; i++) {
        if(JSON.parse(localStorage.getItem('namel'))[i]==name){
            yzhe=true
            yzhenum=i
        }    
    }

    if(yzhe==false){ 
        $('laterbut').style.backgroundImage="url('img/Later.png')"
        namel[parseInt(localStorage.getItem('arn'))]=name
        funcl[parseInt(localStorage.getItem('arn'))]=String(func)
        localStorage.setItem('namel', JSON.stringify(namel))
        localStorage.setItem('funcl', JSON.stringify(funcl))
        arn++
        localStorage.setItem('arn', arn)
    }else{
        $('laterbut').style.backgroundImage="url('img/laterbut.png')"
        qi=yzhenum
        while(qi<149){
            namel[qi]=namel[qi+1]
            funcl[qi]=funcl[qi+1]
            qi++
        }
        localStorage.setItem('namel', JSON.stringify(namel))
        localStorage.setItem('funcl', JSON.stringify(funcl))
        yzhe=false
        arn--
        localStorage.setItem('arn', arn)
        document.getElementById(namel[yzhenum]).parentNode.removeChild(document.getElementById(namel[yzhenum]));
    }

for (i = 0; i < 150; i++) {
        if(JSON.parse(localStorage.getItem('named'))[i]==name){
            yzhe=true
            yzhenum=i
        }    
    }

if(yzhe==true){
        $('donebut').style.backgroundImage="url('img/donebut.png')"
        qi=yzhenum
        while(qi<149){
            named[qi]=named[qi+1]
            funcd[qi]=funcd[qi+1]
            qi++
        }
        localStorage.setItem('named', JSON.stringify(named))
        localStorage.setItem('funcd', JSON.stringify(funcd))
        yzhe=false
        arn2--
        localStorage.setItem('arn2', arn2)
        document.getElementById(named[yzhenum]).parentNode.removeChild(document.getElementById(named[yzhenum]));
    }

}

function godone() {

    for (i = 0; i < 150; i++) {
        if(JSON.parse(localStorage.getItem('named'))[i]==name){
            yzhe=true
            yzhenum=i
        }    
    }

    if(yzhe==false){ 
        $('donebut').style.backgroundImage="url('img/Done.png')"
        named[parseInt(localStorage.getItem('arn2'))]=name
        funcd[parseInt(localStorage.getItem('arn2'))]=String(func)
        localStorage.setItem('named', JSON.stringify(named))
        localStorage.setItem('funcd', JSON.stringify(funcd))
        arn2++
        localStorage.setItem('arn2', arn2)
    }else{
        $('donebut').style.backgroundImage="url('img/donebut.png')"
        qi=yzhenum
        while(qi<149){
            named[qi]=named[qi+1]
            funcd[qi]=funcd[qi+1]
            qi++
        }
        localStorage.setItem('named', JSON.stringify(named))
        localStorage.setItem('funcd', JSON.stringify(funcd))
        yzhe=false
        arn2--
        localStorage.setItem('arn2', arn2)
        document.getElementById(named[yzhenum]).parentNode.removeChild(document.getElementById(named[yzhenum]));
    }

for (i = 0; i < 150; i++) {
        if(JSON.parse(localStorage.getItem('namel'))[i]==name){
            yzhe=true
            yzhenum=i
        }    
    }

if(yzhe==true){
        $('laterbut').style.backgroundImage="url('img/laterbut.png')"
        qi=yzhenum
        while(qi<149){
            namel[qi]=namel[qi+1]
            funcl[qi]=funcl[qi+1]
            qi++
        }
        localStorage.setItem('namel', JSON.stringify(namel))
        localStorage.setItem('funcl', JSON.stringify(funcl))
        yzhe=false
        arn--
        localStorage.setItem('arn', arn)
        document.getElementById(namel[yzhenum]).parentNode.removeChild(document.getElementById(namel[yzhenum]));
    }

}


/*function lan() {
    if(localStorage.getItem('lang')=='true'){
        localStorage.setItem('lang', 'false')
        $('lang').innerHTML='language'
        $('novich').innerHTML='beginner'
        $('lubitel').innerHTML='amateur'
        $('prodv').innerHTML='advanced'
        $('opyt').innerHTML='experienced'
        $('profess').innerHTML='professional'
        $('mini').innerHTML='setting'
    }else{
        localStorage.setItem('lang', 'true')
        $('lang').innerHTML='язык'
        $('novich').innerHTML='новичок'
        $('lubitel').innerHTML='любитель'
        $('prodv').innerHTML='продвинутый'
        $('opyt').innerHTML='опытный'
        $('profess').innerHTML='профессионал'
        $('mini').innerHTML='настройки'
    }
}*/

function lan() {
    setTimeout(function(){
        $('lanset2').style.display='block'
    }, 150);
}

/*начало финтов*/



    

    function ballRoll() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/1/ball roll/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/1/ball roll/index2.html';}    
            $('main').style.display='none';
            $('page').style.display='block';
            name='ball roll'
            func=ballRoll

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function ballRollBack() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/1/ball roll back/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/1/ball roll back/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='ball roll back'
            func=ballRollBack

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function doubleTouchExit() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/1/double touch exit/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/1/double touch exit/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='double touch exit'
            func=doubleTouchExit

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function stepOver() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/1/step over 2/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/1/step over 2/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='step over 2'
            func=stepOver

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function stepOver2() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/1/step over 1/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/1/step over 1/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='step over 1'
            func=stepOver2

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function heelToHeelExit() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/heel to heel exit/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/heel to heel exit/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='heel to heel exit'
            func=heelToHeelExit

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function fakeRabona() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/fake rabona/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/fake rabona/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='fake rabona'
            func=fakeRabona

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function heelFlick() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/heel flick/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/heel flick/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='heel flick'
            func=heelFlick

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function heelFlickTurn() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/heel flick turn/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/heel flick turn/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='heel flick turn'
            func=heelFlickTurn

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function mcGeadySpin() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/mc geady spin/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/mc geady spin/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='mc geady spin'
            func=mcGeadySpin

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function roulette() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/roulette/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/roulette/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='roulette'
            func=roulette

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function simpleRainbow() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/simple rainbow/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/simple rainbow/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='simple rainbow'
            func=simpleRainbow

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function stepOverVariation() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/step over variation/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/step over variation/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='step over variation'
            func=stepOverVariation

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function vMoveTurn() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/2/v-move turn/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/2/v-move turn/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='V-move turn'
            func=vMoveTurn

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function fakePass() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/fake pass/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/fake pass/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='fake pass'
            func=fakePass

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function hocusPocus() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/hocus pocus/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/hocus pocus/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='hocus pocus'
            func=hocusPocus

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function rabonaExit() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/rabona exit/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/rabona exit/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='rabona exit'
            func=rabonaExit

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function rouletteExit() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/roulette exit/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/roulette exit/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='roulette exit'
            func=rouletteExit

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function spinRoll() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/spin roll/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/spin roll/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='spin roll'
            func=spinRoll

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function theSonicTurn() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/the sonic turn/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/the sonic turn/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='the sonic turn'
            func=theSonicTurn

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function uTurn() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/3/u-turn/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/3/u-turn/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='U-turn'
            func=uTurn

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function advancedRainbow() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/4/advanced rainbow/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/4/advanced rainbow/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='advanced rainbow'
            func=advancedRainbow

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function crossoverDtExit() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/4/crossover dt exit/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/4/crossover dt exit/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='crossover DT exit'
            func=crossoverDtExit

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function doubleStepOver() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/4/double step over/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/4/double step over/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='double step over'
            func=doubleStepOver

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function elastico() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/4/elastico/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/4/elastico/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='elastico'
            func=elastico

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function rabonaBallRoll() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/4/rabona ball roll/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/4/rabona ball roll/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='rabona ball roll'
            func=rabonaBallRoll

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function spinFlick() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/4/spin flick/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/4/spin flick/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='spin flick'
            func=spinFlick

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function uTurnVariation() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/4/u-turn variation/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/4/u-turn variation/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='U-turn variation'
            func=uTurnVariation

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function alternateElastico() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/5/alternate elastico/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/5/alternate elastico/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='alternate elastico'
            func=alternateElastico

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function doubleAirAkka() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/5/double air akka/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/5/double air akka/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='double air akka'
            func=doubleAirAkka

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function fullRainbow() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/5/full rainbow/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/5/full rainbow/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='full rainbow'
            func=fullRainbow

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function pannaVariation() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/5/panna variation/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/5/panna variation/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='panna variation'
            func=pannaVariation

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function scoopRoulette() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/5/scoop roulette/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/5/scoop roulette/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='scoop roulette'
            func=scoopRoulette

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function seanAirAkka() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/5/sean air akka/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/5/sean air akka/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='Sean air akka'
            func=seanAirAkka

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }

    function seanVMovePanna() {
        setTimeout(function(){
            if(localStorage.getItem('lang')=='true'){$('frame').src='fints/5/sean v-move panna/index.html';}
            if(localStorage.getItem('lang')=='false'){$('frame').src='fints/5/sean v-move panna/index2.html';}
            $('main').style.display='none';
            $('page').style.display='block';
            name='Sean V-move panna'
            func=seanVMovePanna

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('namel'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('laterbut').style.backgroundImage="url('img/Later.png')";yzhe=false}
                else{$('laterbut').style.backgroundImage="url('img/laterbut.png')"}

            for (i = 0; i < 150; i++) {
                if(JSON.parse(localStorage.getItem('named'))[i]==name){
                    yzhe=true
                }    
            }

            if(yzhe==true){$('donebut').style.backgroundImage="url('img/Done.png')";yzhe=false}
                else{$('donebut').style.backgroundImage="url('img/donebut.png')"}

        }, 150);
    }





 function $(id) {
  return document.getElementById(id);
 }


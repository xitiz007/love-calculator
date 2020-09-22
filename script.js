
function good(username, partnername)
{
    return ! (username == '' || partnername == '')
}

function getPercentage(username, partnername)
{
    if(username == "kshitiz" || username == "kshitiz baniya" && partnername == "prakriti" || partnername == "prakriti gautam")
    {
        percentage = 100;
    }
    else if(username == "prakriti" || username == "prakriti gautam" && partnername == "kshitiz" || partnername == "kshitiz baniya")
    {
        percentage = 100;
    }
    else if(username == "prakriti gautam" || username == "kshitiz baniya" )
    {
        percentage = 0;
    }
    else{
        percentage = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
    return percentage;
}

function submitted()
{
    var form = document.querySelector('form');
    const formdata = new FormData(form);
    const username = formdata.get('username').trim().toLowerCase();
    const partnername = formdata.get('partnername').trim().toLowerCase();
    if(good(username, partnername))
    {
        const percentage = getPercentage(username, partnername);
        $('.box').hide();
        $('.result-box').show();
        $('#couple-name').text(username + ' & ' + partnername);
        showPercentage(percentage);
    }
    else {
        alert("inputs were given wrong");
    }
}


function showPercentage(percentage) {
    var can = document.getElementById('canvas'),
        spanProcent = document.getElementById('procent'),
         c = can.getContext('2d');
   
    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * percentage;
    
    c.lineCap = 'round';
    arcMove();
    
    function arcMove(){
      var deegres = 0;
      var acrInterval = setInterval (function() {
        deegres += 1;
        c.clearRect( 0, 0, can.width, can.height );
        procent = deegres / oneProcent;
  
        spanProcent.innerHTML = procent.toFixed();
  
        c.beginPath();
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        c.strokeStyle = '#b1b1b1';
        c.lineWidth = '10';
        c.stroke();
  
        c.beginPath();
        c.strokeStyle = '#3949AB';
        c.lineWidth = '10';
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
        c.stroke();
        if( deegres >= result ) clearInterval(acrInterval);
      }, fps);
      
    }
}


function get_start()
{
    $('.result-box').hide();
    $('#loveform').submit(function (){
        submitted();
        return false;
    });
}

window.onload = get_start;


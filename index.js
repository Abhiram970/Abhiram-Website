const sec = document.querySelectorAll('.section');
var con = document.querySelectorAll('.control');
var con2 = document.querySelectorAll('.controls');
var main = document.querySelectorAll('.main-content');

function pagetransition(){
    // Button click change the class
    for (var i = 0 ; i < con.length ; i++)
    {
        con[i].addEventListener('click', function(){
            var x = document.querySelectorAll('.active-btn');
            x[0].className = x[0].className.replace('active-btn','');
            this.classList.add('active-btn');
        })
    }


    for (var i = 0 ; i < main.length ; i++)
    {
        main[i].addEventListener('click', (e) => {
            var id = e.target.dataset.id;
            const element = document.getElementById(id);
            if(id){
                sec.forEach((section) =>{
                    section.classList.remove('active')
                })
                element.classList.add('active');
            }
        })
    }
}



pagetransition();

function form1()
{
    var subject = document.getElementById('subject1').value;
    var email = document.getElementById('email1').value;
    var name = document.getElementById('name1').value;
    var message = document.getElementById('message1').value;
    window.open('mailto:pvabhiram1977@gmail.com?subject='+ subject + '&body='+message);
}
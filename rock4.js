var btn = document.getElementById("submit");
var container = document.querySelector('.container');
btn.addEventListener('click',function(){
    //클릭하면 실제로 할일

    btn.style.color='red';
    console.log('버튼이 클릭되었습니다');
});

container.addEventListener('mouseenter',function(){
    console.log("마우스가 들어왔어요");
});

container.addEventListener('mouseleave',function(){
    console.log("마우스가 나갔어요");
});

window.addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.keyCode);
});
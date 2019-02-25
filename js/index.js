$(function(){
    var windowTopBar = document.createElement('div')
    windowTopBar.style.width = "100%"
    windowTopBar.style.height = "32px"
    windowTopBar.style.position = "absolute"
    windowTopBar.style.top = windowTopBar.style.left = 0
    windowTopBar.style.webkitAppRegion = "drag"
    document.body.appendChild(windowTopBar)
    $('.mainMenu li').click(function(e){
        const title = ['布局', '页面', '表格', '组件'];
        e.preventDefault();
        var index = $(this).index()
        $('.title').text(title[index]); //替换主标题
        $('.content section').removeClass('current');
        console.log($('.content section')[index]);
        $('.content section').eq(index).addClass('current');

    })
})

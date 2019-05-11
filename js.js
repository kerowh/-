//引用js选择span
var allButtons = $('#buttons>span')
//遍历span
for (var i = 0; i < allButtons.length; i++) {
	//加上点击事件，获取当前点击的是第几个
	//index的意思就是看currentTarget是在集合中是第几个元素
	$(allButtons[i]).on('click',function(x){
		var index = $(x.currentTarget).index()
		//轮播的本质就是写一个windo盖住除了它之外的图片
		//overflow：hidden只显示当前位置的东西，左右两边都没有
		//例如，.widow{width：300px;overflow:hidden}的意思是
		//这个windo只显示300px，其他都被盖住
		var p = index*-300
		//图片平移已达到轮播的效果,window本身是不动的，把图片平移让需要的图片出现在window上
		//加styl的样式
		$('#images').css({
			transform: 'translate('+p+'px)'
		});
		//到哪里哪个按钮高亮,加上类名就行了
		n =index
		activeButton(allButtons.eq(n))
		})
	}

//自动轮播
var n = 0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
var timeId = setTimer()

function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 1000)
}

function activeButton($button){
		$button.eq(n).addClass('red')
					.siblings('.red').removeClass('red')
	}

 //鼠标事件
 //移入自动转到当前位置，并且高亮
 //移除继续轮播
 $('.window').on('mouseenter',function(event){
 	//鼠标点进去停止自动轮播，改成手动的
 	//程序本身就有，所以只要砸了闹钟就行了
 	window.clearInterval(timeId)
 })
 $('.window').on('mouseleave', function(event) {
 	//mouseleave恢复轮播
 	timeId = setInterval(()=>{
 		n+=1
 		allButtons.eq(n%size).trigger('click')
 	},1000)	
 });





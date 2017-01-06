function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var time = + year +'年'+  month +'月'+ day +'日';
  return time
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function toPoint(percent){
      var str=percent.replace("%","");
      str= str/100;
      return str;
}

function operation(number){
      if(number >= 0.9)
          return 5;
      else if(number >= 0.7)
          return 4;
      else if(number >= 0.5)
          return 3;
      else if(number >= 0.3)
          return 2;
      else
          return 1
}   

function imageUtil(e) { 
 var imageSize = {}; 
 var originalWidth = e.detail.width;//图片原始宽 
 var originalHeight = e.detail.height;//图片原始高 
 var originalScale = originalHeight/originalWidth;//图片高宽比 
 console.log('originalWidth: ' + originalWidth) 
 console.log('originalHeight: ' + originalHeight) 
 //获取屏幕宽高 
 wx.getSystemInfo({ 
  success: function (res) { 
   var windowWidth = res.windowWidth; 
   var windowHeight = res.windowHeight; 
   var windowscale = windowHeight/windowWidth;//屏幕高宽比 
   console.log('windowWidth: ' + windowWidth) 
   console.log('windowHeight: ' + windowHeight) 
   if(originalScale < windowscale){//图片高宽比小于屏幕高宽比 
    //图片缩放后的宽为屏幕宽 
     imageSize.imageWidth = windowWidth; 
     imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth; 
   }else{//图片高宽比大于屏幕高宽比 
    //图片缩放后的高为屏幕高 
     imageSize.imageHeight = windowHeight; 
     imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight; 
   } 
  } 
 }) 
 console.log('缩放后的宽: ' + imageSize.imageWidth) 
 console.log('缩放后的高: ' + imageSize.imageHeight) 
 return imageSize; 
}

module.exports = { 
 imageUtil: imageUtil,
 formatTime: formatTime,
 toPoint: toPoint,
 operation: operation

} 

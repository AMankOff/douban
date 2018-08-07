// pages/filmDetail/filmRe/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    star:[
      { 
        img:"../../images/ic_rating_star.png"
      },
      {
        img: "../../images/ic_rating_star.png"
      },
      {
        img: "../../images/ic_rating_star.png"
      },
      {
        img: "../../images/ic_rating_star.png"
      },
      {
        img: "../../images/ic_rating_star.png"
      }
    ],
    starNum:0,
    content:'',
//    mark:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //设置星星数
  getStar:function(options){
  //  console.log(options);
    var num = options.currentTarget.dataset.index;
    var arr=[];
    for(var i=0;i<this.data.star.length;i++){
      var obj={};
      if(i<=num){
        obj = { img:"../../images/ic_rating_star_HL.png"}
      }else{
        obj = { img:"../../images/ic_rating_star.png"}
      }
      arr.push(obj);
    }
  /*
    var m="";
    switch(num){
      case 0: m = "很差"; break;
      case 1: m = "较差"; break;
      case 2: m = "还行"; break;
      case 3: m = "推荐"; break;
      case 4: m = "力荐"; break;
    }
  */
  //  console.log(arr);
    this.setData({
      star: arr,
      starNum:num+1,
   //   mark: m,
    })
  },

  //提交数据
  subFun:function(options){
      wx.showModal({
        title: "提示",
        content: "提交信息！",
        showCancel: false,
        success:function(){
          wx.navigateBack({
            delta: 1
          });
        }
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
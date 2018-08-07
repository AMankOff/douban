// pages/actorDetail/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieMsg: '123456',
    state: {
      t: true,
      high: '66px',
      cont: '展开∨',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var url = app.globalData.doubanBase + app.globalData.celebrity + "/" + id;
    var _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
    });
    wx.request({
      url: url,
      header: {
        'content-type': 'json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data);
        var data = res.data;
        _this.setData({
          movieMsg: data
        })
        wx.hideToast({
          title: '加载中',
          icon: 'loading',
        });
      //  console.log(_this.data.movieMsg);
      },
      fail: function (res) {
        alert("网页正在维护中。。。");
      },
    })
  },
  //展示收起
  messageOpen: function (options) {
    var t = this.data.state.t;
    //  console.log(t);
    if (t) {
      this.setData({
        state: {
          t: false,
          high: 'auto',
          cont: '收起∧',
        }
      })
    } else {
      this.setData({
        state: {
          t: true,
          high: '66px',
          cont: '展开∨',
        }
      })
      //  console.log(this.data.state);
    }
  },

  //展示电影
  openDetail: function (event) {
    console.log(event);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/filmDetail/index?id=' + id
    });
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
// pages/bfCompany/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Mdata: '',
    startN: 0,
    loadNum: 0,
    countN: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var startN = this.data.startN;
    var loadN = this.data.loadNum;
    var countN = this.data.countN;
    var filmCom = app.globalData.doubanBase + app.globalData.comingSoon + "?start=" + startN + "&count=" + countN;
    const _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
    });
    wx.request({
      url: filmCom, //仅为示例，并非真实的接口地址
      method: 'GET',
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        loadN++;
      //  console.log(res.data.subjects);
        const obj = res.data.subjects;
        _this.setData({
          Mdata: obj,
          loadNum: loadN,
        })
        wx.hideToast({
          title: '加载中',
          icon: 'loading',
        });
        //     console.log(_this.data.Mdata);
      },
      fail: function () {
        alert("页面维护中。。。");
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
    var startN = this.data.loadNum * this.data.countN;
    var countN = this.data.countN;
    var loadN = this.data.loadNum;
    var filmCom = app.globalData.doubanBase + app.globalData.comingSoon + "?start=" + startN + "&count=" + countN;
    const _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
    });
    wx.request({
      url: filmCom, //仅为示例，并非真实的接口地址
      method: 'GET',
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        //  console.log(res.data.subjects);
        loadN++;
        //    console.log(loadN);
        const result = [];
        var i, j;
        for (i = 0; i < _this.data.Mdata.length; i++) {
          result[i] = _this.data.Mdata[i];
        }
        //    console.log(_this.data.Mdata);
        for (j = 0; j < res.data.subjects.length; j++ , i++) {
          result[i] = res.data.subjects[j];
        }
        //    console.log(result);
        _this.setData({
          Mdata: result,
          loadNum: loadN,
        })
        //   console.log(_this.data.Mdata);
        wx.hideToast({
          title: '加载中',
          icon: 'loading',
        });
      }
    })  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  openDetail: function (event) {
    console.log(event);
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/filmDetail/index?id=' + id
    });
  }
})
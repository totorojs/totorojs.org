(function() {
  $.ajax({
    url: 'http://server.totorojs.org:9997/overview',
    dataType: "jsonp",
    success: function (rt) {
      if (rt.err) return
      if (rt.data.recentWeekLaborCount < 8000) return

      var data = rt.data
      var content = '<table><tbody>' +
        '<tr><th>Total:</th><td>' + data.orderCount + ' / ' + data.laborCount + '</td></tr>' +
        '<tr><th>Last week:</th><td>' + data.recentWeekOrderCount + ' / ' + data.recentWeekLaborCount + '</td></tr>' +
        '</tbody></table>'
      $('#J_Statistic').html(content)
    }
  })
})()

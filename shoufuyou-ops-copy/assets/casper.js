casper.start('http://www.baidu.com/', function() {
    this.test.assertTitle('百度一下，你就知道', 'google homepage title is the one expected');
});

casper.start('https://s.taobao.com/list?q=%E8%8C%B6%E6%9D%AF', function() {
    this.test.assertSelectorHasText('.total', '共 126.79万 件宝贝');
});

casper.run(function() {
    this.test.done(); // I must be called once all the async stuff has been executed
});

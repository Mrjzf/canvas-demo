/*!
 *@项目： jquery.barrager.js
 */
(function ($) {
    function Barrager(dom) {
        this.canvas = dom.get(0);
        this.ctx = this.canvas.getContext("2d");
        this.msgs = new Array();
        this.width = parseInt(this.canvas.style.width);
        this.height = parseInt(this.canvas.style.height);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.font = "32px 黑体";
        this.ctx.font = this.font;
        this.colorArr = ["red", "green", "blue", "black"];
        this.interval = "";
        this.draw = function () {
            if (this.interval != "") return;
            var _this = this;
            this.interval = setInterval(function () {
                _this.ctx.clearRect(0, 0, _this.width, _this.height);
                _this.ctx.save();
                var topI = 0;
                for (var i = 0; i < _this.msgs.length; i++) {
                    if (!(_this.msgs[i] == null || _this.msgs[i] == "" || typeof (_this.msgs[i]) == "undefined")) {
                        if (topI < 3) {
                            topI++;
                        } else {
                            topI = 0;
                        }
                        if (_this.msgs[i].L == null || typeof (_this.msgs[i].L) == "undefined") {
                            _this.msgs[i].L = _this.width + parseInt(Math.random() * 100); //代表初始距离左边的距离
                            // _this.msgs[i].T = parseInt(Math.random() * 700);
                            // _this.msgs[i].T = parseInt((i * 0.05) * (_this.height - 50)) < 36 ? 36 : parseInt((i * 0.05) * (_this.height - 50)); //随机产生的Top距离
                            // var vtop = parseInt(Math.random() * (_this.height - 36));
                            //显示行数，防止同时出现的弹幕重叠,减去46.防止在底部显示不全，如果小于46就等于46，防止顶部展示不全
                            var vtop = parseInt((topI + 1) * 0.25 * (_this.height - 46));
                            if (vtop < 46) {
                                vtop = 46;
                            }
                            _this.msgs[i].T = vtop;
                            // _this.msgs[i].S = parseInt(Math.random() * (10 - 4)); //随机产生的速度（单位时间内移动的像素）
                            _this.msgs[i].S = parseInt(random(3, 6));
                            _this.msgs[i].C = _this.colorArr[Math.floor(Math.random() * _this.colorArr.length)]; //随机从颜色数组中提取的颜色
                        } else {
                            if (_this.msgs[i].L < -300) {
                                _this.msgs[i] = null;
                            } else {
                                _this.msgs[i].L = parseInt(_this.msgs[i].L - _this.msgs[i].S);
                                _this.ctx.fillStyle = _this.msgs[i].C;
                                _this.ctx.fillText(_this.msgs[i].msg, _this.msgs[i].L, _this.msgs[i].T);
                                _this.ctx.restore();

                                //添加显示圆形头像
                                _this.ctx.fillStyle = 'transparent';
                                _this.ctx.beginPath();
                                var img = new Image();
                                img.src = _this.msgs[i].img;
                                circleImg(_this.ctx, img, _this.msgs[i].L - 40, _this.msgs[i].T - 26, 16);
                                _this.ctx.fill();
                            }
                        }
                    }
                }
            }, 20);
        };
        this.putMsg = function (datas) {
            this.msgs.length = datas.length + 1;
            for (var j = 0; j < datas.length; j++) {
                for (var i = 0; i < this.msgs.length; i++) {
                    if (this.msgs[i] == null || this.msgs[i] == "" || typeof (this.msgs[i]) == "undefined") {
                        this.msgs[i] = datas[j];
                        break;
                    }
                }
            }
            this.draw();
        };
        this.clear = function () {
            clearInterval(this.interval);
            this.interval = "";
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.save();
            for (var i = 0; i < this.msgs.length; i++) {
                this.msgs[i] = null;
            }
        };
    }
    $.fn.barrager = function (para) {
        if (typeof (para) == "string") {
            try {
                var api = $(this).data('barrager_api');
                api[para].apply(api);
            } catch (e) {}
        } else if (typeof para == 'object' || !para) {
            $this = $(this);
            if ($this.data('barrager_api') != null && $this.data('barrager_api') != '') {
                var api = $this.data('barrager_api');
                api.putMsg(para);
            } else {
                var api = new Barrager($this);
                $this.data('barrager_api', api);
                api.putMsg(para);
            }
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.barrager');
        }
        return this;
    }

    //圆形头像
    function circleImg(obj, img, x, y, r) {
        obj.save();
        var d = 2 * r;
        var cx = x + r;
        var cy = y + r;
        obj.arc(cx, cy, r, 0, 2 * Math.PI);
        obj.clip();
        obj.drawImage(img, x, y, d, d);
        obj.restore();
    }
    //获取范围随机数
    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            var hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})(jQuery);
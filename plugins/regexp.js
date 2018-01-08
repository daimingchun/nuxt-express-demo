H.verifiable.addRules({
    /**
     * 验证是否为空
     * @memberof hapj.ui.verifiable
     * @function ~required
     * @param {Object} val
     */
    required: function (val) {
        return H.trim(val) !== '';
    },
    /**
     * 验证是否为数字
     * @memberof hapj.ui.verifiable
     * @function ~number
     * @param {Object} val
     */
    number: function (val) {
        return !isNaN(val);
    },
    /**
     * 验证是否为正整数
     * @memberof hapj.ui.verifiable
     * @function ~point
     * @param {Object} val
     */
    posint: function (val) {
        return /^[1-9](\d+)?$/.test(val);
    },
    /**
     * 验证是否为金钱,保留两位小数
     * @memberof hapj.ui.verifiable
     * @function ~price
     * @param {Object} val
     */
    price: function (val) {
        return /^(\d{1,7})(\.\d{2})?$/.test(val);
    },
    /**
     * 验证是否为email地址
     * @memberof hapj.ui.verifiable
     * @function ~email
     * @param {Object} val
     */
    email: function (val) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|\.|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)((com(\.[a-z]{2})?)|net|cn|cc)$/i.test(val);
    },
    /**
     * 验证是否符合正则表达式
     * @memberof hapj.ui.verifiable
     * @function ~regexp
     * @param {string} val
     * @param {object} rule 规则
     * @param {RegExp} rule.exp 验证的正则表达式
     * @return {boolean}
     */
    regexp: function (val, rule) {
        return new RegExp(rule.exp).test(val);
    },
    /**
     * 验证是否中文
     * @memberof hapj.ui.verifiable
     * @function ~chinese
     * @param {string} val
     * @param {object} rule
     * @param {int} rule.min 最小长度
     * @param {int} rule.max 最大长度
     * @return {boolean}
     */
    chinese: function (val, rule) {
        if (undefined === rule.min) {
            rule.min = 0;
        }
        if (undefined === rule.max) {
            rule.max = Number.MAX_VALUE;
        }
        return new RegExp('^[\u4e00-\u9fa5]{' + rule.min + ',' + rule.max + '}$').test(val);
    },
    /**
     * 身份证验证
     * @memberof hapj.ui.verifiable
     * @function ~chinese
     * @param {String} val
     * @param {Object} rule
     * @param {int} rule.minAge 最小年龄
     * @param {int} rule.maxAge 最大年龄
     * @param {string} rule.sex
     * * `male` 男性
     * * `female` 女性
     * @param {string} rule.province 省份名称，如北京、天津等
     * @return {boolean}
     */
    ID: function (val, rule) {
        if (!val) {
            return false;
        }
        var len = val.length;
        if (len != 15 && len != 18) {
            return false;
        }
        // 检测基本格式是否正确
        if (!/^(\d{15})|(\d{17}([0-9xX]))$/.test(val)) {
            return false;
        }

        // 根据校验规则检查身份证合法性
        if (len == 18) {
            var total = 0, v = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2], mod, rightCode;
            H.each([7, 9, 10, 5, 8, 4, 2, 1, 6, 3], function (i) {
                if (i < 7) {
                    total += ((parseInt(val.charAt(i), 10) + parseInt(val.charAt(i + 10), 10)) * this);
                } else {
                    total += (parseInt(val.charAt(i), 10) * this);
                }
            });
            mod = total % 11;
            rightCode = v[mod] + '';
            if (val.charAt(17).toLowerCase() != rightCode.toLowerCase()) {
                return false;
            }
        }

        // 校验地区的合法性
        if (!this.cities) {
            this.cities = {
                11: '北京',
                12: '天津',
                13: '河北',
                14: '山西',
                15: '内蒙古',
                21: '辽宁',
                22: '吉林',
                23: '黑龙江 ',
                31: '上海',
                32: '江苏',
                33: '浙江',
                34: '安徽',
                35: '福建',
                36: '江西',
                37: '山东',
                41: '河南',
                42: '湖北 ',
                43: '湖南',
                44: '广东',
                45: '广西',
                46: '海南',
                50: '重庆',
                51: '四川',
                52: '贵州',
                53: '云南',
                54: '西藏 ',
                61: '陕西',
                62: '甘肃',
                63: '青海',
                64: '宁夏',
                65: '新疆',
                71: '台湾',
                81: '香港',
                82: '澳门',
                91: '国外'
            };
        }
        if (!(val.substr(0, 2) in this.cities)) {
            return false;
        }
        // 检测限制的地区是否正确
        if (rule.province && this.cities[val.substr(0, 2)] != rule.province) {
            return false;
        }

        // 检查性别
        if (rule.sex) {
            var tag = val.substr(len == 15 ? len - 1 : len - 2, 1);
            if (tag % 2 === 0) {
                if (rule.sex != 'female') {
                    return false;
                }
            } else {
                if (rule.sex != 'male') {
                    return false;
                }
            }
        }

        // 检测生日的合法性
        var yearLen = len == 15 ? 2 : 4,
            year = parseInt(len == 2 ? '19' + val.substr(6, yearLen) : val.substr(6, 4), 10),
            month = parseInt(val.substr(6 + yearLen, 2), 10),
            day = parseInt(val.substr(8 + yearLen, 2), 10),
            d = new Date(year, month - 1, day);

        if (d.getFullYear() != year || d.getMonth() != month - 1 || d.getDate() != day) {
            return false;
        }

        var offDay = parseInt((new Date().getTime() - d.getTime()) / (1000 * 3600 * 24), 10);
        // 检查最小年龄
        if (!isNaN(rule.minAge)) {
            if (offDay < 365 * rule.minAge) {
                return false;
            }
        }
        // 检查最大年龄
        if (!isNaN(rule.maxAge)) {
            if (offDay > 365 * rule.maxAge) {
                return false;
            }
        }
        return true;
    },
    /**
     * 验证是否为url链接，该验证会很严格，简单验证参见{@link hapj.ui.verifiable~surl}
     * @memberof hapj.ui.verifiable
     * @function ~url
     * @param {string} val
     * @return {boolean}
     */
    url: function (val) {
        return urlRegex.test(val);
    },
    /**
     * 验证是否为简单的url链接
     * @memberof hapj.ui.verifiable
     * @function ~surl
     * @param {string} val
     * @returns {boolean}
     */
    surl: function (val) {
        return sUrlRegex.test(val);
    },
    /**
     * 手机号码规则验证
     * @memberof hapj.ui.verifiable
     * @function ~phone
     * @param {String} val
     * @param {Object} rule 具有如下参数
     * @param {string} rule.mobile 电话类型。
     * * `mobile` 移动电话
     * * `home` 座机
     * * `400` 电话
     * * `both` 移动、座机、400都行
     * @return {boolean}
     */
    phone: function (val, rule) {
        if (undefined === rule.mobile) {
            rule.mobile = 'mobile';
        }
        switch (rule.mobile) {
            case 'mobile':
                return /^1[34578]\d{9}$/.test(val);
            case 'home':
                return /^\d{3,5}\-\d{7,8}$/.test(val);
            case '400':
                return /^400\d{7}(\d{1,5})?$/.test(val.replace(/[\s\-转]/g, ''));
            case 'both':
                if (/(^1[34578]\d{9}$)|(^\d{3,5}\-\d{7,8}$)/.test(val)) {
                    return true;
                } else {
                    return /^400\d{7}(\d{1,5})?$/.test(val.replace(/[\s\-转]/g, ''));
                }
        }
    },
    /**
     * 比较两个对象的值
     * @memberof hapj.ui.verifiable
     * @function ~compare
     * @param {string} val
     * @param {object} rule
     * @param {string} rule.to 要比较对象的id或者原生js对象,当是以'@'开头的字符串时,会当作name在当前form下找到对应的控件
     * @param {string} rule.condition 比较关系式
     * * `=`、`equal` 等于
     * * `!=`、`<>` 不等于
     * * `>`、`great` 大于
     * * '<'、`less` 小于
     * `>=`、`notLess` 大于等于
     * `<=`、`notGreat` 小于等于
     * @return {boolean}
     */
    compare: function (val, rule) {
        var cVal;
        if(typeof(rule.to) == 'string'){
            cVal = H.ui._id(rule.to).value;
        }else{
            var node = rule.to;
            cVal = node.value;
        }

        if (!rule.condition) {
            rule.condition = '=';
        }
        switch (rule.condition) {
            case '=':
            case 'equal':
                return val == cVal;
            case '!=':
            case '<>':
            case 'notEqual':
                return val != cVal;
            case '>':
            case 'great':
                return val > cVal;
            case '<':
            case 'less':
                return val < cVal;
            case '>=':
            case 'notGreat':
                return val >= cVal;
            case '<=':
            case 'notLess':
                return val <= cVal;
            default:
                return H.log.error('hapj.ui.verifiable the condition(' + rule.condition + ') is not defined');
        }
    },
    /**
     * 范围比较
     * @memberof hapj.ui.verifiable
     * @function ~range
     * @param {string} val
     * @param {object} rule
     * @param {string} rule.type 范围类型
     * * `length` 长度比较
     * * `number` 数值比较
     * * `integer` 整数数值比较(包含0)
     * @param {int} rule.min 最小值
     * @param {int} rule.max: 最大值
     */
    range: function (val, rule) {
        if (undefined === rule.min) {
            rule.min = Number.MIN_VALUE;
        }
        if (undefined === rule.max) {
            rule.max = Number.MAX_VALUE;
        }
        switch (rule.type) {
            case 'integer':
                if (!/^-?\d+$/.test(val)) {
                    return false;
                }
                return val <= rule.max && val >= rule.min;
            case 'length':
                return val.length <= rule.max && val.length >= rule.min;
            case 'number':
                if (!isNaN(val)) {
                    return val <= rule.max && val >= rule.min;
                } else {
                    return false;
                }
                break;
        }
    },
    /**
     * 远程校验
     * @memberof hapj.ui.verifiable
     * @function ~remote
     * @param {string|function} val 用来比较的值，如果是function，则会将返回的值作为比较的值
     * @param {{}} rule
     * @param {string} rule.url 远程校验的网址
     * @param {string} rule.type 可以是POST或者GET，默认为post
     * @param {mixed} rule.data 提交给服务器端的数据，可以是key1=value1&key2=value2、{key1:value1}、function(){return {key1:value1}}等形式
     * @param {string} rule.dataType 返回的类型，可以是'text','json', 'html'等
     * @param {function} rule.verify 函数，用来校验返回数据，如果返回true，说明校验成功，如果返回false，说明校验失败。如果没有这个函数，则返回的数据为true或者'true'时认为成功，其他都为失败
     */
    remote: function (val, rule) {
        if (undefined === this.cache) {
            this.cache = {};
        }
        if (undefined === this.cache[rule.name]) {
            this.cache[rule.name] = {};
        }

        if (undefined === rule.url) {
            return H.log.warn('hapj.ui.verifiable the url of the remote rule is not supplied');
        }

        var data = rule.data || {value: val};
        if (typeof data == 'function') {
            data = data.call(this, val);
        }
        // 序列化data数据
        var dataKey = (typeof data == 'object') ? H.util.serial.toString(data, 'pair') : data.toString(),
            callback = function (data) {
                var pass = false;
                if (rule.verify) {
                    pass = rule.verify.call(rule, data);
                } else {
                    pass = (data === true || data === 'true');
                }
                if (pass) {
                    if (rule.success) {
                        rule.success.call();
                    }
                } else {
                    if (rule.failure) {
                        rule.failure.call();
                    }
                }
            },
            cache = this.cache[rule.name];

        if (cache[dataKey]) {
            callback(cache[dataKey]);
        } else {
            // 如果是表单提交的，默认通过
            if (rule.formSubmit) {
                return true;
            }
            H.ajax({
                url: rule.url,
                type: rule.type ? rule.type : 'POST',
                async: undefined !== rule.async ? rule.async : true,
                data: data,
                dataType: rule.dataType ? rule.dataType : 'json',
                success: function (data) {
                    cache[dataKey] = data;

                    callback(data);
                },
                failure: function () {
                    H.log.error('hapj.ui.verifiable remote method called failed(' + rule.url + ')');
                }
            });
        }
    },
    /**
     * 日期验证
     * @memberof hapj.ui.verifiable
     * @function ~date
     * @param {string} val
     * @param {object} rule
     * @param {int|string} rule.min 最小日期。可以是多少s、或者具体的日期，如 6*3600*24，表示离现在至少6天，或者2012-02-24,表示选择的日期不能在这个日期之前
     * @param {int|string} rule.max 最大日期。和min的格式一样
     */
    date: function (val, rule) {
        var date = _str2date(val);
        if (!date) {
            return false;
        }
        // 检查最小数
        if (rule.min || rule.max) {
            var now = new Date();
            if (rule.min) {
                if (!isNaN(rule.min)) {
                    if ((date.getTime() - now.getTime()) / 1000 < rule.min) {
                        return false;
                    }
                } else {
                    var min = _str2date(rule.min);
                    if (!min) {
                        return hapj.log.error('hapj.ui.verifiable date format wrong');
                    }
                    if (date.getTime() < min.getTime()) {
                        return false;
                    }
                }
            }
            if (rule.max) {
                if (!isNaN(rule.max)) {
                    if ((date.getTime() - now.getTime()) / 1000 > rule.max) {
                        return false;
                    }
                } else {
                    var max = _str2date(rule.max);
                    if (!max) {
                        return hapj.log.error('hapj.ui.verifiable date format wrong');
                    }
                    if (date.getTime() > max.getTime()) {
                        return false;
                    }
                }
            }
        }
        return true;
    },
    successMsg: function () {
        return true;
    },
    textLong: function (val, rule) {
        if (val.length > rule.length) {
            return false;
        }
        return true;
    },
    selectRange: function (vals, rule) {
        if (undefined === rule.min) {
            rule.min = Number.MIN_VALUE;
        }
        if (undefined === rule.max) {
            rule.max = Number.MAX_VALUE;
        }
        if (!H.isArray(vals)) {
            vals = [vals];
        }
        return vals.length <= rule.max && vals.length >= rule.min;
    }
});
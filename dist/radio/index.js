function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../helpers/baseComponent")), a = e(require("../helpers/classNames"));

(0, t.default)({
    relations: {
        "../radio-group/index": {
            type: "parent"
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-radio"
        },
        cellPrefixCls: {
            type: String,
            value: "wux-cell"
        },
        selectablePrefixCls: {
            type: String,
            value: "wux-selectable"
        },
        thumb: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        label: {
            type: String,
            value: ""
        },
        value: {
            type: String,
            value: ""
        },
        checked: {
            type: Boolean,
            value: !1,
            observer: function(e) {
                this.setData({
                    inputChecked: e
                });
            }
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        color: {
            type: String,
            value: "balanced"
        }
    },
    data: {
        index: 0,
        inputChecked: !1
    },
    computed: {
        classes: [ "prefixCls", function(e) {
            return {
                cell: (0, a.default)(e),
                selectable: "".concat(e, "__selectable")
            };
        } ]
    },
    methods: {
        radioChange: function(e) {
            var t = this.data, a = t.value, l = t.index, i = t.disabled, n = this.getRelationNodes("../radio-group/index")[0], r = {
                checked: e.detail.checked,
                value: a,
                index: l
            };
            i || (n ? n.onChange(r) : this.triggerEvent("change", r));
        },
        changeValue: function(e, t) {
            var a = 0 < arguments.length && void 0 !== e && e, l = 1 < arguments.length && void 0 !== t ? t : 0;
            this.setData({
                inputChecked: a,
                index: l
            });
        }
    }
});
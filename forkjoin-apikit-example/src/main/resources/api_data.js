define({
    api: [{
        "type": "post",
        "url": "account/login",
        "title": "",
        "version": "v1",
        "name": "login",
        "group": "AccountApi",
        "filename": "api.AccountApi",
        "description": "",
        "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
        "examples": null,
        "parameter": {"fields": {"Parameter": []}},
        "success": {
            "fields": {
                "Success 200": [{
                    "group": "Success 200",
                    "type": "int",
                    "field": "status",
                    "optional": false,
                    "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                    "defaultValue": "0"
                }, {
                    "group": "Success 200",
                    "type": "String",
                    "field": "msg",
                    "optional": true,
                    "description": "错误消息,表示错误的详细信息，支持国际化",
                    "defaultValue": null
                }, {
                    "group": "Success 200",
                    "type": "Map",
                    "field": "msgMap",
                    "optional": true,
                    "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                    "defaultValue": null
                }, {
                    "group": "Success 200",
                    "type": "String",
                    "field": "data",
                    "optional": true,
                    "description": "协议返回数据",
                    "defaultValue": null
                }]
            }
        },
        "error": null
    },
        {
            "type": "post",
            "url": "account/testLogin",
            "title": "测试需要登录5",
            "version": "v1",
            "name": "testLogin",
            "group": "AccountApi",
            "filename": "api.AccountApi",
            "description": "测试需要登录5",
            "permission": {"name": "user", "title": "需要登录", "description": "需要登录后调用"},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "baseUrl/testNotLogin",
            "title": "测试不需要登录",
            "version": "v1",
            "name": "testNotLogin",
            "group": "AccountApi",
            "filename": "api.AccountApi",
            "description": "测试不需要登录",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "name",
                        "optional": true,
                        "description": "名称允许重复",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "age",
                        "optional": true,
                        "description": "年龄",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "post",
            "url": "base",
            "title": "",
            "version": "v1",
            "name": "create",
            "group": "BaseApi",
            "filename": "api.BaseApi",
            "description": "",
            "permission": {"name": "user", "title": "需要登录", "description": "需要登录后调用"},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "post",
            "url": "base/{id}",
            "title": "",
            "version": "v1",
            "name": "get",
            "group": "BaseApi",
            "filename": "api.BaseApi",
            "description": "",
            "permission": {"name": "user", "title": "需要登录", "description": "需要登录后调用"},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "baseUrl/",
            "title": "",
            "version": "v1",
            "name": "create",
            "group": "BaseApi",
            "filename": "api.BaseApi",
            "description": "",
            "permission": {"name": "user", "title": "需要登录", "description": "需要登录后调用"},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "long",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "name",
                        "optional": true,
                        "description": "名称允许重复",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "age",
                        "optional": true,
                        "description": "年龄",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "name",
                        "optional": true,
                        "description": "名称允许重复",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "age",
                        "optional": true,
                        "description": "年龄",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "page/page/{page}-{pageSize}",
            "title": "",
            "version": "v1",
            "name": "page",
            "group": "PageApi",
            "filename": "api.PageApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "count",
                        "optional": true,
                        "description": "记录总数",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "page",
                        "optional": true,
                        "description": "当前页,1开始",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "pageSize",
                        "optional": true,
                        "description": "一页大小",
                        "defaultValue": "0"
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "page/pageString/{page}-{pageSize}",
            "title": "",
            "version": "v1",
            "name": "pageString",
            "group": "PageApi",
            "filename": "api.PageApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "count",
                        "optional": true,
                        "description": "记录总数",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "page",
                        "optional": true,
                        "description": "当前页,1开始",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "pageSize",
                        "optional": true,
                        "description": "一页大小",
                        "defaultValue": "0"
                    }]
                }
            },
            "error": null
        }, {
            "type": "post",
            "url": "testVoid",
            "title": "",
            "version": "v1",
            "name": "testVoid",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "post",
            "url": "testObjectList",
            "title": "",
            "version": "v1",
            "name": "testObjectList",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "post",
            "url": "test",
            "title": "添加",
            "version": "v1",
            "name": "create",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "添加",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "test/{id}",
            "title": "",
            "version": "v1",
            "name": "get",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "put",
            "url": "test",
            "title": "",
            "version": "v1",
            "name": "update",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "patch",
            "url": "test",
            "title": "",
            "version": "v1",
            "name": "patchUpdate",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "delete",
            "url": "test/{id}",
            "title": "",
            "version": "v1",
            "name": "delete",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "delete",
            "url": "tests/{id}",
            "title": "",
            "version": "v1",
            "name": "deletes",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "search/{id}/{name}",
            "title": "",
            "version": "v1",
            "name": "search",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "testString/{name}",
            "title": "",
            "version": "v1",
            "name": "testString",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "testString1/{name}/{age}",
            "title": "",
            "version": "v1",
            "name": "testString1",
            "group": "TestApi",
            "filename": "api.TestApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "post",
            "url": "noResult/testObjectList",
            "title": "",
            "version": "v1",
            "name": "testObjectList",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "post",
            "url": "noResult/test",
            "title": "添加",
            "version": "v1",
            "name": "create",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "添加",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "noResult/test/{id}",
            "title": "",
            "version": "v1",
            "name": "get",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "put",
            "url": "noResult/test",
            "title": "",
            "version": "v1",
            "name": "update",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "patch",
            "url": "noResult/test",
            "title": "",
            "version": "v1",
            "name": "patchUpdate",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {
                "fields": {
                    "Parameter": [{
                        "group": "Parameter",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "表单模式不支持泛型",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Parameter",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "delete",
            "url": "noResult/test/{id}",
            "title": "",
            "version": "v1",
            "name": "delete",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "delete",
            "url": "noResult/tests/{id}",
            "title": "",
            "version": "v1",
            "name": "deletes",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "noResult/search/{id}/{name}",
            "title": "",
            "version": "v1",
            "name": "search",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "testForm",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "id",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValue",
                        "optional": true,
                        "description": "签名\n@see java.lang\njava.lang",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "byte",
                        "field": "bytesValue",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDate",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "boolean",
                        "field": "booleanValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "intValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "long",
                        "field": "longValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "float",
                        "field": "floatValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "double",
                        "field": "doubleValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "stringValueArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Date",
                        "field": "regDateArray",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "user",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "users",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generics",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObjs",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericUsers",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "genericObj",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": null,
                        "field": "generic",
                        "optional": true,
                        "description": "",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "noResult/testString/{name}",
            "title": "",
            "version": "v1",
            "name": "testString",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "noResult/testString1/{name}/{age}",
            "title": "",
            "version": "v1",
            "name": "testString1",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "data",
                        "optional": true,
                        "description": "协议返回数据",
                        "defaultValue": null
                    }]
                }
            },
            "error": null
        }, {
            "type": "get",
            "url": "noResult/page",
            "title": "",
            "version": "v1",
            "name": "page",
            "group": "TestNoResultApi",
            "filename": "api.TestNoResultApi",
            "description": "",
            "permission": {"name": "anonymous", "title": "不用登录", "description": ""},
            "examples": null,
            "parameter": {"fields": {"Parameter": []}},
            "success": {
                "fields": {
                    "Success 200": [{
                        "group": "Success 200",
                        "type": "int",
                        "field": "status",
                        "optional": false,
                        "description": "状态,0表示成功,其他表示错误，请查看协议公共部分",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "String",
                        "field": "msg",
                        "optional": true,
                        "description": "错误消息,表示错误的详细信息，支持国际化",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "Map",
                        "field": "msgMap",
                        "optional": true,
                        "description": "详细错误消息,key:表示错误字段,value:表示错误信息",
                        "defaultValue": null
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "count",
                        "optional": true,
                        "description": "记录总数",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "page",
                        "optional": true,
                        "description": "当前页,1开始",
                        "defaultValue": "0"
                    }, {
                        "group": "Success 200",
                        "type": "int",
                        "field": "pageSize",
                        "optional": true,
                        "description": "一页大小",
                        "defaultValue": "0"
                    }]
                }
            },
            "error": null
        }]
});
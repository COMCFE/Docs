# 淘宝联盟选品库管理

## 淘宝联盟选品库列表

**方式**

`GET`

**路径**

`/admin/tbk/index`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  page   | int |  是  |                  页码 默认为：1             |
|  limit   |  int   |  是  |                分页条数 默认为：100  |

**响应**

`Status code 200`

```json
[
    {
        "favorites_id": 20086185, /*选品库id*/
        "favorites_title": "女装",/*选品库名称*/
        "type": 1                 /*选品库类型 1：普通选品组 2：高佣选品组*/
    },
    {
        "favorites_id": 20071263,
        "favorites_title": "男装",
        "type": 1
    }
]
```

## 添加自有分类选品库

**方式**

`POST`

**路径**

`/admin/tbk/store`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  favorites_id   | int |  是  |                  选品库ID             |
|  favorites_title   |  string   |  是  |                  选品库名称  |
| type  |  int   |  是  |  类型 1：爆品 2：优选  |
| sort |  int   |  是  |                 排序  默认为0                |
|  status  |  int   |  是  |            状态：1-开启 0-关闭            |
|  position  |  int   |  是  |            位置：0:top 1:mid 2:bottom *bottom暂不显示，用于配置banner显示*         |
|  icon  |  string   |  否  |           图标地址：爆品区， position等于1 需要上传icon地址        |
|  attribute  |  string   |  是  |            属性：normal:正常列表  special:专题  hot:热销榜            |
|  label  |  string   |  否  |            标签            |
|  bgurl  |  string   |  是  |            背景图:属性为专题需要上传背景图            |
|  bgcolour  |  string   |  是  |            背景色:属性为专题需要上传背景色为rgb值            |

**响应**

`Status code 200`

```json

{
    "id": 4,                                /*记录ID*/
    "favorites_id": 20086185,               /*选品库id*/
    "favorites_title": "女装",              /*选品库名称*/
    "type": 1,                             /*类型 1：爆品 2：优选*/
    "status": 1,                           /*状态：1-开启 0-关闭*/
    "sort": 5,                            /*排序：数字越大越靠前*/
    "position": 1,                        /*位置：0:top 1:mid*/
    "icon": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562379390318", /*图标地址*/
    "attribute": "hot",                     /*属性：normal:正常列表  special:专题  hot:热销榜*/
    "label": "女装大佬",                    /*标签*/
    "bgurl": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562394023453",  /*背景图:属性为专题需要上传背景图*/
    "bgcolour": "#123456"   /*背景色:属性为专题需要上传背景色为rgb值*/
}
```

## 选品库分类列表

**方式**

`GET`

**路径**

`/admin/tbk/list`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
| type  |  int   |  是  |  类型 1：爆品 2：优选  |
|  status  |  int   |  是  |            状态：1-开启 0-关闭            |
|  limit  |  int   |  否  |            每页条数 默认为：20            |

**响应**

`Status code 200`

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,                                /*记录ID*/
           "favorites_id": 20086185,               /*选品库id*/
           "favorites_title": "女装",              /*选品库名称*/
           "type": 1,                             /*类型 1：爆品 2：优选*/
           "status": 1,                           /*状态：1-开启 0-关闭*/
           "sort": 5,                            /*排序：数字越大越靠前*/
           "position": 1,                        /*位置：0:top 1:mid*/
           "icon": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562379390318", /*图标地址*/
           "attribute": "hot",                     /*属性：normal:正常列表  special:专题  hot:热销榜*/
           "label": "女装大佬",                    /*标签*/
           "bgurl": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562394023453",  /*背景图:属性为专题需要上传背景图*/
           "bgcolour": "#123456"   /*背景色:属性为专题需要上传背景色为rgb值*/
        },
        {
            "id": 3,
            "favorites_id": 200712638,
            "favorites_title": "童装",
            "type": 1,
            "status": 1,
            "sort": 2,
            "position": 0,
            "icon": null,
            "attribute": "normal",
            "label": null,
            "bgurl": null,
            "bgcolour": null
        },
        {
            "id": 4,
            "favorites_id": 20086185,
            "favorites_title": "女装",
            "type": 1,
            "status": 1,
            "sort": 5,
            "position": 1,
            "icon": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562379390318",
            "attribute": "hot",
            "label": "女装大佬",
            "bgurl": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562394023453",
            "bgcolour": "#123456"
        }
    ],
    "first_page_url": "http://shop.igoods.com/admin/tbk/list?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://shop.igoods.com/admin/tbk/list?page=1",
    "next_page_url": null,
    "path": "http://shop.igoods.com/admin/tbk/list",
    "per_page": 20,
    "prev_page_url": null,
    "to": 3,
    "total": 3
}
```

## 更新（编辑）选品库

**方式**

`POST`

**路径**

`/admin/tbk/update/{tbkFavorites}`

**参数**

|  名称   |  类型  | 必须 |                    说明                    |
| :-----: | :----: | :--: | :----------------------------------------: |
|  favorites_id   | int |  是  |                  选品库ID             |
|  favorites_title   |  string   |  是  |                  选品库名称  |
| type  |  int   |  是  |  类型 1：爆品 2：优选  |
| sort |  int   |  是  |                 排序  默认为0                |
|  status  |  int   |  是  |            状态：1-开启 0-关闭            |
|  position  |  int   |  是  |            位置：0:top 1:mid            |
|  icon  |  string   |  否  |           图标地址：爆品区， position等于1 需要上传icon地址        |
|  attribute  |  string   |  是  |            属性：normal:正常列表  special:专题  hot:热销榜            |
|  label  |  string   |  否  |            标签            |
|  bgurl  |  string   |  是  |            背景图:属性为专题需要上传背景图            |
|  bgcolour  |  string   |  是  |            背景色:属性为专题需要上传背景色为rgb值            |


**响应**

`Status code 201`

```json
{
        "id": 3,                                /*记录ID*/
            "favorites_id": 20086185,               /*选品库id*/
            "favorites_title": "女装",              /*选品库名称*/
            "type": 1,                             /*类型 1：爆品 2：优选*/
            "status": 1,                           /*状态：1-开启 0-关闭*/
            "sort": 5,                            /*排序：数字越大越靠前*/
            "position": 1,                        /*位置：0:top 1:mid*/
            "icon": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562379390318", /*图标地址*/
            "attribute": "hot",                     /*属性：normal:正常列表  special:专题  hot:热销榜*/
            "label": "女装大佬",                    /*标签*/
            "bgurl": "http://resource.immeet.com/005QqQtujw8fd3ql7sl28j30ku0kujsb.jpg_1562394023453",  /*背景图:属性为专题需要上传背景图*/
            "bgcolour": "#123456"   /*背景色:属性为专题需要上传背景色为rgb值*/
    }
```

## 删除选品库

**方式**

`delete`

**路径**

`/admin/tbk/delete/{tbkFavorites}`

**参数**

无

**响应**

`Status code 204`

```json
[]
```
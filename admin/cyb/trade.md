# 交易管理

## 交易列表

#### 接口 URL

> {{url}}/trades

#### 请求方式

> GET

#### 请求 Query 参数

| 参数      | 示例值 | 是否必填 | 参数描述                                                                 |
| :-------- | :----- | :------- | :----------------------------------------------------------------------- |
| page      | 1      | 必填     | 当前页数                                                                 |
| limit     | 20     | 必填     | 每页条数                                                                 |
| status    | 20     | 否       | 状态:-1-全部/0-待匹配/1-进行中/2-已完成/3-已取消/4-平台介入中/5-交易撤销 |
| pay_type  | 20     | 否       | 支付方式:-1-全部/1-银行卡/2-支付宝/3-usdt                                |
| buy_type  | 20     | 否       | 买/卖方式:-1-全部/1-按数量/2-按价格                                      |
| platform  | 20     | 否       | 是否平台介入:-1-全部/0-否/1-是                                           |
| need_type | 20     | 否       | 需求类型:-1-全部/1-买入/2-卖出                                           |

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "id": 39 /*交易ID*/,
  "publisher": 9,
  "recipient": 0,
  "need_num": "1000.0000" /*创豆需求数量单位个*/,
  "need_price": "0.0500" /*现金单价单位元*/,
  "total_amount": "50.0000" /*总价单位元*/,
  "voucher": "凭证.png" /*凭证图片*/,
  "buy_type": 1 /*买/卖方式:1-按数量/2-按价格*/,
  "need_type": 2 /*需求类型:1-买入/2-卖出*/,
  "pay_type": 3 /*支付类型:1-银行卡/2-支付宝/3-usdt*/,
  /*收款方式*/
  "receive_payment": {
    "name": "张三" /*姓名*/,
    "number": "alipay@qq.com" /*收款账号*/,
    "bank": "中国银行" /*开户行*/,
    "type": 1 /*1-银行卡/2-支付宝*/
  },
  "match_at": "2020-08-12 20:27:26" /*匹配时间*/,
  "cancel_at": "2020-08-12 20:27:26" /*自动取消时间*/,
  "frozen_at": "2020-08-12 20:27:26" /*自动冻结时间*/,
  "submit_at": "2020-08-12 20:27:26" /*提交时间*/,
  "platform_at": "2020-08-12 20:27:26" /*平台介入时间*/,
  "close_at": "2020-08-12 20:27:26" /*关闭时间*/,
  "complete_at": "2020-08-12 20:27:26" /*完成时间*/,
  "revoke_at": "2020-08-12 20:27:26" /*撤销时间*/,
  "platform": 0 /*是否平台介入:0-否/1-是*/,
  "admin_id": 0,
  "status": 2 /*0-待匹配/1-进行中/2-已完成/3-撤销/4-平台介入中/5-关闭*/,
  "created_at": "2020-08-14 18:19:52" /*创建时间*/,
  "updated_at": "2020-08-17 10:41:23",
  "cancel_seconds": 0,
  "frozen_seconds": 0,
  /*发布人信息*/
  "publisher_user": {
    "id": 9,
    "name": "0CGLAL",
    "phone_number": "17308065804",
    "avatar": null,
    "gender": 0
  },
  /*下单人信息*/
  "recipient_user": {
    "id": 9,
    "name": "0CGLAL",
    "phone_number": "17308065804",
    "avatar": null,
    "gender": 0
  },
  /*处理人信息*/
  "admin": {
    "id": 1,
    "name": "管理员"
  }
}
```

## 交易确认[status===4 呈现该按钮]

#### 接口 URL

> {{url}}/trades/{trade}/confirm

#### 请求方式

> POST

#### 请求 Query 参数

none

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```

## 交易关闭[status===4 呈现该按钮]

#### 接口 URL

> {{url}}/trades/{trade}/colse

#### 请求方式

> POST

#### 请求 Query 参数

none

#### 请求 Header 参数

| 参数          | 示例值    | 是否必填 | 参数描述 |
| :------------ | :-------- | :------- | :------- |
| Authorization | {{token}} | 必填     | token    |

#### 成功响应示例

```json
{
  "msg": "ok",
  "code": 0,
  "data": null
}
```
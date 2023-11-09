var body = $response.body;
var obj = JSON.parse(body);

obj.vip_info = [{
    "register": "20200101",
    "autodeduct": "0",
    "daily": "10",
    "expire": "20290101",
    "grow": "20",
    "is_vip": "1",
    "last_pay": "0",
    "level": "8",
    "pay_id": "0",
    "remind": "0",
    "is_year": "1",
    "user_vas": "2",
    "vas_type": "5"
}]

body = JSON.stringify(obj);
$done({body});

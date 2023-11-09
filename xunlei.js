var body = $response.body;
var obj = JSON.parse(body);

obj.vip_info = [{
    "register": "19700101",
    "autodeduct": "0",
    "daily": "-10",
    "expire": "0",
    "grow": "20",
    "is_vip": "1",
    "last_pay": "0",
    "level": "0",
    "pay_id": "0",
    "remind": "0",
    "is_year": "1",
    "user_vas": "2",
    "vas_type": "5",
    "vip_icon": {
        "general": "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_a/vip_level1_deactivate.png",
        "small": "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_b/vip_lever1_deactivate.png"
    }
}]

body = JSON.stringify(obj);
$done({body});

---
title: evgps物模型介绍
index: false
icon: iconfont icon-blog
category:
  - evmars
---

## evgps物模型介绍

evgps物模型是基于[evmars-loctube物模型](./evgps-protocol.md)，根据eview tcp protocol定义出来的。

### 属性
| 唯一标识别 | 名称 | 说明 |
| -------- | ---------------------- | -------------------------|
|module    |0x02 module 0x01    |Module Number<br/>模块编号|字符串                 |
|version   |0x02 version 0x02   |Firmware Version<br/>固件版本|字符串                 |
|ICCID     |0x02 ICCID 0x04     |ICCID<br/>ICCID     |字符串                 |
|MAC       |0x02 MAC 0x05       |MAC<br/>MAC         |字符串                 |
|dateTime  |0x02 dateTime 0x06  |Setting Time<br/>设定时间|时间                  |
|runTime   |0x02 runTime 0x07   |Run Times<br/>运行时间  |长整型                 |
|firmware  |0x02 firmware 0x08  |Firmware Information<br/>固件信息|对象类型                |
|mileage   |0x02 mileage 0x09   |mileage<br/>里程      |整型                  |
|workMode  |0x02 workMode 0x0a  |Working Mode<br/>工作模式|对象类型                |
|alarmClock|0x02 alarmClock 0x0b|alarmClock<br/>闹钟   |数组                  |
|noDisturb |0x02 noDisturb 0x0c |noDisturb<br/>请勿打扰  |对象类型                |
|password  |0x02 password 0x0d  |Password Protect<br/>密码保护|对象类型                |
|timeZone  |0x02 timeZone 0x0e  |Time Zone<br/>区时    |单精度浮点数              |
|enableControl|0x02 enableControl 0x0f|Enable Control<br/>启用控制|对象类型                |
|ringToneVolume|0x02 ringToneVolume 0x10|ringToneVolume<br/>铃声音量|整型                  |
|micVolume |0x02 micVolume 0x11 |micVolume<br/>麦克风音量 |整型                  |
|speakerVolume|0x02 speakerVolume 0x12|speakerVolume<br/>扬声器音量|整型                  |
|deviceName|0x02 deviceName 0x13|Device name For BLE connection only<br/>设备名称 仅用于 BLE 连接|字符串                 |
|battery   |0x02 battery 0x14   |Battery<br/>电池      |对象类型                |
|bleLoc    |0x02 bleLoc 0x15    |BLE locating<br/>BLE定位|对象类型                |
|bleWhiteList|0x02 bleWhiteList 0x16|bleWhiteList<br/>ble白名单|数组                  |
|smsgpsurl |0x02 smsgpsurl 0x17 |SMS GPS URL<br/>SMS GPS URL|字符串                 |
|smswifiurl|0x02 smswifiurl 0x18|SMS WI-FI/LBS URL<br/>SMS WI-FI/LBS URL|字符串                 |
|music     |0x02 music 0x19     |music<br/>音乐        |对象类型                |
|fwVersion |0x02 fwVersion 0x1a |FwVersion<br/>固件版本  |字符串                 |
|gsmModule |0x02 gsmModule 0x1b |GSM Module<br/>GSM模块|字符串                 |
|promptVolume|0x02 promptVolume 0x1c|PromptVolume<br/>提示音量|整型                  |
|agpsLoc   |0x02 agpsLoc 0x1d   |AGPS Reference Location<br/>agps参考定位|对象类型                |
|locale    |0x02 locale 0x1f    |locale<br/>本地化，系统语言 |字符串                 |
|sosButton |0x02 sosButton 0x20 |SOS Button<br/>求救按钮 |对象类型                |
|call1Button|0x02 call1Button 0x21|Call 1 Button<br/>呼叫 1 按钮|对象类型                |
|call2Button|0x02 call2Button 0x22|Call 2 Button<br/>呼叫 2 按钮|对象类型                |
|number    |0x02 number 0x30    |Set Authorized Number<br/>设置授权号码|数组                  |
|smsOption |0x02 smsOption 0x31 |SMS Reply Prefix Text<br/>短信回复前缀文本|对象类型                |
|sosOption |0x02 sosOption 0x32 |SOS Option<br/>SOS 选项|对象类型                |
|phoneOption|0x02 phoneOption 0x33|Phone Switches<br/>电话开关|对象类型                |
|numberNamePhoto|0x02 numberNamePhoto 0x34|Set Authorized Number with Name and Photos（EV05）<br/>用姓名和照片设置授权号码（EV05）|数组                  |
|personalInfo|0x02 personalInfo 0x35|Set Personal Data Information<br/>设置个人资料信息（EV05）|对象类型                |
|watch     |0x02 watch 0x36     |Watch Settings (EV05 only)<br/>手表设置|对象类型                |
|apn       |0x02 apn 0x40       |APN<br/>APN         |字符串                 |
|apnUserName|0x02 apnUserName 0x41|APN User Name<br/>APN用户名|字符串                 |
|apnPassword|0x02 apnPassword 0x42|APN Password<br/>APN 密码|字符串                 |
|sever     |0x02 sever 0x43     |Sever IP &Port<br/>服务端IP和端口|对象类型                |
|timeInterval|0x02 timeInterval 0x44|Time Interval<br/>时间间隔|对象类型                |
|continueLocate|0x02 continueLocate 0x45|Continue Locating Time Interval<br/>继续定位时间间隔|对象类型                |
|heartRate |0x02 heartRate 0x46 |Heart Rate Interval<br/>心率间隔|对象类型                |
|customizedId|0x02 customizedId 0x47|Customized Device ID follows the IMEI in every message<br/>自定义设备 ID 在每条消息中都遵循 IMEI|字符串                 |
|readStaticAes128Crc|0x02 readStaticAes128Crc 0x49|Read Static AES128 CRC<br/>读取静态 AES128 CRC|对象类型                |
|wifiList  |0x02 wifiList 0x4a  |WIFI List<br/>WIFI列表|数组                  |
|catm      |0x02 catm 0x4b      |Cat-M Setting<br/>Cat-M 设置|对象类型                |
|apnList   |0x02 apnList 0x4c   |APN List<br/>APN 列表 |数组                  |
|apnNow    |0x02 apnNow 0x4d    |APN Now<br/>当前APN   |对象类型                |
|gsmBand   |0x02 gsmBand 0x4e   |GSM band<br/>GSM频段  |整型                  |
|networkType|0x02 networkType 0x4f|Network Type<br/>网络类型|整型                  |
|powerLowAlert|0x02 powerLowAlert 0x50|Power Alert<br/>电源警报|对象类型                |
|geoAlert  |0x02 geoAlert 0x51  |GEP Alert<br/>GEP 警报|数组                  |
|motionAlert|0x02 motionAlert 0x52|Motion Alert<br/>运动警报|对象类型                |
|noMotionAlert|0x02 noMotionAlert 0x53|No-motion Alert<br/>无动作警报|对象类型                |
|overSpeedAlert|0x02 overSpeedAlert 0x54|Over speed Alert<br/>超速警报|对象类型                |
|tiltAlert |0x02 tiltAlert 0x55 |Tilt Alert<br/>倾斜警报 |对象类型                |
|fallDownAlert|0x02 fallDownAlert 0x56|Fall Down Alert<br/>跌倒警报|对象类型                |
|welfareAlert|0x02 welfareAlert 0x57|Welfare Check (EC03 Only)<br/>|对象类型                |
|notificationAlert|0x02 notificationAlert 0x58|Alert Notification (EV04 only)<br/>警报通知|对象类型                |
|motionLevel|0x02 motionLevel 0x59|Motion level<br/>运动水平|整型                  |
|geoDetect |0x02 geoDetect 0x5a |GEO Alert Detect Settings<br/>GEO警报检测设置|整型                  |
|stepCollect|0x02 stepCollect 0x5b|Step Collect Settings<br/>步骤收集设置|整型                  |
|simCardMsisdn|0x02 simCardMsisdn 0x61|SIM card MSISDN<br/>SIM卡MSISDN|字符串                 |
|wifiWhiteList|0x02 wifiWhiteList 0x62|wifi whitelist<br/>wifi白名单|数组                  |
|nightMode |0x02 nightMode 0x63 |Night mode (0x63) EC02 Only<br/>夜间模式|对象类型                |
|network   |0x02 network 0x64   |Mobile network information<br/>移动网络信息|对象类型                |
|IMSI      |0x02 IMSI 0x66      |IMSI<br/>IMSI       |字符串                 |
|homeWifiMatch|0x02 homeWifiMatch 0x67|Home WiFi match number<br/>家庭 WiFi 匹配号码|对象类型                |
|bleScanTime|0x02 bleScanTime 0x70|3.2.70 BLE Scan time(0x70)(CTM:EV07B(X))<br/>BLE扫描时间|对象类型                |
|bleScanBeacon|0x02 bleScanBeacon 0x71|3.2.71 BLE Scan beacon (0x71) (CTM:EV07B(X))<br/>BLE扫描信标|对象类型                |
|bleIBeaconUUID|0x02 bleIBeaconUUID 0x72|3.2.72 BLE iBeacon UUID(0x72) (CTM:EV07B(X))<br/>BLE iBeacon UUID|对象类型                |
|beaconList|0x02 beaconList 0x73|Beacon location list<br/>信标位置列表|数组                  |
|findMeConfigure|0x02 findMeConfigure 0x74|3.2.74 Find Me configure (0x74 CTM: EV07BX 0107)<br/>查找我配置|对象类型                |
|extraControl|0x02 extraControl 0x75|Extra Enable Control<br/>额外的启用控制|对象类型                |
|musicExtend|0x02 musicExtend 0x76|Music Extend<br/>音乐扩展|对象类型                |
|ledDefaultState|0x02 ledDefaultState 0xe0|3.2.80 LED Default State (0xE0)(EV202 EV09 Only)<br/>LED默认状态|对象类型                |


### 功能
| 唯一标识别 | 名称 | 说明 |
| -------- | ---------------------- | -------------------------|
|hexFunctionCommand|hexFunctionCommand  |发送Hex指令             |
|hexDelayCommand|hexDelayCommand     |发送Hex 延迟指令，需要产品开启延迟指令支持|
|setStaticAes128|0x02 setStaticAes128 0x48|Static AES128 Set <br/>设置静态 AES128|
|singleLocating|0x01 singleLocating 0x12|Single Locating<br/>单个定位|
|continueLocating|0x01 continueLocating 0x13|Continue Locating<br/>持续定位|
|walkPetSwitch|0x01 walkPetSwitch 0x15| Walk pet switch(0x15)(PET Only)<br/>遛宠物开关|
|readConfiguration|0xf0 readConfiguration 0xf0|read configuration  |


### 事件
| 唯一标识别 | 名称 | 说明 |
| -------- | ---------------------- | -------------------------|
|generalLocation|generalLocation     |generalLocation定位组合属性|
|trackerActive|trackerActive       |trackerActive活跃度记录  |
|trackerStep|trackerStep         |trackerStep计步记录     |
|trackerAlarm|trackerAlarm        |trackerAlarm告警记录    |
|trackerAlarmState|trackerAlarmState   |trackerAlarmState告警记录状态|
|trackerAppLocation|trackerAppLocation  |trackerAppLocationAPP上报定位数据|
|addresses |0x03 addresses 0x11 |Translates addresses<br/>翻译地址|
|systemTime|0x03 systemTime 0x12|Get Timestamp Get UTC timestamp from the server<br/>从服务器获取 UTC 时间戳|
|weather   |0x03 weather 0x13   |Weather data request<br/>请求天气数据|
|location_gsm|0x03 location_gsm 0x21|Cell Towers<br/>Cell Towers|
|location_wifi|0x03 location_wifi 0x22|WI-FI Towers<br/>WI-FI Towers|
|iccid     |0x01 iccid 0x04     |ICCID<br/>上报ICCID   |
|petWalking|0x01 petWalking 0x14| Walk pet(0x14)(PET Only)<br/>遛宠物|
|gps       |0x01 gps 0x20       |GPS Location<br/>GPS位置|
|gsm       |0x01 gsm 0x21       |3.1.8 Cell Towers (for 2G devices) (0x21)<br/>|
|gsm2      |0x01 gsm2 0x29      |3.1.8* Cell Towers (for WCDMA/LTE)(0x29) (New added)(EV07BX/EV04/EV05 Only)<br/>|
|gsm3      |0x01 gsm3 0x2b      |3.1.8** Cell Towers (for WCDMA/LTE)(0x2B) (New added)(EV07BX/EV04/EV05 Only)<br/>|
|wifi      |0x01 wifi 0x22      |3.1.9 Wi-Fi Towers (0x22)<br/>Wi-Fi|
|wifi2     |0x01 wifi2 0x19     |3.1.19x New Wi-Fi Loc Info(0x19)（CTM: EV07BX_3102 4505）<br/>新的 Wi-Fi Loc 信息|
|ble       |0x01 ble 0x23       |3.1.10 BLE Location (0x23)<br/>|
|status    |0x01 status 0x24    |3.1.11 General Data(0x24)<br/>数据头|
|callList  |0x01 callList 0x25  |3.1.12 Call Records (0x25) EV09 Only<br/>通话记录|
|ble2      |0x01 ble2 0x26      |3.1.13 BLE Location 2 (0x26) EV04/EV05 only<br/>BLE定位|
|smart     |0x01 smart 0x27     |3.1.14 Smart Location (0x27) EV04 only<br/>智能定位|
|beacon    |0x01 beacon 0x28    |3.1.15 Beacon Location (0x28)<br/>信标位置|
|homeWifi  |0x01 homeWifi 0x2a  |3.1.16 Home Wi-Fi Location (0x2A))<br/>家庭 Wi-Fi 位置|
|beacon2   |0x01 beacon2 0x2c   |3.1.2C BeaconV2 Location (0x2C)<br/>BeaconV2定位|
|beaconList|0x01 beaconList 0x33|3.1.20 Beacon List (0x33) (CTM:EV07BX 9101)<br/>信标列表|
|beaconList2|0x01 beaconList2 0x34|3.1.34 Beacon List (0x34) (CTM:EV04 0071)<br/>信标列表|
|heartList |0x01 heartList 0x40 |3.1.21 Heart Rate Data (0x40)(EC02 EV05 EV06 Only)<br/>心率数据|
|spo2List  |0x01 spo2List 0x41  |3.1.21 SPO2 Data (0x41)(EV06 Only)<br/>SPO2 数据|
|bleHRS4SIG|0x01 bleHRS4SIG 0x60|3.1.22 BLE HRS for SIG (0x60) (CTM:EV07B 4404)<br/>用于 SIG 的 BLE HRS|
|bleHRS4SIG2|0x01 bleHRS4SIG2 0x61|3.1.23 BLE HTS for SIG (0x61) (CTM:EV07B 4404)<br/>用于 SIG 的 BLE HRS|
|blePeri   |0x01 blePeri 0x62   |3.1.24 BLE peri connect state notice (0x62) (CTM:EV07B(X) 4404 4702)<br/>BLE peri 连接状态通知|
|closeDeviceInfo|0x01 closeDeviceInfo 0x63|3.1.25 Close Device Information (0x63) (CTM:EV07B 35301)<br/>关闭设备信息|
|healthData3rd|0x01 healthData3rd 0x64|3.1.26 Health Data 3rd Device (0x64)<br/>第三设备健康数据|
|logRecord |0x01 logRecord 0xf0 |3.1.F0 Internal Use<br/>记录|
---
title: evgps tsl
index: false
icon: iconfont icon-blog
category:
  - evmars
---


## evgps tsl


### properties
| id | name | description |
| -------- | ---------------------- | -------------------------|
|module    |0x02 module 0x01    |Module Number<br/>Module Number|
|version   |0x02 version 0x02   |Firmware Version<br/>Firmware version|
|ICCID     |0x02 ICCID 0x04     |ICCID<br/>ICCID     |
|MAC       |0x02 MAC 0x05       |MAC<br/>MAC         |
|dateTime  |0x02 dateTime 0x06  |Setting Time<br/>Set time|
|runTime   |0x02 runTime 0x07   |Run Times<br/>Run time|
|firmware  |0x02 firmware 0x08  |Firmware Information<br/>Firmware Information|
|mileage   |0x02 mileage 0x09   |mileage<br/>mileage |
|workMode  |0x02 workMode 0x0a  |Working Mode<br/>Working mode|
|alarmClock|0x02 alarmClock 0x0b|alarmClock<br/>alarm clock|
|noDisturb |0x02 noDisturb 0x0c |noDisturb<br/>Do not disturb.|
|password  |0x02 password 0x0d  |Password Protect<br/>Password protection|
|timeZone  |0x02 timeZone 0x0e  |Time Zone<br/>District time|
|enableControl|0x02 enableControl 0x0f|Enable Control<br/>Enable Control|
|ringToneVolume|0x02 ringToneVolume 0x10|ringToneVolume<br/>ringer volume |
|micVolume |0x02 micVolume 0x11 |micVolume<br/>mic vol |
|speakerVolume|0x02 speakerVolume 0x12|speakerVolume<br/>Speaker volume|
|deviceName|0x02 deviceName 0x13|Device name For BLE connection only<br/>Device name is only used for BLE connections|
|battery   |0x02 battery 0x14   |Battery<br/>Battery |
|bleLoc    |0x02 bleLoc 0x15    |BLE locating<br/>BLE positioning|
|bleWhiteList|0x02 bleWhiteList 0x16|bleWhiteList<br/>Ble whitelist|
|smsgpsurl |0x02 smsgpsurl 0x17 |SMS GPS URL<br/>SMS GPS URL|
|smswifiurl|0x02 smswifiurl 0x18|SMS WI-FI/LBS URL<br/>SMS WI-FI/LBS URL|
|music     |0x02 music 0x19     |music<br/>music     |
|fwVersion |0x02 fwVersion 0x1a |FwVersion<br/>Firmware version|
|gsmModule |0x02 gsmModule 0x1b |GSM Module<br/>GSM module|
|promptVolume|0x02 promptVolume 0x1c|PromptVolume<br/>beep volume |
|agpsLoc   |0x02 agpsLoc 0x1d   |AGPS Reference Location<br/>AGPS reference positioning|
|locale    |0x02 locale 0x1f    |locale<br/>Localization, System Language|
|sosButton |0x02 sosButton 0x20 |SOS Button<br/>Distress button|
|call1Button|0x02 call1Button 0x21|Call 1 Button<br/>Call 1 button|
|call2Button|0x02 call2Button 0x22|Call 2 Button<br/>Call 2 button|
|number    |0x02 number 0x30    |Set Authorized Number<br/>Set Authorization Number|
|smsOption |0x02 smsOption 0x31 |SMS Reply Prefix Text<br/>SMS reply prefix text|
|sosOption |0x02 sosOption 0x32 |SOS Option<br/>SOS Options|
|phoneOption|0x02 phoneOption 0x33|Phone Switches<br/>Telephone switch|
|numberNamePhoto|0x02 numberNamePhoto 0x34|Set Authorized Number with Name and Photos（EV05）<br/>Set authorization number with name and photo (EV05)|
|personalInfo|0x02 personalInfo 0x35|Set Personal Data Information<br/>Set personal profile information (EV05)|
|watch     |0x02 watch 0x36     |Watch Settings (EV05 only)<br/>Watch settings|
|apn       |0x02 apn 0x40       |APN<br/>APN         |
|apnUserName|0x02 apnUserName 0x41|APN User Name<br/>APN username|
|apnPassword|0x02 apnPassword 0x42|APN Password<br/>APN password|
|sever     |0x02 sever 0x43     |Sever IP &Port<br/>Server IP and Port|
|timeInterval|0x02 timeInterval 0x44|Time Interval<br/>time interval|
|continueLocate|0x02 continueLocate 0x45|Continue Locating Time Interval<br/>Continue positioning time interval|
|heartRate |0x02 heartRate 0x46 |Heart Rate Interval<br/>Heart rate interval|
|customizedId|0x02 customizedId 0x47|Customized Device ID follows the IMEI in every message<br/>Custom device ID follows IMEI in every message|
|readStaticAes128Crc|0x02 readStaticAes128Crc 0x49|Read Static AES128 CRC<br/>Read static AES128 CRC|
|wifiList  |0x02 wifiList 0x4a  |WIFI List<br/>WIFI List|
|catm      |0x02 catm 0x4b      |Cat-M Setting<br/>Cat-M settings|
|apnList   |0x02 apnList 0x4c   |APN List<br/>APN List|
|apnNow    |0x02 apnNow 0x4d    |APN Now<br/>Current APN|
|gsmBand   |0x02 gsmBand 0x4e   |GSM band<br/>GSM frequency band|
|networkType|0x02 networkType 0x4f|Network Type<br/>Network type|
|powerLowAlert|0x02 powerLowAlert 0x50|Power Alert<br/>Power alarm|
|geoAlert  |0x02 geoAlert 0x51  |GEP Alert<br/>GEP alarm|
|motionAlert|0x02 motionAlert 0x52|Motion Alert<br/>Motion Alert|
|noMotionAlert|0x02 noMotionAlert 0x53|No-motion Alert<br/>No action alarm|
|overSpeedAlert|0x02 overSpeedAlert 0x54|Over speed Alert<br/>Overspeed alarm|
|tiltAlert |0x02 tiltAlert 0x55 |Tilt Alert<br/>Tilt alarm|
|fallDownAlert|0x02 fallDownAlert 0x56|Fall Down Alert<br/>Fall alarm|
|welfareAlert|0x02 welfareAlert 0x57|Welfare Check (EC03 Only)|
|notificationAlert|0x02 notificationAlert 0x58|Alert Notification (EV04 only)<br/>Alert Notification|
|motionLevel|0x02 motionLevel 0x59|Motion level<br/>Exercise level|
|geoDetect |0x02 geoDetect 0x5a |GEO Alert Detect Settings<br/>GEO alarm detection settings|
|stepCollect|0x02 stepCollect 0x5b|Step Collect Settings<br/>Step Collection Settings|
|simCardMsisdn|0x02 simCardMsisdn 0x61|SIM card MSISDN<br/>SIM card MSISDN|
|wifiWhiteList|0x02 wifiWhiteList 0x62|wifi whitelist<br/>WiFi whitelist|
|nightMode |0x02 nightMode 0x63 |Night mode (0x63) EC02 Only<br/>Night mode|
|network   |0x02 network 0x64   |Mobile network information<br/>Mobile network information|
|IMSI      |0x02 IMSI 0x66      |IMSI<br/>IMSI       |
|homeWifiMatch|0x02 homeWifiMatch 0x67|Home WiFi match number<br/>Home WiFi matching number|
|bleScanTime|0x02 bleScanTime 0x70|3.2.70 BLE Scan time(0x70)(CTM:EV07B(X))<br/>BLE scan time|
|bleScanBeacon|0x02 bleScanBeacon 0x71|3.2.71 BLE Scan beacon (0x71) (CTM:EV07B(X))<br/>BLE scanning beacon|
|bleIBeaconUUID|0x02 bleIBeaconUUID 0x72|3.2.72 BLE iBeacon UUID(0x72) (CTM:EV07B(X))<br/>BLE iBeacon UUID|
|beaconList|0x02 beaconList 0x73|Beacon location list<br/>Beacon Location List|
|findMeConfigure|0x02 findMeConfigure 0x74|3.2.74 Find Me configure (0x74 CTM: EV07BX 0107)<br/>Find My Configuration|
|extraControl|0x02 extraControl 0x75|Extra Enable Control<br/>Additional enabling controls|
|musicExtend|0x02 musicExtend 0x76|Music Extend<br/>Music extension|
|ledDefaultState|0x02 ledDefaultState 0xe0|3.2.80 LED Default State (0xE0)(EV202 EV09 Only)<br/>LED default state|


### functions
| id | name | description |
| -------- | ---------------------- | -------------------------|
|hexFunctionCommand|hexFunctionCommand  |Send Hex command    |
|hexDelayCommand|hexDelayCommand     |Sending Hex delay command requires product activation delay command support|
|setStaticAes128|0x02 setStaticAes128 0x48|Static AES128 Set <br/>Set static AES128|
|singleLocating|0x01 singleLocating 0x12|Single Locating<br/>Single positioning|
|continueLocating|0x01 continueLocating 0x13|Continue Locating<br/>Continuous positioning|
|walkPetSwitch|0x01 walkPetSwitch 0x15|Walk pet switch(0x15)(PET Only)<br/>Pet walking switch|
|readConfiguration|0xf0 readConfiguration 0xf0|read configuration  |


### events
| id | name | description |
| -------- | ---------------------- | -------------------------|
|generalLocation|generalLocation     |GeneralLocation positioning combination attribute|
|trackerActive|trackerActive       |TrackerActive activity record|
|trackerStep|trackerStep         |TrackerStep step counting record|
|trackerAlarm|trackerAlarm        |TrackerAlarm alarm recording|
|trackerAlarmState|trackerAlarmState   |TrackerAlarm State alarm recording status|
|trackerAppLocation|trackerAppLocation  |TrackerAppLocationAPP reports location data|
|addresses |0x03 addresses 0x11 |Translates addresses<br/>Translation address|
|systemTime|0x03 systemTime 0x12|Get Timestamp Get UTC timestamp from the server<br/>Obtain UTC timestamp from server|
|weather   |0x03 weather 0x13   |Weather data request<br/>Request weather data|
|location_gsm|0x03 location_gsm 0x21|Cell Towers<br/>Cell Towers|
|location_wifi|0x03 location_wifi 0x22|WI-FI Towers<br/>WI-FI Towers|
|iccid     |0x01 iccid 0x04     |ICCID<br/>Report ICCID|
|petWalking|0x01 petWalking 0x14|Walk pet(0x14)(PET Only)<br/>Walking Pets|
|gps       |0x01 gps 0x20       |GPS Location<br/>GPS position|
|gsm       |0x01 gsm 0x21       |3.1.8 Cell Towers (for 2G devices) (0x21)|
|gsm2      |0x01 gsm2 0x29      |3.1.8* Cell Towers (for WCDMA/LTE)(0x29) (New added)(EV07BX/EV04/EV05 Only)|
|gsm3      |0x01 gsm3 0x2b      |3.1.8** Cell Towers (for WCDMA/LTE)(0x2B) (New added)(EV07BX/EV04/EV05 Only)|
|wifi      |0x01 wifi 0x22      |3.1.9 Wi-Fi Towers (0x22)<br/>Wi-Fi|
|wifi2     |0x01 wifi2 0x19     |3.1.19x New Wi-Fi Loc Info(0x19)（CTM: EV07BX_3102 4505）<br/>New Wi Fi Loc Information|
|ble       |0x01 ble 0x23       |3.1.10 BLE Location (0x23)|
|status    |0x01 status 0x24    |3.1.11 General Data(0x24)<br/>Data header|
|callList  |0x01 callList 0x25  |3.1.12 Call Records (0x25) EV09 Only<br/>Call logs|
|ble2      |0x01 ble2 0x26      |3.1.13 BLE Location 2 (0x26) EV04/EV05 only<br/>BLE positioning|
|smart     |0x01 smart 0x27     |3.1.14 Smart Location (0x27) EV04 only<br/>Intelligent positioning|
|beacon    |0x01 beacon 0x28    |3.1.15 Beacon Location (0x28)<br/>Beacon position|
|homeWifi  |0x01 homeWifi 0x2a  |3.1.16 Home Wi-Fi Location (0x2A))<br/>Home Wi Fi location|
|beacon2   |0x01 beacon2 0x2c   |3.1.2C BeaconV2 Location (0x2C)<br/>BeaconV2 positioning|
|beaconList|0x01 beaconList 0x33|3.1.20 Beacon List (0x33) (CTM:EV07BX 9101)<br/>Beacon List|
|beaconList2|0x01 beaconList2 0x34|3.1.34 Beacon List (0x34) (CTM:EV04 0071)<br/>Beacon List|
|heartList |0x01 heartList 0x40 |3.1.21 Heart Rate Data (0x40)(EC02 EV05 EV06 Only)<br/>Heart rate data|
|spo2List  |0x01 spo2List 0x41  |3.1.21 SPO2 Data (0x41)(EV06 Only)<br/>SPO2 data|
|bleHRS4SIG|0x01 bleHRS4SIG 0x60|3.1.22 BLE HRS for SIG (0x60) (CTM:EV07B 4404)<br/>BLE HRS for SIG|
|bleHRS4SIG2|0x01 bleHRS4SIG2 0x61|3.1.23 BLE HTS for SIG (0x61) (CTM:EV07B 4404)<br/>BLE HRS for SIG|
|blePeri   |0x01 blePeri 0x62   |3.1.24 BLE peri connect state notice (0x62) (CTM:EV07B(X) 4404 4702)<br/>BLE peri connection status notification|
|closeDeviceInfo|0x01 closeDeviceInfo 0x63|3.1.25 Close Device Information (0x63) (CTM:EV07B 35301)<br/>Turn off device information|
|healthData3rd|0x01 healthData3rd 0x64|3.1.26 Health Data 3rd Device (0x64)<br/>Third device health data|
|logRecord |0x01 logRecord 0xf0 |3.1.F0 Internal Use<br/>record|
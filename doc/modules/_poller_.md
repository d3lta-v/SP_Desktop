[sp_desktop](../README.md) > ["poller"](../modules/_poller_.md)

# External module: "poller"

## Index

### Functions

* [calendarPoll](_poller_.md#calendarpoll)
* [crowdPoll](_poller_.md#crowdpoll)
* [spWifiPoll](_poller_.md#spwifipoll)
* [timetablePoll](_poller_.md#timetablepoll)

---

## Functions

<a id="calendarpoll"></a>

###  calendarPoll

▸ **calendarPoll**(): `void`

*Defined in [poller.ts:10](https://github.com/d3lta-v/SP_Desktop/blob/a479f72/src/poller.ts#L10)*

Retrieves events from the SP Calendar API and displays it in the main tab, if there is an event right now

**Returns:** `void`

___
<a id="crowdpoll"></a>

###  crowdPoll

▸ **crowdPoll**(): `void`

*Defined in [poller.ts:200](https://github.com/d3lta-v/SP_Desktop/blob/a479f72/src/poller.ts#L200)*

Checks for crowd data and displays it in the crowd tab

**Returns:** `void`

___
<a id="spwifipoll"></a>

###  spWifiPoll

▸ **spWifiPoll**(): `void`

*Defined in [poller.ts:161](https://github.com/d3lta-v/SP_Desktop/blob/a479f72/src/poller.ts#L161)*

Checks if the user is connected to SP Wi-Fi and displays the connectivity status

**Returns:** `void`

___
<a id="timetablepoll"></a>

###  timetablePoll

▸ **timetablePoll**(): `void`

*Defined in [poller.ts:60](https://github.com/d3lta-v/SP_Desktop/blob/a479f72/src/poller.ts#L60)*

Gets the timetable for today and checks if the user is attending a lesson. Displays the lesson if any in the main tab

**Returns:** `void`

___


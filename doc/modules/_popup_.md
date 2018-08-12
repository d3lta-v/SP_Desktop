[sp_desktop](../README.md) > ["popup"](../modules/_popup_.md)

# External module: "popup"

## Index

### Functions

* [calendarPoll](_popup_.md#calendarpoll)
* [clockPoll](_popup_.md#clockpoll)
* [crowdPoll](_popup_.md#crowdpoll)
* [showTab](_popup_.md#showtab)
* [spWifiPoll](_popup_.md#spwifipoll)
* [startAllPollers](_popup_.md#startallpollers)
* [timetablePoll](_popup_.md#timetablepoll)

---

## Functions

<a id="calendarpoll"></a>

###  calendarPoll

▸ **calendarPoll**(): `void`

*Defined in [popup.ts:36](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/popup.ts#L36)*

Retrieves events from the SP Calendar API and displays it in the main tab, if there is an event right now

**Returns:** `void`

___
<a id="clockpoll"></a>

###  clockPoll

▸ **clockPoll**(): `void`

*Defined in [popup.ts:27](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/popup.ts#L27)*

Refreshes the clock display every 1 second

**Returns:** `void`

___
<a id="crowdpoll"></a>

###  crowdPoll

▸ **crowdPoll**(): `void`

*Defined in [popup.ts:169](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/popup.ts#L169)*

Checks for crowd data and displays it in the crowd tab

**Returns:** `void`

___
<a id="showtab"></a>

###  showTab

▸ **showTab**(name: *`string`*): `void`

*Defined in [popup.ts:289](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/popup.ts#L289)*

Shows a single tab and hides all other tabs

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Name of the single tab to show |

**Returns:** `void`

___
<a id="spwifipoll"></a>

###  spWifiPoll

▸ **spWifiPoll**(): `void`

*Defined in [popup.ts:141](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/popup.ts#L141)*

Checks if the user is connected to SP Wi-Fi and displays the connectivity status

**Returns:** `void`

___
<a id="startallpollers"></a>

###  startAllPollers

▸ **startAllPollers**(): `void`

*Defined in [popup.ts:10](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/popup.ts#L10)*

Starts all of the pollers, basically functions that needs to run periodically

**Returns:** `void`

___
<a id="timetablepoll"></a>

###  timetablePoll

▸ **timetablePoll**(): `void`

*Defined in [popup.ts:77](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/popup.ts#L77)*

Gets the timetable for today and checks if the user is attending a lesson. Displays the lesson if any in the main tab

**Returns:** `void`

___


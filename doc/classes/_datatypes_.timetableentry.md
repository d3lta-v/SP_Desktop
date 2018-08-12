[sp_desktop](../README.md) > ["datatypes"](../modules/_datatypes_.md) > [TimetableEntry](../classes/_datatypes_.timetableentry.md)

# Class: TimetableEntry

A class that Encapsulates a single timetable entry and provides helper functions

## Hierarchy

**TimetableEntry**

## Index

### Constructors

* [constructor](_datatypes_.timetableentry.md#constructor)

### Properties

* [abbreviation](_datatypes_.timetableentry.md#abbreviation)
* [code](_datatypes_.timetableentry.md#code)
* [endTime](_datatypes_.timetableentry.md#endtime)
* [location](_datatypes_.timetableentry.md#location)
* [startTime](_datatypes_.timetableentry.md#starttime)
* [type](_datatypes_.timetableentry.md#type)

### Methods

* [getAbbreviation](_datatypes_.timetableentry.md#getabbreviation)
* [getEndDateTime](_datatypes_.timetableentry.md#getenddatetime)
* [getLocation](_datatypes_.timetableentry.md#getlocation)
* [getModuleCode](_datatypes_.timetableentry.md#getmodulecode)
* [getStartDateTime](_datatypes_.timetableentry.md#getstartdatetime)
* [getType](_datatypes_.timetableentry.md#gettype)
* [getTypeString](_datatypes_.timetableentry.md#gettypestring)
* [fromJSON](_datatypes_.timetableentry.md#fromjson)
* [isValid](_datatypes_.timetableentry.md#isvalid)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TimetableEntry**(abbreviation: *`string`*, startTime: *`Date`*, endTime: *`Date`*, type: *[TimetableEntryType](../enums/_datatypes_.timetableentrytype.md)*, code: *`string`*, location: *`string`*): [TimetableEntry](_datatypes_.timetableentry.md)

*Defined in [datatypes.ts:160](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L160)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| abbreviation | `string` |
| startTime | `Date` |
| endTime | `Date` |
| type | [TimetableEntryType](../enums/_datatypes_.timetableentrytype.md) |
| code | `string` |
| location | `string` |

**Returns:** [TimetableEntry](_datatypes_.timetableentry.md)

___

## Properties

<a id="abbreviation"></a>

### `<Private>` abbreviation

**● abbreviation**: *`string`*

*Defined in [datatypes.ts:163](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L163)*

___
<a id="code"></a>

### `<Private>` code

**● code**: *`string`*

*Defined in [datatypes.ts:167](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L167)*

___
<a id="endtime"></a>

### `<Private>` endTime

**● endTime**: *`Date`*

*Defined in [datatypes.ts:165](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L165)*

___
<a id="location"></a>

### `<Private>` location

**● location**: *`string`*

*Defined in [datatypes.ts:168](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L168)*

___
<a id="starttime"></a>

### `<Private>` startTime

**● startTime**: *`Date`*

*Defined in [datatypes.ts:164](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L164)*

___
<a id="type"></a>

### `<Private>` type

**● type**: *[TimetableEntryType](../enums/_datatypes_.timetableentrytype.md)*

*Defined in [datatypes.ts:166](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L166)*

___

## Methods

<a id="getabbreviation"></a>

###  getAbbreviation

▸ **getAbbreviation**(): `string`

*Defined in [datatypes.ts:174](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L174)*

Retrieves the abbreviation for the module (such as OOP, OPSYS)

**Returns:** `string`

___
<a id="getenddatetime"></a>

###  getEndDateTime

▸ **getEndDateTime**(): `Date`

*Defined in [datatypes.ts:224](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L224)*

Gets the ending date and time in a `Date` object of this lesson

**Returns:** `Date`

___
<a id="getlocation"></a>

###  getLocation

▸ **getLocation**(): `string`

*Defined in [datatypes.ts:210](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L210)*

Retrieves the location in which this lesson is taking place

**Returns:** `string`

___
<a id="getmodulecode"></a>

###  getModuleCode

▸ **getModuleCode**(): `string`

*Defined in [datatypes.ts:203](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L203)*

Retrieves the module code for this timetable entry

**Returns:** `string`

___
<a id="getstartdatetime"></a>

###  getStartDateTime

▸ **getStartDateTime**(): `Date`

*Defined in [datatypes.ts:217](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L217)*

Gets the starting date and time in a `Date` object of this lesson

**Returns:** `Date`

___
<a id="gettype"></a>

###  getType

▸ **getType**(): `string`

*Defined in [datatypes.ts:181](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L181)*

Retrieves the type of lesson, such as tutorial, lecture, or lab

**Returns:** `string`

___
<a id="gettypestring"></a>

###  getTypeString

▸ **getTypeString**(): `string`

*Defined in [datatypes.ts:189](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L189)*

Outputs the full formal version of each type of lesson, converting LEC to Lecture

**Returns:** `string`

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *`string`*, dateString: *`string`*): [TimetableEntry](_datatypes_.timetableentry.md)

*Defined in [datatypes.ts:119](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L119)*

Converts a piece of JSON into a `TimetableEntry`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON to convert to a \`TimetableEntry\` |
| dateString | `string` |  The string of the date, in DDMMYY format |

**Returns:** [TimetableEntry](_datatypes_.timetableentry.md)

___
<a id="isvalid"></a>

### `<Static>` isValid

▸ **isValid**(json: *`string`*): `boolean`

*Defined in [datatypes.ts:148](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/datatypes.ts#L148)*

Validates a JSON string to be a `TimetableEntry` object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON string to validate |

**Returns:** `boolean`

___


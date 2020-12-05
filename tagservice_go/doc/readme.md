# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [tag.proto](#tag.proto)
    - [CreateTagRequest](#tagservice.CreateTagRequest)
    - [CreateTagResponse](#tagservice.CreateTagResponse)
    - [DeleteTagRequest](#tagservice.DeleteTagRequest)
    - [DeleteTagResponse](#tagservice.DeleteTagResponse)
    - [ListTagRequest](#tagservice.ListTagRequest)
    - [ListTagResponse](#tagservice.ListTagResponse)
    - [ListValidTagRequest](#tagservice.ListValidTagRequest)
    - [ListValidTagResponse](#tagservice.ListValidTagResponse)
    - [ResponseStatus](#tagservice.ResponseStatus)
    - [Tag](#tagservice.Tag)
    - [UpdateTagRequest](#tagservice.UpdateTagRequest)
    - [UpdateTagResponse](#tagservice.UpdateTagResponse)
  
    - [TagService](#tagservice.TagService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="tag.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tag.proto



<a name="tagservice.CreateTagRequest"></a>

### CreateTagRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag | [Tag](#tagservice.Tag) |  |  |






<a name="tagservice.CreateTagResponse"></a>

### CreateTagResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseStatus](#tagservice.ResponseStatus) |  |  |






<a name="tagservice.DeleteTagRequest"></a>

### DeleteTagRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag_id | [uint32](#uint32) |  |  |






<a name="tagservice.DeleteTagResponse"></a>

### DeleteTagResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseStatus](#tagservice.ResponseStatus) |  |  |






<a name="tagservice.ListTagRequest"></a>

### ListTagRequest







<a name="tagservice.ListTagResponse"></a>

### ListTagResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag | [Tag](#tagservice.Tag) | repeated |  |






<a name="tagservice.ListValidTagRequest"></a>

### ListValidTagRequest







<a name="tagservice.ListValidTagResponse"></a>

### ListValidTagResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag | [Tag](#tagservice.Tag) | repeated |  |






<a name="tagservice.ResponseStatus"></a>

### ResponseStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [string](#string) |  |  |






<a name="tagservice.Tag"></a>

### Tag



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag_id | [uint32](#uint32) |  |  |
| tag_name | [string](#string) |  |  |
| status | [uint32](#uint32) |  |  |
| createUser_id | [uint32](#uint32) |  |  |
| updateUser_id | [uint32](#uint32) |  |  |






<a name="tagservice.UpdateTagRequest"></a>

### UpdateTagRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tag | [Tag](#tagservice.Tag) |  |  |






<a name="tagservice.UpdateTagResponse"></a>

### UpdateTagResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseStatus](#tagservice.ResponseStatus) |  |  |





 

 

 


<a name="tagservice.TagService"></a>

### TagService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateTag | [CreateTagRequest](#tagservice.CreateTagRequest) | [CreateTagResponse](#tagservice.CreateTagResponse) |  |
| DeleteTag | [DeleteTagRequest](#tagservice.DeleteTagRequest) | [DeleteTagResponse](#tagservice.DeleteTagResponse) |  |
| UpdateTag | [UpdateTagRequest](#tagservice.UpdateTagRequest) | [UpdateTagResponse](#tagservice.UpdateTagResponse) |  |
| ListTag | [ListTagRequest](#tagservice.ListTagRequest) | [ListTagResponse](#tagservice.ListTagResponse) |  |
| ListValidTag | [ListValidTagRequest](#tagservice.ListValidTagRequest) | [ListValidTagResponse](#tagservice.ListValidTagResponse) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |


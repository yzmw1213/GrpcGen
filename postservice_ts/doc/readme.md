# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [post.proto](#post.proto)
    - [CreatePostRequest](#postservice.CreatePostRequest)
    - [CreatePostResponse](#postservice.CreatePostResponse)
    - [DeletePostRequest](#postservice.DeletePostRequest)
    - [DeletePostResponse](#postservice.DeletePostResponse)
    - [ListPostRequest](#postservice.ListPostRequest)
    - [ListPostResponse](#postservice.ListPostResponse)
    - [Post](#postservice.Post)
    - [ReadPostRequest](#postservice.ReadPostRequest)
    - [ReadPostResponse](#postservice.ReadPostResponse)
    - [ResponseStatus](#postservice.ResponseStatus)
    - [UpdatePostRequest](#postservice.UpdatePostRequest)
    - [UpdatePostResponse](#postservice.UpdatePostResponse)
  
    - [PostService](#postservice.PostService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="post.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## post.proto



<a name="postservice.CreatePostRequest"></a>

### CreatePostRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| post | [Post](#postservice.Post) |  |  |






<a name="postservice.CreatePostResponse"></a>

### CreatePostResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseStatus](#postservice.ResponseStatus) |  |  |






<a name="postservice.DeletePostRequest"></a>

### DeletePostRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |






<a name="postservice.DeletePostResponse"></a>

### DeletePostResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseStatus](#postservice.ResponseStatus) |  |  |






<a name="postservice.ListPostRequest"></a>

### ListPostRequest







<a name="postservice.ListPostResponse"></a>

### ListPostResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| post | [Post](#postservice.Post) | repeated |  |






<a name="postservice.Post"></a>

### Post



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |
| title | [string](#string) |  | uint32 status = 2; |
| content | [string](#string) |  |  |
| tags | [uint32](#uint32) | repeated |  |
| create_user_id | [uint32](#uint32) |  | string photo_url =7; |
| create_user_name | [string](#string) |  |  |
| update_user_id | [uint32](#uint32) |  |  |
| update_user_name | [string](#string) |  |  |






<a name="postservice.ReadPostRequest"></a>

### ReadPostRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |






<a name="postservice.ReadPostResponse"></a>

### ReadPostResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| post | [Post](#postservice.Post) |  |  |






<a name="postservice.ResponseStatus"></a>

### ResponseStatus
レスポンスのステータス


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [string](#string) |  |  |






<a name="postservice.UpdatePostRequest"></a>

### UpdatePostRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| post | [Post](#postservice.Post) |  |  |






<a name="postservice.UpdatePostResponse"></a>

### UpdatePostResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseStatus](#postservice.ResponseStatus) |  |  |





 

 

 


<a name="postservice.PostService"></a>

### PostService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreatePost | [CreatePostRequest](#postservice.CreatePostRequest) | [CreatePostResponse](#postservice.CreatePostResponse) |  |
| ReadPost | [ReadPostRequest](#postservice.ReadPostRequest) | [ReadPostResponse](#postservice.ReadPostResponse) |  |
| UpdatePost | [UpdatePostRequest](#postservice.UpdatePostRequest) | [UpdatePostResponse](#postservice.UpdatePostResponse) |  |
| DeletePost | [DeletePostRequest](#postservice.DeletePostRequest) | [DeletePostResponse](#postservice.DeletePostResponse) |  |
| ListPost | [ListPostRequest](#postservice.ListPostRequest) | [ListPostResponse](#postservice.ListPostResponse) |  |

 



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


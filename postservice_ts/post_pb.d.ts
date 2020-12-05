import * as jspb from 'google-protobuf'



export class Post extends jspb.Message {
  getId(): number;
  setId(value: number): Post;

  getTitle(): string;
  setTitle(value: string): Post;

  getContent(): string;
  setContent(value: string): Post;

  getTagsList(): Array<number>;
  setTagsList(value: Array<number>): Post;
  clearTagsList(): Post;
  addTags(value: number, index?: number): Post;

  getCreateUserId(): number;
  setCreateUserId(value: number): Post;

  getCreateUserName(): string;
  setCreateUserName(value: string): Post;

  getUpdateUserId(): number;
  setUpdateUserId(value: number): Post;

  getUpdateUserName(): string;
  setUpdateUserName(value: string): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: number,
    title: string,
    content: string,
    tagsList: Array<number>,
    createUserId: number,
    createUserName: string,
    updateUserId: number,
    updateUserName: string,
  }
}

export class ResponseStatus extends jspb.Message {
  getCode(): string;
  setCode(value: string): ResponseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStatus): ResponseStatus.AsObject;
  static serializeBinaryToWriter(message: ResponseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStatus;
  static deserializeBinaryFromReader(message: ResponseStatus, reader: jspb.BinaryReader): ResponseStatus;
}

export namespace ResponseStatus {
  export type AsObject = {
    code: string,
  }
}

export class CreatePostRequest extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): CreatePostRequest;
  hasPost(): boolean;
  clearPost(): CreatePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
  static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class CreatePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): CreatePostResponse;
  hasStatus(): boolean;
  clearStatus(): CreatePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostResponse): CreatePostResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostResponse;
  static deserializeBinaryFromReader(message: CreatePostResponse, reader: jspb.BinaryReader): CreatePostResponse;
}

export namespace CreatePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ReadPostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReadPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadPostRequest): ReadPostRequest.AsObject;
  static serializeBinaryToWriter(message: ReadPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadPostRequest;
  static deserializeBinaryFromReader(message: ReadPostRequest, reader: jspb.BinaryReader): ReadPostRequest;
}

export namespace ReadPostRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReadPostResponse extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): ReadPostResponse;
  hasPost(): boolean;
  clearPost(): ReadPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadPostResponse): ReadPostResponse.AsObject;
  static serializeBinaryToWriter(message: ReadPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadPostResponse;
  static deserializeBinaryFromReader(message: ReadPostResponse, reader: jspb.BinaryReader): ReadPostResponse;
}

export namespace ReadPostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class UpdatePostRequest extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): UpdatePostRequest;
  hasPost(): boolean;
  clearPost(): UpdatePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostRequest): UpdatePostRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostRequest;
  static deserializeBinaryFromReader(message: UpdatePostRequest, reader: jspb.BinaryReader): UpdatePostRequest;
}

export namespace UpdatePostRequest {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class UpdatePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): UpdatePostResponse;
  hasStatus(): boolean;
  clearStatus(): UpdatePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostResponse): UpdatePostResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostResponse;
  static deserializeBinaryFromReader(message: UpdatePostResponse, reader: jspb.BinaryReader): UpdatePostResponse;
}

export namespace UpdatePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class DeletePostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeletePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostRequest): DeletePostRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostRequest;
  static deserializeBinaryFromReader(message: DeletePostRequest, reader: jspb.BinaryReader): DeletePostRequest;
}

export namespace DeletePostRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeletePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): DeletePostResponse;
  hasStatus(): boolean;
  clearStatus(): DeletePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostResponse): DeletePostResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostResponse;
  static deserializeBinaryFromReader(message: DeletePostResponse, reader: jspb.BinaryReader): DeletePostResponse;
}

export namespace DeletePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ListPostRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostRequest): ListPostRequest.AsObject;
  static serializeBinaryToWriter(message: ListPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostRequest;
  static deserializeBinaryFromReader(message: ListPostRequest, reader: jspb.BinaryReader): ListPostRequest;
}

export namespace ListPostRequest {
  export type AsObject = {
  }
}

export class ListPostResponse extends jspb.Message {
  getPostList(): Array<Post>;
  setPostList(value: Array<Post>): ListPostResponse;
  clearPostList(): ListPostResponse;
  addPost(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostResponse): ListPostResponse.AsObject;
  static serializeBinaryToWriter(message: ListPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostResponse;
  static deserializeBinaryFromReader(message: ListPostResponse, reader: jspb.BinaryReader): ListPostResponse;
}

export namespace ListPostResponse {
  export type AsObject = {
    postList: Array<Post.AsObject>,
  }
}


import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): User;

  getUserName(): string;
  setUserName(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getProfileText(): string;
  setProfileText(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getAuthority(): number;
  setAuthority(value: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: number,
    userName: string,
    password: string,
    profileText: string,
    email: string,
    authority: number,
  }
}

export class UserProfile extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UserProfile;

  getUserName(): string;
  setUserName(value: string): UserProfile;

  getProfileText(): string;
  setProfileText(value: string): UserProfile;

  getAuthority(): number;
  setAuthority(value: number): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    userId: number,
    userName: string,
    profileText: string,
    authority: number,
  }
}

export class Auth extends jspb.Message {
  getToken(): string;
  setToken(value: string): Auth;

  getUserId(): number;
  setUserId(value: number): Auth;

  getAuthority(): number;
  setAuthority(value: number): Auth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Auth.AsObject;
  static toObject(includeInstance: boolean, msg: Auth): Auth.AsObject;
  static serializeBinaryToWriter(message: Auth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Auth;
  static deserializeBinaryFromReader(message: Auth, reader: jspb.BinaryReader): Auth;
}

export namespace Auth {
  export type AsObject = {
    token: string,
    userId: number,
    authority: number,
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

export class CreateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): CreateUserRequest;
  hasUser(): boolean;
  clearUser(): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class CreateUserResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): CreateUserResponse;
  hasStatus(): boolean;
  clearStatus(): CreateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ReadUserRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ReadUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadUserRequest): ReadUserRequest.AsObject;
  static serializeBinaryToWriter(message: ReadUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadUserRequest;
  static deserializeBinaryFromReader(message: ReadUserRequest, reader: jspb.BinaryReader): ReadUserRequest;
}

export namespace ReadUserRequest {
  export type AsObject = {
    userId: number,
  }
}

export class ReadUserResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): ReadUserResponse;
  hasUser(): boolean;
  clearUser(): ReadUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadUserResponse): ReadUserResponse.AsObject;
  static serializeBinaryToWriter(message: ReadUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadUserResponse;
  static deserializeBinaryFromReader(message: ReadUserResponse, reader: jspb.BinaryReader): ReadUserResponse;
}

export namespace ReadUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UpdateUserRequest;
  hasUser(): boolean;
  clearUser(): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateUserResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): UpdateUserResponse;
  hasStatus(): boolean;
  clearStatus(): UpdateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    userId: number,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): DeleteUserResponse;
  hasStatus(): boolean;
  clearStatus(): DeleteUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ListCompanyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCompanyRequest): ListCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: ListCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCompanyRequest;
  static deserializeBinaryFromReader(message: ListCompanyRequest, reader: jspb.BinaryReader): ListCompanyRequest;
}

export namespace ListCompanyRequest {
  export type AsObject = {
  }
}

export class ListCompanyResponse extends jspb.Message {
  getProfileList(): Array<UserProfile>;
  setProfileList(value: Array<UserProfile>): ListCompanyResponse;
  clearProfileList(): ListCompanyResponse;
  addProfile(value?: UserProfile, index?: number): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCompanyResponse): ListCompanyResponse.AsObject;
  static serializeBinaryToWriter(message: ListCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCompanyResponse;
  static deserializeBinaryFromReader(message: ListCompanyResponse, reader: jspb.BinaryReader): ListCompanyResponse;
}

export namespace ListCompanyResponse {
  export type AsObject = {
    profileList: Array<UserProfile.AsObject>,
  }
}

export class ListUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserRequest): ListUserRequest.AsObject;
  static serializeBinaryToWriter(message: ListUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserRequest;
  static deserializeBinaryFromReader(message: ListUserRequest, reader: jspb.BinaryReader): ListUserRequest;
}

export namespace ListUserRequest {
  export type AsObject = {
  }
}

export class ListUserResponse extends jspb.Message {
  getProfileList(): Array<UserProfile>;
  setProfileList(value: Array<UserProfile>): ListUserResponse;
  clearProfileList(): ListUserResponse;
  addProfile(value?: UserProfile, index?: number): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserResponse): ListUserResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserResponse;
  static deserializeBinaryFromReader(message: ListUserResponse, reader: jspb.BinaryReader): ListUserResponse;
}

export namespace ListUserResponse {
  export type AsObject = {
    profileList: Array<UserProfile.AsObject>,
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getAuth(): Auth | undefined;
  setAuth(value?: Auth): LoginResponse;
  hasAuth(): boolean;
  clearAuth(): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    auth?: Auth.AsObject,
  }
}

export class TokenAuthRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokenAuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TokenAuthRequest): TokenAuthRequest.AsObject;
  static serializeBinaryToWriter(message: TokenAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenAuthRequest;
  static deserializeBinaryFromReader(message: TokenAuthRequest, reader: jspb.BinaryReader): TokenAuthRequest;
}

export namespace TokenAuthRequest {
  export type AsObject = {
    token: string,
  }
}

export class TokenAuthResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): TokenAuthResponse;
  hasUser(): boolean;
  clearUser(): TokenAuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenAuthResponse): TokenAuthResponse.AsObject;
  static serializeBinaryToWriter(message: TokenAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenAuthResponse;
  static deserializeBinaryFromReader(message: TokenAuthResponse, reader: jspb.BinaryReader): TokenAuthResponse;
}

export namespace TokenAuthResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}


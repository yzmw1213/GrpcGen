/**
 * @fileoverview gRPC-Web generated client stub for userservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as user_pb from './user_pb';


export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.CreateUserResponse,
    (request: user_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    user_pb.CreateUserResponse.deserializeBinary
  );

  createUser(
    request: user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.CreateUserResponse>;

  createUser(
    request: user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.CreateUserResponse) => void): grpcWeb.ClientReadableStream<user_pb.CreateUserResponse>;

  createUser(
    request: user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.CreateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/CreateUser',
        request,
        metadata || {},
        this.methodInfoCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/CreateUser',
    request,
    metadata || {},
    this.methodInfoCreateUser);
  }

  methodInfoReadUser = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.ReadUserResponse,
    (request: user_pb.ReadUserRequest) => {
      return request.serializeBinary();
    },
    user_pb.ReadUserResponse.deserializeBinary
  );

  readUser(
    request: user_pb.ReadUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.ReadUserResponse>;

  readUser(
    request: user_pb.ReadUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.ReadUserResponse) => void): grpcWeb.ClientReadableStream<user_pb.ReadUserResponse>;

  readUser(
    request: user_pb.ReadUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.ReadUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/ReadUser',
        request,
        metadata || {},
        this.methodInfoReadUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/ReadUser',
    request,
    metadata || {},
    this.methodInfoReadUser);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.UpdateUserResponse,
    (request: user_pb.UpdateUserRequest) => {
      return request.serializeBinary();
    },
    user_pb.UpdateUserResponse.deserializeBinary
  );

  updateUser(
    request: user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.UpdateUserResponse>;

  updateUser(
    request: user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.UpdateUserResponse) => void): grpcWeb.ClientReadableStream<user_pb.UpdateUserResponse>;

  updateUser(
    request: user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.UpdateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/UpdateUser',
        request,
        metadata || {},
        this.methodInfoUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/UpdateUser',
    request,
    metadata || {},
    this.methodInfoUpdateUser);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.DeleteUserResponse,
    (request: user_pb.DeleteUserRequest) => {
      return request.serializeBinary();
    },
    user_pb.DeleteUserResponse.deserializeBinary
  );

  deleteUser(
    request: user_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.DeleteUserResponse>;

  deleteUser(
    request: user_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.DeleteUserResponse) => void): grpcWeb.ClientReadableStream<user_pb.DeleteUserResponse>;

  deleteUser(
    request: user_pb.DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.DeleteUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/DeleteUser',
        request,
        metadata || {},
        this.methodInfoDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/DeleteUser',
    request,
    metadata || {},
    this.methodInfoDeleteUser);
  }

  methodInfoListCompany = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.ListCompanyResponse,
    (request: user_pb.ListCompanyRequest) => {
      return request.serializeBinary();
    },
    user_pb.ListCompanyResponse.deserializeBinary
  );

  listCompany(
    request: user_pb.ListCompanyRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.ListCompanyResponse>;

  listCompany(
    request: user_pb.ListCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.ListCompanyResponse) => void): grpcWeb.ClientReadableStream<user_pb.ListCompanyResponse>;

  listCompany(
    request: user_pb.ListCompanyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.ListCompanyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/ListCompany',
        request,
        metadata || {},
        this.methodInfoListCompany,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/ListCompany',
    request,
    metadata || {},
    this.methodInfoListCompany);
  }

  methodInfoListUser = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.ListUserResponse,
    (request: user_pb.ListUserRequest) => {
      return request.serializeBinary();
    },
    user_pb.ListUserResponse.deserializeBinary
  );

  listUser(
    request: user_pb.ListUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.ListUserResponse>;

  listUser(
    request: user_pb.ListUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.ListUserResponse) => void): grpcWeb.ClientReadableStream<user_pb.ListUserResponse>;

  listUser(
    request: user_pb.ListUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.ListUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/ListUser',
        request,
        metadata || {},
        this.methodInfoListUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/ListUser',
    request,
    metadata || {},
    this.methodInfoListUser);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.LoginResponse,
    (request: user_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    user_pb.LoginResponse.deserializeBinary
  );

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.LoginResponse>;

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<user_pb.LoginResponse>;

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoTokenAuth = new grpcWeb.AbstractClientBase.MethodInfo(
    user_pb.TokenAuthResponse,
    (request: user_pb.TokenAuthRequest) => {
      return request.serializeBinary();
    },
    user_pb.TokenAuthResponse.deserializeBinary
  );

  tokenAuth(
    request: user_pb.TokenAuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.TokenAuthResponse>;

  tokenAuth(
    request: user_pb.TokenAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: user_pb.TokenAuthResponse) => void): grpcWeb.ClientReadableStream<user_pb.TokenAuthResponse>;

  tokenAuth(
    request: user_pb.TokenAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: user_pb.TokenAuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/TokenAuth',
        request,
        metadata || {},
        this.methodInfoTokenAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/TokenAuth',
    request,
    metadata || {},
    this.methodInfoTokenAuth);
  }

}


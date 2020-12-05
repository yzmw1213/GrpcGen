/**
 * @fileoverview gRPC-Web generated client stub for postservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as post_pb from './post_pb';


export class PostServiceClient {
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

  methodInfoCreatePost = new grpcWeb.AbstractClientBase.MethodInfo(
    post_pb.CreatePostResponse,
    (request: post_pb.CreatePostRequest) => {
      return request.serializeBinary();
    },
    post_pb.CreatePostResponse.deserializeBinary
  );

  createPost(
    request: post_pb.CreatePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.CreatePostResponse>;

  createPost(
    request: post_pb.CreatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: post_pb.CreatePostResponse) => void): grpcWeb.ClientReadableStream<post_pb.CreatePostResponse>;

  createPost(
    request: post_pb.CreatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: post_pb.CreatePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/CreatePost',
        request,
        metadata || {},
        this.methodInfoCreatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/CreatePost',
    request,
    metadata || {},
    this.methodInfoCreatePost);
  }

  methodInfoReadPost = new grpcWeb.AbstractClientBase.MethodInfo(
    post_pb.ReadPostResponse,
    (request: post_pb.ReadPostRequest) => {
      return request.serializeBinary();
    },
    post_pb.ReadPostResponse.deserializeBinary
  );

  readPost(
    request: post_pb.ReadPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.ReadPostResponse>;

  readPost(
    request: post_pb.ReadPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: post_pb.ReadPostResponse) => void): grpcWeb.ClientReadableStream<post_pb.ReadPostResponse>;

  readPost(
    request: post_pb.ReadPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: post_pb.ReadPostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/ReadPost',
        request,
        metadata || {},
        this.methodInfoReadPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/ReadPost',
    request,
    metadata || {},
    this.methodInfoReadPost);
  }

  methodInfoUpdatePost = new grpcWeb.AbstractClientBase.MethodInfo(
    post_pb.UpdatePostResponse,
    (request: post_pb.UpdatePostRequest) => {
      return request.serializeBinary();
    },
    post_pb.UpdatePostResponse.deserializeBinary
  );

  updatePost(
    request: post_pb.UpdatePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.UpdatePostResponse>;

  updatePost(
    request: post_pb.UpdatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: post_pb.UpdatePostResponse) => void): grpcWeb.ClientReadableStream<post_pb.UpdatePostResponse>;

  updatePost(
    request: post_pb.UpdatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: post_pb.UpdatePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/UpdatePost',
        request,
        metadata || {},
        this.methodInfoUpdatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/UpdatePost',
    request,
    metadata || {},
    this.methodInfoUpdatePost);
  }

  methodInfoDeletePost = new grpcWeb.AbstractClientBase.MethodInfo(
    post_pb.DeletePostResponse,
    (request: post_pb.DeletePostRequest) => {
      return request.serializeBinary();
    },
    post_pb.DeletePostResponse.deserializeBinary
  );

  deletePost(
    request: post_pb.DeletePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.DeletePostResponse>;

  deletePost(
    request: post_pb.DeletePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: post_pb.DeletePostResponse) => void): grpcWeb.ClientReadableStream<post_pb.DeletePostResponse>;

  deletePost(
    request: post_pb.DeletePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: post_pb.DeletePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/DeletePost',
        request,
        metadata || {},
        this.methodInfoDeletePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/DeletePost',
    request,
    metadata || {},
    this.methodInfoDeletePost);
  }

  methodInfoListPost = new grpcWeb.AbstractClientBase.MethodInfo(
    post_pb.ListPostResponse,
    (request: post_pb.ListPostRequest) => {
      return request.serializeBinary();
    },
    post_pb.ListPostResponse.deserializeBinary
  );

  listPost(
    request: post_pb.ListPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<post_pb.ListPostResponse>;

  listPost(
    request: post_pb.ListPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: post_pb.ListPostResponse) => void): grpcWeb.ClientReadableStream<post_pb.ListPostResponse>;

  listPost(
    request: post_pb.ListPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: post_pb.ListPostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/ListPost',
        request,
        metadata || {},
        this.methodInfoListPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/ListPost',
    request,
    metadata || {},
    this.methodInfoListPost);
  }

}


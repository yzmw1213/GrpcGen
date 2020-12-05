/**
 * @fileoverview gRPC-Web generated client stub for tagservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tag_pb from './tag_pb';


export class TagServiceClient {
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

  methodInfoCreateTag = new grpcWeb.AbstractClientBase.MethodInfo(
    tag_pb.CreateTagResponse,
    (request: tag_pb.CreateTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.CreateTagResponse.deserializeBinary
  );

  createTag(
    request: tag_pb.CreateTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.CreateTagResponse>;

  createTag(
    request: tag_pb.CreateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tag_pb.CreateTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.CreateTagResponse>;

  createTag(
    request: tag_pb.CreateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tag_pb.CreateTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/CreateTag',
        request,
        metadata || {},
        this.methodInfoCreateTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/CreateTag',
    request,
    metadata || {},
    this.methodInfoCreateTag);
  }

  methodInfoDeleteTag = new grpcWeb.AbstractClientBase.MethodInfo(
    tag_pb.DeleteTagResponse,
    (request: tag_pb.DeleteTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.DeleteTagResponse.deserializeBinary
  );

  deleteTag(
    request: tag_pb.DeleteTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.DeleteTagResponse>;

  deleteTag(
    request: tag_pb.DeleteTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tag_pb.DeleteTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.DeleteTagResponse>;

  deleteTag(
    request: tag_pb.DeleteTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tag_pb.DeleteTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/DeleteTag',
        request,
        metadata || {},
        this.methodInfoDeleteTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/DeleteTag',
    request,
    metadata || {},
    this.methodInfoDeleteTag);
  }

  methodInfoUpdateTag = new grpcWeb.AbstractClientBase.MethodInfo(
    tag_pb.UpdateTagResponse,
    (request: tag_pb.UpdateTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.UpdateTagResponse.deserializeBinary
  );

  updateTag(
    request: tag_pb.UpdateTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.UpdateTagResponse>;

  updateTag(
    request: tag_pb.UpdateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tag_pb.UpdateTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.UpdateTagResponse>;

  updateTag(
    request: tag_pb.UpdateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tag_pb.UpdateTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/UpdateTag',
        request,
        metadata || {},
        this.methodInfoUpdateTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/UpdateTag',
    request,
    metadata || {},
    this.methodInfoUpdateTag);
  }

  methodInfoListTag = new grpcWeb.AbstractClientBase.MethodInfo(
    tag_pb.ListTagResponse,
    (request: tag_pb.ListTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.ListTagResponse.deserializeBinary
  );

  listTag(
    request: tag_pb.ListTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.ListTagResponse>;

  listTag(
    request: tag_pb.ListTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tag_pb.ListTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.ListTagResponse>;

  listTag(
    request: tag_pb.ListTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tag_pb.ListTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/ListTag',
        request,
        metadata || {},
        this.methodInfoListTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/ListTag',
    request,
    metadata || {},
    this.methodInfoListTag);
  }

  methodInfoListValidTag = new grpcWeb.AbstractClientBase.MethodInfo(
    tag_pb.ListValidTagResponse,
    (request: tag_pb.ListValidTagRequest) => {
      return request.serializeBinary();
    },
    tag_pb.ListValidTagResponse.deserializeBinary
  );

  listValidTag(
    request: tag_pb.ListValidTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<tag_pb.ListValidTagResponse>;

  listValidTag(
    request: tag_pb.ListValidTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: tag_pb.ListValidTagResponse) => void): grpcWeb.ClientReadableStream<tag_pb.ListValidTagResponse>;

  listValidTag(
    request: tag_pb.ListValidTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: tag_pb.ListValidTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/ListValidTag',
        request,
        metadata || {},
        this.methodInfoListValidTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/ListValidTag',
    request,
    metadata || {},
    this.methodInfoListValidTag);
  }

}


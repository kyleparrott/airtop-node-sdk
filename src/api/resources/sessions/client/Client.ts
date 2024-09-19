/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Airtop from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import * as stream from "stream";

export declare namespace Sessions {
    interface Options {
        environment?: core.Supplier<environments.AirtopEnvironment | string>;
        /** Override the x-airtop-token header */
        airtopToken?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the x-airtop-token header */
        airtopToken?: string | undefined;
    }
}

export class Sessions {
    constructor(protected readonly _options: Sessions.Options = {}) {}

    /**
     * Get a list of sessions by ID
     *
     * @param {Airtop.SessionsListRequest} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Airtop.NotFoundError}
     * @throws {@link Airtop.UnprocessableEntityError}
     * @throws {@link Airtop.InternalServerError}
     *
     * @example
     *     await client.sessions.list()
     */
    public async list(
        request: Airtop.SessionsListRequest = {},
        requestOptions?: Sessions.RequestOptions
    ): Promise<Airtop.SessionsOutputV1Body> {
        const { sessionIds } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (sessionIds != null) {
            if (Array.isArray(sessionIds)) {
                _queryParams["sessionIds"] = sessionIds.map((item) => item);
            } else {
                _queryParams["sessionIds"] = sessionIds;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                "sessions"
            ),
            method: "GET",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SessionsOutputV1Body.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Airtop.NotFoundError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Airtop.UnprocessableEntityError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Airtop.InternalServerError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.AirtopError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Airtop.SessionRestInputV1} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sessions.post()
     */
    public async post(
        request: Airtop.SessionRestInputV1 = {},
        requestOptions?: Sessions.RequestOptions
    ): Promise<Airtop.SessionOutputV1Body> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                "sessions"
            ),
            method: "POST",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SessionRestInputV1.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SessionOutputV1Body.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AirtopError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a session by ID
     *
     * @param {string} id - UUID of the session to get
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Airtop.NotFoundError}
     * @throws {@link Airtop.UnprocessableEntityError}
     * @throws {@link Airtop.InternalServerError}
     *
     * @example
     *     await client.sessions.get("6aac6f73-bd89-4a76-ab32-5a6c422e8b0b")
     */
    public async get(id: string, requestOptions?: Sessions.RequestOptions): Promise<Airtop.SessionOutputV1Body> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SessionOutputV1Body.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Airtop.NotFoundError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Airtop.UnprocessableEntityError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Airtop.InternalServerError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.AirtopError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Ends a session by ID
     *
     * @param {string} id - UUID of the session to delete
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sessions.delete("6aac6f73-bd89-4a76-ab32-5a6c422e8b0b")
     */
    public async delete(id: string, requestOptions?: Sessions.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AirtopError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a session event stream for a given session ID
     */
    public async events(
        id: string,
        requestOptions?: Sessions.RequestOptions
    ): Promise<core.Stream<Airtop.SessionsEventsResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(id)}/events`
            ),
            method: "GET",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: async (data) => {
                    return serializers.SessionsEventsResponse.parseOrThrow(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        skipValidation: true,
                        breadcrumbsPrefix: ["response"],
                    });
                },
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "sse",
                    streamTerminator: "[DONE]",
                },
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Airtop.NotFoundError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 422:
                    throw new Airtop.UnprocessableEntityError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Airtop.InternalServerError(
                        serializers.ErrorModel.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.AirtopError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} id - UUID of the session to create a url for
     * @param {string} windowId - id of the browser window, either the browserId (uuid) or targetId (simple string)
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sessions.window("6aac6f73-bd89-4a76-ab32-5a6c422e8b0b", "7334da2a-91b0-42c5-6156-76a5eba87430")
     */
    public async window(
        id: string,
        windowId: string,
        requestOptions?: Sessions.RequestOptions
    ): Promise<Airtop.LiveViewUrlOutputV1Body> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(id)}/window/${encodeURIComponent(windowId)}`
            ),
            method: "GET",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.LiveViewUrlOutputV1Body.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AirtopError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} sessionId - The session id to scrape
     * @param {string} windowId - The window id to scrape
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sessions.cleanScrapeSession("6aac6f73-bd89-4a76-ab32-5a6c422e8b0b", "0334da2a-91b0-42c5-6156-76a5eba87430")
     */
    public async cleanScrapeSession(
        sessionId: string,
        windowId: string,
        requestOptions?: Sessions.RequestOptions
    ): Promise<Airtop.CleanScrapeResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(sessionId)}/windows/${encodeURIComponent(windowId)}/clean-scrape`
            ),
            method: "GET",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CleanScrapeResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AirtopError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} sessionId - The session id to submit a prompt about
     * @param {string} windowId - The window id to submit a prompt about
     * @param {Airtop.SessionPromptContentRequest} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sessions.sessionPromptContent("6aac6f73-bd89-4a76-ab32-5a6c422e8b0b", "0334da2a-91b0-42c5-6156-76a5eba87430", {
     *         prompt: "What is the main idea of this page?"
     *     })
     */
    public async sessionPromptContent(
        sessionId: string,
        windowId: string,
        request: Airtop.SessionPromptContentRequest,
        requestOptions?: Sessions.RequestOptions
    ): Promise<Airtop.SessionAiResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(sessionId)}/windows/${encodeURIComponent(windowId)}/prompt/content`
            ),
            method: "POST",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SessionPromptContentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SessionAiResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AirtopError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} sessionId - The session id to perform a paginated extraction on
     * @param {string} windowId - The window id to perform a paginated extraction on
     * @param {Airtop.SessionPromptPaginatedExtractionRequest} request
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sessions.sessionPromptPaginatedExtraction("6aac6f73-bd89-4a76-ab32-5a6c422e8b0b", "0334da2a-91b0-42c5-6156-76a5eba87430", {
     *         prompt: "For each page on return all the items listed including a subfield"
     *     })
     */
    public async sessionPromptPaginatedExtraction(
        sessionId: string,
        windowId: string,
        request: Airtop.SessionPromptPaginatedExtractionRequest,
        requestOptions?: Sessions.RequestOptions
    ): Promise<Airtop.SessionAiResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(sessionId)}/windows/${encodeURIComponent(
                    windowId
                )}/prompt/paginated-extraction`
            ),
            method: "POST",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.SessionPromptPaginatedExtractionRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SessionAiResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AirtopError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} sessionId - The session id to summarize
     * @param {string} windowId - The window id to summarize
     * @param {Sessions.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.sessions.summary("6aac6f73-bd89-4a76-ab32-5a6c422e8b0b", "0334da2a-91b0-42c5-6156-76a5eba87430")
     */
    public async summary(
        sessionId: string,
        windowId: string,
        requestOptions?: Sessions.RequestOptions
    ): Promise<Airtop.SessionAiResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.AirtopEnvironment.Default,
                `sessions/${encodeURIComponent(sessionId)}/windows/${encodeURIComponent(windowId)}/summary`
            ),
            method: "GET",
            headers: {
                "x-airtop-token":
                    (await core.Supplier.get(this._options.airtopToken)) != null
                        ? await core.Supplier.get(this._options.airtopToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@airtop/sdk",
                "X-Fern-SDK-Version": "0.0.7",
                "User-Agent": "@airtop/sdk/0.0.7",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.SessionAiResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AirtopError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AirtopError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AirtopTimeoutError();
            case "unknown":
                throw new errors.AirtopError({
                    message: _response.error.errorMessage,
                });
        }
    }
}

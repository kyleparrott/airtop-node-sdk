/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Profiles } from "./api/resources/profiles/client/Client";
import { Sessions } from "./api/resources/sessions/client/Client";

export declare namespace AirtopClient {
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

export class AirtopClient {
    constructor(protected readonly _options: AirtopClient.Options = {}) {}

    protected _profiles: Profiles | undefined;

    public get profiles(): Profiles {
        return (this._profiles ??= new Profiles(this._options));
    }

    protected _sessions: Sessions | undefined;

    public get sessions(): Sessions {
        return (this._sessions ??= new Sessions(this._options));
    }
}

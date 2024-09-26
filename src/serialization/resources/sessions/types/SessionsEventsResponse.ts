/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Airtop from "../../../../api/index";
import * as core from "../../../../core";
import { SessionsEventsResponseStatus } from "./SessionsEventsResponseStatus";
import { SessionsEventsResponseError } from "./SessionsEventsResponseError";

export const SessionsEventsResponse: core.serialization.Schema<
    serializers.SessionsEventsResponse.Raw,
    Airtop.SessionsEventsResponse
> = core.serialization
    .union("event", {
        status: SessionsEventsResponseStatus,
        error: SessionsEventsResponseError,
    })
    .transform<Airtop.SessionsEventsResponse>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SessionsEventsResponse {
    type Raw = SessionsEventsResponse.Status | SessionsEventsResponse.Error;

    interface Status extends SessionsEventsResponseStatus.Raw {
        event: "status";
    }

    interface Error extends SessionsEventsResponseError.Raw {
        event: "error";
    }
}

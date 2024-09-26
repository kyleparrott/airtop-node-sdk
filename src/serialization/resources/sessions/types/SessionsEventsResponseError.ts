/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Airtop from "../../../../api/index";
import * as core from "../../../../core";
import { ErrorMessage } from "../../../types/ErrorMessage";

export const SessionsEventsResponseError: core.serialization.ObjectSchema<
    serializers.SessionsEventsResponseError.Raw,
    Airtop.SessionsEventsResponseError
> = core.serialization.object({
    data: ErrorMessage,
    id: core.serialization.number().optional(),
    retry: core.serialization.number().optional(),
});

export declare namespace SessionsEventsResponseError {
    interface Raw {
        data: ErrorMessage.Raw;
        id?: number | null;
        retry?: number | null;
    }
}
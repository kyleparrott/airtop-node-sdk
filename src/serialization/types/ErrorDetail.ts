/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";

export const ErrorDetail: core.serialization.ObjectSchema<serializers.ErrorDetail.Raw, Airtop.ErrorDetail> =
    core.serialization.object({
        location: core.serialization.string().optional(),
        message: core.serialization.string().optional(),
        value: core.serialization.unknown().optional(),
    });

export declare namespace ErrorDetail {
    interface Raw {
        location?: string | null;
        message?: string | null;
        value?: unknown | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Airtop from "../../../../../api/index";
import * as core from "../../../../../core";

export const SessionPromptContentRequest: core.serialization.Schema<
    serializers.SessionPromptContentRequest.Raw,
    Airtop.SessionPromptContentRequest
> = core.serialization.object({
    schema: core.serialization.property("$schema", core.serialization.string().optional()),
    costThresholdCredits: core.serialization.number().optional(),
    customerRequestId: core.serialization.string().optional(),
    prompt: core.serialization.string(),
    timeThresholdMs: core.serialization.number().optional(),
});

export declare namespace SessionPromptContentRequest {
    interface Raw {
        $schema?: string | null;
        costThresholdCredits?: number | null;
        customerRequestId?: string | null;
        prompt: string;
        timeThresholdMs?: number | null;
    }
}

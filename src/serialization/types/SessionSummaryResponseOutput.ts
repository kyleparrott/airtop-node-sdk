/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";

export const SessionSummaryResponseOutput: core.serialization.ObjectSchema<
    serializers.SessionSummaryResponseOutput.Raw,
    Airtop.SessionSummaryResponseOutput
> = core.serialization.object({
    output: core.serialization.string(),
    success: core.serialization.boolean(),
});

export declare namespace SessionSummaryResponseOutput {
    interface Raw {
        output: string;
        success: boolean;
    }
}

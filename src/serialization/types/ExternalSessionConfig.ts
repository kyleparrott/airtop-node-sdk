/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";

export const ExternalSessionConfig: core.serialization.ObjectSchema<
    serializers.ExternalSessionConfig.Raw,
    Airtop.ExternalSessionConfig
> = core.serialization.object({
    baseProfileId: core.serialization.string().optional(),
    persistProfile: core.serialization.boolean().optional(),
    timeoutMinutes: core.serialization.number().optional(),
});

export declare namespace ExternalSessionConfig {
    interface Raw {
        baseProfileId?: string | null;
        persistProfile?: boolean | null;
        timeoutMinutes?: number | null;
    }
}
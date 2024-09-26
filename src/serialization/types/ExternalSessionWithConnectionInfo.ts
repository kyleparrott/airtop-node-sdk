/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";
import { ExternalSessionConfig } from "./ExternalSessionConfig";

export const ExternalSessionWithConnectionInfo: core.serialization.ObjectSchema<
    serializers.ExternalSessionWithConnectionInfo.Raw,
    Airtop.ExternalSessionWithConnectionInfo
> = core.serialization.object({
    cdpUrl: core.serialization.string().optional(),
    cdpWsUrl: core.serialization.string().optional(),
    chromedriverUrl: core.serialization.string().optional(),
    configuration: ExternalSessionConfig,
    currentUsage: core.serialization.number().optional(),
    dateCreated: core.serialization.date().optional(),
    id: core.serialization.string(),
    lastActivity: core.serialization.date().optional(),
    status: core.serialization.string(),
});

export declare namespace ExternalSessionWithConnectionInfo {
    interface Raw {
        cdpUrl?: string | null;
        cdpWsUrl?: string | null;
        chromedriverUrl?: string | null;
        configuration: ExternalSessionConfig.Raw;
        currentUsage?: number | null;
        dateCreated?: string | null;
        id: string;
        lastActivity?: string | null;
        status: string;
    }
}

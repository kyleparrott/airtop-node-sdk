/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";
import { ScrapeResponseEnvelope } from "./ScrapeResponseEnvelope";
import { Issue } from "./Issue";
import { ExternalSessionAiResponseMetadata } from "./ExternalSessionAiResponseMetadata";

export const ScrapeResponse: core.serialization.ObjectSchema<serializers.ScrapeResponse.Raw, Airtop.ScrapeResponse> =
    core.serialization.object({
        data: ScrapeResponseEnvelope,
        errors: core.serialization.list(Issue).optional(),
        meta: ExternalSessionAiResponseMetadata,
        warnings: core.serialization.list(Issue).optional(),
    });

export declare namespace ScrapeResponse {
    interface Raw {
        data: ScrapeResponseEnvelope.Raw;
        errors?: Issue.Raw[] | null;
        meta: ExternalSessionAiResponseMetadata.Raw;
        warnings?: Issue.Raw[] | null;
    }
}

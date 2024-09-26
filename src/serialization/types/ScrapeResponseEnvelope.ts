/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";
import { Issue } from "./Issue";
import { ScrapeResponseOutput } from "./ScrapeResponseOutput";

export const ScrapeResponseEnvelope: core.serialization.ObjectSchema<
    serializers.ScrapeResponseEnvelope.Raw,
    Airtop.ScrapeResponseEnvelope
> = core.serialization.object({
    errors: core.serialization.list(Issue).optional(),
    modelResponse: ScrapeResponseOutput,
    warnings: core.serialization.list(Issue).optional(),
});

export declare namespace ScrapeResponseEnvelope {
    interface Raw {
        errors?: Issue.Raw[] | null;
        modelResponse: ScrapeResponseOutput.Raw;
        warnings?: Issue.Raw[] | null;
    }
}

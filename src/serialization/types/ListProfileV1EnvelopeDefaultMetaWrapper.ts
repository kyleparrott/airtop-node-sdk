/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";
import { ProfileV1 } from "./ProfileV1";
import { Issue } from "./Issue";
import { DefaultMetaWrapper } from "./DefaultMetaWrapper";

export const ListProfileV1EnvelopeDefaultMetaWrapper: core.serialization.ObjectSchema<
    serializers.ListProfileV1EnvelopeDefaultMetaWrapper.Raw,
    Airtop.ListProfileV1EnvelopeDefaultMetaWrapper
> = core.serialization.object({
    data: core.serialization.list(ProfileV1).optional(),
    errors: core.serialization.list(Issue).optional(),
    meta: DefaultMetaWrapper,
    warnings: core.serialization.list(Issue).optional(),
});

export declare namespace ListProfileV1EnvelopeDefaultMetaWrapper {
    interface Raw {
        data?: ProfileV1.Raw[] | null;
        errors?: Issue.Raw[] | null;
        meta: DefaultMetaWrapper.Raw;
        warnings?: Issue.Raw[] | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";
import { ClientProvidedResponseMetadata } from "./ClientProvidedResponseMetadata";
import { ExternalSessionAiResponseMetadataStatus } from "./ExternalSessionAiResponseMetadataStatus";
import { ExternalSessionAiResponseMetadataUsage } from "./ExternalSessionAiResponseMetadataUsage";

export const ExternalSessionAiResponseMetadata: core.serialization.ObjectSchema<
    serializers.ExternalSessionAiResponseMetadata.Raw,
    Airtop.ExternalSessionAiResponseMetadata
> = core.serialization.object({
    clientProvided: ClientProvidedResponseMetadata.optional(),
    requestId: core.serialization.string().optional(),
    status: ExternalSessionAiResponseMetadataStatus,
    usage: ExternalSessionAiResponseMetadataUsage,
});

export declare namespace ExternalSessionAiResponseMetadata {
    interface Raw {
        clientProvided?: ClientProvidedResponseMetadata.Raw | null;
        requestId?: string | null;
        status: ExternalSessionAiResponseMetadataStatus.Raw;
        usage: ExternalSessionAiResponseMetadataUsage.Raw;
    }
}
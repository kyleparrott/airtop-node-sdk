/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";

export const ProfileV1: core.serialization.ObjectSchema<serializers.ProfileV1.Raw, Airtop.ProfileV1> =
    core.serialization.object({
        name: core.serialization.string(),
        status: core.serialization.string().optional(),
        tags: core.serialization.list(core.serialization.string()).optional(),
        uploadUri: core.serialization.property("upload_uri", core.serialization.string().optional()),
    });

export declare namespace ProfileV1 {
    interface Raw {
        name: string;
        status?: string | null;
        tags?: string[] | null;
        upload_uri?: string | null;
    }
}

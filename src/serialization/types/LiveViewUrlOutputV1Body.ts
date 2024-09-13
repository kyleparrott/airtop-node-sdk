/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";

export const LiveViewUrlOutputV1Body: core.serialization.ObjectSchema<
    serializers.LiveViewUrlOutputV1Body.Raw,
    Airtop.LiveViewUrlOutputV1Body
> = core.serialization.object({
    schema: core.serialization.property("$schema", core.serialization.string().optional()),
    url: core.serialization.string(),
});

export declare namespace LiveViewUrlOutputV1Body {
    interface Raw {
        $schema?: string | null;
        url: string;
    }
}

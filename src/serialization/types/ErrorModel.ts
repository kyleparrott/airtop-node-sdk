/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Airtop from "../../api/index";
import * as core from "../../core";
import { ErrorDetail } from "./ErrorDetail";

export const ErrorModel: core.serialization.ObjectSchema<serializers.ErrorModel.Raw, Airtop.ErrorModel> =
    core.serialization.object({
        schema: core.serialization.property("$schema", core.serialization.string().optional()),
        detail: core.serialization.string().optional(),
        errors: core.serialization.list(ErrorDetail).optional(),
        instance: core.serialization.string().optional(),
        status: core.serialization.number().optional(),
        title: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
    });

export declare namespace ErrorModel {
    interface Raw {
        $schema?: string | null;
        detail?: string | null;
        errors?: ErrorDetail.Raw[] | null;
        instance?: string | null;
        status?: number | null;
        title?: string | null;
        type?: string | null;
    }
}

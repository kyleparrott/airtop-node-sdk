/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Airtop from "../index";

export interface SessionsResponse {
    data: Airtop.SessionsWithPagination;
    errors?: Airtop.Issue[];
    meta: Airtop.EnvelopeDefaultMeta;
    warnings?: Airtop.Issue[];
}
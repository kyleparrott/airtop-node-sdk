/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Airtop from "../index";

export interface SessionsWithPagination {
    /** Pagination info */
    pagination: Airtop.Pagination;
    /** List of sessions */
    sessions?: Airtop.ExternalSessionWithConnectionInfo[];
}

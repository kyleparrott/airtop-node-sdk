/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Airtop from "../../../../index";

/**
 * @example
 *     {
 *         offset: 1,
 *         limit: 10
 *     }
 */
export interface SessionsListRequest {
    /**
     * a comma separated list of IDs of the session to get
     */
    sessionIds?: string | string[];
    /**
     * status of the session to get
     */
    status?: Airtop.SessionsListRequestStatus;
    /**
     * offset for pagination
     */
    offset?: number;
    /**
     * limit for pagination
     */
    limit?: number;
}

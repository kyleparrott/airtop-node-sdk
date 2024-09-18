/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Airtop from "../index";

export interface SessionAiResponseMetadataUsage {
    /** The credit usage for this request */
    credits: number;
    /** The id of the request */
    id: string;
    /** The private usage data about specific models for this request */
    models?: Airtop.SessionAiResponseResponseMetadataModelUsage[];
    /** The total internal cost of this request */
    totalCost: number;
}

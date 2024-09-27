/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Airtop from "../index";

export interface ExternalSessionWithConnectionInfo {
    /** Url to connect to chrome devtools protocol port on the airtop browser. Include the header 'Authorization: Bearer <api-key>.' */
    cdpUrl?: string;
    /** Websocket url to connect to CDP webSocketDebuggerUrl on the airtop browser. Include the header 'Authorization: Bearer <api-key>.' */
    cdpWsUrl?: string;
    /** Websocket url to connect to the chromedriver on the airtop browser. Include the header 'Authorization: Bearer <api-key>.' */
    chromedriverUrl?: string;
    /** Session configuration */
    configuration: Airtop.ExternalSessionConfig;
    /** Current usage in minutes */
    currentUsage?: number;
    /** Date the session was created */
    dateCreated?: Date;
    /** UUID of the session */
    id: string;
    /** Date of the last activity */
    lastActivity?: Date;
    /** Id of a newly persisted profile */
    profileId?: string;
    /** Session status */
    status: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Airtop from "../index";

export interface SessionWithConnectionInfo {
    /** Url to connect to chrome devtools protocol port on the airtop browser. Include the header 'Authorization: Bearer <api-key>.' */
    cdpUrl?: string;
    /** Websocket url to connect to CDP webSocketDebuggerUrl on the airtop browser. Include the header 'Authorization: Bearer <api-key>.' */
    cdpWsUrl?: string;
    /** Websocket url to connect to the chromedriver on the airtop browser. Include the header 'Authorization: Bearer <api-key>.' */
    chromedriverUrl?: string;
    /** Session configuration */
    configuration: Airtop.SessionConfig;
    /** Current usage in minutes */
    currentUsage?: number;
    /** Date the session was created */
    dateCreated?: Date;
    /** UUID of the session */
    id: string;
    /** Date of the last activity */
    lastActivity?: Date;
    /** Connection info for the live view */
    liveView?: Airtop.LiveViewConnectionInfo;
    /** Session status */
    status: string;
    /** URL of the session */
    url?: string;
}

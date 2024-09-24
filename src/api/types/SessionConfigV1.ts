/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SessionConfigV1 {
    /** Persist the profile */
    persistProfile?: boolean;
    /** Profile name to persist resulting profile (required when persist_profile is true). Must contain A-Za-z0-9 only */
    persistProfileName?: string;
    /** Profile tags */
    persistProfileTags?: string[];
    /** Id of a profile to use with this session */
    profileId?: string;
    /** Max length of session in minutes, after which it will terminate if not already deleted */
    timeoutMinutes?: number;
}

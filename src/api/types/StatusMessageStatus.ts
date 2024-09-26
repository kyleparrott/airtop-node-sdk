/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the session
 */
export type StatusMessageStatus = "awaitingCapacity" | "initializing" | "running" | "ended";

export const StatusMessageStatus = {
    AwaitingCapacity: "awaitingCapacity",
    Initializing: "initializing",
    Running: "running",
    Ended: "ended",
} as const;

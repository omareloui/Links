import type { H3Error } from "h3";
import type { ZodError } from "zod";

export function isZodError(e: unknown): e is ZodError {
  return (
    e !== null &&
    typeof e === "object" &&
    "name" in e &&
    (e as { name?: string }).name === "ZodError"
  );
}

export function isH3Error(e: unknown): e is H3Error {
  return (
    e !== null &&
    typeof e === "object" &&
    "name" in e &&
    (e as { name?: string }).name === "H3Error"
  );
}

export function isError(e: unknown): e is Error {
  return (
    e !== null &&
    typeof e === "object" &&
    "name" in e &&
    (e as { name?: string }).name === "Error"
  );
}

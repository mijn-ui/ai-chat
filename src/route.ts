/**
 * List of public routes that do not require authentication.
 */
export const publicRoutes = ["/"];

/**
 * List of authentication-related routes.
 * These routes are accessible when the user is not logged in.
 */
export const authRoutes = ["/login", "/signin"];

/**
 * Prefix for API authentication routes.
 * These routes are used for handling authentication-related API requests.
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after successful login.
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

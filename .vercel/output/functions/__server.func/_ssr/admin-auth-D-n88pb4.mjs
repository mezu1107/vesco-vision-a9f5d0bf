//#region node_modules/.nitro/vite/services/ssr/assets/admin-auth-D-n88pb4.js
var ADMIN_EMAIL = "admin@am.com";
var ADMIN_PASSWORD = "Mezu@1105";
var AUTH_KEY = "pgbuilder_auth";
function login(email, password) {
	if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
		if (typeof window !== "undefined") localStorage.setItem(AUTH_KEY, "1");
		return true;
	}
	return false;
}
function logout() {
	if (typeof window !== "undefined") localStorage.removeItem(AUTH_KEY);
}
function isAuthenticated() {
	if (typeof window === "undefined") return false;
	return localStorage.getItem(AUTH_KEY) === "1";
}
//#endregion
export { login as n, logout as r, isAuthenticated as t };

function ToggleNavbar() {
	document.getElementsByClassName("hamburger")[0].classList.toggle("selected");
	document.getElementsByClassName("link-tab")[0].classList.toggle("selected");
}

var cookiePanel = document.getElementById("cookie");

function acceptCookies() {
	document.cookie = `AllowCookie=${true}`;
	cookiePanel.style.display = "none";
}

function denyCookies() {
	cookiePanel.style.display = "none";
}

function areCookiesAllowed() {
	const cookies = document.cookie.split("; ");

	let AllowCookie = cookies.includes("AllowCookie=true");
	console.log(AllowCookie);
	return AllowCookie;
}

console.log("load");
cookiePanel.style.display = areCookiesAllowed() ? "none" : "block";

var iFrame = document.createElement("iframe");
iFrame.src = "https://create.roblox.com";
iFrame.style.width = "92.9%";
iFrame.style.height = "1290px";
iFrame.style.border = "none";
iFrame.style.marginLeft = "180px";

const path = document.querySelector("#container-main");

const toDeletePath = document.querySelector("#Body");
const footer = document.querySelector("#footer-container");
toDeletePath.remove();
footer.remove();

path.insertBefore(iFrame, path.firstChild);
{
  /* <iframe src="https://create.roblox.com" width="90%" height="1200" style="margin-left:180px;border: transparent;"></iframe> */
}

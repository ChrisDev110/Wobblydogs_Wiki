let tabs = document.getElementById("tabs")
let pages = document.getElementById("pages")
let pageTitle = document.getElementById("pageTitle")
let middleThing = document.getElementById("middleThing")

let buttons = document.getElementsByClassName("closeButton")
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i]
    button.onclick = closePage
}

let currentPage = undefined
function openPage(pageName) {
    let page = undefined
    for (let i = 0; i < pages.children.length; i++) {
        let child = pages.children[i]
        if (child.dataset.name == pageName) {
            page = child
            page.style.display = "inline"
        } else {
            child.style.display = "none"
        }
    }

    if (page == undefined) {
        return
    }

    tabs.style.display = "none"
    pages.style.display = "inline"
    pageTitle.textContent = pageName
    currentPage = page

    middleThing.style.height = "200vh"
}

function closePage() {
    pageTitle.textContent = "Wobblydogs Wiki"
    currentPage.style.display = "none"
    tabs.style.display = "inline"
    pages.style.display = "none"
    middleThing.style.height = "100vh"
}

function addTab(iconSrc, tabName) {
    let newTab = document.createElement("div")
    newTab.className = "tabTab"
    newTab.onclick = () => {
        openPage(tabName)
    }
    tabs.appendChild(newTab)
    let tabIcon = document.createElement("div")
    tabIcon.className = "tabIcon"
    tabIcon.style.backgroundImage = "url("+iconSrc+")"
    let tabText = document.createElement("div")
    tabText.className = "tabText defaultText"
    tabText.textContent = tabName
    newTab.appendChild(tabIcon)
    newTab.appendChild(tabText)
}

addTab("images/welcome.png", "Badges")
addTab("images/patterns/arcade.png", "Patterns")
addTab("images/Eyes/newEye.png", "Eyes")
addTab("images/Mouths/newMouth.png", "Mouths")
addTab("images/gifi.gif", "Miscellaneous")
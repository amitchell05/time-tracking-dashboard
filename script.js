window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');
  const activeTab = document.querySelector('[aria-selected="true"]');

  activeTab.classList.add("tab--selected");

  // Add a click event handler to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabs);
  });
});

function changeTabs(e) {
  const target = e.target;
  const tabListEl = document.querySelector('[role="tablist"]');
  const container = document.querySelector("#timeTrackerDashboard");

  // Remove all current selected tabs
  tabListEl
    .querySelectorAll('[aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // Remove font color from previously selected
  tabListEl.querySelector(".tab--selected").classList.remove("tab--selected");

  // Set this tab as selected
  target.setAttribute("aria-selected", true);

  // Change font color of selected tab
  target.classList.add("tab--selected");

  // Hide all tab panels
  container
    .querySelectorAll('[role="tabpanel"]')
    .forEach((p) => p.setAttribute("hidden", true));

  // Show the selected panel
  container.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}

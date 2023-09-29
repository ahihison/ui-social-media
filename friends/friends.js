const triggerElement = document.getElementById("customTriggerElement");
const tooltipContainer = document.getElementById("customTooltip");

triggerElement.addEventListener("click", function () {
  const rect = triggerElement.getBoundingClientRect();
  const tooltipContent = triggerElement.getAttribute("title");

  // Set tooltip content
  tooltipContainer.textContent = tooltipContent;

  // Position and show the tooltip always on the right
  tooltipContainer.style.top = rect.top + window.scrollY + "px";
  tooltipContainer.style.left = rect.right + window.scrollX + "px";
  tooltipContainer.style.display = "block";

  // Remove the title attribute to prevent native tooltip from appearing
  triggerElement.removeAttribute("title");
});

document.addEventListener("click", function (event) {
  // Hide the tooltip when clicking outside the trigger element
  if (event.target !== triggerElement) {
    tooltipContainer.style.display = "none";
  }
});

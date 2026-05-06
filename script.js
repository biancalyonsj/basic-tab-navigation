const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

// loop through each tab and add an event click listener
tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        // retrieve the tab element
        const target = document.querySelector(tab.dataset.tabTarget);
        // when a tab is active, all other tabs should be hidden
        tabContent.forEach(tabContent => {tabContent.classList.remove('active')});
        // display current selected tab
        target.classList.add('active');

        // when a tab is clicked on, remove the highlighted color from the other tabs
        tabs.forEach(tab => {tab.classList.remove('active')});
        // when a tab is clicked on, highlighted the color
        tab.classList.add('active');
    })
})
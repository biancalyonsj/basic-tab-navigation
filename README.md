<h1 align="center">HTML Tab Navigation</h1>

![image alt](https://github.com/biancalyonsj/basic-tab-navigation/blob/6c1a53c91aa8df38ca768d8897e947548a821c7c/demo.jpg)

<p>Built a tab navigation system using vanilla JavaScript to dynamically switch between content sections.</p>

<h2>Concepts Learned</h2>
<h3>DOM Manipulation & Event Handling</h3>
<li>Selected multiple DOM elements using <code>querySelectorAll</code> and targeted individual elements with <code>data-* attributes</code></li>
<li>Attached click event listeners to each tab to trigger dynamic UI updates</li>
<li>Used event-driven programming to update both navigation state and visible content in real time</li>

<h3>Data Attributes & Dynamic Targeting</h3>
<li>Leveraged <code>data-tab-target</code> attributes to map navigation tabs to corresponding content sections</li>
<li>Dynamically selected content panels using <code>document.querySelector(tab.dataset.tabTarget)</code></li>
<li>Implemented a scalable pattern that allows new tabs and content sections to be added without changing core logic</li>

<h3>State Management via CSS Classes</h3>
<li>Controlled UI state using the <code>active</code> class to toggle visibility of content sections</li>
<li>Ensured only one content panel is visible at a time by removing <code>active</code> from all sections before applying it to the selected one</li>

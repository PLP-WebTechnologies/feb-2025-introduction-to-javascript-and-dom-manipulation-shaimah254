/**
 * DOM Manipulation Script
 * Handles dynamic content changes, style modifications, and element manipulation
 */

// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const dynamicTextElement = document.getElementById('dynamic-text');
    const changeTextButton = document.getElementById('change-text-btn');
    const styleDemoElement = document.getElementById('style-demo');
    const toggleStyleButton = document.getElementById('toggle-style-btn');
    const elementContainer = document.getElementById('element-container');
    const addElementButton = document.getElementById('add-element-btn');
    const removeElementButton = document.getElementById('remove-element-btn');

    // Text content modification
    let textChanged = false;
    changeTextButton.addEventListener('click', function() {
        if (!textChanged) {
            dynamicTextElement.textContent = 'Text content has been successfully updated through JavaScript!';
            dynamicTextElement.style.color = '#28a745';
            textChanged = true;
        } else {
            dynamicTextElement.textContent = 'This text will change when you click the button below.';
            dynamicTextElement.style.color = '';
            textChanged = false;
        }
    });

    // Style modification
    toggleStyleButton.addEventListener('click', function() {
        styleDemoElement.classList.toggle('highlight');
        
        // Additional inline style changes
        if (styleDemoElement.classList.contains('highlight')) {
            styleDemoElement.style.fontWeight = 'bold';
            styleDemoElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        } else {
            styleDemoElement.style.fontWeight = '';
            styleDemoElement.style.boxShadow = '';
        }
    });

    // Element manipulation
    let elementCounter = 0;
    addElementButton.addEventListener('click', function() {
        elementCounter++;
        const newElement = document.createElement('div');
        newElement.className = 'new-element';
        newElement.textContent = `New Element #${elementCounter} - Added ${new Date().toLocaleTimeString()}`;
        elementContainer.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', function() {
        const lastElement = elementContainer.lastElementChild;
        // Ensure we don't remove the initial paragraph
        if (lastElement && lastElement.tagName !== 'P') {
            elementContainer.removeChild(lastElement);
            elementCounter--;
        } else if (elementCounter === 0) {
            alert('No elements to remove');
        }
    });

    // Additional interactive effect for demo box
    styleDemoElement.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
        this.style.transition = 'all 0.2s ease';
    });

    styleDemoElement.addEventListener('click', function() {
        this.textContent = 'You clicked the box! Try the style toggle button.';
        setTimeout(() => {
            this.textContent = 'This box\'s style will change when interacted with.';
        }, 2000);
    });
});
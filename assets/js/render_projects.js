function renderProjects(projectsData) {
    const projectsContainer = document.getElementById('projects');
    if (!projectsContainer) return;

    // Clear existing content (optional, if we want to support re-rendering)
    projectsContainer.innerHTML = '';

    projectsData.forEach(project => {
        // 1. Create Grid Item
        const gridItem = document.createElement('div');
        // Add classes: col stuff + mix tags
        // Note: 'mix' class is required by MixItUp
        const tagClasses = project.tags.join(' ');
        gridItem.className = `col-lg-4 col-md-6 col-sm-4 col-xs-6 mix ${tagClasses}`;

        // Inner structure
        gridItem.innerHTML = `
            <div class="project">
                <img src="${project.thumbnail}" alt="${project.title}">
                <div class="ovrly"></div>
                <div class="buttons">
                    <a href="${project.link}" class="fa fa-link" target="_blank"></a>
                    <a href="#${project.id}" class="fa fa-search show-popup"></a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(gridItem);

        // 2. Create Popup Content
        // The popup content needs to be in the DOM for the popup plugin to find it by ID
        const popupDiv = document.createElement('div');
        popupDiv.className = 'pop-up-box';
        popupDiv.id = project.id;

        const popupImage = project.image ? `<img alt="${project.title}" src="${project.image}" class="hidden-xs">` : '';
        const linkHtml = project.link && project.link !== '#'
            ? `<a href="${project.link}" target="_blank">${project.linkText || 'Project Link'}</a>`
            : '';

        popupDiv.innerHTML = `
            ${popupImage}
            <div class="popup-content">
                <h3>${project.title}</h3>
                <p>
                    ${project.description}
                </p>
                ${linkHtml}
            </div>
        `;
        projectsContainer.appendChild(popupDiv);
    });
}

// Run render function
if (typeof projects !== 'undefined') {
    renderProjects(projects);
}

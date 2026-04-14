// EDIT THIS ARRAY TO UPDATE YOUR TIMELINE
const projectData = [
    {
        title: "Project Kickoff & Planning",
        date: "October 1st",
        description: "Defined scope, requirements, and finalized the tech stack.",
        status: "done" // Options: "done", "progress", "todo"
    },
    {
        title: "Initial Prototype Built",
        date: "October 15th",
        description: "Completed the first working draft of the core features.",
        status: "done"
    },
    {
        title: "Boss Review & Feedback Phase",
        date: "Current Phase",
        description: "Gathering feedback on the prototype to refine the UI/UX.",
        status: "progress"
    },
    {
        title: "Final Revisions",
        date: "Upcoming (Est. Nov 5th)",
        description: "Implementing feedback and polishing the final product.",
        status: "todo"
    },
    {
        title: "Launch & Handoff",
        date: "Target: Nov 15th",
        description: "Final deployment and transferring ownership/documentation.",
        status: "todo"
    }
];

function renderTimeline() {
    const container = document.getElementById('timeline');
    
    projectData.forEach((item, index) => {
        // Alternate left and right alignment
        const side = index % 2 === 0 ? 'left' : 'right';
        
        // Map status to CSS classes for colors
        const statusClass = `status-${item.status}`;

        const timelineHTML = `
            <div class="timeline-item ${side}">
                <div class="content ${statusClass}">
                    <h2>${item.title}</h2>
                    <div class="date">${item.date}</div>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += timelineHTML;
    });
}

// Run the function when the page loads
renderTimeline();

// Application data
const appData = {
  "hackathon": {
    "name": "TechCrunch Disrupt Hackathon 2024",
    "phase": "Development Phase",
    "timeRemaining": "18 hours 24 minutes",
    "teamName": "Innovation Squad"
  },
  "user": {
    "name": "Jordan Chen",
    "role": "Team Lead",
    "avatar": "JC"
  },
  "stats": {
    "activeTasks": 12,
    "completedToday": 8,
    "teamMembers": 4,
    "timeSavedWeek": 18.5
  },
  "team": [
    {"name": "Alex Rodriguez", "role": "Developer", "status": "Coding", "avatar": "AR"},
    {"name": "Sarah Kim", "role": "Designer", "status": "Designing", "avatar": "SK"},
    {"name": "Mike Johnson", "role": "Product Manager", "status": "Planning", "avatar": "MJ"},
    {"name": "Jamie Patel", "role": "Data Scientist", "status": "Analyzing", "avatar": "JP"}
  ],
  "tasks": [
    {
      "id": 1,
      "title": "Implement user authentication system",
      "priority": "High",
      "deadline": "Today 6:00 PM",
      "assignee": "Alex Rodriguez",
      "status": "In Progress",
      "aiReason": "Critical for MVP demo and blocks other features",
      "progress": 75
    },
    {
      "id": 2,
      "title": "Design landing page mockups",
      "priority": "High",
      "deadline": "Today 4:00 PM",
      "assignee": "Sarah Kim",
      "status": "In Progress",
      "aiReason": "Needed for development to start on frontend",
      "progress": 60
    },
    {
      "id": 3,
      "title": "Set up CI/CD pipeline",
      "priority": "Medium",
      "deadline": "Tomorrow 10:00 AM",
      "assignee": "Alex Rodriguez",
      "status": "Pending",
      "aiReason": "Important for deployment but not blocking current work",
      "progress": 0
    },
    {
      "id": 4,
      "title": "Conduct user research interviews",
      "priority": "Low",
      "deadline": "Tomorrow 2:00 PM",
      "assignee": "Mike Johnson",
      "status": "Pending",
      "aiReason": "Valuable for product direction but not urgent for demo",
      "progress": 25
    },
    {
      "id": 5,
      "title": "Prepare pitch presentation",
      "priority": "High",
      "deadline": "Tomorrow 9:00 AM",
      "assignee": "Mike Johnson",
      "status": "Not Started",
      "aiReason": "Essential for final presentation, auto-scheduled based on deadline",
      "progress": 0
    },
    {
      "id": 6,
      "title": "Train ML model for recommendation engine",
      "priority": "Medium",
      "deadline": "Today 8:00 PM",
      "assignee": "Jamie Patel",
      "status": "In Progress",
      "aiReason": "Core feature but has fallback options if delayed",
      "progress": 45
    }
  ],
  "schedule": [
    {"time": "9:00 AM", "task": "Team Standup", "duration": "15 min", "type": "meeting"},
    {"time": "9:30 AM", "task": "Deep Work Block - Development", "duration": "2.5 hrs", "type": "focus"},
    {"time": "12:00 PM", "task": "Lunch Break", "duration": "1 hr", "type": "break"},
    {"time": "1:00 PM", "task": "Code Review & Collaboration", "duration": "1.5 hrs", "type": "collaboration"},
    {"time": "2:30 PM", "task": "Short Break", "duration": "15 min", "type": "break"},
    {"time": "3:00 PM", "task": "Focus Block - Testing & Debugging", "duration": "2 hrs", "type": "focus"},
    {"time": "5:00 PM", "task": "Team Sync & Progress Review", "duration": "30 min", "type": "meeting"},
    {"time": "6:00 PM", "task": "Pitch Practice Session", "duration": "1 hr", "type": "presentation"}
  ],
  "automationFlows": [
    {
      "name": "Morning Standup Prep",
      "status": "Active",
      "trigger": "Daily at 8:45 AM",
      "actions": ["Gather progress updates", "Create meeting agenda", "Send Slack reminders"],
      "timeSaved": "15 min daily",
      "integrations": ["Slack", "GitHub", "Jira"]
    },
    {
      "name": "Code Review Automation",
      "status": "Active", 
      "trigger": "Git push to main branch",
      "actions": ["Assign random reviewer", "Run automated tests", "Create review checklist"],
      "timeSaved": "25 min per review",
      "integrations": ["GitHub", "Slack"]
    },
    {
      "name": "Pitch Prep Sequence",
      "status": "Active",
      "trigger": "24 hours before presentation",
      "actions": ["Collect demo materials", "Schedule practice session", "Set final reminders"],
      "timeSaved": "45 min",
      "integrations": ["Google Drive", "Calendar", "WhatsApp"]
    }
  ],
  "analytics": {
    "timeSavedDaily": [8, 12, 15, 18, 22, 19, 24],
    "taskCompletion": [
      {"member": "Alex", "completed": 85, "total": 100},
      {"member": "Sarah", "completed": 92, "total": 100},
      {"member": "Mike", "completed": 78, "total": 100},
      {"member": "Jamie", "completed": 88, "total": 100}
    ],
    "productivityHours": [
      {"hour": "9 AM", "productivity": 85},
      {"hour": "10 AM", "productivity": 92},
      {"hour": "11 AM", "productivity": 88},
      {"hour": "1 PM", "productivity": 75},
      {"hour": "2 PM", "productivity": 82},
      {"hour": "3 PM", "productivity": 95},
      {"hour": "4 PM", "productivity": 90}
    ]
  },
  "recentActivity": [
    {"time": "2 min ago", "action": "Auto-assigned code review to Sarah", "type": "automation"},
    {"time": "15 min ago", "action": "Created reminder for pitch practice", "type": "automation"},
    {"time": "32 min ago", "action": "Prioritized authentication task as High", "type": "ai"},
    {"time": "1 hr ago", "action": "Scheduled team sync meeting", "type": "automation"}
  ],
  "voiceCommands": [
    "Schedule team standup for 9 AM tomorrow",
    "Create high priority task to test API integration by 3 PM",
    "Set reminder to prepare demo data in 2 hours",
    "Assign UI testing task to Sarah with medium priority"
  ]
};

// Bright chart colors for light theme
const brightChartColors = [
  '#3B82F6', // Bright blue
  '#10B981', // Bright green
  '#F59E0B', // Bright orange
  '#EF4444', // Bright red
  '#8B5CF6', // Bright purple
  '#EC4899', // Bright pink
  '#14B8A6', // Bright teal
  '#F97316', // Bright orange-red
  '#06B6D4', // Bright cyan
  '#84CC16'  // Bright lime
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateDashboard();
    populateTaskList();
    populateAutomationFlows();
    initializeCharts();
    initializeVoiceModal();
    initializeTaskFilters();
    addInteractiveEffects();
    initializeLogoNavigation();
});

// Navigation functionality with improved reliability
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const targetSection = item.getAttribute('data-section');
            navigateToSection(targetSection, navItems, contentSections);
        });
    });
}

// Separate function to handle navigation logic
function navigateToSection(targetSection, navItems, contentSections) {
    // Update active nav item
    navItems.forEach(nav => nav.classList.remove('active'));
    const activeNavItem = document.querySelector(`[data-section="${targetSection}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    // Show target section
    contentSections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });
    
    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
        targetElement.classList.remove('hidden');
        targetElement.classList.add('active');
    }

    // Add smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize logo navigation to always return to dashboard
function initializeLogoNavigation() {
    const logo = document.querySelector('.logo');
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigateToSection('dashboard', navItems, contentSections);
        });
    }
}

// Populate dashboard with data
function populateDashboard() {
    populateSchedule();
    populateTeamList();
    populateActivityList();
}

function populateSchedule() {
    const scheduleList = document.getElementById('scheduleList');
    if (!scheduleList) return;

    scheduleList.innerHTML = appData.schedule.map(item => `
        <div class="schedule-item">
            <div class="schedule-time">${item.time}</div>
            <div class="schedule-task">
                <div class="schedule-task-title">${item.task}</div>
                <div class="schedule-duration">${item.duration}</div>
            </div>
            <div class="schedule-type ${item.type}">${capitalizeFirst(item.type)}</div>
        </div>
    `).join('');
}

function populateTeamList() {
    const teamList = document.getElementById('teamList');
    if (!teamList) return;

    teamList.innerHTML = appData.team.map(member => `
        <div class="team-member">
            <div class="member-avatar">${member.avatar}</div>
            <div class="member-info">
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
            </div>
            <div class="member-status ${member.status.toLowerCase()}">${member.status}</div>
        </div>
    `).join('');
}

function populateActivityList() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;

    activityList.innerHTML = appData.recentActivity.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                <i class="fas ${activity.type === 'automation' ? 'fa-cog' : 'fa-brain'}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-text">${activity.action}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

// Populate task list
function populateTaskList() {
    const taskList = document.getElementById('taskList');
    if (!taskList) return;

    renderTasks(appData.tasks);
}

function renderTasks(tasks) {
    const taskList = document.getElementById('taskList');
    
    taskList.innerHTML = tasks.map(task => `
        <div class="task-item" data-priority="${task.priority.toLowerCase()}">
            <div class="task-header">
                <div>
                    <div class="task-title">${task.title}</div>
                    <div class="task-meta">
                        <span><i class="fas fa-calendar"></i> ${task.deadline}</span>
                        <span><i class="fas fa-user"></i> ${task.assignee}</span>
                        <span><i class="fas fa-info-circle"></i> ${task.status}</span>
                    </div>
                </div>
                <div class="task-assignee">
                    <div class="priority-badge ${task.priority.toLowerCase()}">${task.priority}</div>
                    <div class="assignee-avatar">${getInitials(task.assignee)}</div>
                </div>
            </div>
            <div class="ai-reason">
                <div class="ai-reason-label">
                    <i class="fas fa-brain"></i>
                    AI Priority Reasoning
                </div>
                <div class="ai-reason-text">${task.aiReason}</div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${task.progress}%"></div>
            </div>
        </div>
    `).join('');
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Task filtering with improved visual feedback
function initializeTaskFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Update active filter
            filterBtns.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterTasks(filter);
        });
    });
}

function filterTasks(filter) {
    const taskItems = document.querySelectorAll('.task-item');
    let visibleCount = 0;
    
    taskItems.forEach((item, index) => {
        const priority = item.getAttribute('data-priority');
        
        if (filter === 'all' || priority === filter) {
            item.style.display = 'block';
            visibleCount++;
            // Add staggered animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'all 0.3s ease';
            }, index * 50);
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show count feedback
    const taskListContainer = document.getElementById('taskList').parentElement;
    let countElement = taskListContainer.querySelector('.filter-count');
    if (!countElement) {
        countElement = document.createElement('div');
        countElement.className = 'filter-count';
        countElement.style.cssText = `
            margin: 16px 0;
            padding: 8px 16px;
            background: linear-gradient(135deg, var(--color-bg-accent-1), #DBEAFE);
            border: 2px solid #BFDBFE;
            border-radius: 15px;
            font-size: 14px;
            font-weight: 600;
            color: var(--accent-blue);
            text-align: center;
        `;
        taskListContainer.insertBefore(countElement, document.getElementById('taskList'));
    }
    
    const filterText = filter === 'all' ? 'All tasks' : `${filter} priority tasks`;
    countElement.textContent = `Showing ${visibleCount} ${filterText}`;
}

// Populate automation flows
function populateAutomationFlows() {
    const automationGrid = document.getElementById('automationGrid');
    if (!automationGrid) return;

    automationGrid.innerHTML = appData.automationFlows.map(flow => `
        <div class="automation-flow">
            <div class="flow-header">
                <div>
                    <div class="flow-title">${flow.name}</div>
                    <div class="flow-trigger">
                        <i class="fas fa-play-circle"></i>
                        Trigger: ${flow.trigger}
                    </div>
                </div>
                <div class="flow-status ${flow.status.toLowerCase()}">${flow.status}</div>
            </div>
            
            <div class="flow-actions">
                <h4>Automated Actions:</h4>
                <div class="action-list">
                    ${flow.actions.map(action => `
                        <div class="action-item">${action}</div>
                    `).join('')}
                </div>
            </div>
            
            <div class="flow-integrations">
                ${flow.integrations.map(integration => `
                    <span class="integration-badge">${integration}</span>
                `).join('')}
            </div>
            
            <div class="time-saved">
                <i class="fas fa-clock"></i>
                Time saved: ${flow.timeSaved}
            </div>
        </div>
    `).join('');
}

// Initialize charts with bright colors
function initializeCharts() {
    createTimeSavedChart();
    createCompletionChart();
    createProductivityChart();
}

function createTimeSavedChart() {
    const ctx = document.getElementById('timeSavedChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Hours Saved',
                data: appData.analytics.timeSavedDaily,
                borderColor: brightChartColors[0],
                backgroundColor: brightChartColors[0] + '15',
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: brightChartColors[0],
                pointBorderColor: '#ffffff',
                pointBorderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#F3F4F6',
                        borderColor: '#E5E7EB'
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: 'Inter',
                            weight: '500'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: 'Inter',
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
}

function createCompletionChart() {
    const ctx = document.getElementById('completionChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: appData.analytics.taskCompletion.map(item => item.member),
            datasets: [{
                data: appData.analytics.taskCompletion.map(item => item.completed),
                backgroundColor: [
                    brightChartColors[0],
                    brightChartColors[1],
                    brightChartColors[4],
                    brightChartColors[5]
                ],
                borderWidth: 4,
                borderColor: '#ffffff',
                hoverBorderWidth: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#1F2937',
                        font: {
                            family: 'Inter',
                            weight: '500'
                        },
                        padding: 20
                    }
                }
            },
            cutout: '60%'
        }
    });
}

function createProductivityChart() {
    const ctx = document.getElementById('productivityChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: appData.analytics.productivityHours.map(item => item.hour),
            datasets: [{
                label: 'Productivity %',
                data: appData.analytics.productivityHours.map(item => item.productivity),
                backgroundColor: brightChartColors[1],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#F3F4F6',
                        borderColor: '#E5E7EB'
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: 'Inter',
                            weight: '500'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            family: 'Inter',
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
}

// Voice modal functionality with enhanced feedback
function initializeVoiceModal() {
    const voiceBtn = document.getElementById('voiceTaskBtn');
    const modal = document.getElementById('voiceModal');
    const closeBtn = document.getElementById('closeModal');
    const overlay = modal?.querySelector('.modal-overlay');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const recordBtn = document.getElementById('recordBtn');
    const voiceAnimation = document.getElementById('voiceAnimation');

    // Open modal with animation
    voiceBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        modal?.classList.remove('hidden');
        populateCommandExamples();
        
        // Add opening animation
        if (modal) {
            modal.style.animation = 'modalFadeIn 0.3s ease';
        }
    });

    // Close modal
    const closeModal = () => {
        if (modal) {
            modal.style.animation = 'modalFadeOut 0.2s ease';
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.style.animation = '';
            }, 200);
        }
        stopRecording();
    };

    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);

    // Tab switching with smooth transitions
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const target = btn.getAttribute('data-tab');
            
            // Update active tab
            tabBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            
            // Show target content with fade effect
            tabContents.forEach(content => {
                if (content.id === target + 'Tab') {
                    content.classList.remove('hidden');
                    content.style.animation = 'fadeIn 0.3s ease';
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // Voice recording simulation with better feedback
    let isRecording = false;
    recordBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    });

    function startRecording() {
        isRecording = true;
        recordBtn.innerHTML = '<i class="fas fa-stop"></i> Stop Recording';
        recordBtn.classList.add('recording');
        voiceAnimation.style.display = 'flex';
        
        const voiceStatus = document.querySelector('.voice-status');
        voiceStatus.textContent = 'Listening... Speak now!';
        voiceStatus.style.color = brightChartColors[1];
        
        // Simulate voice recognition after 3 seconds
        setTimeout(() => {
            stopRecording();
            showVoiceResult();
        }, 3000);
    }

    function stopRecording() {
        isRecording = false;
        recordBtn.innerHTML = '<i class="fas fa-microphone"></i> Start Recording';
        recordBtn.classList.remove('recording');
        voiceAnimation.style.display = 'none';
    }

    function showVoiceResult() {
        const voiceStatus = document.querySelector('.voice-status');
        voiceStatus.innerHTML = '✅ Processed: <strong>"Schedule team standup for 9 AM tomorrow"</strong>';
        voiceStatus.style.color = brightChartColors[1];
        
        // Show success notification
        showNotification('Task created successfully!');
        
        setTimeout(() => {
            closeModal();
        }, 2500);
    }

    // Process text input with better feedback
    const processBtn = document.querySelector('#textTab .btn--primary');
    processBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const textarea = document.querySelector('#textTab textarea');
        if (textarea.value.trim()) {
            // Show processing animation
            const originalText = processBtn.innerHTML;
            processBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            processBtn.disabled = true;
            
            setTimeout(() => {
                processBtn.innerHTML = '<i class="fas fa-check"></i> Processed!';
                processBtn.style.background = `linear-gradient(135deg, ${brightChartColors[1]}, ${brightChartColors[6]})`;
                
                showNotification('Task processed with AI successfully!');
                
                setTimeout(() => {
                    processBtn.innerHTML = originalText;
                    processBtn.style.background = '';
                    processBtn.disabled = false;
                    textarea.value = '';
                    closeModal();
                }, 1500);
            }, 1000);
        }
    });
}

function populateCommandExamples() {
    const commandExamples = document.getElementById('commandExamples');
    if (!commandExamples) return;

    commandExamples.innerHTML = appData.voiceCommands.map(command => `
        <div class="command-example">"${command}"</div>
    `).join('');

    // Add click handlers for examples
    const examples = commandExamples.querySelectorAll('.command-example');
    examples.forEach(example => {
        example.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const textTab = document.getElementById('textTab');
            const textarea = textTab?.querySelector('textarea');
            if (textarea) {
                textarea.value = example.textContent.replace(/"/g, '');
                
                // Switch to text tab
                document.querySelector('[data-tab="text"]')?.click();
                
                // Focus textarea with delay
                setTimeout(() => {
                    textarea.focus();
                }, 300);
            }
        });
    });
}

// Add interactive effects with improved performance
function addInteractiveEffects() {
    // Use passive event listeners for better performance
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.stat-card')) {
            e.target.closest('.stat-card').style.transform = 'translateY(-6px) scale(1.02)';
        }
        
        if (e.target.closest('.task-item')) {
            e.target.closest('.task-item').style.transform = 'translateY(-4px)';
        }
        
        if (e.target.closest('.team-member')) {
            e.target.closest('.team-member').style.transform = 'scale(1.03)';
        }
        
        if (e.target.closest('.schedule-item')) {
            e.target.closest('.schedule-item').style.transform = 'translateX(8px)';
        }
    }, { passive: true });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.stat-card')) {
            e.target.closest('.stat-card').style.transform = 'translateY(0) scale(1)';
        }
        
        if (e.target.closest('.task-item')) {
            e.target.closest('.task-item').style.transform = 'translateY(0)';
        }
        
        if (e.target.closest('.team-member')) {
            e.target.closest('.team-member').style.transform = 'scale(1)';
        }
        
        if (e.target.closest('.schedule-item')) {
            e.target.closest('.schedule-item').style.transform = 'translateX(0)';
        }
    }, { passive: true });
}

// Simulate real-time updates with bright animations
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Update time remaining with countdown animation
        const timeElement = document.getElementById('timeRemaining');
        if (timeElement) {
            timeElement.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                timeElement.style.animation = '';
            }, 500);
        }
        
        // Randomly update progress bars with smooth animation
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const currentWidth = parseInt(bar.style.width) || 0;
            if (Math.random() > 0.95 && currentWidth < 100) {
                bar.style.width = (currentWidth + Math.floor(Math.random() * 3) + 1) + '%';
                bar.style.background = `linear-gradient(90deg, ${brightChartColors[0]}, ${brightChartColors[6]})`;
            }
        });
        
        // Add sparkle effect to stats occasionally
        if (Math.random() > 0.98) {
            const statCards = document.querySelectorAll('.stat-card');
            const randomCard = statCards[Math.floor(Math.random() * statCards.length)];
            if (randomCard) {
                randomCard.style.animation = 'sparkle 0.8s ease';
                setTimeout(() => {
                    randomCard.style.animation = '';
                }, 800);
            }
        }
    }, 3000);
}

// Enhanced animations
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0%, 100% { transform: scale(1); box-shadow: var(--shadow-medium); }
        50% { transform: scale(1.05); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3); }
    }
    
    @keyframes modalFadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes modalFadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.9); }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Start real-time updates
simulateRealTimeUpdates();

// Enhanced keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to open voice modal
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('voiceTaskBtn')?.click();
    }
    
    // Escape to close modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('voiceModal');
        if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }
    
    // Number keys for quick navigation
    if (e.key >= '1' && e.key <= '4' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        const sections = ['dashboard', 'tasks', 'automation', 'insights'];
        const navBtn = document.querySelector(`[data-section="${sections[parseInt(e.key) - 1]}"]`);
        navBtn?.click();
    }
    
    // Home key to go to dashboard
    if (e.key === 'Home') {
        e.preventDefault();
        const dashboardBtn = document.querySelector('[data-section="dashboard"]');
        dashboardBtn?.click();
    }
});

// Enhanced notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background: linear-gradient(135deg, ${brightChartColors[1]}, ${brightChartColors[6]});
        color: white;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        max-width: 300px;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fas fa-check-circle" style="font-size: 18px;"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Enhanced ripple effect
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn')) {
        const btn = e.target.closest('.btn');
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
        `;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

console.log('🚀 HackFlow initialized with enhanced bright light theme! Navigation fixed and optimized.');
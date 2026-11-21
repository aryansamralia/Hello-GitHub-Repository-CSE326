(function () {
      'use strict';
      var STORAGE_KEY = 'morrow-research-workspace-v1';
      var today = new Date();
      var dateInput = function (offset) { var d = new Date(today); d.setDate(d.getDate() + offset); return d.toISOString().slice(0, 10); };
      var seed = {
        activeProjectId: 'p-sleep',
        projects: [
          { id: 'p-sleep', name: 'Sleep & memory consolidation', focus: 'How does sleep quality shape memory formation?', phase: 'Data collection', progress: 68, due: dateInput(18), owner: 'm-maya', tone: '#e2ecdf', ink: '#456b50', category: 'NEUROSCIENCE' },
          { id: 'p-air', name: 'Community air quality mapping', focus: 'Mapping environmental exposure across neighborhoods.', phase: 'Fieldwork', progress: 41, due: dateInput(32), owner: 'm-amir', tone: '#e3eaf1', ink: '#4c637d', category: 'PUBLIC HEALTH' },
          { id: 'p-language', name: 'Bilingual learning & attention', focus: 'Testing how language context affects working memory.', phase: 'Literature review', progress: 23, due: dateInput(54), owner: 'm-lena', tone: '#f1e8d9', ink: '#8b6840', category: 'COGNITIVE SCIENCE' }
        ],
        members: [
          { id: 'm-maya', name: 'Aryan', initials: 'AR', role: 'Principal investigator', email: 'aryan@example.edu', avatar: '' },
          { id: 'm-amir', name: 'Ishita Mishra', initials: 'IM', role: 'PhD researcher', email: 'ishita.mishra@example.edu', avatar: 'a2' },
          { id: 'm-lena', name: 'Jiya Chadha', initials: 'JC', role: 'Data scientist', email: 'jiya.chadha@example.edu', avatar: 'a3' },
          { id: 'm-theo', name: 'Piyush Dhaka', initials: 'PD', role: 'Research assistant', email: 'piyush.dhaka@example.edu', avatar: 'a4' },
          { id: 'm-noor', name: 'Gurpreet Singh', initials: 'GS', role: 'Postdoctoral fellow', email: 'gurpreet.singh@example.edu', avatar: 'a5' }
        ],
        literature: [
          { id: 'l-1', title: 'Sleep-dependent memory consolidation across the adult lifespan', authors: 'R. Hart, M. Alvarez, et al.', source: 'Journal of Cognitive Neuroscience', year: '2024', projectId: 'p-sleep', status: 'Reviewed', tags: ['Sleep', 'Memory'], saved: true },
          { id: 'l-2', title: 'Slow-wave activity and next-day learning outcomes', authors: 'S. Chen & A. Patel', source: 'Neuroscience Review', year: '2023', projectId: 'p-sleep', status: 'Reading', tags: ['EEG', 'Learning'], saved: false },
          { id: 'l-3', title: 'A practical guide to mixed-effects models in behavioral research', authors: 'K. Morgan, T. Ellis', source: 'Methods in Psychology', year: '2022', projectId: 'p-sleep', status: 'To read', tags: ['Methods'], saved: false },
          { id: 'l-4', title: 'Neighborhood-scale variation in particulate exposure', authors: 'D. Flores, N. Hassan, et al.', source: 'Environmental Health', year: '2025', projectId: 'p-air', status: 'Reading', tags: ['Air quality', 'Mapping'], saved: true },
          { id: 'l-5', title: 'Language context and executive attention in bilingual adults', authors: 'L. Park & E. Sato', source: 'Applied Psycholinguistics', year: '2024', projectId: 'p-language', status: 'To read', tags: ['Bilingualism'], saved: false },
          { id: 'l-6', title: 'Open protocols for reproducible behavioral studies', authors: 'A. Patel, J. Lewis', source: 'Open Science Framework', year: '2023', projectId: 'p-sleep', status: 'Reviewed', tags: ['Open science'], saved: true }
        ],
        tasks: [
          { id: 't-1', title: 'Validate participant cohort criteria', description: 'Confirm exclusion criteria with the clinical partner before recruitment opens.', projectId: 'p-sleep', owner: 'm-maya', due: dateInput(2), priority: 'High', status: 'progress' },
          { id: 't-2', title: 'Review the remaining 12 abstracts', description: 'Screen papers for the updated literature matrix.', projectId: 'p-sleep', owner: 'm-amir', due: dateInput(1), priority: 'Medium', status: 'todo' },
          { id: 't-3', title: 'Finalize overnight recall protocol', description: 'Incorporate feedback from the pilot session.', projectId: 'p-sleep', owner: 'm-noor', due: dateInput(3), priority: 'High', status: 'progress' },
          { id: 't-4', title: 'Prepare EEG export for analysis', description: 'Align event markers and remove test sessions.', projectId: 'p-sleep', owner: 'm-lena', due: dateInput(0), priority: 'Medium', status: 'todo' },
          { id: 't-5', title: 'Upload field sensor calibration logs', description: 'Attach the October calibration sheet to the project record.', projectId: 'p-air', owner: 'm-theo', due: dateInput(4), priority: 'Low', status: 'todo' },
          { id: 't-6', title: 'Draft bilingual attention search terms', description: 'Add alternate terms and screening notes to the review.', projectId: 'p-language', owner: 'm-amir', due: dateInput(6), priority: 'Low', status: 'todo' },
          { id: 't-7', title: 'Share the pilot summary with the team', description: 'The pilot notes and participant flow are ready for review.', projectId: 'p-sleep', owner: 'm-noor', due: dateInput(-1), priority: 'Low', status: 'done' }
        ],
        experiments: [
          { id: 'e-1', name: 'Overnight recall study', projectId: 'p-sleep', owner: 'm-noor', status: 'Running', participants: '24 / 42 participants', protocol: 'Two-session recall task with overnight polysomnography. Current cohort is in week three of recruitment.', updated: 'Updated 2 hours ago' },
          { id: 'e-2', name: 'Sleep restriction pilot', projectId: 'p-sleep', owner: 'm-lena', status: 'Analyzing', participants: '18 participants', protocol: 'Within-subject pilot comparing habitual sleep with a restricted-sleep condition.', updated: 'Updated yesterday' },
          { id: 'e-3', name: 'Neighborhood sensor walk', projectId: 'p-air', owner: 'm-theo', status: 'Planning', participants: '12 routes planned', protocol: 'Paired low-cost particulate sensors on repeated routes across four study blocks.', updated: 'Updated Oct 30' },
          { id: 'e-4', name: 'Color-word attention task', projectId: 'p-language', owner: 'm-amir', status: 'Planning', participants: 'Pilot: 8 participants', protocol: 'Counterbalanced language cue task with accuracy and response-time measures.', updated: 'Updated Oct 28' }
        ],
        findings: [
          { id: 'f-1', title: 'Recall stays stable after full-night sleep', summary: 'The pilot cohort showed a consistent recall advantage after a full night of sleep; confidence intervals still overlap across age bands.', projectId: 'p-sleep', category: 'PILOT INSIGHT', author: 'm-lena', date: dateInput(-1), accent: '#7ea285' },
          { id: 'f-2', title: 'Sensor placement changes the street-level picture', summary: 'Measurements taken at street level vary more by block than the nearest fixed monitor suggests.', projectId: 'p-air', category: 'FIELD NOTE', author: 'm-theo', date: dateInput(-2), accent: '#879cba' },
          { id: 'f-3', title: 'Language cues may shift task-switching cost', summary: 'Early responses point to a small context effect; the pilot sample is too small to support a firm conclusion.', projectId: 'p-language', category: 'EARLY SIGNAL', author: 'm-amir', date: dateInput(-3), accent: '#c99a69' }
        ],
        activity: [
          { id: 'a-1', type: 'finding', title: 'A new pilot insight was captured', detail: 'Recall stays stable after full-night sleep', by: 'm-lena', projectId: 'p-sleep', time: '18 minutes ago' },
          { id: 'a-2', type: 'literature', title: 'Added 3 papers to the reading list', detail: 'Sleep & memory consolidation', by: 'm-amir', projectId: 'p-sleep', time: '1 hour ago' },
          { id: 'a-3', type: 'experiment', title: 'Updated participant progress', detail: 'Overnight recall study · 24 of 42', by: 'm-noor', projectId: 'p-sleep', time: '2 hours ago' },
          { id: 'a-4', type: 'task', title: 'Completed a project task', detail: 'Share the pilot summary with the team', by: 'm-noor', projectId: 'p-sleep', time: 'Yesterday' },
          { id: 'a-5', type: 'project', title: 'Project phase moved to fieldwork', detail: 'Community air quality mapping', by: 'm-maya', projectId: 'p-air', time: 'Yesterday' }
        ]
      };
      function clone(value) { return JSON.parse(JSON.stringify(value)); }
      function loadState() {
        try {
          var saved = localStorage.getItem(STORAGE_KEY);
          if (saved) {
            var parsed = JSON.parse(saved);
            if (parsed && Array.isArray(parsed.projects) && Array.isArray(parsed.tasks) && Array.isArray(parsed.members)) {
              parsed.members = parsed.members.map(function (member) {
                var updatedMember = seed.members.find(function (item) { return item.id === member.id; });
                return updatedMember ? Object.assign({}, member, { name: updatedMember.name, initials: updatedMember.initials, email: updatedMember.email, role: updatedMember.role, avatar: updatedMember.avatar }) : member;
              });
              try { localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed)); } catch (error) {}
              return parsed;
            }
          }
        } catch (error) {}
        return clone(seed);
      }
      var data = loadState();
      var currentView = 'overview';
      var activeFilter = 'all';
      var tableQuery = '';
      var ui = {
        sidebar: document.getElementById('sidebar'),
        scrim: document.getElementById('scrim'),
        view: document.getElementById('viewWrap'),
        breadcrumb: document.getElementById('breadcrumbCurrent'),
        modal: document.getElementById('modalRoot'),
        modalCard: document.getElementById('modalCard'),
        popover: document.getElementById('popoverRoot'),
        toasts: document.getElementById('toastRegion')
      };
      var viewNames = { overview: 'Overview', projects: 'Projects', literature: 'Literature', tasks: 'Tasks', experiments: 'Experiments', findings: 'Findings', timeline: 'Timeline', team: 'Team', researchTools: 'Research tools' };
      var iconPaths = {
        book: '<path d="M5 4.5h11a3 3 0 0 1 3 3v12H8a3 3 0 0 1-3-3z"/><path d="M5 16.5a3 3 0 0 1 3-3h11M9 8h6"/>',
        task: '<path d="M8 6h12M8 12h12M8 18h12"/><path d="m3.5 6 1.2 1.2L6.5 5M3.5 12l1.2 1.2L6.5 11M3.5 18l1.2 1.2L6.5 17"/>',
        flask: '<path d="M9 3.5h6M10 3.5v6L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9.5v-6"/><path d="M7 15h10"/>',
        spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>',
        folder: '<path d="M3.5 7.5h6l2 2h9v10h-17z"/><path d="M3.5 7.5v-2h6l2 2"/>',
        calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>',
        team: '<circle cx="9" cy="8" r="3.3"/><path d="M3 20a6 6 0 0 1 12 0M16 5.2a3.2 3.2 0 0 1 0 6.1M17 14a5 5 0 0 1 4 4.8"/>',
        clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
        arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
        search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.2 4.2"/>',
        plus: '<path d="M12 5v14M5 12h14"/>',
        close: '<path d="m6 6 12 12M18 6 6 18"/>',
        more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
        download: '<path d="M12 3v11m0 0 4-4m-4 4-4-4M4 16v4h16v-4"/>',
        alert: '<path d="M12 3 2.8 20h18.4z"/><path d="M12 9v5m0 3h.01"/>',
        quote: '<path d="M4 11h6v8H3v-7c0-5 2-7 7-8M14 11h6v8h-7v-7c0-5 2-7 7-8"/>',
        link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"/>',
        chevron: '<path d="m7 10 5 5 5-5"/>'
      };
      function icon(name, cls) { return '<svg class="icon ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (iconPaths[name] || iconPaths.spark) + '</svg>'; }
      function escapeHtml(value) { return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
      function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (error) { showToast('This browser could not save workspace changes.'); } }
      function uid(prefix) { return prefix + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
      function person(id) { return data.members.find(function (item) { return item.id === id; }) || { name: 'Unassigned', initials: '--', role: '', avatar: '' }; }
      function project(id) { return data.projects.find(function (item) { return item.id === id; }) || { name: 'No project', tone: '#edf0e9', ink: '#657169', category: 'RESEARCH' }; }
      function activeProject() { var chosen = project(data.activeProjectId); if (chosen.archived) { chosen = data.projects.find(function (item) { return !item.archived; }) || chosen; data.activeProjectId = chosen.id; } return chosen; }
      function avatarMarkup(id, size) { var member = person(id); return '<span class="avatar ' + (size || 'small') + ' ' + escapeHtml(member.avatar || '') + '" aria-label="' + escapeHtml(member.name) + '">' + escapeHtml(member.initials) + '</span>'; }
      function dateLabel(value, withYear) {
        if (!value) return 'No date';
        var d = new Date(value + 'T12:00:00');
        if (Number.isNaN(d.getTime())) return value;
        return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: withYear ? 'numeric' : undefined }).format(d);
      }
      function monthDay(value) { if (!value) return ['—','']; var d = new Date(value + 'T12:00:00'); return [new Intl.DateTimeFormat(undefined,{day:'2-digit'}).format(d),new Intl.DateTimeFormat(undefined,{month:'short'}).format(d)]; }
      function statusClass(value) { return String(value || '').toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, ''); }
      function statusPill(value) { return '<span class="status-pill ' + statusClass(value) + '">' + escapeHtml(value) + '</span>'; }
      function tag(text) { return '<span class="tag-pill">' + escapeHtml(text) + '</span>'; }
      function saveActivity(type, title, detail, projectId, by) {
        data.activity.unshift({ id: uid('a'), type: type, title: title, detail: detail, projectId: projectId || data.activeProjectId, by: by || 'm-maya', time: 'Just now' });
        if (data.extras) { data.extras.history.unshift({ id: uid('h'), title: title, detail: detail, projectId: projectId || data.activeProjectId, by: by || 'm-maya', at: new Date().toISOString() }); data.extras.history = data.extras.history.slice(0,150); }
        persist();
      }
      function showToast(message) {
        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = icon('check') + '<span>' + escapeHtml(message) + '</span>';
        ui.toasts.appendChild(toast);
        window.setTimeout(function () { toast.remove(); }, 3300);
      }
      function plural(n, word) { return n + ' ' + word + (n === 1 ? '' : 's'); }
      function pageHeading(eyebrow, title, subtitle, action) {
        return '<div class="page-heading"><div><div class="eyebrow"><span class="eyebrow-dot"></span>' + escapeHtml(eyebrow) + '</div><h1>' + title + '</h1><p>' + escapeHtml(subtitle) + '</p></div>' + (action || '') + '</div>';
      }
      function addButton(entity, label) { return '<button class="button button-primary" type="button" data-action="compose" data-entity="' + entity + '">' + icon('plus') + escapeHtml(label) + '</button>'; }
      function avatarStack(ids) { return '<div class="team-strip" aria-label="' + ids.length + ' collaborators">' + ids.slice(0, 4).map(function (id) { return avatarMarkup(id, 'small'); }).join('') + (ids.length > 4 ? '<span class="avatar small">+' + (ids.length - 4) + '</span>' : '') + '</div>'; }
      function projectMembers(id) { var ids = data.members.filter(function (member) { return member.id === project(id).owner || data.tasks.some(function (task) { return task.projectId === id && task.owner === member.id; }); }).map(function (member) { return member.id; }); return ids.length ? ids : ['m-maya']; }
      function setView(name) {
        if (!viewNames[name]) return;
        if (currentView !== name) { activeFilter = 'all'; tableQuery = ''; }
        currentView = name;
        document.querySelectorAll('.nav-item[data-view]').forEach(function (button) {
          if (button.dataset.view === name) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
        });
        ui.breadcrumb.textContent = viewNames[name];
        ui.sidebar.classList.remove('is-open');
        ui.scrim.classList.remove('is-visible');
        ui.view.innerHTML = renderers[name]();
        ui.view.classList.remove('view-enter');
        void ui.view.offsetWidth;
        ui.view.classList.add('view-enter');
        document.title = viewNames[name] + ' · Morrow Research';
        updateCounts();
        ui.popover.hidden = true;
      }
      function renderOverview() {
        var p = activeProject();
        var active = data.projects.filter(function (item) { return !item.archived && item.progress < 100; }).length;
        var openTasks = data.tasks.filter(function (item) { return item.status !== 'done'; }).length;
        var reviewed = data.literature.filter(function (item) { return item.status === 'Reviewed'; }).length;
        var cards = [
          { label: 'Active projects', value: active, note: '+1 started this month', icon: 'folder', trend: 'Across 3 workstreams' },
          { label: 'Papers in library', value: data.literature.length, note: reviewed + ' fully reviewed', icon: 'book', trend: 'Reading is moving' },
          { label: 'Open tasks', value: openTasks, note: '4 due this week', icon: 'task', trend: 'Team-wide workload' },
          { label: 'Shared findings', value: data.findings.length, note: '+3 captured this week', icon: 'spark', trend: 'Across your projects' }
        ];
        var metricHtml = cards.map(function (m, i) { return '<article class="card metric-card stagger-in" style="--index:' + i + '"><div class="metric-top"><span>' + escapeHtml(m.label) + '</span><span class="metric-icon">' + icon(m.icon) + '</span></div><div class="metric-value-row"><strong class="metric-value">' + escapeHtml(m.value) + '</strong><span class="metric-trend">↗ ' + escapeHtml(i === 2 ? '2 done today' : 'On track') + '</span></div><div class="metric-foot">' + escapeHtml(m.trend) + '</div></article>'; }).join('');
        var bars = [38,62,51,78,57,88,68].map(function (height, i) { return '<div class="chart-day"><div class="chart-bars"><span class="chart-bar" style="--height:' + height + '%;--index:' + i + '"></span><span class="chart-bar secondary" style="--height:' + Math.max(19,height - 27) + '%;--index:' + (i + 2) + '"></span></div><label>' + ['M','T','W','T','F','S','S'][i] + '</label></div>'; }).join('');
        var milestoneRows = [
          { date: dateInput(2), name: 'Cohort criteria review', note: 'Sleep & memory · Aryan + Ishita' },
          { date: dateInput(5), name: 'Pilot analysis checkpoint', note: 'Sleep & memory · Jiya' },
          { date: dateInput(9), name: 'Fieldwork week 4 review', note: 'Air quality · Piyush + Gurpreet' }
        ].map(function (item) { var md = monthDay(item.date); return '<div class="milestone"><div class="milestone-date"><strong>' + md[0] + '</strong><span>' + md[1] + '</span></div><div class="milestone-copy"><strong>' + escapeHtml(item.name) + '</strong><span>' + escapeHtml(item.note) + '</span></div>' + icon('arrow') + '</div>'; }).join('');
        var projectRows = data.projects.filter(function (item) { return !item.archived; }).slice(0, 3).map(function (item, i) {
          return '<div class="project-row stagger-in" style="--index:' + i + '" role="button" tabindex="0" data-action="select-project" data-id="' + escapeHtml(item.id) + '"><span class="project-mark" style="--project-tone:' + escapeHtml(item.tone) + ';--project-ink:' + escapeHtml(item.ink) + '">' + escapeHtml(item.name.charAt(0)) + '</span><span class="project-row-main"><strong>' + escapeHtml(item.name) + '</strong><span>' + escapeHtml(item.phase) + '</span></span><span class="mini-progress" aria-label="' + item.progress + ' percent complete"><span style="--progress:' + item.progress + '%"></span></span></div>';
        }).join('');
        var activityRows = data.activity.slice(0, 3).map(activityMarkup).join('');
        var fullDate = new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric' }).format(today);
        return '<div class="view-root">' +
          '<div class="welcome-row">' + pageHeading('RESEARCH WORKSPACE · SAMPLE DATA', 'Your work, <em>in focus.</em>', 'A clear view of the questions, evidence, and next steps your team is moving forward.') + '<div class="workspace-label">' + icon('calendar') + escapeHtml(fullDate) + '</div></div>' +
          '<section class="hero-project"><div class="hero-project-copy"><div class="eyebrow"><span class="eyebrow-dot"></span> FEATURED PROJECT · ' + escapeHtml(p.category) + '</div><h2>' + escapeHtml(p.name) + '</h2><p>' + escapeHtml(p.focus) + '</p><div class="hero-project-meta">' + tag(p.phase) + tag('PI: ' + person(p.owner).name) + tag('Due ' + dateLabel(p.due)) + '</div></div><div class="hero-project-side"><div><div class="hero-line-completion" role="progressbar" aria-label="Project completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p.progress + '"><div class="hero-line-track"><span style="width:' + p.progress + '%"></span></div><div class="progress-caption">Project completion</div></div></div><div class="hero-project-actions"><button class="button button-light" type="button" data-action="select-project" data-id="' + escapeHtml(p.id) + '">' + icon('arrow') + 'Open project</button></div></div></section>' +
          '<section class="metrics-grid" aria-label="Workspace metrics">' + metricHtml + '</section>' +
          '<div class="dashboard-grid"><div class="dashboard-column">' +
            '<section><div class="section-title"><div><h2>Research momentum</h2><p>Shared work across your projects this week</p></div><button class="text-link" type="button" data-view="timeline">View timeline ' + icon('arrow') + '</button></div><div class="card panel momentum-panel"><div class="chart-head"><div class="chart-total"><strong>32</strong>actions this week</div><span class="date-pill">' + icon('calendar') + 'Last 7 days ' + icon('chevron') + '</span></div><div class="chart-area" role="img" aria-label="Activity chart for Monday to Sunday, with a rise in project activity toward Friday">' + bars + '</div><div class="chart-legend"><span><i class="legend-dot"></i>Research activity</span><span><i class="legend-dot light"></i>Completed tasks</span></div></div></section>' +
            '<section><div class="section-title"><div><h2>Projects in motion</h2><p>Your team has ' + data.projects.length + ' active research threads</p></div><button class="text-link" type="button" data-view="projects">All projects ' + icon('arrow') + '</button></div><div class="project-list">' + projectRows + '</div></section>' +
          '</div><div class="dashboard-column secondary">' +
            '<section><div class="section-title"><div><h2>Next milestones</h2><p>Small steps, visible progress</p></div><button class="text-link" type="button" data-view="tasks">Tasks ' + icon('arrow') + '</button></div><div class="card panel"><div class="milestone-list">' + milestoneRows + '</div></div></section>' +
            '<section><div class="section-title"><div><h2>Team pulse</h2><p>Latest from your collaborators</p></div><button class="text-link" type="button" data-view="team">Meet the team ' + icon('arrow') + '</button></div><div class="card panel"><div class="activity-list">' + activityRows + '</div><button class="button button-secondary" style="width:100%;margin-top:8px" type="button" data-view="timeline">Open activity timeline ' + icon('arrow') + '</button></div></section>' +
          '</div></div></div>';
      }
      function activityIcon(type) { return type === 'literature' ? 'book' : type === 'task' ? 'check' : type === 'experiment' ? 'flask' : type === 'project' ? 'folder' : 'spark'; }
      function activityMarkup(item) {
        var who = person(item.by);
        return '<div class="activity-item"><span class="activity-mark">' + icon(activityIcon(item.type)) + '</span><div class="activity-copy"><p><strong>' + escapeHtml(who.name.split(' ')[0]) + '</strong> ' + escapeHtml(item.title) + '</p><time>' + escapeHtml(item.detail) + ' · ' + escapeHtml(item.time) + '</time></div></div>';
      }
      function renderProjects() {
        var p = activeProject();
        var activeProjects = data.projects.filter(function (item) { return !item.archived; });
        var cards = activeProjects.map(function (item, i) {
          return '<article class="card card-hover project-card stagger-in ' + (item.id === p.id ? 'selected' : '') + '" style="--index:' + i + '" role="button" tabindex="0" data-action="select-project" data-id="' + escapeHtml(item.id) + '"><div class="project-card-top"><span class="project-mark" style="--project-tone:' + escapeHtml(item.tone) + ';--project-ink:' + escapeHtml(item.ink) + '">' + escapeHtml(item.name.charAt(0)) + '</span>' + statusPill(item.progress === 100 ? 'Complete' : 'Active') + '</div><h3>' + escapeHtml(item.name) + '</h3><p class="project-focus">' + escapeHtml(item.focus) + '</p><span class="project-phase">' + escapeHtml(item.phase) + '</span><div class="project-progress-row"><span class="mini-progress"><span style="--progress:' + item.progress + '%"></span></span></div><div class="project-card-footer"><span>Due ' + dateLabel(item.due) + '</span>' + avatarStack(projectMembers(item.id)) + '</div></article>';
        }).join('');
        var relLit = data.literature.filter(function (x) { return x.projectId === p.id; }).length;
        var relTasks = data.tasks.filter(function (x) { return x.projectId === p.id && x.status !== 'done'; }).length;
        var relExp = data.experiments.filter(function (x) { return x.projectId === p.id; }).length;
        return '<div class="view-root">' + pageHeading('PROJECTS / ' + activeProjects.length + ' ACTIVE', 'Research has a <em>home.</em>', 'Keep each question connected to the people, evidence, and work that move it forward.', addButton('project','New project')) +
          '<div class="project-grid">' + cards + '</div>' +
          '<section class="card project-detail"><div><div class="eyebrow"><span class="eyebrow-dot"></span> SELECTED PROJECT · ' + escapeHtml(p.category) + '</div><h2 style="margin:0;font:500 29px/1.05 var(--serif)">' + escapeHtml(p.name) + '</h2><p style="max-width:680px;margin:8px 0 0;color:var(--muted);font-size:10px">' + escapeHtml(p.focus) + '</p><div class="detail-meta">' + tag(p.phase) + tag('Lead: ' + person(p.owner).name) + tag('Milestone ' + dateLabel(p.due)) + '</div><div style="display:flex;align-items:center;gap:10px"><span class="mini-progress" role="progressbar" aria-label="Project completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p.progress + '" style="width:min(310px,55%)"><span style="--progress:' + p.progress + '%"></span></span></div><div style="display:flex;gap:8px;margin-top:15px;flex-wrap:wrap"><button class="button button-secondary" type="button" data-view="literature">' + icon('book') + 'Open literature</button><button class="button button-secondary" type="button" data-view="tasks">' + icon('task') + 'View tasks</button><button class="button button-secondary" type="button" data-action="compose" data-entity="finding">' + icon('spark') + 'Capture finding</button></div></div><div class="detail-stats"><div class="detail-stat"><strong>' + relLit + '</strong><span>Literature records</span></div><div class="detail-stat"><strong>' + relTasks + '</strong><span>Open tasks</span></div><div class="detail-stat"><strong>' + relExp + '</strong><span>Experiments</span></div></div></section></div>';
      }
      function renderLiterature() {
        var query = tableQuery.trim().toLowerCase();
        var rows = data.literature.filter(function (item) {
          var matches = (item.title + ' ' + item.authors + ' ' + item.source + ' ' + item.tags.join(' ')).toLowerCase().indexOf(query) !== -1;
          var filter = activeFilter === 'all' || (activeFilter === 'saved' ? item.saved : item.status.toLowerCase() === activeFilter);
          return matches && filter;
        }).map(function (item) {
          var p = project(item.projectId);
          return '<tr><td><div class="record-title">' + escapeHtml(item.title) + '</div><div class="record-sub">' + escapeHtml(item.authors) + '</div></td><td class="source-cell">' + escapeHtml(item.source) + '</td><td>' + escapeHtml(item.year) + '</td><td>' + statusPill(item.status) + '</td><td>' + tag(p.category) + '</td><td><button class="saved-button" type="button" data-action="toggle-saved" data-id="' + escapeHtml(item.id) + '" aria-pressed="' + item.saved + '" aria-label="' + (item.saved ? 'Remove from saved papers' : 'Save paper') + '">' + icon('spark') + '</button></td></tr>';
        }).join('');
        return '<div class="view-root">' + pageHeading('LIBRARY / LITERATURE', 'Evidence, <em>in context.</em>', 'Keep sources connected to the questions and projects they inform.', addButton('literature','Add paper')) +
          '<div class="toolbar"><div class="toolbar-left"><div class="filter-tabs" role="group" aria-label="Filter literature">' + filterButton('all','All papers') + filterButton('to read','To read') + filterButton('reading','Reading') + filterButton('saved','Saved') + '</div></div><div class="toolbar-right"><label class="input-search">' + icon('search') + '<span class="sr-only">Filter papers</span><input type="search" id="literatureSearch" placeholder="Find a paper or author..." value="' + escapeHtml(tableQuery) + '"></label><span class="date-pill">' + data.literature.length + ' records</span></div></div>' +
          '<section class="card table-shell"><div class="table-scroll"><table><caption class="sr-only">Research literature records and review status</caption><thead><tr><th>Paper / authors</th><th>Publication</th><th>Year</th><th>Reading status</th><th>Project</th><th><span class="sr-only">Save</span></th></tr></thead><tbody>' + (rows || '<tr><td colspan="6"><div class="empty-state"><h3>No papers found</h3><p>Adjust the search or add a source to your shared library.</p></div></td></tr>') + '</tbody></table></div></section><div class="filter-note" style="margin-top:12px">Demo workspace records · replace these with your team’s verified sources.</div></div>';
      }
      function filterButton(key, label) { return '<button class="filter-tab" type="button" data-action="filter" data-filter="' + key + '" aria-pressed="' + (activeFilter === key) + '">' + label + '</button>'; }
      function renderTasks() {
        var search = tableQuery.trim().toLowerCase();
        var sections = [
          { id: 'todo', label: 'To do', dot: '', statuses: ['todo'] },
          { id: 'progress', label: 'In progress', dot: 'progress', statuses: ['progress'] },
          { id: 'done', label: 'Done', dot: 'done', statuses: ['done'] }
        ];
        var content = sections.map(function (section) {
          var items = data.tasks.filter(function (task) {
            var matches = (task.title + ' ' + task.description + ' ' + person(task.owner).name).toLowerCase().indexOf(search) !== -1;
            var projectMatches = activeFilter === 'all' || task.projectId === activeFilter;
            return task.status === section.id && matches && projectMatches;
          });
          var itemHtml = items.map(function (task, i) {
            return '<article class="task-card stagger-in" style="--index:' + i + '"><div class="task-card-top"><button class="task-check" type="button" data-action="toggle-task" data-id="' + escapeHtml(task.id) + '" aria-pressed="' + (task.status === 'done') + '" aria-label="' + (task.status === 'done' ? 'Reopen task' : 'Mark task complete') + '">' + icon('check') + '</button><span class="task-title ' + (task.status === 'done' ? 'done' : '') + '">' + escapeHtml(task.title) + '</span>' + '<span class="priority-pill ' + task.priority.toLowerCase() + '">' + escapeHtml(task.priority) + '</span></div><p>' + escapeHtml(task.description) + '</p><div class="task-meta"><span class="task-due">' + icon('calendar') + escapeHtml(dateLabel(task.due)) + '</span><span class="task-owner">' + avatarMarkup(task.owner,'xsmall') + escapeHtml(person(task.owner).name.split(' ')[0]) + '</span></div></article>';
          }).join('');
          return '<section class="task-column"><div class="task-column-head"><strong><i class="column-dot ' + section.dot + '"></i>' + section.label + '</strong><span class="column-count">' + items.length + '</span></div>' + (itemHtml || '<div style="padding:16px 5px;color:#96a099;font-size:9px">Nothing here yet</div>') + '</section>';
        }).join('');
        var projectOptions = '<button class="filter-tab" type="button" data-action="filter" data-filter="all" aria-pressed="' + (activeFilter === 'all') + '">All projects</button>' + data.projects.map(function (p) { return '<button class="filter-tab" type="button" data-action="filter" data-filter="' + escapeHtml(p.id) + '" aria-pressed="' + (activeFilter === p.id) + '">' + escapeHtml(p.name.split(' ').slice(0,2).join(' ')) + '</button>'; }).join('');
        return '<div class="view-root">' + pageHeading('WORK / TASKS', 'Make the next step <em>visible.</em>', 'Shared responsibilities, clear ownership, and due dates your team can trust.', addButton('task','Add task')) +
          '<div class="toolbar"><div class="toolbar-left"><div class="filter-tabs" role="group" aria-label="Filter tasks by project">' + projectOptions + '</div></div><div class="toolbar-right"><label class="input-search">' + icon('search') + '<span class="sr-only">Search tasks</span><input type="search" id="taskSearch" placeholder="Search tasks..." value="' + escapeHtml(tableQuery) + '"></label></div></div><div class="task-columns">' + content + '</div></div>';
      }
      function renderExperiments() {
        var query = tableQuery.trim().toLowerCase();
        var items = data.experiments.filter(function (item) { return (item.name + ' ' + item.protocol + ' ' + project(item.projectId).name).toLowerCase().indexOf(query) !== -1; });
        var cards = items.map(function (item, i) {
          return '<article class="card card-hover experiment-card stagger-in" style="--index:' + i + '"><div class="experiment-top"><span class="card-icon">' + icon('flask') + '</span>' + statusPill(item.status) + '</div><h3>' + escapeHtml(item.name) + '</h3><p>' + escapeHtml(project(item.projectId).name) + '</p><div class="protocol-preview">' + escapeHtml(item.protocol) + '</div><div class="experiment-footer"><span>' + escapeHtml(item.participants) + '</span><strong>' + escapeHtml(person(item.owner).name.split(' ')[0]) + '</strong></div><div style="display:flex;align-items:center;justify-content:space-between;margin-top:9px;color:#9aa39d;font-size:8px"><span>' + escapeHtml(item.updated) + '</span><button class="text-link" type="button" data-action="edit-experiment-status" data-id="' + escapeHtml(item.id) + '">Update status ' + icon('arrow') + '</button></div></article>';
        }).join('');
        return '<div class="view-root">' + pageHeading('RESEARCH / EXPERIMENTS', 'From protocol to <em>evidence.</em>', 'Track active studies, methods, participants, and the details your team needs to reproduce the work.', addButton('experiment','Log experiment')) +
          '<div class="toolbar"><div class="toolbar-left"><span class="date-pill">' + data.experiments.length + ' studies across ' + data.projects.length + ' projects</span></div><div class="toolbar-right"><label class="input-search">' + icon('search') + '<span class="sr-only">Search experiments</span><input type="search" id="experimentSearch" placeholder="Search experiments..." value="' + escapeHtml(tableQuery) + '"></label></div></div><div class="experiment-grid">' + (cards || '<div class="card empty-state"><h3>No experiments yet</h3><p>Log a protocol or study to make it visible to your collaborators.</p></div>') + '</div></div>';
      }
      function renderFindings() {
        var query = tableQuery.trim().toLowerCase();
        var items = data.findings.filter(function (item) { return (item.title + ' ' + item.summary + ' ' + project(item.projectId).name).toLowerCase().indexOf(query) !== -1; });
        var cards = items.map(function (item, i) {
          return '<article class="card card-hover finding-card stagger-in" style="--index:' + i + ';--finding-accent:' + escapeHtml(item.accent || '#7ea285') + '"><div class="finding-top"><span class="eyebrow" style="margin:0">' + icon('spark') + escapeHtml(item.category) + '</span><button class="icon-button" style="width:30px;height:30px" type="button" data-action="copy-finding" data-id="' + escapeHtml(item.id) + '" aria-label="Copy finding"><svg class="icon" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg></button></div><h3>' + escapeHtml(item.title) + '</h3><blockquote class="finding-quote">“' + escapeHtml(item.summary) + '”</blockquote><div class="finding-meta"><span>' + escapeHtml(project(item.projectId).name) + '</span><span class="finding-author">' + avatarMarkup(item.author,'xsmall') + escapeHtml(person(item.author).name.split(' ')[0]) + ' · ' + dateLabel(item.date) + '</span></div></article>';
        }).join('');
        return '<div class="view-root">' + pageHeading('RESEARCH / FINDINGS', 'Keep what you <em>learn.</em>', 'A shared record of emerging patterns, useful surprises, and evidence that changes the next question.', addButton('finding','Capture finding')) +
          '<div class="toolbar"><div class="toolbar-left"><div class="date-pill">' + icon('spark') + data.findings.length + ' shared notes</div></div><div class="toolbar-right"><label class="input-search">' + icon('search') + '<span class="sr-only">Search findings</span><input type="search" id="findingSearch" placeholder="Search findings..." value="' + escapeHtml(tableQuery) + '"></label></div></div><div class="finding-grid">' + (cards || '<div class="card empty-state"><h3>No findings yet</h3><p>Capture an observation so the whole team can build on it.</p></div>') + '</div></div>';
      }
      function renderTimeline() {
        var typeNames = { all: 'All activity', project: 'Projects', literature: 'Literature', task: 'Tasks', experiment: 'Experiments', finding: 'Findings' };
        var events = data.activity.filter(function (item) { return activeFilter === 'all' || item.type === activeFilter; });
        var rows = events.map(function (item, i) {
          return '<article class="timeline-item stagger-in" style="--index:' + i + '"><time class="timeline-date">' + escapeHtml(item.time) + '</time><span class="timeline-node">' + icon(activityIcon(item.type)) + '</span><div class="timeline-copy"><strong>' + escapeHtml(item.title) + '</strong><p>' + escapeHtml(item.detail) + ' · ' + escapeHtml(project(item.projectId).name) + '</p><div class="timeline-by">' + avatarMarkup(item.by,'xsmall') + escapeHtml(person(item.by).name) + '</div></div></article>';
        }).join('');
        return '<div class="view-root">' + pageHeading('WORKSPACE / PROJECT TIMELINE', 'Progress, <em>with a record.</em>', 'A living history of decisions, evidence, and work across the workspace.') +
          '<div class="toolbar"><div class="toolbar-left"><div class="filter-tabs" role="group" aria-label="Filter timeline">' + Object.keys(typeNames).map(function (key) { return filterButton(key,typeNames[key]); }).join('') + '</div></div><div class="toolbar-right"><span class="date-pill">' + events.length + ' updates</span></div></div><div class="card panel"><div class="timeline">' + (rows || '<div class="empty-state"><h3>No updates in this view</h3><p>Changes from your team will appear here as the research progresses.</p></div>') + '</div></div></div>';
      }
      function renderTeam() {
        var members = data.members.map(function (member, i) {
          var assigned = data.tasks.filter(function (task) { return task.owner === member.id && task.status !== 'done'; }).length;
          var projectsCount = data.projects.filter(function (p) { return p.owner === member.id || data.tasks.some(function (t) { return t.owner === member.id && t.projectId === p.id; }); }).length;
          return '<article class="card card-hover member-card stagger-in" style="--index:' + i + '">' + avatarMarkup(member.id,'') + '<h3>' + escapeHtml(member.name) + '</h3><div class="member-role">' + escapeHtml(member.role) + '</div><a class="member-email" href="mailto:' + escapeHtml(member.email) + '">' + escapeHtml(member.email) + '</a><div class="member-load"><span>' + plural(projectsCount,'project') + '</span><strong>' + plural(assigned,'open task') + '</strong></div></article>';
        }).join('');
        return '<div class="view-root">' + pageHeading('WORKSPACE / PEOPLE', 'Better work, <em>together.</em>', 'Know who is contributing, what they own, and where their expertise is focused.', addButton('member','Invite teammate')) +
          '<div class="card panel" style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px"><div><strong style="display:block;font:500 21px var(--serif)">Mind &amp; Memory Lab</strong><span style="display:block;margin-top:4px;color:var(--muted);font-size:9px">A shared space for careful questions and reproducible research.</span></div>' + avatarStack(data.members.map(function (x) { return x.id; })) + '</div><div class="team-grid">' + members + '</div></div>';
      }
      var renderers = { overview: renderOverview, projects: renderProjects, literature: renderLiterature, tasks: renderTasks, experiments: renderExperiments, findings: renderFindings, timeline: renderTimeline, team: renderTeam, researchTools: renderResearchTools };
      function updateCounts() {
        document.getElementById('projectCount').textContent = data.projects.filter(function (p) { return !p.archived; }).length;
        document.getElementById('paperCount').textContent = data.literature.length;
        document.getElementById('taskCount').textContent = data.tasks.filter(function (t) { return t.status !== 'done'; }).length;
      }
      function composeMenuHtml() {
        var choices = [
          ['project','folder','New project','Start a research workstream'],
          ['literature','book','Add literature','Save a paper or source'],
          ['task','task','Create task','Assign a clear next step'],
          ['experiment','flask','Log experiment','Record a protocol or study'],
          ['finding','spark','Capture finding','Share an insight with the team'],
          ['member','team','Invite teammate','Add a collaborator locally']
        ];
        return '<div class="popover-panel"><div class="popover-heading">Create in your workspace</div>' + choices.map(function (c) { return '<button class="popover-item" type="button" data-action="compose" data-entity="' + c[0] + '">' + icon(c[1]) + '<span>' + c[2] + '</span><small>' + c[3] + '</small></button>'; }).join('') + '<div class="popover-sep"></div><button class="popover-item" type="button" data-action="export">' + icon('download') + '<span>Export workspace</span><small>JSON</small></button></div>';
      }
      function workspaceMenuHtml() {
        return '<div class="popover-panel" style="right:auto;width:270px"><div class="popover-heading">Choose a project focus</div>' + data.projects.filter(function (p) { return !p.archived; }).map(function (p) { return '<button class="popover-item" type="button" data-action="switch-project" data-id="' + escapeHtml(p.id) + '">' + '<span class="project-mark" style="width:30px;height:30px;--project-tone:' + escapeHtml(p.tone) + ';--project-ink:' + escapeHtml(p.ink) + '">' + escapeHtml(p.name.charAt(0)) + '</span><span>' + escapeHtml(p.name) + '</span>' + (p.id === data.activeProjectId ? '<small>Active</small>' : '') + '</button>'; }).join('') + '</div>';
      }
      function activityPopoverHtml() {
        return '<div class="popover-panel"><div class="popover-heading">Recent team activity</div>' + data.activity.slice(0,4).map(function (a) { return '<div class="popover-item" style="cursor:default">' + '<span class="activity-mark" style="width:29px;height:29px">' + icon(activityIcon(a.type)) + '</span><span>' + escapeHtml(a.title) + '<small style="display:block;margin-top:3px">' + escapeHtml(person(a.by).name.split(' ')[0]) + ' · ' + escapeHtml(a.time) + '</small></span></div>'; }).join('') + '<button class="popover-item" type="button" data-view="timeline">' + icon('arrow') + '<span>See all activity</span></button></div>';
      }
      function profileMenuHtml() {
        return '<div class="popover-panel" style="top:auto;right:auto;left:16px;bottom:15px;width:230px"><div class="popover-heading">Workspace options</div><button class="popover-item" type="button" data-action="export">' + icon('download') + '<span>Export workspace data</span></button><button class="popover-item" type="button" data-action="reset">' + icon('alert') + '<span>Restore demo workspace</span></button></div>';
      }
      function openPopover(html) { ui.popover.innerHTML = html; ui.popover.hidden = false; }
      function closePopover() { ui.popover.hidden = true; ui.popover.innerHTML = ''; document.querySelectorAll('[aria-expanded="true"][data-action]').forEach(function (button) { button.setAttribute('aria-expanded','false'); }); }
      function projectSelect() {
        return '<select name="projectId" required>' + data.projects.filter(function (p) { return !p.archived; }).map(function (p) { return '<option value="' + escapeHtml(p.id) + '"' + (p.id === data.activeProjectId ? ' selected' : '') + '>' + escapeHtml(p.name) + '</option>'; }).join('') + '</select>';
      }
      function memberSelect(name, selected) {
        return '<select name="' + name + '" required>' + data.members.map(function (m) { return '<option value="' + escapeHtml(m.id) + '"' + (m.id === selected ? ' selected' : '') + '>' + escapeHtml(m.name) + '</option>'; }).join('') + '</select>';
      }
      function field(label, name, control, full) { return '<div class="field ' + (full ? 'full' : '') + '"><label for="field-' + name + '">' + label + '</label>' + control.replace('<input ', '<input id="field-' + name + '" ').replace('<select ', '<select id="field-' + name + '" ').replace('<textarea ', '<textarea id="field-' + name + '" ') + '</div>'; }
      function input(name, placeholder, required, type, value) { return '<input type="' + (type || 'text') + '" name="' + name + '" placeholder="' + escapeHtml(placeholder || '') + '"' + (required ? ' required' : '') + (value ? ' value="' + escapeHtml(value) + '"' : '') + '>'; }
      function textarea(name, placeholder, required) { return '<textarea name="' + name + '" placeholder="' + escapeHtml(placeholder || '') + '"' + (required ? ' required' : '') + '></textarea>'; }
      function select(name, options) { return '<select name="' + name + '" required>' + options.map(function (o) { return '<option value="' + escapeHtml(o[0]) + '">' + escapeHtml(o[1]) + '</option>'; }).join('') + '</select>'; }
      function composeForm(entity) {
        var specs = {
          project: { title: 'Start a research project', intro: 'Create a shared home for a new question.', hint: 'Projects are saved in this browser workspace.', fields: [
            ['Project name','name',input('name','e.g. Social connection & wellbeing',true),true],
            ['Research focus','focus',textarea('focus','What question will this project explore?',true),true],
            ['Project lead','owner',memberSelect('owner','m-maya'),false],
            ['Current phase','phase',select('phase',[['Question framing','Question framing'],['Literature review','Literature review'],['Protocol design','Protocol design'],['Data collection','Data collection'],['Analysis','Analysis'],['Writing','Writing']]),false],
            ['Target milestone','due',input('due','',true,'date',dateInput(30)),false]
          ]},
          literature: { title: 'Add a literature record', intro: 'Keep a source connected to the work it informs.', hint: 'Add verified citation details from your source manager or paper.', fields: [
            ['Paper title','title',input('title','Title of the paper or source',true),true],
            ['Authors','authors',input('authors','Author names',true),false],
            ['Publication','source',input('source','Journal, archive, or publisher',true),false],
            ['Year','year',input('year','2025',true,'number'),false],
            ['Project','projectId',projectSelect(),false],
            ['Reading status','status',select('status',[['To read','To read'],['Reading','Reading'],['Reviewed','Reviewed']]),false]
          ]},
          task: { title: 'Create a team task', intro: 'Make the next step visible and owned.', hint: 'Tasks are shared across the selected project in this browser workspace.', fields: [
            ['Task title','title',input('title','What needs to happen?',true),true],
            ['Details','description',textarea('description','Add context, acceptance criteria, or a link.',false),true],
            ['Project','projectId',projectSelect(),false],
            ['Owner','owner',memberSelect('owner','m-maya'),false],
            ['Due date','due',input('due','',true,'date',dateInput(7)),false],
            ['Priority','priority',select('priority',[['Medium','Medium'],['High','High'],['Low','Low']]),false],
            ['Status','status',select('status',[['todo','To do'],['progress','In progress'],['done','Done']]),false]
          ]},
          experiment: { title: 'Log an experiment', intro: 'Keep the protocol and its progress close together.', hint: 'Use the protocol note for enough detail to reproduce the study.', fields: [
            ['Experiment name','name',input('name','e.g. Retrieval cue pilot',true),true],
            ['Project','projectId',projectSelect(),false],
            ['Study lead','owner',memberSelect('owner','m-noor'),false],
            ['Status','status',select('status',[['Planning','Planning'],['Running','Running'],['Analyzing','Analyzing'],['Complete','Complete']]),false],
            ['Participants / sample','participants',input('participants','e.g. 20 planned',true),false],
            ['Protocol summary','protocol',textarea('protocol','Procedure, materials, measures, or preregistration reference.',true),true]
          ]},
          finding: { title: 'Capture a research finding', intro: 'Preserve the observation while it is still fresh.', hint: 'Label preliminary results clearly; a finding can be a question as well as a conclusion.', fields: [
            ['Finding title','title',input('title','A short, specific observation',true),true],
            ['Project','projectId',projectSelect(),false],
            ['Category','category',select('category',[['PILOT INSIGHT','Pilot insight'],['RESULT','Result'],['FIELD NOTE','Field note'],['EARLY SIGNAL','Early signal'],['OPEN QUESTION','Open question']]),false],
            ['Observation','summary',textarea('summary','What did the team observe? Include context and limitations.',true),true]
          ]},
          member: { title: 'Invite a teammate', intro: 'Add a collaborator to this local demo workspace.', hint: 'This demo does not send an email. The member is added only in this browser.', fields: [
            ['Full name','name',input('name','Collaborator name',true),false],
            ['Email','email',input('email','name@example.edu',true,'email'),false],
            ['Role','role',input('role','e.g. Research assistant',true),false]
          ]}
        };
        var spec = specs[entity];
        if (!spec) return;
        var fieldsHtml = spec.fields.map(function (f) { return field(f[0],f[1],f[2],f[3]); }).join('');
        ui.modal.classList.remove('search-modal');
        ui.modal.setAttribute('aria-hidden','false');
        ui.modalCard.innerHTML = '<div class="modal-head"><div><h2 id="modalTitle">' + escapeHtml(spec.title) + '</h2><p>' + escapeHtml(spec.intro) + '</p></div><button class="icon-button" type="button" data-action="close-modal" aria-label="Close dialog">' + icon('close') + '</button></div><div class="modal-body"><form id="recordForm" data-entity="' + entity + '"><div class="form-grid">' + fieldsHtml + '</div><div class="modal-hint">' + icon('alert') + '<span>' + escapeHtml(spec.hint) + '</span></div><div class="modal-actions"><button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit">Save to workspace ' + icon('arrow') + '</button></div></form></div>';
        ui.modal.hidden = false;
        window.requestAnimationFrame(function () { var target = ui.modal.querySelector('input,select,textarea'); if (target) target.focus(); });
      }
      function openSearch() {
        ui.modal.classList.add('search-modal');
        ui.modal.setAttribute('aria-hidden','false');
        ui.modalCard.innerHTML = '<div class="modal-head"><div><h2 id="modalTitle">Search your workspace</h2><p>Find projects, sources, experiments, tasks, and findings.</p></div><button class="icon-button" type="button" data-action="close-modal" aria-label="Close search">' + icon('close') + '</button></div><label class="search-large">' + icon('search') + '<span class="sr-only">Search all workspace records</span><input id="globalSearch" type="search" placeholder="Try “sleep”, “protocol”, or a collaborator..." autocomplete="off"></label><div class="search-results" id="searchResults"><div class="search-empty">Start typing to search the workspace.</div></div>';
        ui.modal.hidden = false;
        window.requestAnimationFrame(function () { document.getElementById('globalSearch').focus(); });
      }
      function closeModal() { ui.modal.hidden = true; ui.modal.setAttribute('aria-hidden','true'); ui.modal.classList.remove('search-modal'); }
      function searchRecords(query) {
        var q = query.trim().toLowerCase();
        if (!q) return [];
        var result = [];
        data.projects.forEach(function (p) { if ((p.name + ' ' + p.focus).toLowerCase().indexOf(q) !== -1) result.push({ view:'projects', icon:'folder', type:'Project', title:p.name, detail:p.phase, id:p.id }); });
        data.literature.forEach(function (p) { if ((p.title + ' ' + p.authors + ' ' + p.source + ' ' + p.tags.join(' ')).toLowerCase().indexOf(q) !== -1) result.push({ view:'literature', icon:'book', type:'Literature', title:p.title, detail:p.authors, id:p.id }); });
        data.tasks.forEach(function (p) { if ((p.title + ' ' + p.description + ' ' + person(p.owner).name).toLowerCase().indexOf(q) !== -1) result.push({ view:'tasks', icon:'task', type:'Task', title:p.title, detail:person(p.owner).name + ' · ' + p.status, id:p.id }); });
        data.experiments.forEach(function (p) { if ((p.name + ' ' + p.protocol).toLowerCase().indexOf(q) !== -1) result.push({ view:'experiments', icon:'flask', type:'Experiment', title:p.name, detail:p.status, id:p.id }); });
        data.findings.forEach(function (p) { if ((p.title + ' ' + p.summary).toLowerCase().indexOf(q) !== -1) result.push({ view:'findings', icon:'spark', type:'Finding', title:p.title, detail:p.category, id:p.id }); });
        data.members.forEach(function (p) { if ((p.name + ' ' + p.role + ' ' + p.email).toLowerCase().indexOf(q) !== -1) result.push({ view:'team', icon:'team', type:'Teammate', title:p.name, detail:p.role, id:p.id }); });
        return result.slice(0, 12);
      }
      function updateSearchResults(query) {
        var results = searchRecords(query);
        var host = document.getElementById('searchResults');
        if (!host) return;
        host.innerHTML = results.length ? results.map(function (item) { return '<button class="search-result" type="button" data-action="search-go" data-target-view="' + item.view + '" data-id="' + escapeHtml(item.id) + '">' + '<span class="card-icon">' + icon(item.icon) + '</span><span class="search-result-copy"><strong>' + escapeHtml(item.title) + '</strong><span>' + escapeHtml(item.type + ' · ' + item.detail) + '</span></span>' + icon('arrow') + '</button>'; }).join('') : '<div class="search-empty">No matches yet. Try another keyword or create a record.</div>';
      }
      function submitRecord(form) {
        var entity = form.dataset.entity;
        var values = Object.fromEntries(new FormData(form).entries());
        if (entity === 'project') {
          var newProject = { id: uid('p'), name: values.name.trim(), focus: values.focus.trim(), phase: values.phase, progress: 0, due: values.due, owner: values.owner, archived: false, tone: '#e5ebdf', ink: '#52694f', category: 'NEW PROJECT' };
          data.projects.unshift(newProject); data.activeProjectId = newProject.id;
          saveActivity('project','Created a project',newProject.name,newProject.id,'m-maya');
        } else if (entity === 'literature') {
          data.literature.unshift({ id:uid('l'), title:values.title.trim(), authors:values.authors.trim(), source:values.source.trim(), year:values.year, projectId:values.projectId, status:values.status, tags:['New record'], saved:false });
          saveActivity('literature','Added a literature record',values.title.trim(),values.projectId,'m-maya');
        } else if (entity === 'task') {
          data.tasks.unshift({ id:uid('t'), title:values.title.trim(), description:values.description.trim() || 'No additional details yet.', projectId:values.projectId, owner:values.owner, due:values.due, priority:values.priority, status:values.status });
          saveActivity('task','Created a team task',values.title.trim(),values.projectId,'m-maya');
        } else if (entity === 'experiment') {
          data.experiments.unshift({ id:uid('e'), name:values.name.trim(), projectId:values.projectId, owner:values.owner, status:values.status, participants:values.participants.trim(), protocol:values.protocol.trim(), updated:'Just now' });
          saveActivity('experiment','Logged an experiment',values.name.trim(),values.projectId,'m-maya');
        } else if (entity === 'finding') {
          data.findings.unshift({ id:uid('f'), title:values.title.trim(), summary:values.summary.trim(), projectId:values.projectId, category:values.category, author:'m-maya', date:dateInput(0), accent:'#7ea285' });
          saveActivity('finding','Captured a finding',values.title.trim(),values.projectId,'m-maya');
        } else if (entity === 'member') {
          var initials = values.name.trim().split(/\s+/).slice(0,2).map(function (x) { return x.charAt(0).toUpperCase(); }).join('');
          data.members.push({ id:uid('m'), name:values.name.trim(), initials:initials || 'TM', role:values.role.trim(), email:values.email.trim(), avatar:['a2','a3','a4','a5'][data.members.length % 4] });
          saveActivity('project','Added a collaborator',values.name.trim(),data.activeProjectId,'m-maya');
        }
        persist(); closeModal(); setView(currentView); showToast(entity === 'member' ? 'Teammate added to this browser workspace.' : 'Saved to your research workspace.');
      }
      function toggleTask(id) {
        var item = data.tasks.find(function (task) { return task.id === id; });
        if (!item) return;
        item.status = item.status === 'done' ? 'todo' : 'done';
        saveActivity('task',item.status === 'done' ? 'Completed a project task' : 'Reopened a project task',item.title,item.projectId,item.owner);
        persist(); setView(currentView); showToast(item.status === 'done' ? 'Task marked complete.' : 'Task reopened.');
      }
      function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { showToast('Finding copied to clipboard.'); }).catch(function () { showToast('Copy was unavailable in this browser.'); });
        else showToast('Clipboard access is unavailable for this local file.');
      }
      function exportData() {
        var blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a'); link.href = url; link.download = 'morrow-research-workspace.json'; link.click();
        window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        closePopover(); showToast('Workspace data exported as JSON.');
      }
      function refreshFilterRegion() {
        var selectors = { literature:'.table-shell tbody', tasks:'.task-columns', experiments:'.experiment-grid', findings:'.finding-grid' };
        var selector = selectors[currentView];
        if (!selector) return;
        var parsed = document.createElement('div');
        parsed.innerHTML = renderers[currentView]();
        var current = ui.view.querySelector(selector);
        var next = parsed.querySelector(selector);
        if (current && next) current.replaceWith(next);
      }
      function handleAction(button) {
        var action = button.dataset.action;
        if (button.dataset.view) { setView(button.dataset.view); return; }
        if (action === 'compose') { closePopover(); composeForm(button.dataset.entity); return; }
        if (action === 'create-menu') {
          if (!ui.popover.hidden) { closePopover(); return; }
          var rect = button.getBoundingClientRect();
          openPopover(composeMenuHtml());
          var panel = ui.popover.querySelector('.popover-panel');
          panel.style.top = Math.round(rect.bottom + 9) + 'px';
          panel.style.right = Math.max(12,window.innerWidth - rect.right) + 'px';
          button.setAttribute('aria-expanded','true');
          return;
        }
        if (action === 'workspace-menu') {
          if (!ui.popover.hidden) { closePopover(); return; }
          var workspaceRect = button.getBoundingClientRect();
          openPopover(workspaceMenuHtml());
          var workspacePanel = ui.popover.querySelector('.popover-panel');
          workspacePanel.style.top = Math.round(workspaceRect.bottom + 8) + 'px';
          workspacePanel.style.left = Math.max(10,Math.round(workspaceRect.left)) + 'px';
          button.setAttribute('aria-expanded','true');
          return;
        }
        if (action === 'switch-project') { data.activeProjectId = button.dataset.id; persist(); closePopover(); setView(currentView); showToast('Project focus updated.'); return; }
        if (action === 'profile-menu') { if (!ui.popover.hidden) closePopover(); else { openPopover(profileMenuHtml()); button.setAttribute('aria-expanded','true'); } return; }
        if (action === 'notifications') { if (!ui.popover.hidden) closePopover(); else { openPopover(activityPopoverHtml()); button.setAttribute('aria-expanded','true'); } return; }
        if (action === 'open-search') { closePopover(); openSearch(); return; }
        if (action === 'close-modal') { closeModal(); return; }
        if (action === 'toggle-sidebar') { var sidebarOpen = !ui.sidebar.classList.contains('is-open'); ui.sidebar.classList.toggle('is-open',sidebarOpen); ui.scrim.classList.toggle('is-visible',sidebarOpen); button.setAttribute('aria-expanded',String(sidebarOpen)); button.setAttribute('aria-label',sidebarOpen ? 'Close navigation' : 'Open navigation'); return; }
        if (action === 'close-sidebar') { ui.sidebar.classList.remove('is-open'); ui.scrim.classList.remove('is-visible'); var menuButton = document.querySelector('.menu-toggle'); if (menuButton) { menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Open navigation'); } return; }
        if (action === 'export') { exportData(); return; }
        if (action === 'reset') {
          if (window.confirm('Restore the original sample workspace? Local changes in this browser will be replaced.')) { data = clone(seed); data.extras = clone(toolSeed); persist(); closePopover(); setView('overview'); showToast('Sample workspace restored.'); }
          return;
        }
        if (action === 'select-project') { data.activeProjectId = button.dataset.id; persist(); setView('projects'); return; }
        if (action === 'toggle-task') { toggleTask(button.dataset.id); return; }
        if (action === 'toggle-saved') {
          var paper = data.literature.find(function (x) { return x.id === button.dataset.id; });
          if (paper) { paper.saved = !paper.saved; persist(); setView('literature'); showToast(paper.saved ? 'Paper saved for later.' : 'Paper removed from saved.'); }
          return;
        }
        if (action === 'filter') { activeFilter = button.dataset.filter; setView(currentView); return; }
        if (action === 'edit-experiment-status') {
          var exp = data.experiments.find(function (x) { return x.id === button.dataset.id; });
          if (!exp) return;
          var states = ['Planning','Running','Analyzing','Complete'];
          exp.status = states[(states.indexOf(exp.status) + 1) % states.length];
          exp.updated = 'Just now'; saveActivity('experiment','Updated experiment status',exp.name + ' · ' + exp.status,exp.projectId,exp.owner); persist(); setView('experiments'); showToast('Experiment moved to ' + exp.status.toLowerCase() + '.'); return;
        }
        if (action === 'copy-finding') {
          var finding = data.findings.find(function (x) { return x.id === button.dataset.id; });
          if (finding) copyText(finding.title + '\n' + finding.summary);
          return;
        }
        if (action === 'search-go') { var title = button.querySelector('strong').textContent; closeModal(); setView(button.dataset.targetView); showToast('Opened ' + title + '.'); return; }
      }
      document.addEventListener('click', function (event) {
        var button = event.target.closest('button,[data-view],[data-view-link],[data-action]');
        if (button) {
          if (button.dataset.viewLink) { event.preventDefault(); setView(button.dataset.viewLink); return; }
          if (button.dataset.view) { event.preventDefault(); setView(button.dataset.view); return; }
          if (button.dataset.action) { handleAction(button); return; }
          if (button.dataset.action === 'select-project') { handleAction(button); return; }
        }
        var card = event.target.closest('[data-action="select-project"]');
        if (card) handleAction(card);
        if (event.target === ui.modal) closeModal();
        if (!event.target.closest('#popoverRoot') && !event.target.closest('[data-action="create-menu"],[data-action="workspace-menu"],[data-action="profile-menu"],[data-action="notifications"]')) closePopover();
      });
      document.addEventListener('submit', function (event) {
        if (event.target && event.target.id === 'recordForm') { event.preventDefault(); if (event.target.reportValidity()) submitRecord(event.target); }
      });
      document.addEventListener('input', function (event) {
        if (event.target && event.target.id === 'globalSearch') updateSearchResults(event.target.value);
        if (event.target && (event.target.id === 'literatureSearch' || event.target.id === 'taskSearch' || event.target.id === 'experimentSearch' || event.target.id === 'findingSearch')) { tableQuery = event.target.value; refreshFilterRegion(); }
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') { closeModal(); closePopover(); ui.sidebar.classList.remove('is-open'); ui.scrim.classList.remove('is-visible'); var menuButton = document.querySelector('.menu-toggle'); if (menuButton) { menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Open navigation'); } }
        if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-action="select-project"][role="button"]')) { event.preventDefault(); handleAction(event.target); }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
        if (!event.metaKey && !event.ctrlKey && event.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { event.preventDefault(); openSearch(); }
      });
      var toolSeed = {
        questions: [
          { id:'q-1', title:'How does sleep quality shape memory formation?', hypothesis:'Full-night sleep may support stronger recall than restricted sleep.', objective:'Compare recall scores across sleep conditions.', projectId:'p-sleep', owner:'m-maya' },
          { id:'q-2', title:'How does language context affect attention?', hypothesis:'Task-switching cost may change with the language cue.', objective:'Compare accuracy and response time across cue conditions.', projectId:'p-language', owner:'m-lena' }
        ],
        datasets: [{ id:'d-1', name:'Overnight recall pilot sample', projectId:'p-sleep', collected:dateInput(-10), owner:'m-noor', description:'Example record for the pilot cohort and participant measurements.', link:'', version:'v1.0', access:'Team only' }],
        notes: [{ id:'n-1', title:'Slow-wave activity and memory', projectId:'p-sleep', citation:'Chen & Patel · Neuroscience Review · 2023', doi:'Add verified DOI or source link', note:'Review how slow-wave activity relates to next-day learning before finalizing the analysis plan.' }],
        ethics: [
          { id:'eth-1', projectId:'p-sleep', title:'Ethics approval confirmed', note:'Add the committee name or approval reference.', done:true },
          { id:'eth-2', projectId:'p-sleep', title:'Participant consent prepared', note:'Check that the consent form is ready for review.', done:true },
          { id:'eth-3', projectId:'p-sleep', title:'Privacy and data storage plan', note:'Describe how participant information will be protected.', done:false },
          { id:'eth-4', projectId:'p-sleep', title:'Study registration recorded', note:'Add a preregistration link if the study uses one.', done:false }
        ],
        risks: [{ id:'r-1', projectId:'p-sleep', title:'Recruitment may take longer than planned', impact:'Medium', owner:'m-noor', nextStep:'Review the weekly recruitment count with the study team.', status:'Open' }],
        results: [{ id:'res-1', projectId:'p-sleep', experiment:'Overnight recall study', measure:'Pilot recall score', value:'Example: 8.4 / 10', note:'Sample entry only. Replace with a verified result.' }],
        milestones: [{ id:'ms-1', projectId:'p-sleep', title:'Pilot analysis checkpoint', date:dateInput(5), owner:'m-lena' }],
        comments: [{ id:'c-1', projectId:'p-sleep', owner:'m-maya', message:'Please add the final cohort criteria before recruitment begins.', at:new Date().toISOString() }],
        history: [], templates: []
      };
      data.extras = Object.assign({},clone(toolSeed),data.extras || {});
      Object.keys(toolSeed).forEach(function (key) { if (!Array.isArray(data.extras[key])) data.extras[key] = clone(toolSeed[key]); });
      if (!data.extras.history.length) data.extras.history = data.activity.slice(0,8).map(function (x) { return { id:x.id,title:x.title,detail:x.detail,projectId:x.projectId,by:x.by,at:'',time:x.time }; });
      data.projects.forEach(function (x) { if (typeof x.archived === 'undefined') x.archived = false; });
      var activeToolTab = 'questions';
      var toolTabs = [['questions','Questions'],['datasets','Datasets'],['notes','Notes & citations'],['ethics','Ethics'],['risks','Risks & blockers'],['results','Experiment results'],['calendar','Calendar'],['discussion','Comments'],['history','Change history'],['templates','Templates'],['archive','Archive']];
      function toolInput(label,name,type,placeholder,required) { return '<label class="tool-field">' + escapeHtml(label) + '<input name="' + name + '" type="' + (type || 'text') + '" placeholder="' + escapeHtml(placeholder || '') + '"' + (required ? ' required' : '') + '></label>'; }
      function toolArea(label,name,placeholder,required) { return '<label class="tool-field full">' + escapeHtml(label) + '<textarea name="' + name + '" placeholder="' + escapeHtml(placeholder || '') + '"' + (required ? ' required' : '') + '></textarea></label>'; }
      function toolSelect(label,name,options) { return '<label class="tool-field">' + escapeHtml(label) + '<select name="' + name + '" required>' + options.map(function (x) { return '<option value="' + escapeHtml(x[0]) + '">' + escapeHtml(x[1]) + '</option>'; }).join('') + '</select></label>'; }
      function toolProjectSelect() { return '<label class="tool-field">Project<select name="projectId" required>' + data.projects.filter(function (x) { return !x.archived; }).map(function (x) { return '<option value="' + escapeHtml(x.id) + '"' + (x.id === data.activeProjectId ? ' selected' : '') + '>' + escapeHtml(x.name) + '</option>'; }).join('') + '</select></label>'; }
      function toolOwnerSelect() { return '<label class="tool-field">Owner<select name="owner" required>' + data.members.map(function (x) { return '<option value="' + escapeHtml(x.id) + '">' + escapeHtml(x.name) + '</option>'; }).join('') + '</select></label>'; }
      function toolForm(type,title,intro,fields,button) { return '<form class="card panel tool-form" data-tool-form="' + type + '"><div><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(intro) + '</p></div><div class="tool-form-grid">' + fields.join('') + '</div><button class="button button-primary" type="submit">' + icon('plus') + escapeHtml(button) + '</button></form>'; }
      function toolProjectName(id) { return project(id).name; }
      function toolCard(title,detail,meta,chip,actions) { return '<article class="tool-record"><div class="tool-record-top"><h3>' + escapeHtml(title) + '</h3>' + (chip ? '<span class="tool-chip">' + escapeHtml(chip) + '</span>' : '') + '</div><p>' + escapeHtml(detail || '') + '</p><small>' + escapeHtml(meta || '') + '</small>' + (actions ? '<div class="tool-record-actions">' + actions + '</div>' : '') + '</article>'; }
      function toolEmpty(text) { return '<div class="tool-empty">' + escapeHtml(text) + '</div>'; }
      function toolSection(title,items) { return '<div class="tool-card-stack"><h2 style="margin:2px 0 0;font:500 22px var(--serif)">' + escapeHtml(title) + '</h2>' + (items || toolEmpty('Nothing has been added here yet.')) + '</div>'; }
      function renderToolTabs() { return '<div class="tool-tabs" role="tablist" aria-label="Research tools">' + toolTabs.map(function (x) { return '<button class="tool-tab" type="button" role="tab" aria-selected="' + (x[0] === activeToolTab) + '" data-tool-tab="' + x[0] + '">' + escapeHtml(x[1]) + '</button>'; }).join('') + '</div>'; }
      function renderResearchTools() {
        var stats = [['Questions',data.extras.questions.length],['Datasets',data.extras.datasets.length],['Open risks',data.extras.risks.filter(function (x) { return x.status !== 'Resolved'; }).length],['Upcoming milestones',data.extras.milestones.length]];
        return '<div class="view-root">' + pageHeading('PROJECT PLANNING','Research tools','Plan the study, organize its records, and keep decisions visible.','<button class="button button-secondary" type="button" data-tool-action="report">' + icon('download') + 'Download summary</button>') +
          '<div class="tools-notice">' + icon('alert') + '<div><strong>Saved in this browser</strong>Demo changes stay on this device. Live sharing needs a shared database and secure sign-in.</div></div>' +
          '<div class="tool-summary">' + stats.map(function (x) { return '<div class="tool-summary-card"><strong>' + x[1] + '</strong><span>' + escapeHtml(x[0]) + '</span></div>'; }).join('') + '</div>' + renderToolTabs() + '<div id="toolPanel">' + renderToolPanel(activeToolTab) + '</div></div>';
      }
      function renderToolPanel(tab) {
        var e=data.extras,form='',rows='',items=[];
        if (tab==='questions') {
          form=toolForm('question','Research question','Record the question, hypothesis, and purpose.',[toolInput('Main question','title','text','What will the study answer?',true),toolProjectSelect(),toolArea('Hypothesis','hypothesis','What do you expect to find?',false),toolArea('Objective','objective','What will the team measure or learn?',true),toolOwnerSelect()],'Save question');
          items=e.questions.map(function(x){return toolCard(x.title,'Hypothesis: '+(x.hypothesis||'Not added')+' Objective: '+(x.objective||'Not added'),toolProjectName(x.projectId)+' · '+person(x.owner).name,'Research question');});
          rows=toolSection('Questions and hypotheses',items.join(''));
        } else if (tab==='datasets') {
          form=toolForm('dataset','Add a dataset record','Save a link and notes. Files are not uploaded in this local demo.',[toolInput('Dataset name','name','text','e.g. Sleep study cohort',true),toolProjectSelect(),toolInput('Version','version','text','v1.0',true),toolInput('Collection date','collected','date','',true),toolOwnerSelect(),toolInput('Dataset link','link','url','https://...',false),toolSelect('Access','access',[['Team only','Team only'],['Restricted','Restricted'],['Public','Public']]),toolArea('Description','description','What does this dataset contain?',true)],'Save dataset');
          items=e.datasets.map(function(x){return toolCard(x.name,x.description,toolProjectName(x.projectId)+' · '+(x.version||'No version')+' · Collected '+dateLabel(x.collected,true)+' · '+person(x.owner).name+(x.link?' · '+x.link:''),x.access);});
          rows='<input class="tool-search" id="datasetSearch" type="search" placeholder="Filter datasets..." aria-label="Filter datasets">'+toolSection('Dataset library',items.join(''));
        } else if (tab==='notes') {
          form=toolForm('note','Save a reading note','Keep the citation and your key idea together.',[toolInput('Note title','title','text','What is this note about?',true),toolProjectSelect(),toolInput('Citation','citation','text','Author · Journal · Year',true),toolInput('DOI or source link','doi','text','DOI or URL',false),toolArea('Reading note','note','Main idea, evidence, or limitation',true)],'Save note');
          items=e.notes.map(function(x){return toolCard(x.title,x.note,x.citation+(x.doi?' · '+x.doi:'')+' · '+toolProjectName(x.projectId),'Reading note');});
          rows=toolSection('Reading notes',items.join(''));
        } else if (tab==='ethics') {
          items=e.ethics.map(function(x){return '<label class="ethics-row"><input type="checkbox" data-ethics-id="'+escapeHtml(x.id)+'"'+(x.done?' checked':'')+'><span><strong>'+escapeHtml(x.title)+'</strong><small>'+escapeHtml(x.note)+' · '+escapeHtml(toolProjectName(x.projectId))+'</small></span></label>';});
          form=toolForm('ethics','Add a checklist item','Add a project-specific reminder.',[toolInput('Checklist item','title','text','e.g. Confirm data retention period',true),toolProjectSelect(),toolArea('Helpful note','note','What should the team check?',false)],'Add checklist item');
          rows='<section class="card panel"><h3 style="margin:0 0 12px;font:500 22px var(--serif)">Ethics and privacy checklist</h3><p style="margin:0 0 14px;color:var(--muted);font-size:13px">A planning aid, not formal approval.</p><div class="ethics-list">'+(items.join('')||toolEmpty('No checks added.'))+'</div></section>';
        } else if (tab==='risks') {
          form=toolForm('risk','Record a risk or blocker','Name the issue and agree on a next step.',[toolInput('Risk or blocker','title','text','What could slow the project?',true),toolProjectSelect(),toolOwnerSelect(),toolSelect('Impact','impact',[['Low','Low'],['Medium','Medium'],['High','High']]),toolArea('Next step','nextStep','How will the team respond?',true)],'Save risk');
          items=e.risks.map(function(x){return toolCard(x.title,'Next step: '+x.nextStep,toolProjectName(x.projectId)+' · Owner: '+person(x.owner).name,x.status+' · '+x.impact,x.status==='Resolved'?'':'<button class="tool-small-button" type="button" data-resolve-risk="'+escapeHtml(x.id)+'">Mark resolved</button>');});
          rows=toolSection('Risks and blockers',items.join(''));
        } else if (tab==='results') {
          form=toolForm('result','Record an experiment result','Add a measure and label early results clearly.',[toolInput('Experiment','experiment','text','Experiment name',true),toolProjectSelect(),toolInput('Measure','measure','text','e.g. Recall score',true),toolInput('Value','value','text','Result or summary',true),toolArea('Notes and limits','note','Sample size, method, or limitations',false)],'Save result');
          items=e.results.map(function(x){return toolCard(x.experiment+' · '+x.measure,x.value+(x.note?' — '+x.note:''),toolProjectName(x.projectId),'Record');});
          rows=toolSection('Experiment results',items.join(''));
        } else if (tab==='calendar') {
          form=toolForm('milestone','Add a milestone','Add a dated project checkpoint.',[toolInput('Milestone','title','text','What should happen?',true),toolProjectSelect(),toolInput('Date','date','date','',true),toolOwnerSelect()],'Add milestone');
          var events=data.tasks.filter(function(x){return x.status!=='done'&&x.due;}).map(function(x){return {date:x.due,title:x.title,detail:toolProjectName(x.projectId)+' · '+person(x.owner).name,type:'Task'};})
            .concat(data.projects.filter(function(x){return !x.archived&&x.due;}).map(function(x){return {date:x.due,title:x.name,detail:x.phase,type:'Project due'};}))
            .concat(e.milestones.map(function(x){return {date:x.date,title:x.title,detail:toolProjectName(x.projectId)+' · '+person(x.owner).name,type:'Milestone'};}));
          events.sort(function(a,b){return a.date.localeCompare(b.date);});
          rows='<section class="card panel"><h3 style="margin:0 0 8px;font:500 22px var(--serif)">Upcoming work</h3><div class="calendar-list">'+(events.length?events.map(function(x){return '<div class="calendar-row"><span class="calendar-date">'+escapeHtml(dateLabel(x.date,true))+'</span><i class="calendar-dot"></i><span><strong>'+escapeHtml(x.title)+'</strong><small>'+escapeHtml(x.detail)+'</small></span><span class="tool-chip">'+escapeHtml(x.type)+'</span></div>';}).join(''):toolEmpty('No upcoming dates.'))+'</div></section>';
        } else if (tab==='discussion') {
          form=toolForm('comment','Add a project comment','Ask a question or leave an update for the team.',[toolProjectSelect(),toolOwnerSelect(),toolArea('Comment','message','Write a helpful project update...',true)],'Post comment');
          items=e.comments.map(function(x){return toolCard(person(x.owner).name+' · '+dateLabel((x.at||'').slice(0,10),true),x.message,toolProjectName(x.projectId),'Team comment');});
          rows=toolSection('Project discussion',items.join(''));
        } else if (tab==='history') {
          items=e.history.slice().sort(function(a,b){return String(b.at||'').localeCompare(String(a.at||''));}).map(function(x){return toolCard(x.title,x.detail,(x.at?new Date(x.at).toLocaleString():x.time||'Earlier')+' · '+person(x.by).name,'Activity');});
          rows=toolSection('Workspace change history',items.join(''));
        } else if (tab==='templates') {
          var templates=[{name:'Literature review',focus:'What does existing research tell us about this question?',phase:'Literature review',tone:'#e2ecdf',ink:'#456b50'},{name:'Field study',focus:'What can we learn by collecting observations in the field?',phase:'Protocol design',tone:'#e3eaf1',ink:'#4c637d'},{name:'Lab experiment',focus:'How does a controlled change affect the measured outcome?',phase:'Protocol design',tone:'#f1e8d9',ink:'#8b6840'}];
          rows='<div class="tool-card-stack"><h2 style="margin:2px 0 0;font:500 22px var(--serif)">Start from a template</h2><p style="margin:0;color:var(--muted);font-size:13px">Choose a starting point. You can edit project details later.</p>'+templates.map(function(x,i){return toolCard(x.name,x.focus,'Creates a project with a useful starting phase.','Template','<button class="tool-small-button" type="button" data-use-template="'+i+'">Use template</button>');}).join('')+'</div>';
        } else if (tab==='archive') {
          var active=data.projects.filter(function(x){return !x.archived;}), archived=data.projects.filter(function(x){return x.archived;});
          rows='<section class="card panel"><h3 style="margin:0 0 12px;font:500 22px var(--serif)">Active projects</h3><div class="tool-card-stack">'+(active.map(function(x){return toolCard(x.name,x.focus,'Progress: '+x.progress+'% · '+x.phase,'Active','<button class="tool-small-button" type="button" data-archive-project="'+escapeHtml(x.id)+'">Archive project</button>');}).join('')||toolEmpty('No active projects.'))+'</div><h3 style="margin:22px 0 12px;font:500 22px var(--serif)">Archived projects</h3><div class="tool-card-stack">'+(archived.map(function(x){return toolCard(x.name,x.focus,'Archived · '+x.phase,'Archived','<button class="tool-small-button" type="button" data-restore-project="'+escapeHtml(x.id)+'">Restore project</button>');}).join('')||toolEmpty('No archived projects.'))+'</div></section>';
        }
        return '<div class="tools-columns">'+form+rows+'</div>';
      }
      function downloadToolReport() {
        var e=data.extras;
        var report=['MORROW RESEARCH WORKSPACE SUMMARY','Generated: '+new Date().toLocaleString(),'',
          'PROJECTS',data.projects.map(function(x){return '- '+x.name+(x.archived?' (archived)':'')+' — '+x.phase+', '+x.progress+'%';}).join('\n'),'',
          'RESEARCH QUESTIONS',e.questions.map(function(x){return '- '+x.title+' | Hypothesis: '+x.hypothesis;}).join('\n'),'',
          'DATASETS',e.datasets.map(function(x){return '- '+x.name+' | '+x.version+' | '+x.access+' | '+x.collected+' | '+person(x.owner).name;}).join('\n'),'',
          'TASKS',data.tasks.map(function(x){return '- '+x.title+' | '+x.status+' | due '+x.due;}).join('\n'),'',
          'EXPERIMENTS',data.experiments.map(function(x){return '- '+x.name+' | '+x.status+' | '+x.participants;}).join('\n'),'',
          'FINDINGS',data.findings.map(function(x){return '- '+x.title+' — '+x.summary;}).join('\n'),'',
          'RISKS',e.risks.map(function(x){return '- '+x.title+' | '+x.status+' | next step: '+x.nextStep;}).join('\n')].join('\n');
        var blob=new Blob([report],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');
        link.href=url;link.download='morrow-research-summary.txt';link.click();window.setTimeout(function(){URL.revokeObjectURL(url);},1000);showToast('Project summary downloaded.');
      }
      function saveToolRecord(form) {
        var v=Object.fromEntries(new FormData(form).entries()),e=data.extras,type=form.dataset.toolForm,id=uid('x');
        if(type==='question')e.questions.unshift({id:id,title:v.title.trim(),hypothesis:v.hypothesis.trim(),objective:v.objective.trim(),projectId:v.projectId,owner:v.owner});
        if(type==='dataset')e.datasets.unshift({id:id,name:v.name.trim(),projectId:v.projectId,description:v.description.trim(),link:v.link.trim(),version:v.version.trim(),collected:v.collected,owner:v.owner,access:v.access});
        if(type==='note')e.notes.unshift({id:id,title:v.title.trim(),projectId:v.projectId,citation:v.citation.trim(),doi:v.doi.trim(),note:v.note.trim()});
        if(type==='ethics')e.ethics.unshift({id:id,projectId:v.projectId,title:v.title.trim(),note:v.note.trim(),done:false});
        if(type==='risk')e.risks.unshift({id:id,projectId:v.projectId,title:v.title.trim(),impact:v.impact,owner:v.owner,nextStep:v.nextStep.trim(),status:'Open'});
        if(type==='result')e.results.unshift({id:id,projectId:v.projectId,experiment:v.experiment.trim(),measure:v.measure.trim(),value:v.value.trim(),note:v.note.trim()});
        if(type==='milestone')e.milestones.unshift({id:id,projectId:v.projectId,title:v.title.trim(),date:v.date,owner:v.owner});
        if(type==='comment')e.comments.unshift({id:id,projectId:v.projectId,owner:v.owner,message:v.message.trim(),at:new Date().toISOString()});
        saveActivity('project','Added '+type,v.title||v.name||v.experiment||v.message,v.projectId,v.owner);setView('researchTools');showToast('Saved in this browser workspace.');
      }
      document.addEventListener('click',function(event){
        var tab=event.target.closest('[data-tool-tab]');
        if(tab){activeToolTab=tab.dataset.toolTab;document.querySelectorAll('[data-tool-tab]').forEach(function(x){x.setAttribute('aria-selected',String(x===tab));});var panel=document.getElementById('toolPanel');if(panel)panel.innerHTML=renderToolPanel(activeToolTab);return;}
        var button=event.target.closest('[data-tool-action],[data-archive-project],[data-restore-project],[data-resolve-risk],[data-use-template]');
        if(!button)return;
        if(button.dataset.toolAction==='report'){downloadToolReport();return;}
        if(button.dataset.archiveProject){
          if(data.projects.filter(function(x){return !x.archived;}).length<=1){showToast('Keep at least one project active.');return;}
          var old=data.projects.find(function(x){return x.id===button.dataset.archiveProject;});
          if(old){old.archived=true;if(data.activeProjectId===old.id)data.activeProjectId=data.projects.find(function(x){return !x.archived;}).id;saveActivity('project','Archived a project',old.name,old.id,'m-maya');setView('researchTools');showToast('Project moved to the archive.');}return;
        }
        if(button.dataset.restoreProject){var restored=data.projects.find(function(x){return x.id===button.dataset.restoreProject;});if(restored){restored.archived=false;saveActivity('project','Restored a project',restored.name,restored.id,'m-maya');setView('researchTools');showToast('Project restored.');}return;}
        if(button.dataset.resolveRisk){var risk=data.extras.risks.find(function(x){return x.id===button.dataset.resolveRisk;});if(risk){risk.status='Resolved';saveActivity('project','Resolved a project risk',risk.title,risk.projectId,'m-maya');setView('researchTools');showToast('Risk marked resolved.');}return;}
        if(button.dataset.useTemplate!==undefined){
          var templates=[{name:'Literature review',focus:'What does existing research tell us about this question?',phase:'Literature review',tone:'#e2ecdf',ink:'#456b50'},{name:'Field study',focus:'What can we learn by collecting observations in the field?',phase:'Protocol design',tone:'#e3eaf1',ink:'#4c637d'},{name:'Lab experiment',focus:'How does a controlled change affect the measured outcome?',phase:'Protocol design',tone:'#f1e8d9',ink:'#8b6840'}],t=templates[Number(button.dataset.useTemplate)];
          if(t){var p={id:uid('p'),name:t.name,focus:t.focus,phase:t.phase,progress:0,due:dateInput(30),owner:'m-maya',archived:false,tone:t.tone,ink:t.ink,category:'RESEARCH TEMPLATE'};data.projects.unshift(p);data.activeProjectId=p.id;saveActivity('project','Started from a project template',p.name,p.id,'m-maya');setView('projects');showToast('New project created from template.');}
        }
      });
      document.addEventListener('change',function(event){
        var box=event.target.closest('[data-ethics-id]');
        if(box){var item=data.extras.ethics.find(function(x){return x.id===box.dataset.ethicsId;});if(item){item.done=box.checked;saveActivity('project',box.checked?'Completed an ethics check':'Reopened an ethics check',item.title,item.projectId,'m-maya');setView('researchTools');}}
      });
      document.addEventListener('input',function(event){ if(event.target.id==='datasetSearch'){ var q=event.target.value.toLowerCase(); document.querySelectorAll('#toolPanel .tool-record').forEach(function(card){card.hidden=card.textContent.toLowerCase().indexOf(q)===-1;}); } });
      document.addEventListener('submit',function(event){
        var form=event.target.closest('form[data-tool-form]');
        if(form){event.preventDefault();if(form.reportValidity())saveToolRecord(form);}
      });

      updateCounts();
      setView('overview');
    })();
  

    (function () {
      var screen = document.getElementById('loginScreen');
      var form = document.getElementById('loginForm');
      var message = document.getElementById('loginMessage');
      var password = document.getElementById('loginPassword');
      var toggle = document.getElementById('showPassword');
      function hasAccess() {
        try { return sessionStorage.getItem('morrowDemoAccess') === 'yes' || localStorage.getItem('morrowDemoRemember') === 'yes'; }
        catch (error) { return false; }
      }
      function enterWorkspace() {
        document.body.classList.remove('auth-locked');
        screen.classList.add('is-leaving');
        window.setTimeout(function () {
          screen.hidden = true;
          screen.classList.remove('is-leaving');
          document.getElementById('viewWrap').focus();
        }, 340);
      }
      function saveAccess() {
        try {
          if (document.getElementById('rememberMe').checked) {
            localStorage.setItem('morrowDemoRemember','yes');
            sessionStorage.removeItem('morrowDemoAccess');
          } else {
            sessionStorage.setItem('morrowDemoAccess','yes');
            localStorage.removeItem('morrowDemoRemember');
          }
        } catch (error) {}
        enterWorkspace();
      }
      if (hasAccess()) { document.body.classList.remove('auth-locked'); screen.hidden = true; }
      toggle.addEventListener('click',function () {
        var visible = password.type === 'password';
        password.type = visible ? 'text' : 'password';
        toggle.textContent = visible ? 'Hide' : 'Show';
        toggle.setAttribute('aria-label',visible ? 'Hide password' : 'Show password');
      });
      document.getElementById('forgotPassword').addEventListener('click',function () {
        message.textContent = 'This demo has no password reset service. Use any valid email and a password with at least 6 characters.';
      });
      document.getElementById('demoLogin').addEventListener('click',function () {
        message.textContent = 'Opening the sample research workspace…';
        saveAccess();
      });
      form.addEventListener('submit',function (event) {
        event.preventDefault();
        if (!form.reportValidity()) return;
        message.textContent = 'Welcome back. Opening your research workspace…';
        saveAccess();
      });
    })();

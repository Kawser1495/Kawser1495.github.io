<script>
  // Load Highlights
  fetch('assets/data/highlights.json')
    .then(response => response.json())
    .then(highlights => {
      const container = document.getElementById('highlight-grid');
      container.innerHTML = highlights.map(item => `
        <div class="highlight-card big-card">
          <div class="card-content">
            <div class="highlight-title">${item.title}</div>
            <div class="highlight-desc">${item.desc}</div>
            <a href="${item.link}" target="_blank" class="card-proof-link">View Project</a>
          </div>
        </div>
      `).join('');
    })
    .catch(err => console.error('Error loading highlights.json:', err));

  // Load Tags
  fetch('assets/data/tags.json')
    .then(response => response.json())
    .then(tags => {
      const tagList = document.getElementById('tag-list');
      tagList.innerHTML = tags.map(tag => `<li class="tag-item">${tag}</li>`).join('');
    })
    .catch(err => console.error('Error loading tags.json:', err));
</script>

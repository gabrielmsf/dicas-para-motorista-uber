async function loadEligibility(jsonPath) {
  const container = document.querySelector("[data-eligibility]");
  if (!container) return;

  try {
    const res = await fetch(jsonPath, { cache: "no-store" });
    if (!res.ok) throw new Error("Falha ao carregar dados");
    const data = await res.json();

    // 1. Basic Info
    const locationEl = container.querySelector("[data-location]");
    if (locationEl) locationEl.textContent = data.location || "Local desconhecido";
    
    const updatedEl = container.querySelector("[data-updated]");
    if (updatedEl) updatedEl.textContent = data.last_updated || "—";

    // 2. Rules
    const rulesList = container.querySelector("[data-rules-list]");
    if (rulesList && data.rules_summary) {
      rulesList.innerHTML = data.rules_summary
        .map(rule => `<li>${rule}</li>`)
        .join("");
    }

    // 3. Vehicles Table
    const vehiclesBody = container.querySelector("[data-vehicles-body]");
    if (vehiclesBody) {
      if (data.vehicles && data.vehicles.length > 0) {
        vehiclesBody.innerHTML = data.vehicles
          .map(v => `
            <tr>
              <td>${v.make}</td>
              <td>${v.model}</td>
              <td>${v.years}</td>
            </tr>
          `).join("");
      } else {
        // Handle empty vehicle list (e.g. UberX)
        const table = vehiclesBody.closest("table");
        if (table) {
            table.style.display = 'none';
            const msg = document.createElement('p');
            msg.textContent = "A lista de veículos é muito extensa. Siga as regras acima.";
            msg.style.fontStyle = "italic";
            table.parentNode.insertBefore(msg, table.nextSibling); 
        }
      }
    }

    // 4. Sources
    const sourcesList = container.querySelector("[data-sources-list]");
    if (sourcesList && data.sources) {
      sourcesList.innerHTML = data.sources
        .map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`)
        .join("");
    }

    // 5. Notes
    const notesContainer = container.querySelector("[data-notes-list]");
    if (notesContainer && data.notes) {
      notesContainer.innerHTML = data.notes
        .map(note => `<p class="note">⚠️ ${note}</p>`)
        .join("");
    }

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Erro ao carregar informações. Tente recarregar a página.</p>";
  }
}
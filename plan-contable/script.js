let elementsHtml = range(1, 8).map(element => buildElementHtml(element)).join("");
const catalogue = document.querySelector(".catalogue");
catalogue.innerHTML = elementsHtml;

function buildElementHtml(element) {
  const accounts = filterByElement(element);
  const accountsHtml = accounts.map(account => `
    <div
      class="account"
      title="${account.name}"
      data-code="${account.code}">
        ${account.code}
    </div>`).join("");

  return `
    <section class="element element-${element}">
      ${accountsHtml}
    </section>
  `;
}

function filterByElement(element) {
  return PCGE.filter(account => account.code[0] == element);
}

function range(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) array.push(i);
  return array;
}

// Account detail - modal
const modal = document.querySelector(".modal");
catalogue.addEventListener("click", e => {
  if (e.target.nodeName != "DIV") return;
  modal.style.display = "block";
  const code = e.target.getAttribute("data-code");
  const account = getAccount(code);
  document.querySelector(".account-detail").innerHTML = buildAccountHtml(account);
});

function getAccount(code) {
  return PCGE.filter(account => account.code == code)[0];
}

document.querySelector(".close").addEventListener("click", () => modal.style.display = "none")

function buildAccountHtml(account) {
  const subAccounts = account.subAccounts.map(sub => `
    <article>
      <h4>${sub.code} ${sub.name}</h4>
      <p>${sub.description}</p>
    </article>`).join("");
  const recognitionAndMeasurement = account.recognitionAndMeasurement.map(paragraph =>
    `<p>${paragraph}</p>`).join("");

  const debited = account.debited.map(debit => `<li>${debit}</li>`).join("");
  const accredited = account.accredited.map(accredit => `<li>${accredit}</li>`).join("");
  const comments = account.comments.map(paragraph => `<p>${paragraph}</p>`).join("");

  return `
    <div>
      <h2>${account.code} ${account.name}</h2>
      <p>${account.description}</p>
    </div>

    <div>
      <h3>NOMENCLATURA Y DESCRIPCIÓN DE LAS SUBCUENTAS</h3>
      <article>${subAccounts}</article>
    </div>

    <div>
      <h3>RECONOCIMIENTO Y MEDICIÓN</h3>
      <article>${recognitionAndMeasurement}</article>
    </div>

    <div>
      <h3>DINÁMICA CONTABLE</h3>

      <article>
        <h4>Es debitada por:</h4>
        <div>${debited}</div>
      </article>

      <article>
        <h4>Es acreditada por:</h4>
        <div>${accredited}</div>
      </article>
    </div>

    <div>
      <h3>COMENTARIOS</h3>
      <article>${comments}</article>
    </div>`
}

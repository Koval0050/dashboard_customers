const customers = [
  {
    customerName: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    customerName: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    customerName: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    customerName: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    customerName: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    customerName: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    customerName: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    customerName: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const customerTable = document.querySelector(".main-section__customers-table");

const customerTableList = customers.map((e) => {
  let isActive = "";
  if (e.status === "Active") {
    isActive = "active";
  } else {
    isActive = "inactive";
  }

  return `<tr class="main-section__table-row">
      <td class="main-section__table-data">${e.customerName}</td>
      <td class="main-section__table-data">${e.company}</td>
      <td class="main-section__table-data">${e.phoneNumber}</td>
      <td class="main-section__table-data">${e.email}</td>
      <td class="main-section__table-data">${e.country}</td>
      <td class="main-section__table-data--${isActive}">
        ${e.status}
      </td>
    </tr>`;
});

customerTable.insertAdjacentHTML("beforeend", customerTableList.join(""));

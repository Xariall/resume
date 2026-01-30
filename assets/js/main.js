/* Define all the functions */
const setTitle = (page) => {
  // Set page title
  document.title = `${page.title} | ${page.name}`;
  document.querySelector("#profileName").innerHTML = page.name;
  document.querySelector("#profileSubTitle").innerHTML = page.subTitle;
  document.querySelector("#aboutIntro").innerHTML = page.summary;
};

const setContacts = (contacts) => {
  const container = document.querySelector(".quick-contacts");
  container.innerHTML = "";

  contacts.forEach((contact) => {
    const item = document.createElement("div");
    item.className = "contact-item";

    const logo = document.createElement("span");
    logo.className = "contact-logo";

    const icon = document.createElement("i");
    icon.className = contact.iconClass;
    icon.setAttribute("aria-hidden", "true");
    logo.appendChild(icon);
    item.appendChild(logo);

    if (contact.href) {
      const link = document.createElement("a");
      link.className = "contact-info";
      link.href = contact.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerText = contact.value;
      item.appendChild(link);
    } else {
      const text = document.createElement("span");
      text.className = "contact-info";
      text.innerText = contact.value;
      item.appendChild(text);
    }

    container.appendChild(item);
  });
};

const setLinks = (links) => {
  const linksList = document.querySelector("#linksList");
  links.forEach((link) => {
    const linkItem = document.createElement("div");
    linkItem.className = "contact-item";
    const title = document.createElement("span");
    title.className = "contact-logo";

    const icon = document.createElement("i");
    icon.className = link.iconClass;
    title.appendChild(icon);

    linkItem.appendChild(title);

    const a = document.createElement("a");
    a.className = "link-src contact-info";
    a.href = link.value;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerText = link.key;
    linkItem.appendChild(a);

    linksList.appendChild(linkItem);
  });
};

const setEducation = (education) => {
  const ul = document.querySelector("#educationList");
  education.forEach((edu) => {
    const li = document.createElement("li");

    const eduHeader = document.createElement("div");
    eduHeader.className = "edu-header";

    const eduAlma = document.createElement("span");
    eduAlma.className = "edu-alma";
    eduAlma.innerHTML = edu.key;
    eduHeader.appendChild(eduAlma);

    const eduDuration = document.createElement("span");
    eduDuration.className = "edu-duration";
    eduDuration.innerHTML = edu.period;
    eduHeader.appendChild(eduDuration);

    li.appendChild(eduHeader);

    const eduClassData = document.createElement("div");
    eduClassData.className = "edu-class-data";

    const eduStd = document.createElement("span");
    eduStd.className = "edu-std";
    eduStd.innerHTML = edu.value;
    eduClassData.appendChild(eduStd);

    const eduScore = document.createElement("span");
    eduScore.className = "edu-score";
    eduScore.innerHTML = edu.score;
    eduClassData.appendChild(eduScore);

    li.appendChild(eduClassData);

    ul.appendChild(li);
  });
};

const setProjects = (projects) => {
  const ul = document.querySelector("#projectList");
  projects.forEach((project) => {
    const li = document.createElement("li");

    const projectHeader = document.createElement("div");
    projectHeader.className = "project-header";

    const projectTitle = document.createElement("span");
    projectTitle.className = "project-title";
    projectTitle.innerHTML = project.title;
    projectHeader.appendChild(projectTitle);

    const projectDuration = document.createElement("span");
    projectDuration.className = "project-duration";
    projectDuration.innerHTML = project.duration;
    projectHeader.appendChild(projectDuration);

    li.appendChild(projectHeader);

    if (project.link) {
      const projectLink = document.createElement("span");
      projectLink.className = "project-link";

      const a = document.createElement("a");
      a.href = project.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `${project.link}`;

      projectLink.appendChild(a);
      li.appendChild(projectLink);
    }

    const projectDesc = document.createElement("div");
    projectDesc.className = "project-desc";
    projectDesc.innerHTML = project.desc;

    li.appendChild(projectDesc);

    ul.appendChild(li);
  });
};

const setSkills = (skills) => {
  const skillList = document.querySelector("#skillList");

  skills.forEach((skill) => {
    const catSkillItem = document.createElement("li");
    catSkillItem.className = "cat-skill-item";

    const skillTitle = document.createElement("span");
    skillTitle.className = "cat-skill-type";
    skillTitle.innerText = skill.key + ": ";

    const skillValue = document.createElement("span");
    skillValue.className = "skill-value";
    skillValue.innerText = skill.value;

    catSkillItem.appendChild(skillTitle);
    catSkillItem.appendChild(skillValue);
    skillList.appendChild(catSkillItem);
  });
};

const setExperience = (experiences) => {
  const expList = document.querySelector("#experienceList");
  experiences.forEach((exper) => {
    const expListItem = document.createElement("li");

    const expItem = document.createElement("div");
    expItem.className = "exp-item";

    const expOrg = document.createElement("span");
    expOrg.className = "exp-org";
    expOrg.innerHTML = exper.key;
    expItem.appendChild(expOrg);

    const expTitle = document.createElement("span");
    expTitle.className = "exp-title";
    expTitle.innerHTML = `&nbsp- ${exper.value}`;

    const expDura = document.createElement("span");
    expDura.className = "exp-title";
    expDura.innerText = `, (${exper.period})`;

    expItem.appendChild(expTitle);
    expItem.appendChild(expDura);
    expListItem.appendChild(expItem);

    if (exper.bullets) {
      const expDetails = document.createElement("ul");
      expDetails.className = "expDet";

      exper.bullets.forEach((dText) => {
        const detItem = document.createElement("li");
        detItem.innerHTML = dText;
        expDetails.appendChild(detItem);
      });

      expListItem.appendChild(expDetails);
    }

    expList.appendChild(expListItem);
  });
};

const setEvents = (events) => {
  const footer = document.querySelector(".footer");
  events.forEach((event) => {
    const eventTitle = setCatagoryHeader(event.title);
    footer.appendChild(eventTitle);

    const eventBody = document.createElement("div");
    eventBody.className = "cat-list-body";

    const ul = document.createElement("ul");

    event.body.forEach((evt) => {
      const li = document.createElement("li");

      const achItem = document.createElement("div");
      achItem.className = "ach-item";

      const achTitle = document.createElement("div");
      achTitle.className = "ach-title";
      achTitle.innerHTML = evt.desc;
      achItem.appendChild(achTitle);

      const achDuration = document.createElement("div");
      achDuration.className = "ach-duration";
      achDuration.innerHTML = evt.date;
      achItem.appendChild(achDuration);

      li.appendChild(achItem);
      ul.appendChild(li);
    });

    eventBody.appendChild(ul);
    footer.appendChild(eventBody);
  });
};

const setCertification = (certifications) => {
  const certList = document.getElementById("certList");

  certifications.forEach((cert) => {
    const li = document.createElement("li");

    const achItem = document.createElement("div");
    achItem.className = "ach-item";

    const achTitle = document.createElement("div");
    achTitle.className = "ach-title";
    achTitle.innerText = cert.key;
    if (cert.link) {
      const link = document.createElement("a");
      link.href = cert.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerText = cert.linkLabel || "Сертификат";
      link.title = cert.link;
      achTitle.appendChild(document.createTextNode(" ("));
      achTitle.appendChild(link);
      achTitle.appendChild(document.createTextNode(")"));
    }
    achItem.appendChild(achTitle);

    const achDuration = document.createElement("div");
    achDuration.className = "ach-duration";
    achDuration.innerHTML = cert.value;
    achItem.appendChild(achDuration);

    li.appendChild(achItem);
    certList.appendChild(li);
  });
};

const setCatagoryHeader = (title) => {
  const catHeader = document.createElement("div");
  catHeader.className = "cat-header";

  const catIndicator = document.createElement("span");
  catIndicator.className = "cat-indicator";

  const i = document.createElement("i");
  i.className = "fa fa-chevron-right";
  i["area-hidden"] = "true";
  catIndicator.appendChild(i);
  catHeader.appendChild(catIndicator);

  const catTitle = document.createElement("span");
  catTitle.className = "cat-title";
  catTitle.innerHTML = title;
  catHeader.appendChild(catTitle);

  return catHeader;
};

//  Entry Function, IIFE
(() => {
  // Call functions to load profile
  setTitle(profileData.page);
  setContacts(profileData.contacts);
  setLinks(profileData.links);
  setExperience(profileData.experiences);
  // setProjects(profileData.projects);
  setSkills(profileData.skills);
  setEducation(profileData.education);
  setCertification(profileData.certifications);
  // setEvents(profileData.events);
})();

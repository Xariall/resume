const profileData = {
  page: {
    title: "Resume",
    name: "Esmagambetov Asanali",
    subTitle: "Data Scientist / Software Engineer",
    summary:
      "Data Scientist и Software Engineer с опытом более 4 лет в государственном и квазигосударственном секторах. Обладаю глубокой экспертизой в Python (Pandas, NumPy, PyTorch) и SQL. Специализируюсь на проектировании архитектуры данных, разработке ETL-пайплайнов и автоматизации отчетности. Опытен в трансформации бизнес-требований в технические решения и внедрении ML-моделей для оптимизации процессов.",
  },
  contacts: [
    {
      key: "Phone",
      value: "+7 (708) 754-82-64",
      href: "tel:+77087548264",
      iconClass: "fas fa-phone",
    },
    {
      key: "Email",
      value: "asanalie@icloud.com",
      href: "mailto:asanalie@icloud.com",
      iconClass: "fas fa-at",
    },
    {
      key: "Location",
      value: "Astana, Kazakhstan",
      iconClass: "fas fa-map-marker-alt",
    },
  ],
  links: [
    // Ссылки на LinkedIn/GitHub в файле не указаны, оставьте свои или удалите эти блоки
    {
      key: "LinkedIn",
      value: "https://www.linkedin.com/in/asanali-esmagambetov-1326ba374/", 
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      key: "Github",
      value: "https://github.com/Xariall",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      key: "Languages & Databases",
      value: "Python, SQL (Advanced), PL/SQL",
    },
    {
      key: "Data Science & ML",
      value:
        "Pandas, NumPy, PyTorch, Scikit-learn, XGBoost, CatBoost, Matplotlib, Seaborn",
    },
    {
      key: "Engineering & Tools",
      value: "ETL Pipelines, Data Architecture, Git, System Analysis, Big Data",
    },
    {
      key: "Soft Skills",
      value:
        "Project Management, Technical Documentation, Problem Solving, Cross-functional Communication",
    },
  ],
  experiences: [
    {
      key: "Бюро национальной статистики (ИВЦ)",
      value: "System Analyst / Data Engineer", // Акцент на инженерию
      period: "August 2025 - Present",
      bullets: [
        "Спроектировал и курирую разработку модуля «Календарь отчетности» (Statreport), заменив ручные процедуры на автоматизированную систему.",
        "Разработал архитектуру данных и логику обновлений, обеспечив историчность и целостность данных при высоких нагрузках.",
        "Реализовал событийную модель обновления данных, что значительно сократило время обработки информации.",
        "Использую продвинутый SQL для валидации входящих данных, выявления аномалий и проверки гипотез до этапа разработки.",
      ],
    },
    {
      key: "Фонд «Устойчивого развития экономики регионов»",
      value: "Data Analyst / PM",
      period: "Jan 2025 - July 2025",
      bullets: [
        "Разработал сложный ETL-пайплайн на Python для консолидации и очистки тысяч разрозненных Excel-файлов, внедрив алгоритмы обработки временных рядов.",
        "Выстроил систему Data Quality с многоступенчатой верификацией, обеспечив корректность данных для государственных систем.",
        "Смоделировал финансовый эффект реформы АСП, обосновав экономию бюджета в 576 млрд тенге через внедрение «социальных контрактов».",
        "Руководил аналитической частью проекта «Ауыл аманаты», подготавливая фактологическую базу для МНЭ РК.",
      ],
    },
    {
      key: "ОФ «КӨЗҚАРАС»",
      value: "Data Analyst",
      period: "Sep 2021 - Dec 2024",
      bullets: [
        "Трансформировал разрозненные сырые данные в структурированные аналитические отчеты для государственных органов.",
        "Разработал методологическую базу исследований, обеспечив 100% соответствие техническим спецификациям.",
        "Организовал сбор и систематизацию профильных данных, повысив качество экспертных заключений.",
      ],
    },
  ],
  education: [
    {
      key: "L.N. Gumilyov Eurasian National University",
      value: "Bachelor of Computer Engineering and Software",
      period: "Graduated 2025",
      score: "", 
    },
  ],
  certifications: [
    {
      key: "Управление анализом данных (Coursera)",
      value: "June 17, 2024",
      link: "https://coursera.org/share/cb453ee999e16b9520299c554bacd230",
    },
    {
      key: "Искусственный Интеллект (ИИ) для всех (Coursera)",
      value: "June 15, 2024",
      link: "https://coursera.org/share/93e9378e0d98e56bb94ed4d27a32cab5",
    },
  ],
};
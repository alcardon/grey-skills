const industries = [
  { value: "EdTech", label: "EdTech" },
  { value: "FinTech", label: "FinTech" },
  { value: "Marketing", label: "Marketing" },
];

export { industries };

const roles = [
  { value: "Backend Developer", label: "Backend Developer" },
  { value: "Marketing Specialist", label: "Marketing Specialist" },
  { value: "Product Manager", label: "Product Manager" },
];

export { roles };

const getSkills = (industry, role) => {
  const skills = {
    "Backend Developer": [
      { value: "Python Programming", label: "Python Programming"},
      { value: "Java Programming", label: "Java Programming"},
      { value: "Node.JS Programming", label: "Node.JS Programming"},
      { value: "C# Programming", label: "C# Programming"},
      { value: "PHP Programming", label: "PHP Programming"},
      { value: "RESTful APIs Design", label: "RESTful APIs Design"},
      { value: "GraphQL APIs  design", label: "GraphQL APIs  design"},
      { value: "Web3 Development", label: "Web3 Development"},
      { value: "Go programming", label: "Go programming"},
      { value: "Ruby programming", label: "Ruby programming"},
      { value: "Lead Development Teams", label: "Lead Development Teams"},
      { value: "High avalaibility and secure systems", label: "High avalaibility and secure systems"},
      { value: `${industry} Industry Experience`, label: `${industry} Industry Experience`},
    ],
    "Marketing Specialist": [
      { value: "Copywriting", label: "Copywriting"},
      { value: "Search Engine Optimization", label: "Search Engine Optimization"},
      { value: "Social Media Marketing", label: "Social Media Marketing"},
      { value: "Marketing Automation ", label: "Marketing Automation "},
      { value: "Project Management", label: "Project Management"},
      { value: "Data Analysis", label: "Data Analysis"},
      { value: "Conversion Rate Optimization", label: "Conversion Rate Optimization"},
      { value: "Funnel Management", label: "Funnel Management"},
      { value: "Growth Strategy", label: "Growth Strategy"},
      { value: "UX Design", label: "UX Design"},
      { value: `${industry} Industry Experience`, label: `${industry} Industry Experience`},
    ],
    "Product Manager": [
      { value: "Prototyping", label: "Prototyping"},
      { value: "Agile Methodologies", label: "Agile Methodologies"},
      { value: "Product Strategy and Vision", label: "Product Strategy and Vision"},
      { value: "Client Partnership", label: "Client Partnership"},
      { value: "Product Definition", label: "Product Definition"},
      { value: "Programming Acumen", label: "Programming Acumen"},
      { value: "User Research", label: "User Research"},
      { value: "Data Analysis", label: "Data Analysis"},
      { value: "Delivery Management", label: "Delivery Management"},
      { value: "Design Acumen", label: "Design Acumen"},
      { value: "Workshop facilitation", label: "Workshop facilitation"},
      { value: `${industry} Industry Experience`, label: `${industry} Industry Experience`},
    ]
  };

  return skills[role];
};

export { getSkills }

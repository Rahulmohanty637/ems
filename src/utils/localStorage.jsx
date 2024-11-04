import { data } from "autoprefixer";

const employees = [
  {
    id: "E001",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Quarterly Report",
        taskDescription: "Compile data and prepare the Q3 report.",
        taskDate: "2024-11-02",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Follow-up",
        taskDescription: "Follow up with the client on project requirements.",
        taskDate: "2024-11-03",
        category: "Client Relations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting Preparation",
        taskDescription: "Prepare agenda and materials for team meeting.",
        taskDate: "2024-11-05",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: "E002",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Mockup Review",
        taskDescription:
          "Review the latest design mockups for client approval.",
        taskDate: "2024-11-06",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Project Kickoff",
        taskDescription: "Initiate the new project with the assigned team.",
        taskDate: "2024-11-07",
        category: "Project Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Budget Analysis",
        taskDescription: "Analyze project budget and identify cost savings.",
        taskDate: "2024-11-08",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "System Testing",
        taskDescription: "Test the new system features before launch.",
        taskDate: "2024-11-09",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "E003",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Content Update",
        taskDescription: "Update the website content with new materials.",
        taskDate: "2024-11-10",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Customer Support",
        taskDescription: "Assist customers with product issues.",
        taskDate: "2024-11-11",
        category: "Support",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Inventory Check",
        taskDescription: "Verify inventory levels and update records.",
        taskDate: "2024-11-12",
        category: "Inventory",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: "E004",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Social Media Campaign",
        taskDescription: "Launch the holiday season social media campaign.",
        taskDate: "2024-11-13",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Weekly Report",
        taskDescription: "Prepare and submit the weekly performance report.",
        taskDate: "2024-11-14",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Technical Training",
        taskDescription: "Attend technical training on the new software.",
        taskDate: "2024-11-15",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Email Campaign Analysis",
        taskDescription: "Review performance metrics for the email campaign.",
        taskDate: "2024-11-16",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: "E005",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Quarterly Sales Meeting",
        taskDescription: "Prepare and present sales performance report.",
        taskDate: "2024-11-17",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Client Proposal Review",
        taskDescription: "Review the proposal for the new client project.",
        taskDate: "2024-11-18",
        category: "Client Relations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update CRM",
        taskDescription: "Ensure all client information is up-to-date in CRM.",
        taskDate: "2024-11-19",
        category: "Admin",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: "A001",
    email: "admin@example.com",
    password: "123",
    tasks: [],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};

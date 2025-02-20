import { User } from "../types/user";

export const users: User[] = [
  {
    id: "user1",
    name: "Adrián Ruiz",
    avatar: "/assets/avatars/user1.png",
    curriculum: {
      experience: "Experiencia laboral de Adrián...",
      skills: "Habilidades de Adrián...",
      projects: "Proyectos en los que ha trabajado...",
      contact: "Contacto de Adrián..."
    }
  },
  {
    id: "user2",
    name: "Maria López",
    avatar: "/assets/avatars/user2.png",
    curriculum: {
      experience: "Experiencia laboral de María...",
      skills: "Habilidades de María...",
      projects: "Proyectos en los que ha trabajado...",
      contact: "Contacto de María..."
    }
  }
];

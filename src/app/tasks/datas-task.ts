 import { Task } from "./Task";

export const TASKS: Task[] = [
    {
        id: 1,
        name: "Faire les courses",
        description: "Acheter des fruits, des légumes et du lait au supermarché.",
        completed: true,
        created: new Date()
    },
    {
        id: 2,
        name: "Répondre aux e-mails",
        description: "Répondre aux e-mails professionnels et personnels.",
        completed: false,
        created: new Date()
    },
    {
        id: 3,
        name: "Préparer le dîner",
        description: "Cuisiner un bon repas pour la famille ce soir.",
        completed: false,
        created: new Date()
    },
    {
        id: 4,
        name: "Faire du sport",
        description: "Aller à la salle de sport pour une séance de cardio et de musculation.",
        completed: false,
        created: new Date()
    },
    {
        id: 5,
        name: "Lire un livre",
        description: "Commencer à lire le dernier best-seller.",
        completed: true,
        created: new Date()
    },
    
];

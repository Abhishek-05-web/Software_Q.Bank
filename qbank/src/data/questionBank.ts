import { rn2026, rn2025, rn2024 } from "./chapters";
import { poly2026, poly2025, poly2024 } from "./chapters";

export const questionBank = [
  {
    id: "class-10",
    name: "Class 10",
    active: true,
    subjects: [
      {
        id: "maths",
        name: "Mathematics",
        active: true,
        chapterWise: [
          {
            id: "real-numbers",
            name: "Real Numbers",
            active: true,
            years: [
              { year: 2026, questions: rn2026 },
              { year: 2025, questions: rn2025 },
              { year: 2024, questions: rn2024 }
            ]
          },
          {
            id: "polynomials",
            name: "Polynomials",
            active: true,
            years: [
              { year: 2026, questions: poly2026 },
              { year: 2025, questions: poly2025 },
              { year: 2024, questions: poly2024 }
            ]
          }
        ],
        setWise: []
      }
    ]
  }
];
export const allQuestionsFlat = () => {
  try {
    return questionBank.flatMap(cls => 
      cls.subjects ? cls.subjects.flatMap((sub: any) => 
        sub.chapters ? sub.chapters.flatMap((ch: any) => ch.questions || []) : []
      ) : []
    );
  } catch (e) {
    return [];
  }
};

export const totalQuestionCount = () => {
  const all = allQuestionsFlat();
  return all ? all.length : 0;
};
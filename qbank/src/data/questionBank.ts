/*
Error ka Reason:
Aapki Browse.tsx file (Line 74-75 aur 88) strictly expect kar rahi hai ki 'subject' ke andar 'chapterWise' aur 'setWise' naam ke keys (arrays) majood hon.
Pichle code mein maine galti se us property ka naam 'chapters' rakh diya tha, jiski wajah se UI ko 'chapterWise' nahi mila aur wo undefined hokar crash ho gaya.

Solution:
Humein bas 'chapters' ko wapas 'chapterWise' karna hai, aur ek empty 'setWise: []' add karna hai taaki aapka existing mode-switcher logic error na de.

Apni `questionBank.ts` file ke code ko isse replace karein:
*/

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
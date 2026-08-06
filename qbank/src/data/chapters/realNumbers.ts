import type { FactorTreeNode, Question } from "../types";
import type { CBlock } from "../types";

const p = (v: string): CBlock => ({ t: "p", v });
const m = (v: string, b = true): CBlock => ({ t: "m", v, b });
const h = (v: string): CBlock => ({ t: "h", v });
export const rn2026:Question[]= [
  {
      id: "RN-2026-01",
      number: 1,
      type: "mcq",
      year: 2026,    marks: 1,
      paper: "CBSE 2026-430-4-1 Basic",
      statement: [p("If the HCF of 850 and 325 is 25, then the LCM of 850 and 325 is:")],
      options: [
        { id: "A", text: "442" },
        { id: "B", text: "11050" },
        { id: "C", text: "8450" },
        { id: "D", text: "2210" }
      ],
      correctOption: "B",
      hint: [p("Use the relation:"), m("\\text{HCF}\\times\\text{LCM}=\\text{Product of the two numbers}")],
      answer: [p("(B) 11050")],
      solution: [
        m("\\text{HCF}\\times\\text{LCM}=\\text{Product of the two numbers}"),
        m("25\\times\\text{LCM}=850\\times325=276250"),
        m("\\text{LCM}=\\frac{276250}{25}=11050"),
        p("Therefore, the correct answer is (B) 11050.")
      ],
      keywords: ["HCF", "LCM", "product relation"],
      verification: "verified"
    },
    {
      id: "RN-2026-02",
      number: 2,
      type: "prime-composite",
      year: 2026,
      marks: 1,
      paper: "CBSE 2026-430-4-1 Basic",
      statement: [m("7\\times29\\times23+1\\text{ is:}", false)],
      options: [
        { id: "A", text: "a prime number" },
        { id: "B", text: "divisible by 23" },
        { id: "C", text: "an odd number" },
        { id: "D", text: "a composite number" }
      ],
      correctOption: "D",
      hint: [p("First determine whether the product of 7, 29 and 23 is odd or even.")],
      answer: [p("(D) a composite number")],
      solution: [
        p("7, 29 and 23 are all odd, and the product of three odd numbers is odd."),
        m("7\\times29\\times23+1=4669+1=4670"),
        p("Adding 1 to an odd number gives an even number. Since 4670 is even and greater than 2, it is composite."),
        p("Therefore, the correct answer is (D) a composite number.")
      ],
      keywords: ["odd number", "composite number"],
      verification: "verified"
    },
    {
      id: "RN-2026-03",
      number: 3,
      type: "assertion-reason",
      year: 2026,
      marks: 1,
      paper: "CBSE 2026-430-4-1 Basic",
      statement: [],
      assertion: "For every positive natural number n, 4^n cannot end with the digit zero.",
      reason: "The prime factorisation of 4^n is unique.",
      options: [
        { id: "A", text: "Both A and R are true, and R is the correct explanation of A." },
        { id: "B", text: "Both A and R are true, but R is not the correct explanation of A." },
        { id: "C", text: "A is true, but R is false." },
        { id: "D", text: "A is false, but R is true." }
      ],
      correctOption: "B",
      hint: [p("Express 4ⁿ as a power of 2 and check whether its prime factorisation contains the factor 5.")],
      answer: [p("(B) Both A and R are true, but R is not the correct explanation of A.")],
      solution: [
        h("Assertion"),
        m("4^n=(2^2)^n=2^{2n}"),
        p("So the prime factorisation of 4ⁿ contains only the prime factor 2. A number ending in zero must be divisible by 10 = 2 × 5, so it needs both 2 and 5 as factors. 4ⁿ has no factor of 5, so it cannot end in zero — Assertion (A) is true."),
        h("Reason"),
        p("By the Fundamental Theorem of Arithmetic, every composite number has a unique prime factorisation — Reason (R) is true."),
        h("Relationship"),
        p("Uniqueness of factorisation does not itself explain why 4ⁿ avoids zero — the real reason is the absence of the factor 5. So R does not explain A.")
      ],
      keywords: ["Assertion", "Reason", "prime factorisation", "units digit"],
      verification: "source-format-corrected",
      sourceNote: "Rendered as 2^{2n} to avoid an ambiguous exponent."
    },
    {
      id: "RN-2026-04",
      number: 4,
      type: "proof",
      year: 2026,
      marks: 3,
      paper: "CBSE 2026-430-4-1 Basic",
      statement: [m("\\text{Prove that }\\sqrt5\\text{ is an irrational number.}", false)],
      hint: [p("Assume √5 is rational and express it as p⁄q, where p and q are co-prime integers.")],
      answer: [p("√5 is an irrational number.")],
      solution: [
        p("Assume √5 is rational. Then it can be expressed as:"),
        m("\\sqrt5=\\frac{p}{q}"),
        p("where p and q are co-prime integers and q ≠ 0. Multiplying both sides by q, then squaring:"),
        m("q\\sqrt5=p\\quad\\Rightarrow\\quad 5q^2=p^2"),
        p("So 5 divides p². Since 5 is prime, 5 divides p. Let p = 5m:"),
        m("5q^2=25m^2\\quad\\Rightarrow\\quad q^2=5m^2"),
        p("So 5 divides q² too, hence 5 divides q. But then both p and q are divisible by 5 — contradicting that they are co-prime."),
        p("Hence the assumption is false, and √5 is an irrational number.")
      ],
      keywords: ["irrational number", "contradiction", "co-prime"],
      verification: "verified"
    },
    {
      id: "RN-2026-05",
      number: 5,
      type: "mcq",
      year: 2026,
      marks: 1,
      paper: "CBSE 2026-30-1-1 Standard",
      statement: [p("The HCF of 960 and 432 is:")],
      options: [
        { id: "A", text: "48" },
        { id: "B", text: "54" },
        { id: "C", text: "72" },
        { id: "D", text: "36" }
      ],
      correctOption: "A",
      hint: [p("Use Euclid's Division Algorithm repeatedly until the remainder becomes zero.")],
      answer: [p("(A) 48")],
      solution: [
        m("960=432\\times2+96"),
        m("432=96\\times4+48"),
        m("96=48\\times2+0"),
        p("The last non-zero remainder is 48, so HCF(960, 432) = 48. Correct answer: (A) 48.")
      ],
      keywords: ["HCF", "Euclid's Division Algorithm"],
      verification: "verified"
    },
    {
      id: "RN-2026-06",
      number: 6,
      type: "prime-composite",
      year: 2026,
      marks: 1,
      paper: "CBSE 2026-30-1-1 Standard",
      statement: [p("The natural number 2 is:")],
      options: [
        { id: "A", text: "a prime number" },
        { id: "B", text: "a composite number" },
        { id: "C", text: "prime as well as composite" },
        { id: "D", text: "neither prime nor composite" }
      ],
      correctOption: "A",
      hint: [p("Count the distinct positive factors of 2.")],
      answer: [p("(A) a prime number")],
      solution: [
        p("A prime number has exactly two distinct positive factors: 1 and itself. The factors of 2 are 1 and 2 — exactly two."),
        p("Hence 2 is a prime number. Correct answer: (A).")
      ],
      keywords: ["prime number", "factors"],
      verification: "verified"
    },
    {
      id: "RN-2026-07",
      number: 7,
      type: "mcq",
      year: 2026,
      marks: 1,
      paper: "CBSE 2026-30-1-1 Standard",
      statement: [m("\\text{For every positive natural number }n\\text{, }6^n\\text{ ends with the digit:}", false)],
      options: [
        { id: "A", text: "0" },
        { id: "B", text: "6" },
        { id: "C", text: "3" },
        { id: "D", text: "2" }
      ],
      correctOption: "B",
      hint: [p("Observe the units digit of the first few positive powers of 6.")],
      answer: [p("(B) 6")],
      solution: [
        m("6^1=6,\\quad 6^2=36,\\quad 6^3=216,\\quad 6^4=1296"),
        p("The units digit is always 6, for every positive natural number n. Correct answer: (B) 6.")
      ],
      keywords: ["units digit", "powers"],
      verification: "source-format-corrected",
      sourceNote: "\"positive natural number\" specified to remove ambiguity about n = 0."
    },
    {
      id: "RN-2026-08",
      number: 8,
      type: "proof",
      year: 2026,
      marks: 3,
      paper: "CBSE 2026-30-1-1 Standard",
      statement: [m("\\text{Prove that }\\sqrt3\\text{ is an irrational number.}", false)],
      hint: [p("Assume √3 is rational and write it as p⁄q in lowest terms.")],
      answer: [p("√3 is an irrational number.")],
      solution: [
        p("Assume √3 is rational:"),
        m("\\sqrt3=\\frac{p}{q}"),
        p("where p, q are co-prime integers, q ≠ 0. Squaring after multiplying by q:"),
        m("3q^2=p^2"),
        p("So 3 divides p², hence 3 divides p. Let p = 3a:"),
        m("3q^2=9a^2\\quad\\Rightarrow\\quad q^2=3a^2"),
        p("So 3 divides q² too, hence 3 divides q. Then both p and q share the factor 3 — contradicting that they are co-prime."),
        p("Hence √3 is an irrational number.")
      ],
      keywords: ["irrational number", "contradiction", "co-prime"],
      verification: "verified"
    }
  ];
  
  // ═══════════════════════════ REAL NUMBERS · 2025 ═══════════════════════════
  const factorTreeRN2025: FactorTreeNode = {
    label: "x",
    children: [
      { label: "2" },
      {
        label: "y",
        children: [
          { label: "2" },
          {
            label: "210",
            children: [
              { label: "a" },
              {
                label: "70",
                children: [{ label: "2" }, { label: "35", children: [{ label: "5" }, { label: "b" }] }]
              }
            ]
          }
        ]
      }
    ]
  };
  
  export const rn2025: Question[] = [
    {
      id: "RN-2025-01",
      number: 1,
      type: "mcq",
      year: 2025,
      marks: 1,
      statement: [m("\\text{If the HCF of positive integers }a\\text{ and }b\\text{ is 1, then their LCM is:}", false)],
      options: [
        { id: "A", text: "a + b" },
        { id: "B", text: "a" },
        { id: "C", text: "b" },
        { id: "D", text: "ab" }
      ],
      correctOption: "D",
      hint: [p("Use the relation between HCF, LCM and the product of two positive integers.")],
      answer: [p("(D) ab")],
      solution: [
        m("\\text{HCF}(a,b)\\times\\text{LCM}(a,b)=a\\times b"),
        p("Given HCF(a, b) = 1:"),
        m("1\\times\\text{LCM}(a,b)=ab\\quad\\Rightarrow\\quad\\text{LCM}(a,b)=ab"),
        p("Correct answer: (D) ab.")
      ],
      keywords: ["HCF", "LCM", "co-prime integers"],
      verification: "verified"
    },
    {
      id: "RN-2025-02",
      number: 2,
      type: "mcq",
      year: 2025,
      marks: 1,
      statement: [m("\\text{The number }3+\\sqrt2\\text{ is:}", false)],
      options: [
        { id: "A", text: "a rational number" },
        { id: "B", text: "an irrational number" },
        { id: "C", text: "an integer" },
        { id: "D", text: "a natural number" }
      ],
      correctOption: "B",
      hint: [p("Assume 3 + √2 is rational and subtract 3 from it.")],
      answer: [p("(B) an irrational number")],
      solution: [
        p("3 is rational and √2 is irrational. Assume 3 + √2 is rational. Subtracting 3:"),
        m("\\sqrt2=(3+\\sqrt2)-3"),
        p("This would make √2 rational, which contradicts the known fact that √2 is irrational."),
        p("Hence 3 + √2 is irrational. Correct answer: (B).")
      ],
      keywords: ["rational number", "irrational number"],
      verification: "verified"
    },
    {
      id: "RN-2025-03",
      number: 3,
      type: "assertion-reason",
      year: 2025,
      marks: 1,
      statement: [],
      assertion: "For any two natural numbers a and b, the HCF of a and b is a factor of the LCM of a and b.",
      reason: "The HCF of any two natural numbers divides both the numbers.",
      options: [
        { id: "A", text: "Both A and R are true, and R is the correct explanation of A." },
        { id: "B", text: "Both A and R are true, but R is not the correct explanation of A." },
        { id: "C", text: "A is true, but R is false." },
        { id: "D", text: "A is false, but R is true." }
      ],
      correctOption: "A",
      hint: [p("Let the HCF be h. Since h divides a and the LCM is a multiple of a, check whether h divides the LCM.")],
      answer: [p("(A) Both A and R are true, and R is the correct explanation of A.")],
      solution: [
        h("Assertion"),
        p("Let HCF(a, b) = h, so h | a and h | b. Let LCM(a, b) = L. Since L is a multiple of a, write a = hk and L = ar for integers k, r:"),
        m("L=ar=(hk)r=h(kr)\\quad\\Rightarrow\\quad h\\mid L"),
        p("So the HCF of a and b is a factor of their LCM — Assertion (A) is true."),
        h("Reason"),
        p("True by definition of HCF."),
        h("Relationship"),
        p("h dividing both a and b is exactly why it divides their common multiple L, so R correctly explains A.")
      ],
      keywords: ["Assertion", "Reason", "HCF", "LCM"],
      verification: "verified"
    },
    {
      id: "RN-2025-04",
      number: 4,
      type: "proof",
      year: 2025,
      marks: 3,
      statement: [m("\\text{Prove that }\\sqrt3\\text{ is an irrational number.}", false)],
      hint: [p("Assume √3 is rational and express it as p⁄q, where p and q are co-prime integers.")],
      answer: [p("√3 is an irrational number.")],
      solution: [
        m("\\sqrt3=\\frac{p}{q}\\ \\Rightarrow\\ q\\sqrt3=p\\ \\Rightarrow\\ 3q^2=p^2"),
        p("So 3 | p², hence 3 | p. Let p = 3m:"),
        m("3q^2=9m^2\\quad\\Rightarrow\\quad q^2=3m^2"),
        p("So 3 | q² too, hence 3 | q — contradicting that p, q are co-prime."),
        p("Hence √3 is irrational.")
      ],
      keywords: ["irrational number", "contradiction", "co-prime"],
      verification: "verified"
    },
    {
      id: "RN-2025-05",
      number: 5,
      type: "factor-tree",
      year: 2025,
      marks: 3,
      statement: [
        p("The factor tree of a number x is shown below: x branches into 2 and y; y branches into 2 and 210; 210 branches into a and 70; 70 branches into 2 and 35; 35 branches into 5 and b."),
        p("Find the values of x, y, a and b. Hence write the prime factorisation of x.")
      ],
      factorTree: factorTreeRN2025,
      hint: [p("Begin from the lowest branch of the factor tree and move upward.")],
      answer: [p("a = 3, b = 7, y = 420, x = 840"), m("840=2^3\\times3\\times5\\times7")],
      solution: [
        m("35=5\\times b\\ \\Rightarrow\\ b=\\frac{35}{5}=7"),
        m("210=a\\times70\\ \\Rightarrow\\ a=\\frac{210}{70}=3"),
        m("y=2\\times210=420"),
        m("x=2\\times y=2\\times420=840"),
        p("Prime factorisation of x:"),
        m("840=2^3\\times3\\times5\\times7")
      ],
      keywords: ["factor tree", "prime factorisation"],
      verification: "verified"
    },
    {
      id: "RN-2025-06",
      number: 6,
      type: "mcq",
      year: 2025,
      marks: 1,
      statement: [m("\\text{If }\\text{HCF}(98,28)=m\\text{ and }\\text{LCM}(98,28)=n\\text{, then }n-7m\\text{ is:}", false)],
      options: [
        { id: "A", text: "0" },
        { id: "B", text: "28" },
        { id: "C", text: "98" },
        { id: "D", text: "198" }
      ],
      correctOption: "C",
      hint: [p("First find m and n, then substitute into n − 7m.")],
      answer: [p("(C) 98")],
      solution: [
        m("98=2\\times7^2,\\quad 28=2^2\\times7"),
        m("\\text{HCF}(98,28)=2\\times7=14\\ \\Rightarrow\\ m=14"),
        m("14n=98\\times28=2744\\ \\Rightarrow\\ n=196"),
        m("n-7m=196-7(14)=196-98=98"),
        p("Correct answer: (C) 98.")
      ],
      keywords: ["HCF", "LCM", "substitution"],
      verification: "source-format-corrected",
      sourceNote: "Interpreted as n − 7m, which matches the verified answer 98."
    },
    {
      id: "RN-2025-07",
      number: 7,
      type: "mcq",
      year: 2025,
      marks: 1,
      statement: [m("\\text{If }(-1)^n+(-1)^8=0\\text{, then }n\\text{ is:}", false)],
      options: [
        { id: "A", text: "any positive integer" },
        { id: "B", text: "any negative integer" },
        { id: "C", text: "any odd number" },
        { id: "D", text: "any even number" }
      ],
      correctOption: "C",
      hint: [p("First evaluate (−1)⁸.")],
      answer: [p("(C) any odd number")],
      solution: [
        m("(-1)^8=1\\ \\Rightarrow\\ (-1)^n+1=0\\ \\Rightarrow\\ (-1)^n=-1"),
        p("(−1)ⁿ = −1 only when n is odd. Correct answer: (C).")
      ],
      keywords: ["odd number", "exponent"],
      verification: "verified"
    },
    {
      id: "RN-2025-08",
      number: 8,
      type: "mcq",
      year: 2025,
      marks: 1,
      statement: [m("\\text{Which of the following is a rational number between }\\sqrt3\\text{ and }\\sqrt5\\text{?}", false)],
      options: [
        { id: "A", text: "1.4142387954012..." },
        { id: "B", text: "2.326" },
        { id: "C", text: "π" },
        { id: "D", text: "1.857142" }
      ],
      correctOption: "D",
      hint: [p("Find approximate values of √3 and √5, then compare all options.")],
      answer: [p("(D) 1.857142")],
      solution: [
        m("\\sqrt3\\approx1.732,\\quad\\sqrt5\\approx2.236"),
        p("(A) is less than √3. (B) and (C) are greater than √5. (D) 1.857142 lies between 1.732 and 2.236, and is a terminating (rational) decimal."),
        p("Correct answer: (D) 1.857142.")
      ],
      keywords: ["rational number", "square root", "comparison"],
      verification: "verified"
    },
    {
      id: "RN-2025-09",
      number: 9,
      type: "proof",
      year: 2025,
      marks: 3,
      statement: [m("\\text{Prove that }\\frac{1}{\\sqrt5}\\text{ is an irrational number.}", false)],
      hint: [p("Assume 1⁄√5 is rational and express it as p⁄q in lowest terms.")],
      answer: [m("\\frac{1}{\\sqrt5}\\text{ is an irrational number.}", false)],
      solution: [
        m("\\frac{1}{\\sqrt5}=\\frac{p}{q}\\ \\Rightarrow\\ q=p\\sqrt5\\ \\Rightarrow\\ q^2=5p^2"),
        p("So 5 | q², hence 5 | q. Let q = 5a:"),
        m("25a^2=5p^2\\ \\Rightarrow\\ 5a^2=p^2"),
        p("So 5 | p² too, hence 5 | p — contradicting that p, q are co-prime."),
        p("Hence 1⁄√5 is irrational.")
      ],
      keywords: ["irrational number", "reciprocal", "contradiction"],
      verification: "verified"
    }
  ];
  
  // ═══════════════════════════ REAL NUMBERS · 2024 ═══════════════════════════
  export const rn2024: Question[] = [
    {
      id: "RN-2024-01",
      number: 1,
      type: "mcq",
      year: 2024,
      statement: [p("The LCM of 850 and 500 is:")],
      options: [
        { id: "A", text: "850 × 50" },
        { id: "B", text: "17 × 500" },
        { id: "C", text: "17 × 5² × 2²" },
        { id: "D", text: "17 × 5³ × 2" }
      ],
      correctOption: "B",
      hint: [p("Write the prime factorisations of 850 and 500 and take the highest power of each prime.")],
      answer: [p("(B) 17 × 500")],
      solution: [
        m("850=2\\times5^2\\times17,\\quad 500=2^2\\times5^3"),
        m("\\text{LCM}(850,500)=2^2\\times5^3\\times17=500\\times17=8500"),
        p("Correct answer: (B) 17 × 500.")
      ],
      keywords: ["LCM", "prime factorisation"],
      verification: "verified"
    },
    {
      id: "RN-2024-02",
      number: 2,
      type: "proof",
      year: 2024,
      statement: [m("\\text{Prove that }6-4\\sqrt5\\text{ is irrational, given that }\\sqrt5\\text{ is irrational.}", false)],
      hint: [p("Assume 6 − 4√5 is rational and isolate √5.")],
      answer: [m("6-4\\sqrt5\\text{ is an irrational number.}", false)],
      solution: [
        p("Assume 6 − 4√5 = x, where x is rational. Then:"),
        m("4\\sqrt5=6-x\\ \\Rightarrow\\ \\sqrt5=\\frac{6-x}{4}"),
        p("The right side is rational, so this would make √5 rational — contradicting the given fact."),
        p("Hence 6 − 4√5 is irrational.")
      ],
      keywords: ["irrational number", "contradiction"],
      verification: "verified"
    },
    {
      id: "RN-2024-03",
      number: 3,
      type: "prime-composite",
      year: 2024,
      statement: [m("\\text{Show that }11\\times19\\times23+3\\times11\\text{ is not a prime number.}", false)],
      hint: [p("Take 11 as the common factor.")],
      answer: [p("The number is not prime.")],
      solution: [
        m("11\\times19\\times23+3\\times11=11(19\\times23+3)=11(437+3)=11\\times440"),
        p("This is a product of two natural numbers, each greater than 1, so it is not prime.")
      ],
      keywords: ["prime number", "composite number", "common factor"],
      verification: "verified"
    },
    {
      id: "RN-2024-04",
      number: 4,
      type: "mcq",
      year: 2024,
      statement: [m("\\text{If }p=18a^2b\\text{ and }q=20a^3b^2\\text{ (}a,b\\text{ prime), the LCM of }p\\text{ and }q\\text{ is:}", false)],
      options: [
        { id: "A", text: "2a²b²" },
        { id: "B", text: "180a²b²" },
        { id: "C", text: "12a²b²" },
        { id: "D", text: "180a³b²" }
      ],
      correctOption: "D",
      hint: [p("Find the LCM of 18 and 20, then take the highest powers of a and b.")],
      answer: [p("(D) 180a³b²")],
      solution: [
        m("18=2\\times3^2,\\quad 20=2^2\\times5"),
        m("\\text{LCM}(18,20)=2^2\\times3^2\\times5=180"),
        p("Highest power of a is a³, of b is b²:"),
        m("\\text{LCM}(p,q)=180a^3b^2"),
        p("Correct answer: (D) 180a³b².")
      ],
      keywords: ["LCM", "prime factorisation", "algebraic expressions"],
      verification: "editorially-corrected",
      sourceNote: "Corrected from an erroneous b⁴ in the source — the highest power of b in p, q is b²."
    },
    {
      id: "RN-2024-05",
      number: 5,
      type: "proof",
      year: 2024,
      statement: [m("\\text{Prove that }5-2\\sqrt3\\text{ is irrational, given that }\\sqrt3\\text{ is irrational.}", false)],
      hint: [p("Assume 5 − 2√3 is rational and isolate √3.")],
      answer: [m("5-2\\sqrt3\\text{ is an irrational number.}", false)],
      solution: [
        p("Assume 5 − 2√3 = a⁄b, with a, b integers, b ≠ 0. Then:"),
        m("2b\\sqrt3=5b-a\\ \\Rightarrow\\ \\sqrt3=\\frac{5b-a}{2b}"),
        p("The right side is rational, so √3 would be rational — a contradiction."),
        p("Hence 5 − 2√3 is irrational.")
      ],
      keywords: ["irrational number", "contradiction"],
      verification: "verified"
    },
    {
      id: "RN-2024-06",
      number: 6,
      type: "prime-composite",
      year: 2024,
      statement: [m("\\text{Show that }5\\times11\\times17+3\\times11\\text{ is a composite number.}", false)],
      hint: [p("Take 11 as the common factor.")],
      answer: [p("The number is composite.")],
      solution: [
        m("5\\times11\\times17+3\\times11=11(5\\times17+3)=11(85+3)=11\\times88=11\\times11\\times2^3"),
        p("This is a product of two natural numbers, each greater than 1, so it is composite.")
      ],
      keywords: ["composite number", "common factor"],
      verification: "verified"
    },
    {
      id: "RN-2024-07",
      number: 7,
      type: "application",
      year: 2024,
      statement: [
        p("In a teachers' workshop, the numbers of teachers teaching French, Hindi and English are 48, 80 and 144 respectively."),
        p("Find the minimum number of rooms required if the same number of teachers sit in each room and every room has teachers of only one subject.")
      ],
      hint: [p("For the minimum number of rooms, maximise the number of teachers per room — find the HCF of 48, 80 and 144.")],
      answer: [p("17 rooms")],
      solution: [
        m("48=2^4\\times3,\\quad 80=2^4\\times5,\\quad 144=2^4\\times3^2"),
        m("\\text{HCF}(48,80,144)=2^4=16"),
        p("So 16 teachers per room. Rooms needed:"),
        m("\\frac{48}{16}+\\frac{80}{16}+\\frac{144}{16}=3+5+9=17"),
        p("Minimum number of rooms required: 17.")
      ],
      keywords: ["HCF", "application", "minimum rooms"],
      verification: "verified"
  }
];

import type { CBlock, Question } from "../types";

const p = (v: string): CBlock => ({ t: "p", v });
const m = (v: string, b = true): CBlock => ({ t: "m", v, b });
const h = (v: string): CBlock => ({ t: "h", v });

export const poly2026:Question[] = [
  {
    id: "polynomials-2026-q1a",
    number: 1,
    type: "application",
    year: 2026,
    marks: 2,
    paper: "CBSE 2026-430-4-1 Basic",
    statement: [
      { t: "p", v: "If " },
      { t: "m", v: "\\alpha" },
      { t: "p", v: " and " },
      { t: "m", v: "\\beta" },
      { t: "p", v: " are the zeroes of the polynomial" },
      { t: "m", v: "p(x)=6x^2-5x-3,", b: true },
      { t: "p", v: "then find the value of" },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}.", b: true }
    ],
    hint: [
      { t: "p", v: "For a quadratic polynomial " },
      { t: "m", v: "ax^2+bx+c:" },
      { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}", b: true },
      { t: "p", v: "and" },
      { t: "m", v: "\\alpha\\beta=\\frac{c}{a}.", b: true },
      { t: "p", v: "Now use:" },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}.", b: true }
    ],
    answer: [
      { t: "m", v: "-\\frac{5}{3}", b: true }
    ],
    solution: [
      { t: "h", v: "Given polynomial:" },
      { t: "m", v: "p(x)=6x^2-5x-3", b: true },
      { t: "p", v: "Comparing it with the standard form " },
      { t: "m", v: "ax^2+bx+c:" },
      { t: "m", v: "a=6,\\;b=-5,\\;c=-3.", b: true },
      { t: "h", v: "Step 1: Find the sum of zeroes." },
      { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}", b: true },
      { t: "m", v: "\\alpha+\\beta=-\\frac{-5}{6}=\\frac{5}{6}.", b: true },
      { t: "h", v: "Step 2: Find the product of zeroes." },
      { t: "m", v: "\\alpha\\beta=\\frac{c}{a}", b: true },
      { t: "m", v: "\\alpha\\beta=\\frac{-3}{6}=-\\frac{1}{2}.", b: true },
      { t: "h", v: "Step 3: Find the required value." },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\beta+\\alpha}{\\alpha\\beta}", b: true },
      { t: "m", v: "=\\frac{\\alpha+\\beta}{\\alpha\\beta}.", b: true },
      { t: "p", v: "Substituting the values:" },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\frac{5}{6}}{-\\frac{1}{2}}.", b: true },
      { t: "p", v: "Dividing by a fraction means multiplying by its reciprocal:" },
      { t: "m", v: "=\\frac{5}{6}\\times(-2)", b: true },
      { t: "m", v: "=-\\frac{10}{6}", b: true },
      { t: "m", v: "=-\\frac{5}{3}.", b: true },
      { t: "h", v: "Therefore:" },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}=-\\frac{5}{3}", b: true }
    ],
    keywords: ["zeroes", "quadratic polynomial", "sum of zeroes", "product of zeroes"],
    verification: "verified"
  },
  {
    id: "polynomials-2026-q1b",
    number: 1,
    type: "application",
    year: 2026,
    marks: 2,
    paper: "CBSE 2026-430-4-1 Basic",
    statement: [
      { t: "p", v: "One zero of the polynomial" },
      { t: "m", v: "4x^2-12x+(2k+1)", b: true },
      { t: "p", v: "is five times the other zero. Find the value of " },
      { t: "m", v: "k." }
    ],
    hint: [
      { t: "p", v: "Let the two zeroes be " },
      { t: "m", v: "\\alpha" },
      { t: "p", v: " and " },
      { t: "m", v: "5\\alpha." },
      { t: "p", v: " First use the sum of zeroes:" },
      { t: "m", v: "\\alpha+5\\alpha=-\\frac{b}{a}.", b: true },
      { t: "p", v: "Then use the product of zeroes:" },
      { t: "m", v: "\\alpha(5\\alpha)=\\frac{c}{a}.", b: true }
    ],
    answer: [
      { t: "m", v: "k=2", b: true }
    ],
    solution: [
      { t: "h", v: "Given polynomial:" },
      { t: "m", v: "4x^2-12x+(2k+1)", b: true },
      { t: "p", v: "Comparing it with " },
      { t: "m", v: "ax^2+bx+c:" },
      { t: "m", v: "a=4,\\;b=-12,\\;c=2k+1.", b: true },
      { t: "p", v: "Let one zero be " },
      { t: "m", v: "\\alpha." },
      { t: "p", v: " Since one zero is five times the other, the second zero will be " },
      { t: "m", v: "5\\alpha." },
      { t: "h", v: "Step 1: Use the sum of zeroes." },
      { t: "m", v: "\\alpha+5\\alpha=-\\frac{b}{a}", b: true },
      { t: "m", v: "6\\alpha=-\\frac{-12}{4}", b: true },
      { t: "m", v: "6\\alpha=3.", b: true },
      { t: "m", v: "\\alpha=\\frac{3}{6}=\\frac{1}{2}.", b: true },
      { t: "p", v: "Therefore, the two zeroes are:" },
      { t: "m", v: "\\frac{1}{2} \\quad\\text{and}\\quad \\frac{5}{2}.", b: true },
      { t: "h", v: "Step 2: Use the product of zeroes." },
      { t: "m", v: "\\alpha(5\\alpha)=\\frac{c}{a}.", b: true },
      { t: "m", v: "5\\alpha^2=\\frac{2k+1}{4}.", b: true },
      { t: "p", v: "Substituting " },
      { t: "m", v: "\\alpha=\\frac{1}{2}:" },
      { t: "m", v: "5\\left(\\frac{1}{2}\\right)^2=\\frac{2k+1}{4}.", b: true },
      { t: "m", v: "5\\times\\frac{1}{4}=\\frac{2k+1}{4}.", b: true },
      { t: "m", v: "\\frac{5}{4}=\\frac{2k+1}{4}.", b: true },
      { t: "p", v: "Multiplying both sides by 4:" },
      { t: "m", v: "5=2k+1.", b: true },
      { t: "m", v: "2k=4.", b: true },
      { t: "m", v: "k=2.", b: true },
      { t: "h", v: "Therefore:" },
      { t: "m", v: "k=2", b: true }
    ],
    keywords: ["zeroes", "polynomial", "sum of zeroes", "product of zeroes", "unknown constant"],
    verification: "verified"
  },
  {
    id: "polynomials-2026-q2",
    number: 2,
    type: "mcq",
    year: 2026,
    marks: 1,
    paper: "CBSE 2026-30-1-1 Standard",
    statement: [
      { t: "p", v: "The graph of " },
      { t: "m", v: "y=f(x)" },
      { t: "p", v: " is given below. The number of zeroes of " },
      { t: "m", v: "f(x)" },
      { t: "p", v: " is:" }
    ],
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "4" }
    ],
    correctOption: "A",
    hint: [
      { t: "p", v: "The zeroes of a polynomial are represented by the points where its graph intersects or touches the " },
      { t: "m", v: "x\\text{-axis}." },
      { t: "p", v: " Count the points at which the given curve meets the " },
      { t: "m", v: "x\\text{-axis}." }
    ],
    answer: [
      { t: "p", v: "(A) 0" }
    ],
    solution: [
      { t: "p", v: "The zeroes of " },
      { t: "m", v: "f(x)" },
      { t: "p", v: " are the values of " },
      { t: "m", v: "x" },
      { t: "p", v: " for which: " },
      { t: "m", v: "f(x)=0.", b: true },
      { t: "p", v: "On a graph, " },
      { t: "m", v: "f(x)=0" },
      { t: "p", v: " at the points where the graph intersects or touches the " },
      { t: "m", v: "x\\text{-axis}." },
      { t: "p", v: "In the given graph, the complete curve lies above the " },
      { t: "m", v: "x\\text{-axis}." },
      { t: "p", v: "It neither intersects nor touches the " },
      { t: "m", v: "x\\text{-axis}." },
      { t: "m", v: "\\text{Number of intersections with the } x\\text{-axis}=0.", b: true },
      { t: "h", v: "Therefore:" },
      { t: "m", v: "\\text{Number of zeroes}=0", b: true }
    ],
    keywords: ["graph", "number of zeroes", "polynomial", "x-axis intersection"],
    verification: "verified"
  },
  {
    id: "polynomials-2026-q3",
    number: 3,
    type: "assertion-reason",
    year: 2026,
    marks: 1,
    paper: "CBSE 2026-30-1-1 Standard",
    assertion: "The polynomial p(y)=y^2+4y+3 has two zeroes.",
    reason: "A quadratic polynomial can have at most two zeroes.",
    statement: [
      { t: "p", v: "Select the correct option." }
    ],
    options: [
      { id: "A", text: "Both Assertion (A) and Reason (R) are true, and Reason (R) is the correct explanation of Assertion (A)." },
      { id: "B", text: "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A)." },
      { id: "C", text: "Assertion (A) is true, but Reason (R) is false." },
      { id: "D", text: "Assertion (A) is false, but Reason (R) is true." }
    ],
    correctOption: "B",
    hint: [
      { t: "p", v: "Factorise the polynomial: " },
      { t: "m", v: "y^2+4y+3.", b: true },
      { t: "p", v: "Then check whether the statement “a quadratic polynomial can have at most two zeroes” proves that this particular polynomial has exactly two zeroes." }
    ],
    answer: [
      { t: "p", v: "(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A)." }
    ],
    solution: [
      { t: "h", v: "Step 1: Check Assertion (A)." },
      { t: "m", v: "p(y)=y^2+4y+3.", b: true },
      { t: "p", v: "Factorising:" },
      { t: "m", v: "y^2+4y+3=y^2+y+3y+3", b: true },
      { t: "m", v: "=y(y+1)+3(y+1)", b: true },
      { t: "m", v: "=(y+1)(y+3).", b: true },
      { t: "p", v: "For finding the zeroes:" },
      { t: "m", v: "(y+1)(y+3)=0.", b: true },
      { t: "m", v: "y+1=0 \\quad\\text{or}\\quad y+3=0.", b: true },
      { t: "m", v: "y=-1 \\quad\\text{or}\\quad y=-3.", b: true },
      { t: "p", v: "Therefore, the polynomial has two distinct zeroes. Hence, Assertion (A) is true." },
      { t: "h", v: "Step 2: Check Reason (R)." },
      { t: "p", v: "A quadratic polynomial has degree 2, so it can have at most two zeroes. Therefore, Reason (R) is also true." },
      { t: "h", v: "Step 3: Check whether Reason explains Assertion." },
      { t: "p", v: "The Reason only tells us the maximum possible number of zeroes of a quadratic polynomial. It does not prove that every quadratic polynomial has exactly two real zeroes. A quadratic polynomial may have: no real zeroes, one repeated real zero, or two distinct real zeroes. This polynomial has exactly two zeroes because it factorises as " },
      { t: "m", v: "(y+1)(y+3)." },
      { t: "p", v: " Therefore, Reason (R) is not the correct explanation of Assertion (A)." }
    ],
    keywords: ["assertion-reason", "quadratic polynomial", "zeroes", "factorisation"],
    verification: "verified"
  },
  {
    id: "polynomials-2026-q4",
    number: 4,
    type: "application",
    year: 2026,
    marks: 2,
    paper: "CBSE 2026-30-1-1 Standard",
    statement: [
      { t: "p", v: "If " },
      { t: "m", v: "\\alpha" },
      { t: "p", v: " and " },
      { t: "m", v: "\\beta" },
      { t: "p", v: " are the zeroes of the polynomial" },
      { t: "m", v: "p(x)=x^2-3x-1,", b: true },
      { t: "p", v: "then find the value of" },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}.", b: true }
    ],
    hint: [
      { t: "p", v: "First use:" },
      { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}", b: true },
      { t: "p", v: "and" },
      { t: "m", v: "\\alpha\\beta=\\frac{c}{a}.", b: true },
      { t: "p", v: "Then apply:" },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\alpha+\\beta}{\\alpha\\beta}.", b: true }
    ],
    answer: [
      { t: "m", v: "-3", b: true }
    ],
    solution: [
      { t: "h", v: "Given polynomial:" },
      { t: "m", v: "p(x)=x^2-3x-1.", b: true },
      { t: "p", v: "Comparing it with " },
      { t: "m", v: "ax^2+bx+c:" },
      { t: "m", v: "a=1,\\;b=-3,\\;c=-1.", b: true },
      { t: "h", v: "Step 1: Find the sum of zeroes." },
      { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}", b: true },
      { t: "m", v: "\\alpha+\\beta=-\\frac{-3}{1}=3.", b: true },
      { t: "h", v: "Step 2: Find the product of zeroes." },
      { t: "m", v: "\\alpha\\beta=\\frac{c}{a}", b: true },
      { t: "m", v: "\\alpha\\beta=\\frac{-1}{1}=-1.", b: true },
      { t: "h", v: "Step 3: Find the required value." },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}=\\frac{\\beta+\\alpha}{\\alpha\\beta}", b: true },
      { t: "m", v: "=\\frac{\\alpha+\\beta}{\\alpha\\beta}", b: true },
      { t: "m", v: "=\\frac{3}{-1}", b: true },
      { t: "m", v: "=-3.", b: true },
      { t: "h", v: "Therefore:" },
      { t: "m", v: "\\frac{1}{\\alpha}+\\frac{1}{\\beta}=-3", b: true }
    ],
    keywords: ["quadratic polynomial", "sum of zeroes", "product of zeroes", "evaluate expression"],
    verification: "verified"
   },
];
////////////////////////////////////2025////////////////////////////////////////

export const poly2025:Question[] = [
    {
        id: "polynomials-2025-q1",
        number: 1,
        type: "application",
        year: 2025,
        marks: 3,
        statement: [
        { t: "p", v: "Find a quadratic polynomial whose sum and product of zeroes are " },
        { t: "m", v: "0" },
        { t: "p", v: " and " },
        { t: "m", v: "-9," },
        { t: "p", v: " respectively. Also, find the zeroes of the polynomial so obtained." }
        ],
        hint: [
        { t: "p", v: "If the sum of zeroes is " },
        { t: "m", v: "S" },
        { t: "p", v: " and their product is " },
        { t: "m", v: "P," },
        { t: "p", v: " then a quadratic polynomial having these zeroes is:" },
        { t: "m", v: "x^2-Sx+P.", b: true },
        { t: "p", v: "Here:" },
        { t: "m", v: "S=0 \\quad\\text{and}\\quad P=-9.", b: true }
        ],
        answer: [
        { t: "m", v: "x^2-9", b: true },
        { t: "m", v: "-3 \\text{ and } 3", b: true }
        ],
        solution: [
        { t: "h", v: "Given:" },
        { t: "p", v: "Sum of zeroes:" },
        { t: "m", v: "\\alpha+\\beta=0.", b: true },
        { t: "p", v: "Product of zeroes:" },
        { t: "m", v: "\\alpha\\beta=-9.", b: true },
        { t: "p", v: "If " },
        { t: "m", v: "S" },
        { t: "p", v: " represents the sum of zeroes and " },
        { t: "m", v: "P" },
        { t: "p", v: " represents their product, then a monic quadratic polynomial having these zeroes is:" },
        { t: "m", v: "p(x)=x^2-Sx+P.", b: true },
        { t: "p", v: "Substituting " },
        { t: "m", v: "S=0" },
        { t: "p", v: " and " },
        { t: "m", v: "P=-9:" },
        { t: "m", v: "p(x)=x^2-(0)x+(-9).", b: true },
        { t: "m", v: "p(x)=x^2-9.", b: true },
        { t: "h", v: "Finding the zeroes:" },
        { t: "m", v: "x^2-9=0.", b: true },
        { t: "p", v: "Using the identity " },
        { t: "m", v: "a^2-b^2=(a-b)(a+b)," },
        { t: "p", v: " we get:" },
        { t: "m", v: "x^2-3^2=0.", b: true },
        { t: "m", v: "(x-3)(x+3)=0.", b: true },
        { t: "m", v: "x-3=0 \\quad\\text{or}\\quad x+3=0.", b: true },
        { t: "m", v: "x=3 \\quad\\text{or}\\quad x=-3.", b: true },
        { t: "h", v: "Hence, the zeroes are:" },
        { t: "m", v: "-3 \\text{ and } 3", b: true }
        ],
        keywords: ["quadratic polynomial", "sum of zeroes", "product of zeroes", "finding polynomial", "finding zeroes"],
        verification: "verified"
    },

    {
        id: "polynomials-2025-q2",
        number: 2,
        type: "mcq",
        year: 2025,
        marks: 1,
        statement: [
        { t: "p", v: "If " },
        { t: "m", v: "\\alpha" },
        { t: "p", v: " and " },
        { t: "m", v: "\\beta" },
        { t: "p", v: " are the zeroes of the polynomial" },
        { t: "m", v: "3x^2+6x+k", b: true },
        { t: "p", v: "such that" },
        { t: "m", v: "\\alpha+\\beta+\\alpha\\beta=-\\frac{2}{3},", b: true },
        { t: "p", v: "then the value of " },
        { t: "m", v: "k" },
        { t: "p", v: " is:" }
        ],
        options: [
        { id: "A", text: "8" },
        { id: "B", text: "8" },
        { id: "C", text: "4" },
        { id: "D", text: "4" }
        ],
        correctOption: "D",
        hint: [
        { t: "p", v: "For the polynomial " },
        { t: "m", v: "ax^2+bx+c:" },
        { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}", b: true },
        { t: "p", v: "and" },
        { t: "m", v: "\\alpha\\beta=\\frac{c}{a}.", b: true },
        { t: "p", v: "Find these values for " },
        { t: "m", v: "3x^2+6x+k," },
        { t: "p", v: " and substitute them in the given condition." }
        ],
        answer: [
        { t: "p", v: "(D) 4" }
        ],
        solution: [
        { t: "h", v: "Given polynomial:" },
        { t: "m", v: "3x^2+6x+k.", b: true },
        { t: "p", v: "Comparing it with " },
        { t: "m", v: "ax^2+bx+c:" },
        { t: "m", v: "a=3,\\;b=6,\\;c=k.", b: true },
        { t: "h", v: "Step 1: Find the sum of zeroes." },
        { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}", b: true },
        { t: "m", v: "\\alpha+\\beta=-\\frac{6}{3}=-2.", b: true },
        { t: "h", v: "Step 2: Find the product of zeroes." },
        { t: "m", v: "\\alpha\\beta=\\frac{c}{a}", b: true },
        { t: "m", v: "\\alpha\\beta=\\frac{k}{3}.", b: true },
        { t: "h", v: "Step 3: Use the given condition." },
        { t: "m", v: "\\alpha+\\beta+\\alpha\\beta=-\\frac{2}{3}.", b: true },
        { t: "p", v: "Substituting the values:" },
        { t: "m", v: "-2+\\frac{k}{3}=-\\frac{2}{3}.", b: true },
        { t: "p", v: "Adding 2 to both sides:" },
        { t: "m", v: "\\frac{k}{3}=-\\frac{2}{3}+2.", b: true },
        { t: "m", v: "\\frac{k}{3}=-\\frac{2}{3}+\\frac{6}{3}.", b: true },
        { t: "m", v: "\\frac{k}{3}=\\frac{4}{3}.", b: true },
        { t: "p", v: "Multiplying both sides by 3:" },
        { t: "m", v: "k=4.", b: true },
        { t: "h", v: "Therefore:" },
        { t: "m", v: "k=4", b: true }
        ],
        keywords: ["quadratic polynomial", "sum of zeroes", "product of zeroes", "unknown constant"],
        sourceNote: "The source image contains duplicate options. Both option (C) and option (D) are printed as 4. The official answer key marks option (D), but both options represent the correct numerical value.",
        verification: "source-format-corrected"
    },
    {
        id: "polynomials-2025-q3",
        number: 3,
        type: "mcq",
        year: 2025,
        marks: 1,
        statement: [
        { t: "p", v: "Two polynomials are shown in the graph below. The number of distinct zeroes of both the polynomials is:" }
        ],
        options: [
        { id: "A", text: "3" },
        { id: "B", text: "5" },
        { id: "C", text: "2" },
        { id: "D", text: "4" }
        ],
        correctOption: "C",
        hint: [
        { t: "p", v: "The zeroes of a polynomial are the " },
        { t: "m", v: "x\\text{-coordinates}" },
        { t: "p", v: " of the points where its graph intersects or touches the " },
        { t: "m", v: "x\\text{-axis}." },
        { t: "p", v: " Since the question asks for distinct zeroes, a common zero of both graphs must be counted only once." }
        ],
        answer: [
        { t: "p", v: "(C) 2" }
        ],
        solution: [
        { t: "p", v: "The zeroes of a polynomial are represented by the points where its graph intersects or touches the " },
        { t: "m", v: "x\\text{-axis}." },
        { t: "p", v: "Two polynomial graphs are shown: one curve opens upward and one curve opens downward. Both curves intersect the " },
        { t: "m", v: "x\\text{-axis}" },
        { t: "p", v: " at the same two points." },
        { t: "p", v: "The question asks for the number of distinct zeroes. Therefore, each common intersection point is counted only once." },
        { t: "m", v: "\\text{Number of distinct } x\\text{-axis intersections}=2.", b: true },
        { t: "h", v: "Therefore:" },
        { t: "m", v: "\\text{Number of distinct zeroes}=2", b: true }
        ],
        keywords: ["graph", "number of zeroes", "distinct zeroes", "x-axis intersection"],
        verification: "verified"
    },
    {
        id: "polynomials-2025-q4",
        number: 4,
        type: "application",
        year: 2025,
        marks: 2,
        statement: [
        { t: "p", v: "Find the zeroes of the polynomial:" },
        { t: "m", v: "p(x)=x^2+\\frac{4}{3}x-\\frac{4}{3}.", b: true }
        ],
        hint: [
        { t: "p", v: "First remove the fractions:" },
        { t: "m", v: "x^2+\\frac{4}{3}x-\\frac{4}{3}=\\frac{1}{3}(3x^2+4x-4).", b: true },
        { t: "p", v: "Then split the middle term " },
        { t: "m", v: "4x" },
        { t: "p", v: " as " },
        { t: "m", v: "6x-2x." }
        ],
        answer: [
        { t: "m", v: "\\frac{2}{3} \\text{ and } -2", b: true }
        ],
        solution: [
        { t: "h", v: "Given polynomial:" },
        { t: "m", v: "p(x)=x^2+\\frac{4}{3}x-\\frac{4}{3}.", b: true },
        { t: "p", v: "Set the polynomial equal to zero:" },
        { t: "m", v: "x^2+\\frac{4}{3}x-\\frac{4}{3}=0.", b: true },
        { t: "p", v: "Multiplying the complete equation by 3:" },
        { t: "m", v: "3x^2+4x-4=0.", b: true },
        { t: "p", v: "We need two numbers whose product is:" },
        { t: "m", v: "3\\times(-4)=-12", b: true },
        { t: "p", v: "and whose sum is:" },
        { t: "m", v: "4.", b: true },
        { t: "p", v: "The required numbers are 6 and -2." },
        { t: "p", v: "Splitting the middle term:" },
        { t: "m", v: "3x^2+6x-2x-4=0.", b: true },
        { t: "p", v: "Taking common factors:" },
        { t: "m", v: "3x(x+2)-2(x+2)=0.", b: true },
        { t: "m", v: "(x+2)(3x-2)=0.", b: true },
        { t: "m", v: "x+2=0 \\quad\\text{or}\\quad 3x-2=0.", b: true },
        { t: "m", v: "x=-2", b: true },
        { t: "p", v: "or" },
        { t: "m", v: "3x=2.", b: true },
        { t: "m", v: "x=\\frac{2}{3}.", b: true },
        { t: "h", v: "Hence, the zeroes are:" },
        { t: "m", v: "-2 \\text{ and } \\frac{2}{3}", b: true }
        ],
        keywords: ["zeroes", "polynomial", "factorisation", "splitting middle term"],
        verification: "verified"
        },
    ];
export const poly2024:Question[] = [
    {
        id: "polynomials-2024-q1",
        number: 1,
        type: "mcq",
        year: 2024,
        marks: 1,
        statement: [
        { t: "p", v: "If one of the zeroes of the quadratic polynomial" },
        { t: "m", v: "(a-1)x^2+ax+1", b: true },
        { t: "p", v: "is " },
        { t: "m", v: "-3," },
        { t: "p", v: " then the value of " },
        { t: "m", v: "a" },
        { t: "p", v: " is:" }
        ],
        options: [
        { id: "A", text: "-\\frac{2}{3}" },
        { id: "B", text: "\\frac{2}{3}" },
        { id: "C", text: "\\frac{4}{3}" },
        { id: "D", text: "\\frac{3}{4}" }
        ],
        correctOption: "C",
        hint: [
        { t: "p", v: "Since " },
        { t: "m", v: "-3" },
        { t: "p", v: " is a zero of the polynomial, substitute: " },
        { t: "m", v: "x=-3", b: true },
        { t: "p", v: "in" },
        { t: "m", v: "(a-1)x^2+ax+1=0.", b: true }
        ],
        answer: [
        { t: "p", v: "(C) \\frac{4}{3}" }
        ],
        solution: [
        { t: "h", v: "Given polynomial:" },
        { t: "m", v: "p(x)=(a-1)x^2+ax+1.", b: true },
        { t: "p", v: "It is given that " },
        { t: "m", v: "-3" },
        { t: "p", v: " is one of its zeroes. Therefore:" },
        { t: "m", v: "p(-3)=0.", b: true },
        { t: "p", v: "Substituting " },
        { t: "m", v: "x=-3:" },
        { t: "m", v: "(a-1)(-3)^2+a(-3)+1=0.", b: true },
        { t: "m", v: "9(a-1)-3a+1=0.", b: true },
        { t: "p", v: "Opening the bracket:" },
        { t: "m", v: "9a-9-3a+1=0.", b: true },
        { t: "p", v: "Combining like terms:" },
        { t: "m", v: "6a-8=0.", b: true },
        { t: "m", v: "6a=8.", b: true },
        { t: "m", v: "a=\\frac{8}{6}.", b: true },
        { t: "m", v: "a=\\frac{4}{3}.", b: true },
        { t: "h", v: "Therefore:" },
        { t: "m", v: "a=\\frac{4}{3}", b: true }
        ],
        keywords: ["zeroes", "polynomial", "unknown constant", "substitution"],
        verification: "verified"
    },
    {
        id: "polynomials-2024-q2",
        number: 2,
        type: "mcq",
        year: 2024,
        marks: 1,
        statement: [
        { t: "p", v: "For what value of " },
        { t: "m", v: "k," },
        { t: "p", v: " is the product of zeroes of the polynomial" },
        { t: "m", v: "kx^2-4x-7", b: true },
        { t: "p", v: "equal to " },
        { t: "m", v: "2?" }
        ],
        options: [
        { id: "A", text: "-\\frac{1}{14}" },
        { id: "B", text: "-\\frac{7}{2}" },
        { id: "C", text: "\\frac{7}{2}" },
        { id: "D", text: "-\\frac{2}{7}" }
        ],
        correctOption: "B",
        hint: [
        { t: "p", v: "For the quadratic polynomial " },
        { t: "m", v: "ax^2+bx+c," },
        { t: "p", v: " the product of its zeroes is:" },
        { t: "m", v: "\\alpha\\beta=\\frac{c}{a}.", b: true },
        { t: "p", v: "Here: " },
        { t: "m", v: "a=k \\quad\\text{and}\\quad c=-7.", b: true }
        ],
        answer: [
        { t: "p", v: "(B) -\\frac{7}{2}" }
        ],
        solution: [
        { t: "h", v: "Given polynomial:" },
        { t: "m", v: "kx^2-4x-7.", b: true },
        { t: "p", v: "Comparing it with " },
        { t: "m", v: "ax^2+bx+c:" },
        { t: "m", v: "a=k,\\;b=-4,\\;c=-7.", b: true },
        { t: "p", v: "The product of zeroes of a quadratic polynomial is:" },
        { t: "m", v: "\\alpha\\beta=\\frac{c}{a}.", b: true },
        { t: "p", v: "Therefore:" },
        { t: "m", v: "\\alpha\\beta=\\frac{-7}{k}.", b: true },
        { t: "p", v: "It is given that the product of the zeroes is 2." },
        { t: "m", v: "\\frac{-7}{k}=2.", b: true },
        { t: "p", v: "Multiplying both sides by " },
        { t: "m", v: "k:" },
        { t: "m", v: "-7=2k.", b: true },
        { t: "p", v: "Dividing both sides by 2:" },
        { t: "m", v: "k=-\\frac{7}{2}.", b: true },
        { t: "h", v: "Therefore:" },
        { t: "m", v: "k=-\\frac{7}{2}", b: true }
        ],
        keywords: ["product of zeroes", "polynomial", "unknown constant"],
        verification: "verified"
    },
    {
        id: "polynomials-2024-q3",
        number: 3,
        type: "assertion-reason",
        year: 2024,
        marks: 1,
        assertion: "Zeroes of the polynomial p(x)=x^2-2x-3 are -1 and 3.",
        reason: "The graph of the polynomial p(x)=x^2-2x-3 intersects the x-axis at (-1,0) and (3,0).",
        statement: [
        { t: "p", v: "Select the correct option:" }
        ],
        options: [
        { id: "A", text: "Both Assertion (A) and Reason (R) are true, and Reason (R) explains Assertion (A) completely." },
        { id: "B", text: "Both Assertion (A) and Reason (R) are true, but Reason (R) does not explain Assertion (A)." },
        { id: "C", text: "Assertion (A) is true, but Reason (R) is false." },
        { id: "D", text: "Assertion (A) is false, but Reason (R) is true." }
        ],
        correctOption: "A",
        hint: [
        { t: "p", v: "Factorise: " },
        { t: "m", v: "x^2-2x-3.", b: true },
        { t: "p", v: "Also remember that the " },
        { t: "m", v: "x\\text{-coordinates}" },
        { t: "p", v: " of the points where a graph intersects the " },
        { t: "m", v: "x\\text{-axis}" },
        { t: "p", v: " are the zeroes of the polynomial." }
        ],
        answer: [
        { t: "p", v: "(A) Both Assertion (A) and Reason (R) are true, and Reason (R) explains Assertion (A) completely." }
        ],
        solution: [
        { t: "h", v: "Step 1: Check Assertion (A)." },
        { t: "m", v: "p(x)=x^2-2x-3.", b: true },
        { t: "p", v: "Factorising:" },
        { t: "m", v: "x^2-2x-3=x^2-3x+x-3", b: true },
        { t: "m", v: "=x(x-3)+1(x-3)", b: true },
        { t: "m", v: "=(x-3)(x+1).", b: true },
        { t: "p", v: "For finding the zeroes:" },
        { t: "m", v: "(x-3)(x+1)=0.", b: true },
        { t: "m", v: "x-3=0 \\quad\\text{or}\\quad x+1=0.", b: true },
        { t: "m", v: "x=3 \\quad\\text{or}\\quad x=-1.", b: true },
        { t: "p", v: "Therefore, the zeroes are -1 and 3. Hence, Assertion (A) is true." },
        { t: "h", v: "Step 2: Check Reason (R)." },
        { t: "p", v: "A point on the " },
        { t: "m", v: "x\\text{-axis}" },
        { t: "p", v: " has its " },
        { t: "m", v: "y\\text{-coordinate}" },
        { t: "p", v: " equal to zero. The graph intersects the " },
        { t: "m", v: "x\\text{-axis}" },
        { t: "p", v: " at:" },
        { t: "m", v: "(-1,0) \\quad\\text{and}\\quad (3,0).", b: true },
        { t: "p", v: "This means:" },
        { t: "m", v: "p(-1)=0 \\quad\\text{and}\\quad p(3)=0.", b: true },
        { t: "p", v: "Therefore, -1 and 3 are the zeroes of the polynomial. Hence, Reason (R) is true." },
        { t: "h", v: "Step 3: Relation between Assertion and Reason." },
        { t: "p", v: "The zeroes of a polynomial are exactly the " },
        { t: "m", v: "x\\text{-coordinates}" },
        { t: "p", v: " of the points where its graph intersects the " },
        { t: "m", v: "x\\text{-axis}." },
        { t: "p", v: " Therefore, Reason (R) correctly explains Assertion (A)." }
        ],
        keywords: ["assertion-reason", "zeroes", "polynomial", "graph", "x-axis intersection"],
        verification: "verified"
    },
    {
        id: "polynomials-2024-q4",
        number: 4,
        type: "mcq",
        year: 2024,
        marks: 1,
        statement: [
        { t: "p", v: "The zeroes of the polynomial" },
        { t: "m", v: "x^2+px+q", b: true },
        { t: "p", v: "are twice the zeroes of the polynomial" },
        { t: "m", v: "4x^2-5x-6.", b: true },
        { t: "p", v: "The value of " },
        { t: "m", v: "p" },
        { t: "p", v: " is:" }
        ],
        options: [
        { id: "A", text: "-\\frac{5}{2}" },
        { id: "B", text: "\\frac{5}{2}" },
        { id: "C", text: "-5" },
        { id: "D", text: "10" }
        ],
        correctOption: "A",
        hint: [
        { t: "p", v: "Let the zeroes of " },
        { t: "m", v: "4x^2-5x-6" },
        { t: "p", v: " be " },
        { t: "m", v: "\\alpha" },
        { t: "p", v: " and " },
        { t: "m", v: "\\beta." },
        { t: "p", v: " First find:" },
        { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}.", b: true },
        { t: "p", v: "The zeroes of " },
        { t: "m", v: "x^2+px+q" },
        { t: "p", v: " will be " },
        { t: "m", v: "2\\alpha" },
        { t: "p", v: " and " },
        { t: "m", v: "2\\beta." },
        { t: "p", v: " For " },
        { t: "m", v: "x^2+px+q," },
        { t: "p", v: " the sum of zeroes is:" },
        { t: "m", v: "-p.", b: true }
        ],
        answer: [
        { t: "p", v: "(A) -\\frac{5}{2}" }
        ],
        solution: [
        { t: "p", v: "Let the zeroes of " },
        { t: "m", v: "4x^2-5x-6" },
        { t: "p", v: " be " },
        { t: "m", v: "\\alpha" },
        { t: "p", v: " and " },
        { t: "m", v: "\\beta." },
        { t: "p", v: "For the polynomial " },
        { t: "m", v: "ax^2+bx+c," },
        { t: "p", v: " the sum of zeroes is:" },
        { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}.", b: true },
        { t: "p", v: "For " },
        { t: "m", v: "4x^2-5x-6:" },
        { t: "m", v: "a=4,\\;b=-5.", b: true },
        { t: "p", v: "Therefore:" },
        { t: "m", v: "\\alpha+\\beta=-\\frac{-5}{4}=\\frac{5}{4}.", b: true },
        { t: "p", v: "The zeroes of " },
        { t: "m", v: "x^2+px+q" },
        { t: "p", v: " are twice these zeroes. Therefore, its zeroes are:" },
        { t: "m", v: "2\\alpha \\quad\\text{and}\\quad 2\\beta.", b: true },
        { t: "p", v: "Their sum is:" },
        { t: "m", v: "2\\alpha+2\\beta=2(\\alpha+\\beta).", b: true },
        { t: "m", v: "=2\\left(\\frac{5}{4}\\right)", b: true },
        { t: "m", v: "=\\frac{10}{4}", b: true },
        { t: "m", v: "=\\frac{5}{2}.", b: true },
        { t: "p", v: "For the polynomial " },
        { t: "m", v: "x^2+px+q," },
        { t: "p", v: " the sum of zeroes is:" },
        { t: "m", v: "-\\frac{p}{1}=-p.", b: true },
        { t: "p", v: "Therefore:" },
        { t: "m", v: "-p=\\frac{5}{2}.", b: true },
        { t: "p", v: "Multiplying both sides by -1:" },
        { t: "m", v: "p=-\\frac{5}{2}.", b: true },
        { t: "h", v: "Hence:" },
        { t: "m", v: "p=-\\frac{5}{2}", b: true }
        ],
        keywords: ["zeroes", "polynomial", "sum of zeroes", "transformed zeroes"],
        verification: "verified"
    },
    {
        id: "polynomials-2024-q5",
        number: 5,
        type: "mcq",
        year: 2024,
        marks: 1,
        statement: [
        { t: "p", v: "If the sum of zeroes of the polynomial" },
        { t: "m", v: "p(x)=2x^2-k\\sqrt{2}x+1", b: true },
        { t: "p", v: "is " },
        { t: "m", v: "\\sqrt{2}," },
        { t: "p", v: " then the value of " },
        { t: "m", v: "k" },
        { t: "p", v: " is:" }
        ],
        options: [
        { id: "A", text: "\\sqrt{2}" },
        { id: "B", text: "2" },
        { id: "C", text: "2\\sqrt{2}" },
        { id: "D", text: "\\frac{1}{2}" }
        ],
        correctOption: "B",
        hint: [
        { t: "p", v: "For a quadratic polynomial " },
        { t: "m", v: "ax^2+bx+c," },
        { t: "p", v: " the sum of zeroes is:" },
        { t: "m", v: "-\\frac{b}{a}.", b: true },
        { t: "p", v: "Here: " },
        { t: "m", v: "a=2" },
        { t: "p", v: " and " },
        { t: "m", v: "b=-k\\sqrt{2}." }
        ],
        answer: [
        { t: "p", v: "(B) 2" }
        ],
        solution: [
        { t: "h", v: "Given polynomial:" },
        { t: "m", v: "p(x)=2x^2-k\\sqrt{2}x+1.", b: true },
        { t: "p", v: "Comparing it with " },
        { t: "m", v: "ax^2+bx+c:" },
        { t: "m", v: "a=2,\\;b=-k\\sqrt{2},\\;c=1.", b: true },
        { t: "p", v: "The sum of zeroes of a quadratic polynomial is:" },
        { t: "m", v: "\\alpha+\\beta=-\\frac{b}{a}.", b: true },
        { t: "p", v: "Substituting the values:" },
        { t: "m", v: "\\alpha+\\beta=-\\frac{-k\\sqrt{2}}{2}.", b: true },
        { t: "m", v: "\\alpha+\\beta=\\frac{k\\sqrt{2}}{2}.", b: true },
        { t: "p", v: "It is given that the sum of zeroes is " },
        { t: "m", v: "\\sqrt{2}." },
        { t: "m", v: "\\frac{k\\sqrt{2}}{2}=\\sqrt{2}.", b: true },
        { t: "p", v: "Dividing both sides by " },
        { t: "m", v: "\\sqrt{2}:" },
        { t: "m", v: "\\frac{k}{2}=1.", b: true },
        { t: "p", v: "Multiplying both sides by 2:" },
        { t: "m", v: "k=2.", b: true },
        { t: "h", v: "Therefore:" },
        { t: "m", v: "k=2", b: true }
        ],
        keywords: ["sum of zeroes", "polynomial", "irrational coefficients", "unknown constant"],
        verification: "verified"
    }
];


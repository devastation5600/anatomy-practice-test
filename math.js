// Geometry practice based on supplied worksheet topics; #119 intentionally excluded.
const MATH_QUESTIONS = [
  {
    "id": 1,
    "topic": "Trapezoid proofs · #61",
    "type": "multi",
    "prompt": "WXYZ is an isosceles trapezoid with WX ∥ ZY. Complete the proof that WY ≅ XZ. Select ALL FOUR correct entries for the blanks.",
    "diagram": "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Trapezoid WXYZ, with WX parallel to ZY. Both diagonals shown.\"><path d=\"M80 25 H240 L285 135 H35 Z\" fill=\"#fff0f7\" stroke=\"#a32768\" stroke-width=\"3\"/><path d=\"M80 25 L285 135 M240 25 L35 135\" stroke=\"#a32768\" stroke-width=\"2\"/><g font-size=\"16\" fill=\"#302036\"><text x=\"63\" y=\"20\">W</text><text x=\"242\" y=\"20\">X</text><text x=\"290\" y=\"142\">Y</text><text x=\"15\" y=\"142\">Z</text></g></svg>",
    "given2table": [
      [
        "WXYZ is an isosceles trapezoid",
        "Given"
      ],
      [
        "WZ ≅ XY",
        "(a) ?"
      ],
      [
        "(b) ?",
        "Isosceles trapezoid base angles theorem"
      ],
      [
        "ZY ≅ YZ",
        "(c) ?"
      ],
      [
        "(d) ?",
        "SAS"
      ],
      [
        "WY ≅ XZ",
        "CPCTC"
      ]
    ],
    "choices": [
      "(a) Definition of an isosceles trapezoid",
      "(b) ∠WZY ≅ ∠XYZ",
      "(c) Reflexive property of congruence",
      "(d) △WZY ≅ △XYZ",
      "(a) Transitive property of equality",
      "(b) ∠ZWX ≅ ∠WZY",
      "(d) △WZY ≅ △XZY"
    ],
    "correctSet": [
      0,
      1,
      2,
      3
    ],
    "distractorNotes": [
      "",
      "",
      "",
      "",
      "Transitive needs a chain of equal quantities; the given trapezoid definition supplies equal legs.",
      "Angles along a leg are supplementary, not necessarily congruent.",
      "Order matters: match the equal legs, shared base, and included base angles."
    ],
    "explanation": [
      "An isosceles trapezoid has congruent legs.",
      "The angles on base ZY, ∠WZY and ∠XYZ, are congruent.",
      "The shared side matches itself: ZY ≅ YZ.",
      "Thus △WZY ≅ △XYZ by SAS. Corresponding diagonals are congruent by CPCTC."
    ]
  },
  {
    "id": 2,
    "topic": "Base-angle algebra · #63",
    "prompt": "ABCD is an isosceles trapezoid with AB ∥ DC. m∠A = (3x + 12)° and m∠B = (5x − 18)°. Find x and all four angles.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          15
        ]
      },
      {
        "key": "a",
        "label": "∠A (degrees)",
        "accept": [
          57
        ]
      },
      {
        "key": "b",
        "label": "∠B (degrees)",
        "accept": [
          57
        ]
      },
      {
        "key": "c",
        "label": "∠C (degrees)",
        "accept": [
          123
        ]
      },
      {
        "key": "d",
        "label": "∠D (degrees)",
        "accept": [
          123
        ]
      }
    ],
    "explanation": [
      "Angles on the same base are equal: 3x + 12 = 5x − 18.",
      "30 = 2x, so x = 15. Then ∠A = ∠B = 57°.",
      "Angles along each leg add to 180°: ∠C = ∠D = 180 − 57 = 123°."
    ]
  },
  {
    "id": 3,
    "topic": "Base-angle algebra · #63",
    "prompt": "PQRS is an isosceles trapezoid with PQ ∥ SR. m∠P = (4x + 7)° and m∠Q = (6x − 19)°. Find x and m∠R.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          13
        ]
      },
      {
        "key": "r",
        "label": "∠R (degrees)",
        "accept": [
          121
        ]
      }
    ],
    "explanation": [
      "4x + 7 = 6x − 19 → 26 = 2x → x = 13.",
      "∠Q = 6(13) − 19 = 59°.",
      "∠Q + ∠R = 180° because the bases are parallel. ∠R = 121°."
    ]
  },
  {
    "id": 4,
    "topic": "Trapezoid proofs · #61",
    "type": "multi",
    "prompt": "ABCD is an isosceles trapezoid with AB ∥ DC. Complete the proof that AC ≅ BD. Select ALL FOUR correct entries for the blanks.",
    "diagram": "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Trapezoid ABCD, with AB parallel to DC. Both diagonals shown.\"><path d=\"M80 25 H240 L285 135 H35 Z\" fill=\"#fff0f7\" stroke=\"#a32768\" stroke-width=\"3\"/><path d=\"M80 25 L285 135 M240 25 L35 135\" stroke=\"#a32768\" stroke-width=\"2\"/><g font-size=\"16\" fill=\"#302036\"><text x=\"63\" y=\"20\">A</text><text x=\"242\" y=\"20\">B</text><text x=\"290\" y=\"142\">C</text><text x=\"15\" y=\"142\">D</text></g></svg>",
    "given2table": [
      [
        "ABCD is an isosceles trapezoid",
        "Given"
      ],
      [
        "AD ≅ BC",
        "(a) ?"
      ],
      [
        "(b) ?",
        "Isosceles trapezoid base angles theorem"
      ],
      [
        "DC ≅ CD",
        "(c) ?"
      ],
      [
        "(d) ?",
        "SAS"
      ],
      [
        "AC ≅ BD",
        "CPCTC"
      ]
    ],
    "choices": [
      "(a) Definition of an isosceles trapezoid",
      "(b) ∠ADC ≅ ∠BCD",
      "(c) Reflexive property of congruence",
      "(d) △ADC ≅ △BCD",
      "(a) Transitive property of equality",
      "(b) ∠DAB ≅ ∠ADC",
      "(d) △ADC ≅ △BDC"
    ],
    "correctSet": [
      0,
      1,
      2,
      3
    ],
    "distractorNotes": [
      "",
      "",
      "",
      "",
      "Transitive needs a chain of equal quantities; the given trapezoid definition supplies equal legs.",
      "Angles along a leg are supplementary, not necessarily congruent.",
      "Order matters: match the equal legs, shared base, and included base angles."
    ],
    "explanation": [
      "An isosceles trapezoid has congruent legs.",
      "The angles on base DC, ∠ADC and ∠BCD, are congruent.",
      "The shared side matches itself: DC ≅ CD.",
      "Thus △ADC ≅ △BCD by SAS. Corresponding diagonals are congruent by CPCTC."
    ]
  },
  {
    "id": 5,
    "topic": "Trapezoid midsegments · #64",
    "prompt": "A trapezoid has bases 2x + 4 and 6x + 8. The segment joining its leg midpoints has length 22. Find x and the two base lengths.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          4
        ]
      },
      {
        "key": "short",
        "label": "Shorter base",
        "accept": [
          12
        ]
      },
      {
        "key": "long",
        "label": "Longer base",
        "accept": [
          32
        ]
      }
    ],
    "explanation": [
      "The midsegment is the average of the bases, not their sum: 22 = (base 1 + base 2) / 2.",
      "Multiply both sides by 2 and combine like terms: 44 = 8x + 12. Solve to get x = 4.",
      "Substitute into both expressions: bases 12 and 32. Check: (12 + 32) / 2 = 22."
    ],
    "diagram": "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Trapezoid ABCD, with AB parallel to DC. Segment connecting leg midpoints shown.\"><path d=\"M80 25 H240 L285 135 H35 Z\" fill=\"#fff0f7\" stroke=\"#a32768\" stroke-width=\"3\"/><path d=\"M57.5 80 H262.5\" stroke=\"#a32768\" stroke-width=\"3\"/><g font-size=\"16\" fill=\"#302036\"><text x=\"63\" y=\"20\">A</text><text x=\"242\" y=\"20\">B</text><text x=\"290\" y=\"142\">C</text><text x=\"15\" y=\"142\">D</text></g></svg>"
  },
  {
    "id": 6,
    "topic": "Trapezoid midsegments · #64",
    "prompt": "A trapezoid has bases 3x + 2 and 5x + 10. The segment joining its leg midpoints has length 30. Find x and the two base lengths.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          6
        ]
      },
      {
        "key": "short",
        "label": "Shorter base",
        "accept": [
          20
        ]
      },
      {
        "key": "long",
        "label": "Longer base",
        "accept": [
          40
        ]
      }
    ],
    "explanation": [
      "The midsegment is the average of the bases, not their sum: 30 = (base 1 + base 2) / 2.",
      "Multiply both sides by 2 and combine like terms: 60 = 8x + 12. Solve to get x = 6.",
      "Substitute into both expressions: bases 20 and 40. Check: (20 + 40) / 2 = 30."
    ],
    "diagram": "<svg viewBox=\"0 0 320 160\" role=\"img\" aria-label=\"Trapezoid ABCD, with AB parallel to DC. Segment connecting leg midpoints shown.\"><path d=\"M80 25 H240 L285 135 H35 Z\" fill=\"#fff0f7\" stroke=\"#a32768\" stroke-width=\"3\"/><path d=\"M57.5 80 H262.5\" stroke=\"#a32768\" stroke-width=\"3\"/><g font-size=\"16\" fill=\"#302036\"><text x=\"63\" y=\"20\">A</text><text x=\"242\" y=\"20\">B</text><text x=\"290\" y=\"142\">C</text><text x=\"15\" y=\"142\">D</text></g></svg>"
  },
  {
    "id": 7,
    "topic": "Parallelogram fourth vertex · #90",
    "type": "multi",
    "prompt": "Three vertices of a parallelogram are (0, 0), (4, 0), and (1, 3). Their order is NOT specified. Select ALL possible fourth vertices.",
    "choices": [
      "(5, 3)",
      "(3, −3)",
      "(−3, 3)",
      "(2, 2)",
      "(4, 3)"
    ],
    "correctSet": [
      0,
      1,
      2
    ],
    "distractorNotes": [
      "",
      "",
      "",
      "This point does not give diagonals with the same midpoint for any pairing.",
      "Copying one x-coordinate and another y-coordinate does not generally complete a parallelogram."
    ],
    "explanation": [
      "For three points U, V, W with unspecified order, try U + V − W, U + W − V, and V + W − U. Add/subtract each coordinate separately.",
      "(0,0) + (4,0) − (1,3) = (3,−3).",
      "(0,0) + (1,3) − (4,0) = (−3,3).",
      "(4,0) + (1,3) − (0,0) = (5,3). This works because parallelogram diagonals have a common midpoint."
    ]
  },
  {
    "id": 8,
    "topic": "Parallelogram fourth vertex · #90",
    "type": "multi",
    "prompt": "Three vertices are (1, 1), (5, 1), and (2, 4). Their order is NOT specified. Select ALL possible fourth vertices of a parallelogram.",
    "choices": [
      "(6, 4)",
      "(4, 4)",
      "(−2, 4)",
      "(4, −2)",
      "(2, −4)"
    ],
    "correctSet": [
      0,
      2,
      3
    ],
    "distractorNotes": [
      "",
      "Test all three sums of two points minus the third. This point is not one of them.",
      "",
      "",
      "Check each subtraction, including the y-coordinates."
    ],
    "explanation": [
      "Use U + V − W, U + W − V, and V + W − U.",
      "(1,1) + (5,1) − (2,4) = (4,−2).",
      "(1,1) + (2,4) − (5,1) = (−2,4).",
      "(5,1) + (2,4) − (1,1) = (6,4)."
    ]
  },
  {
    "id": 9,
    "topic": "Proving rectangles · #91",
    "prompt": "Vertices in order: A(0, 0), B(4, 2), C(3, 4), D(−1, 2). Find the four side slopes and both diagonal lengths. Enter decimals for slopes (for example, 0.5). On paper, explain why these values prove it is a rectangle.",
    "type": "input",
    "fields": [
      {
        "key": "ab",
        "label": "Slope AB",
        "accept": [
          0.5
        ]
      },
      {
        "key": "bc",
        "label": "Slope BC",
        "accept": [
          -2
        ]
      },
      {
        "key": "cd",
        "label": "Slope CD",
        "accept": [
          0.5
        ]
      },
      {
        "key": "da",
        "label": "Slope DA",
        "accept": [
          -2
        ]
      },
      {
        "key": "ac",
        "label": "Length AC",
        "accept": [
          5
        ]
      },
      {
        "key": "bd",
        "label": "Length BD",
        "accept": [
          5
        ]
      }
    ],
    "explanation": [
      "Slope = change in y / change in x. AB = 2/4 = 0.5; BC = 2/(−1) = −2; CD = −2/(−4) = 0.5; DA = −2/1 = −2.",
      "Opposite sides have equal slopes, so they are parallel. Adjacent slopes multiply to −1, so they are perpendicular. Thus the parallelogram has right angles: it is a rectangle.",
      "AC = √(3² + 4²) = 5. BD = √((−5)² + 0²) = 5. Its diagonals are congruent too."
    ]
  },
  {
    "id": 10,
    "topic": "Proving rectangles · #91",
    "type": "multi",
    "prompt": "A quadrilateral has already been proved to be a parallelogram. Which additional facts, each by itself, prove it is a rectangle? Select ALL that apply.",
    "choices": [
      "Its diagonals are perpendicular.",
      "Its diagonals have equal lengths.",
      "Two adjacent sides have slopes 2/3 and −3/2.",
      "Both pairs of opposite sides have equal lengths.",
      "Its diagonals bisect each other."
    ],
    "correctSet": [
      1,
      2
    ],
    "distractorNotes": [
      "A non-square rhombus can have perpendicular diagonals.",
      "",
      "",
      "This is true of every parallelogram, including slanted ones.",
      "This is true of every parallelogram, not just rectangles."
    ],
    "explanation": [
      "Congruent diagonals in a parallelogram prove it is a rectangle.",
      "(2/3)(−3/2) = −1, so those adjacent sides form a right angle. A parallelogram with one right angle is a rectangle.",
      "Perpendicular diagonals alone do not prove rectangle. Equal opposite sides and bisecting diagonals add nothing beyond the given parallelogram."
    ]
  },
  {
    "id": 11,
    "topic": "Square diagonal endpoints · #92",
    "type": "mc",
    "prompt": "One diagonal of a square has endpoints (−2, 1) and (4, 3). Find the endpoints of the OTHER diagonal. Work it out on paper, then choose the pair.",
    "choices": [
      "(0, 5) and (2, −1)",
      "(−2, 3) and (4, 1)",
      "(−1, 3) and (3, 1)",
      "(1, 2) and (4, 3)"
    ],
    "correct": 0,
    "distractorNotes": [
      "",
      "Swapping y-coordinates produces a rectangle, but not this square.",
      "These endpoints share the midpoint but do not make the required perpendicular equal-length diagonal.",
      "The midpoint is the center, not a vertex."
    ],
    "explanation": [
      "Midpoint M = (1,2). The vector from M to (4,3) is (3,1).",
      "Rotate 90°: (3,1) → (−1,3).",
      "Add and subtract that rotated vector from M: (0,5) and (2,−1).",
      "Square diagonals are equal, perpendicular, and bisect each other."
    ]
  },
  {
    "id": 12,
    "topic": "Square diagonal endpoints · #92",
    "type": "mc",
    "prompt": "One diagonal of a square has endpoints (−3, −1) and (1, 5). Find the endpoints of the OTHER diagonal. Work it out on paper, then choose the pair.",
    "choices": [
      "(−3, 5) and (1, −1)",
      "(−4, 4) and (2, 0)",
      "(−3, 4) and (3, 0)",
      "(−1, 2) and (2, 3)"
    ],
    "correct": 1,
    "distractorNotes": [
      "Swapping coordinates gives a non-square rectangle here.",
      "",
      "Recheck the midpoint; these points do not average to (−1,2).",
      "The center is not one of the missing vertices."
    ],
    "explanation": [
      "Midpoint M = (−1,2). Half-diagonal vector = (2,3). Rotate it to (−3,2).",
      "M + (−3,2) = (−4,4); M − (−3,2) = (2,0).",
      "Check: both midpoints are (−1,2), and both lengths are √52 = 2√13.",
      "The diagonal direction vectors (4,6) and (6,−4) have dot product 24 − 24 = 0: perpendicular."
    ]
  },
  {
    "id": 13,
    "topic": "Trapezoid proofs · #61",
    "prompt": "The diagonals of an isosceles trapezoid have lengths 7x − 5 and 4x + 16. Find x and the length of each diagonal.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          7
        ]
      },
      {
        "key": "diag",
        "label": "Each diagonal",
        "accept": [
          44
        ]
      }
    ],
    "explanation": [
      "The diagonals of an isosceles trapezoid are congruent: 7x − 5 = 4x + 16.",
      "3x = 21, so x = 7. Each diagonal is 7(7) − 5 = 44; 4(7) + 16 also equals 44."
    ]
  },
  {
    "id": 14,
    "topic": "Trapezoid proofs · #61",
    "prompt": "In isosceles trapezoid EFGH, EF ∥ HG. To prove △EHG ≅ △FGH by SAS, you already know EH ≅ FG and HG ≅ GH. Which angle pair is needed?",
    "type": "mc",
    "choices": [
      "∠HEF ≅ ∠EFG",
      "∠EHG ≅ ∠FGH",
      "∠EGH ≅ ∠FHG",
      "∠HEG ≅ ∠GFH"
    ],
    "correct": 1,
    "explanation": [
      "SAS needs the angle INCLUDED between the two known sides.",
      "Between EH and HG is ∠EHG. Between FG and GH is ∠FGH. These are the congruent angles along base HG."
    ],
    "distractorNotes": [
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 15,
    "topic": "Trapezoid proofs · #61",
    "prompt": "A proof has established △ADC ≅ △BCD in an isosceles trapezoid. Which corresponding sides establish that its diagonals are congruent?",
    "type": "mc",
    "choices": [
      "AD ≅ BC",
      "DC ≅ CD",
      "AC ≅ BD",
      "AB ≅ CD"
    ],
    "correct": 2,
    "explanation": [
      "Read the order: A ↔ B, D ↔ C, C ↔ D.",
      "AC therefore corresponds to BD. These are the diagonals, so AC ≅ BD by CPCTC.",
      "AD and BC are the legs; DC and CD are the same base."
    ],
    "distractorNotes": [
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 16,
    "topic": "Trapezoid proofs · #61",
    "prompt": "A student is proving that an isosceles trapezoid has congruent diagonals. They assume the diagonals are congruent to establish SSS, then use CPCTC to conclude the diagonals are congruent. What is the problem?",
    "type": "mc",
    "choices": [
      "CPCTC never applies to trapezoids.",
      "SSS is not a valid triangle theorem.",
      "The student assumed the very result being proved.",
      "Every trapezoid already has congruent diagonals."
    ],
    "correct": 2,
    "explanation": [
      "This is circular reasoning: the conclusion was used as an unproved premise.",
      "Instead use congruent legs, a shared base, and congruent base angles to establish SAS; then apply CPCTC."
    ],
    "distractorNotes": [
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 17,
    "topic": "Base-angle algebra · #63",
    "prompt": "JKLM is an isosceles trapezoid with JK ∥ LM. m∠J = 112°. Find the other three angles.",
    "type": "input",
    "fields": [
      {
        "key": "k",
        "label": "∠K (degrees)",
        "accept": [
          112
        ]
      },
      {
        "key": "l",
        "label": "∠L (degrees)",
        "accept": [
          68
        ]
      },
      {
        "key": "m",
        "label": "∠M (degrees)",
        "accept": [
          68
        ]
      }
    ],
    "explanation": [
      "Angles on base JK match: ∠K = 112°.",
      "Angles along each leg add to 180°: ∠L = ∠M = 180 − 112 = 68°."
    ]
  },
  {
    "id": 18,
    "topic": "Base-angle algebra · #63",
    "prompt": "ABCD is an isosceles trapezoid with AB ∥ DC. m∠A = (7x − 9)° and m∠B = (4x + 27)°. Find x and m∠C.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          12
        ]
      },
      {
        "key": "c",
        "label": "∠C (degrees)",
        "accept": [
          105
        ]
      }
    ],
    "explanation": [
      "∠A and ∠B are on the same base, so 7x − 9 = 4x + 27.",
      "3x = 36 → x = 12. ∠B = 75°.",
      "∠C = 180 − 75 = 105°."
    ]
  },
  {
    "id": 19,
    "topic": "Base-angle algebra · #63",
    "prompt": "In isosceles trapezoid PQRS, PQ ∥ SR. Consecutive angles along leg QR are m∠Q = (5x + 20)° and m∠R = (3x + 16)°. Find x, m∠Q, and m∠R.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          18
        ]
      },
      {
        "key": "q",
        "label": "∠Q (degrees)",
        "accept": [
          110
        ]
      },
      {
        "key": "r",
        "label": "∠R (degrees)",
        "accept": [
          70
        ]
      }
    ],
    "explanation": [
      "These angles are on a LEG, not the same base. They are supplementary.",
      "5x + 20 + 3x + 16 = 180 → 8x = 144 → x = 18.",
      "∠Q = 110° and ∠R = 70°. Check: 110 + 70 = 180."
    ]
  },
  {
    "id": 20,
    "topic": "Base-angle algebra · #63",
    "prompt": "The smaller and larger angles of an isosceles trapezoid are in the ratio 2:3. Find both angle measures.",
    "type": "input",
    "fields": [
      {
        "key": "small",
        "label": "Smaller angle (degrees)",
        "accept": [
          72
        ]
      },
      {
        "key": "large",
        "label": "Larger angle (degrees)",
        "accept": [
          108
        ]
      }
    ],
    "explanation": [
      "The two distinct angle measures add to 180°. Let them be 2k and 3k.",
      "5k = 180, so k = 36. The angles are 72° and 108°."
    ]
  },
  {
    "id": 21,
    "topic": "Trapezoid midsegments · #64",
    "prompt": "The bases of a trapezoid are 2x + 1 and 6x + 11. Its midsegment is 20. Find x and both bases.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          3.5
        ]
      },
      {
        "key": "short",
        "label": "Shorter base",
        "accept": [
          8
        ]
      },
      {
        "key": "long",
        "label": "Longer base",
        "accept": [
          32
        ]
      }
    ],
    "explanation": [
      "20 = [(2x + 1) + (6x + 11)] / 2.",
      "40 = 8x + 12 → 28 = 8x → x = 3.5.",
      "The bases are 8 and 32. Check: (8 + 32) / 2 = 20."
    ]
  },
  {
    "id": 22,
    "topic": "Trapezoid midsegments · #64",
    "prompt": "A trapezoid has a midsegment of length 24 and one base of length 18. Find the other base.",
    "type": "input",
    "fields": [
      {
        "key": "base",
        "label": "Other base",
        "accept": [
          30
        ]
      }
    ],
    "explanation": [
      "24 = (18 + b) / 2.",
      "48 = 18 + b, so b = 30."
    ]
  },
  {
    "id": 23,
    "topic": "Trapezoid midsegments · #64",
    "prompt": "A trapezoid has bases x + 2 and 3x − 6, and midsegment x + 8. Find x and the midsegment length.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "x",
        "accept": [
          10
        ]
      },
      {
        "key": "mid",
        "label": "Midsegment",
        "accept": [
          18
        ]
      }
    ],
    "explanation": [
      "x + 8 = [(x + 2) + (3x − 6)] / 2.",
      "2x + 16 = 4x − 4 → 20 = 2x → x = 10.",
      "The bases are 12 and 24, and their average is 18 = x + 8."
    ]
  },
  {
    "id": 24,
    "topic": "Trapezoid midsegments · #64",
    "prompt": "An isosceles trapezoid has bases 14 and 26 and legs of length 9 each. Find its midsegment length and perimeter.",
    "type": "input",
    "fields": [
      {
        "key": "mid",
        "label": "Midsegment",
        "accept": [
          20
        ]
      },
      {
        "key": "perimeter",
        "label": "Perimeter",
        "accept": [
          58
        ]
      }
    ],
    "explanation": [
      "The midsegment averages only the parallel bases: (14 + 26) / 2 = 20.",
      "Perimeter uses all four exterior sides: 14 + 26 + 9 + 9 = 58. The midsegment is not an exterior side."
    ]
  },
  {
    "id": 25,
    "topic": "Trapezoid midsegments · #64",
    "prompt": "For a trapezoid with bases 18 and 30, a student says the midsegment is (30 − 18) / 2 = 6. Which correction is right?",
    "type": "mc",
    "choices": [
      "Use (18 + 30) / 2 = 24.",
      "Use 18 + 30 = 48.",
      "Use 30 − 18 = 12.",
      "The student is correct."
    ],
    "correct": 0,
    "explanation": [
      "A midsegment is the AVERAGE of the bases, not half their difference.",
      "(18 + 30) / 2 = 24. It should lie between the base lengths 18 and 30."
    ],
    "distractorNotes": [
      "",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 26,
    "topic": "Parallelogram fourth vertex · #90",
    "prompt": "A(−2, 1), B(3, 2), C(5, 6), and D are consecutive vertices of parallelogram ABCD. Find D.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "D x-coordinate",
        "accept": [
          0
        ]
      },
      {
        "key": "y",
        "label": "D y-coordinate",
        "accept": [
          5
        ]
      }
    ],
    "explanation": [
      "For ordered consecutive vertices, D = A + C − B.",
      "D = (−2 + 5 − 3, 1 + 6 − 2) = (0,5).",
      "Check vectors: AD = (2,4), the same as BC."
    ]
  },
  {
    "id": 27,
    "topic": "Parallelogram fourth vertex · #90",
    "prompt": "Three vertices are (2, −1), (6, 1), and (1, 4), with no order specified. Select ALL possible fourth vertices.",
    "type": "multi",
    "choices": [
      "(7, −4)",
      "(−3, 2)",
      "(5, 6)",
      "(9, 4)",
      "(3, 3)"
    ],
    "correctSet": [
      0,
      1,
      2
    ],
    "explanation": [
      "Try each sum of two given vertices minus the third.",
      "(2,−1) + (6,1) − (1,4) = (7,−4).",
      "(2,−1) + (1,4) − (6,1) = (−3,2).",
      "(6,1) + (1,4) − (2,−1) = (5,6)."
    ],
    "distractorNotes": [
      "",
      "",
      "",
      "Check this claim against the defining properties and the worked solution.",
      "Check this claim against the defining properties and the worked solution."
    ]
  },
  {
    "id": 28,
    "topic": "Parallelogram fourth vertex · #90",
    "prompt": "In parallelogram PQRS, opposite vertices are P(−4, 2) and R(6, 8). Q is (1, −1). Find the other vertex S.",
    "type": "input",
    "fields": [
      {
        "key": "x",
        "label": "S x-coordinate",
        "accept": [
          1
        ]
      },
      {
        "key": "y",
        "label": "S y-coordinate",
        "accept": [
          11
        ]
      }
    ],
    "explanation": [
      "Diagonals PR and QS share a midpoint. PR has midpoint (1,5).",
      "For QS: (1 + Sx)/2 = 1 and (−1 + Sy)/2 = 5.",
      "Sx = 1 and Sy = 11, so S = (1,11)."
    ]
  },
  {
    "id": 29,
    "topic": "Parallelogram fourth vertex · #90",
    "prompt": "A(1, 1), B(5, 2), and C(3, 6) are consecutive vertices of a parallelogram. Which fourth vertex completes it?",
    "type": "mc",
    "choices": [
      "D(−1, 5)",
      "D(−1, 7)",
      "D(7, 7)",
      "D(3, −3)"
    ],
    "correct": 0,
    "explanation": [
      "D = A + C − B = (1 + 3 − 5, 1 + 6 − 2) = (−1,5).",
      "Because the order A-B-C-D is specified, only this completion is valid. Other pairings would change the vertex order."
    ],
    "distractorNotes": [
      "",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 30,
    "topic": "Parallelogram fourth vertex · #90",
    "prompt": "Why can three noncollinear points produce THREE different fourth vertices when their order in a parallelogram is not given?",
    "type": "mc",
    "choices": [
      "Each point can be chosen as the vertex opposite the missing point.",
      "All parallelograms have three diagonals.",
      "The missing vertex is the average of the three points.",
      "A fourth vertex can be anywhere on a circle."
    ],
    "correct": 0,
    "explanation": [
      "Choose which given point is opposite the missing vertex; there are three choices.",
      "The diagonals must share a midpoint. This yields U + V − W, U + W − V, or V + W − U.",
      "Averaging three points does not enforce the common midpoint of two diagonals."
    ],
    "distractorNotes": [
      "",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 31,
    "topic": "Proving rectangles · #91",
    "prompt": "Vertices A(1, 1), B(7, 4), C(5, 8), D(−1, 5) are in order. Find slopes AB and BC, then the SQUARED lengths AC² and BD². Use decimals for slopes.",
    "type": "input",
    "fields": [
      {
        "key": "ab",
        "label": "Slope AB",
        "accept": [
          0.5
        ]
      },
      {
        "key": "bc",
        "label": "Slope BC",
        "accept": [
          -2
        ]
      },
      {
        "key": "ac2",
        "label": "AC²",
        "accept": [
          65
        ]
      },
      {
        "key": "bd2",
        "label": "BD²",
        "accept": [
          65
        ]
      }
    ],
    "explanation": [
      "AB slope = 3/6 = 0.5. BC slope = 4/(−2) = −2, so adjacent sides are perpendicular.",
      "CD slope is 0.5 and DA slope is −2; opposite sides are parallel, so this is a rectangle.",
      "AC² = 4² + 7² = 65; BD² = (−8)² + 1² = 65. Thus both diagonal lengths are √65."
    ]
  },
  {
    "id": 32,
    "topic": "Proving rectangles · #91",
    "prompt": "A(0, 0), B(4, 0), C(6, 3), D(2, 3) form a parallelogram. Is it a rectangle?",
    "type": "mc",
    "choices": [
      "Yes, because opposite sides are parallel.",
      "Yes, because it has four sides.",
      "No: AB is horizontal but BC is not vertical, so the angle at B is not right.",
      "No: rectangles cannot have horizontal sides."
    ],
    "correct": 2,
    "explanation": [
      "Opposite sides being parallel establishes only a parallelogram.",
      "AB is horizontal. A perpendicular line would be vertical (constant x). BC changes x by 2 and y by 3, so it is not vertical.",
      "Therefore the parallelogram is not a rectangle."
    ],
    "distractorNotes": [
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 33,
    "topic": "Proving rectangles · #91",
    "prompt": "A rectangle has adjacent vertices A(−3, 2), B(5, 2), C(5, 8), and D(−3, 8). Find its perimeter and the length of either diagonal.",
    "type": "input",
    "fields": [
      {
        "key": "perim",
        "label": "Perimeter",
        "accept": [
          28
        ]
      },
      {
        "key": "diag",
        "label": "Diagonal length",
        "accept": [
          10
        ]
      }
    ],
    "explanation": [
      "Horizontal length = 5 − (−3) = 8. Vertical length = 8 − 2 = 6.",
      "Perimeter = 2(8 + 6) = 28.",
      "Diagonal length = √(8² + 6²) = √100 = 10."
    ]
  },
  {
    "id": 34,
    "topic": "Proving rectangles · #91",
    "prompt": "In a parallelogram, one pair of adjacent nonvertical sides has slopes −3/4 and k. What value of k guarantees a rectangle?",
    "type": "mc",
    "choices": [
      "−4/3",
      "3/4",
      "4/3",
      "−3/4"
    ],
    "correct": 2,
    "explanation": [
      "Adjacent sides must be perpendicular, so their slopes multiply to −1.",
      "(−3/4)k = −1 → k = 4/3. A parallelogram with one right angle is a rectangle."
    ],
    "distractorNotes": [
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 35,
    "topic": "Proving rectangles · #91",
    "prompt": "Which statements about proving rectangles are TRUE? Select ALL that apply.",
    "type": "multi",
    "choices": [
      "A parallelogram with one right angle is a rectangle.",
      "Any quadrilateral with equal diagonals must be a rectangle.",
      "A parallelogram with equal diagonals is a rectangle.",
      "Every rectangle has perpendicular diagonals.",
      "A quadrilateral with four right angles is a rectangle."
    ],
    "correctSet": [
      0,
      2,
      4
    ],
    "explanation": [
      "In a parallelogram, opposite angles are equal and consecutive angles are supplementary; one right angle forces all four right angles.",
      "Equal diagonals prove rectangle only with the parallelogram condition. An isosceles trapezoid can also have equal diagonals.",
      "A rectangle is defined by four right angles. Its diagonals need not be perpendicular unless it is also a square."
    ],
    "distractorNotes": [
      "",
      "Check this claim against the defining properties and the worked solution.",
      "",
      "Check this claim against the defining properties and the worked solution.",
      ""
    ]
  },
  {
    "id": 36,
    "topic": "Square diagonal endpoints · #92",
    "prompt": "A square has one diagonal from (−4, 2) to (2, 2). Find the two endpoints of its other diagonal. Enter the LOWER point first.",
    "type": "input",
    "fields": [
      {
        "key": "lx",
        "label": "Lower point x",
        "accept": [
          -1
        ]
      },
      {
        "key": "ly",
        "label": "Lower point y",
        "accept": [
          -1
        ]
      },
      {
        "key": "ux",
        "label": "Upper point x",
        "accept": [
          -1
        ]
      },
      {
        "key": "uy",
        "label": "Upper point y",
        "accept": [
          5
        ]
      }
    ],
    "explanation": [
      "The midpoint is (−1,2). The given diagonal is horizontal, of length 6.",
      "The other diagonal is vertical, also of length 6, so it extends 3 units above and below the center.",
      "The lower endpoint is (−1,−1); the upper endpoint is (−1,5)."
    ]
  },
  {
    "id": 37,
    "topic": "Square diagonal endpoints · #92",
    "prompt": "A square has one diagonal from (3, −4) to (3, 6). Find the endpoints of its other diagonal. Enter the LEFT point first.",
    "type": "input",
    "fields": [
      {
        "key": "lx",
        "label": "Left point x",
        "accept": [
          -2
        ]
      },
      {
        "key": "ly",
        "label": "Left point y",
        "accept": [
          1
        ]
      },
      {
        "key": "rx",
        "label": "Right point x",
        "accept": [
          8
        ]
      },
      {
        "key": "ry",
        "label": "Right point y",
        "accept": [
          1
        ]
      }
    ],
    "explanation": [
      "The center is (3,1). The vertical diagonal has length 10.",
      "Rotate the half-diagonal of length 5 to horizontal: go left and right 5 from the center.",
      "The other endpoints are (−2,1) and (8,1)."
    ]
  },
  {
    "id": 38,
    "topic": "Square diagonal endpoints · #92",
    "prompt": "One diagonal of a square has endpoints (−5, 0) and (1, 4). Which pair is the other diagonal?",
    "type": "mc",
    "choices": [
      "(−4, 5) and (0, −1)",
      "(−5, 4) and (1, 0)",
      "(−3, 5) and (1, −1)",
      "(−2, 2) and (3, 2)"
    ],
    "correct": 0,
    "explanation": [
      "Midpoint M = (−2,2). Half-diagonal vector = (3,2).",
      "Rotate (3,2) to (−2,3). Add and subtract it from M.",
      "M + (−2,3) = (−4,5); M − (−2,3) = (0,−1)."
    ],
    "distractorNotes": [
      "",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  },
  {
    "id": 39,
    "topic": "Square diagonal endpoints · #92",
    "prompt": "One diagonal of a square joins (−2, −2) and (4, 4). Find the square’s area and its center coordinates.",
    "type": "input",
    "fields": [
      {
        "key": "area",
        "label": "Area",
        "accept": [
          36
        ]
      },
      {
        "key": "x",
        "label": "Center x",
        "accept": [
          1
        ]
      },
      {
        "key": "y",
        "label": "Center y",
        "accept": [
          1
        ]
      }
    ],
    "explanation": [
      "Center = ((−2 + 4)/2, (−2 + 4)/2) = (1,1).",
      "The other vertices are (−2,4) and (4,−2), obtained by rotating the half-diagonal around the center.",
      "Each side is 6 units long, so area = 6² = 36. Equivalently diagonal² = 72 and area = diagonal²/2."
    ]
  },
  {
    "id": 40,
    "topic": "Square diagonal endpoints · #92",
    "prompt": "A square’s center is M(2, −1), and one vertex is V(5, 3). Which pair gives the two vertices ADJACENT to V?",
    "type": "mc",
    "choices": [
      "(−2, 2) and (6, −4)",
      "(−1, −5) and (5, 3)",
      "(−2, −4) and (6, 2)",
      "(2, 4) and (2, −6)"
    ],
    "correct": 0,
    "explanation": [
      "The vector from M to V is (3,4). Rotate 90° to (−4,3).",
      "M + (−4,3) = (−2,2), and M − (−4,3) = (6,−4). These are the adjacent vertices.",
      "The opposite vertex is M − (3,4) = (−1,−5), which is not an adjacent vertex."
    ],
    "distractorNotes": [
      "",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance.",
      "Review the worked solution and check the geometric condition, not just the appearance."
    ]
  }
];

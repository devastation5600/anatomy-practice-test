// New-number practice matching the six circled worksheet topics. #119 intentionally omitted.
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
  }
];

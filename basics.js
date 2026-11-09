/* basics.js — "Nervous System Basics" question bank.
   Covers CNS/PNS, somatic/autonomic, the three general functions, spinal
   cord functions, ascending/descending tracts, gray/white matter, and
   sensory/motor/mixed nerves — pulled from the Nervous System Overview Notes
   and the Brain & Spinal Cord Notes worksheets. */

const BASICS_QUESTIONS = [
  {
    id: 1,
    topic: "Divisions of the Nervous System",
    prompt: "What are the two major divisions of the nervous system?",
    type: "mc",
    choices: [
      "Sensory division and Motor division",
      "Central Nervous System (CNS) and Peripheral Nervous System (PNS)",
      "Somatic Nervous System and Autonomic Nervous System",
      "Sympathetic division and Parasympathetic division"
    ],
    correct: 1,
    distractorNotes: [
      "Sensory and motor are two of the three general functions of the nervous system, not its two major divisions.",
      "",
      "Somatic and autonomic are divisions of the PNS — one level down from the CNS/PNS split.",
      "Sympathetic and parasympathetic are divisions of the autonomic nervous system — two levels down from the top split."
    ],
    explanation: [
      "The nervous system splits into two major divisions first: the Central Nervous System (CNS) and the Peripheral Nervous System (PNS).",
      "CNS = brain + spinal cord — the control center.",
      "PNS = all the nerves that branch out from the CNS to the rest of the body.",
      "Everything else (somatic, autonomic, sympathetic, parasympathetic) is a smaller division nested inside the PNS."
    ]
  },
  {
    id: 2,
    topic: "CNS Structures",
    prompt: "Which two structures make up the Central Nervous System (CNS)?",
    type: "mc",
    choices: [
      "Brain and spinal cord",
      "Cranial nerves and spinal nerves",
      "Sensory receptors and skeletal muscles",
      "Brain and cranial nerves"
    ],
    correct: 0,
    distractorNotes: [
      "",
      "Cranial and spinal nerves are part of the PNS — they carry signals to and from the CNS, they aren't part of it.",
      "Sensory receptors and skeletal muscles are structures the PNS connects to, not the CNS itself.",
      "Cranial nerves belong to the PNS, not the CNS — only the brain and spinal cord count as CNS."
    ],
    explanation: [
      "The Central Nervous System is only two structures: the brain and the spinal cord.",
      "Think of it as the body's \"control center\" — everything else (nerves running out to muscles, organs, skin) is the PNS."
    ]
  },
  {
    id: 3,
    topic: "PNS Subdivisions",
    prompt: "The Peripheral Nervous System (PNS) is divided into which two systems, based on what kind of structures they control?",
    type: "mc",
    choices: [
      "Sensory and Integrative",
      "Somatic and Autonomic",
      "Ascending and Descending",
      "Gray matter and White matter"
    ],
    correct: 1,
    distractorNotes: [
      "Sensory and integrative are two of the three general functions of the nervous system, not the two divisions of the PNS.",
      "",
      "Ascending and descending describe the direction nerve tracts run in the spinal cord — not a division of the PNS.",
      "Gray matter and white matter are tissue types inside the brain and spinal cord, not divisions of the PNS."
    ],
    explanation: [
      "The PNS splits into the Somatic Nervous System (controls skeletal muscle, voluntary) and the Autonomic Nervous System (controls smooth muscle, cardiac muscle, and glands, involuntary).",
      "Somatic = muscles you choose to move. Autonomic = things that happen automatically."
    ]
  },
  {
    id: 4,
    topic: "Autonomic Nervous System",
    prompt: "The Autonomic Nervous System is further divided into which two systems?",
    type: "mc",
    choices: [
      "Somatic and Visceral",
      "Sympathetic (\"fight or flight\") and Parasympathetic (\"rest & digest\")",
      "Ascending and Descending",
      "CNS and PNS"
    ],
    correct: 1,
    distractorNotes: [
      "Somatic is a separate branch of the PNS, not a subdivision of the autonomic system; \"visceral\" isn't one of the two autonomic divisions taught here.",
      "",
      "Ascending and descending describe spinal cord tracts, not autonomic divisions.",
      "CNS and PNS are the top-level split of the whole nervous system, several steps above the autonomic division."
    ],
    explanation: [
      "The Autonomic Nervous System splits into Sympathetic (\"fight or flight\" — ramps the body up for action) and Parasympathetic (\"rest & digest\" — calms the body down).",
      "Both work on the same involuntary effectors (heart, smooth muscle, glands) but push in opposite directions."
    ]
  },
  {
    id: 5,
    topic: "General Functions — Sensory",
    prompt: "Sensory receptors at the ends of peripheral nerves convert environmental stimuli into nerve impulses and send them toward the CNS. This describes which general function of the nervous system?",
    type: "mc",
    choices: ["Motor", "Integrative", "Sensory", "Autonomic"],
    correct: 2,
    distractorNotes: [
      "Motor function sends signals out to muscles/glands — this question describes signals coming in.",
      "Integrative function processes and interprets the signal once it reaches the CNS — this question is the step before that, picking up the stimulus.",
      "",
      "Autonomic isn't one of the three general functions (sensory, integrative, motor) — it's a division of the PNS."
    ],
    explanation: [
      "The nervous system has three general functions: sensory, integrative, and motor.",
      "Sensory function = receptors pick up a stimulus → convert it to a nerve impulse → travel through the PNS → arrive at the CNS.",
      "That's the \"input\" side of the system."
    ]
  },
  {
    id: 6,
    topic: "General Functions — Integrative",
    prompt: "Which general function takes sensory stimuli and turns them into sensations, memories, thoughts, and perceptions?",
    type: "mc",
    choices: ["Sensory", "Integrative", "Motor", "Somatic"],
    correct: 1,
    distractorNotes: [
      "Sensory function is just picking up and delivering the raw stimulus — integrative is the processing step that happens after.",
      "",
      "Motor function is the output side (acting on the info), not the processing side.",
      "Somatic is a division of the PNS that controls skeletal muscle — it isn't one of the three general functions."
    ],
    explanation: [
      "Integrative function happens in nerves usually located between the sensory and motor neurons.",
      "It takes the raw sensory signal and turns it into something meaningful — a sensation, a memory, a perception, or a thought.",
      "This is the \"processing\" step, sitting between input (sensory) and output (motor)."
    ]
  },
  {
    id: 7,
    topic: "General Functions — Motor",
    prompt: "Motor function uses peripheral nerves to do what?",
    type: "mc",
    choices: [
      "Pick up stimuli from the environment",
      "Act on, or respond to, information from the integrative neurons",
      "Store long-term memories",
      "Hold the two cerebral hemispheres together"
    ],
    correct: 1,
    distractorNotes: [
      "Picking up environmental stimuli is sensory function, not motor.",
      "",
      "Storing memories is part of integrative function, not motor.",
      "That's the corpus callosum's job — a brain structure, not a general function."
    ],
    explanation: [
      "Motor function is the \"output\" side: it takes what the integrative neurons decided and acts on it.",
      "It employs peripheral nerves to reach muscles and glands.",
      "Motor function has two categories: somatic (voluntary) and autonomic (involuntary) — matching the PNS split."
    ]
  },
  {
    id: 8,
    topic: "Somatic Nervous System",
    prompt: "In a game of Red Light, Green Light, which subdivision of the nervous system controls your skeletal muscles and reaction time?",
    type: "mc",
    choices: [
      "Autonomic Nervous System",
      "Somatic Nervous System",
      "Sympathetic division",
      "Parasympathetic division"
    ],
    correct: 1,
    distractorNotes: [
      "Autonomic controls involuntary stuff like your heart and glands — not the voluntary muscle movement needed to freeze on \"red light.\"",
      "",
      "Sympathetic is part of the autonomic (involuntary) system — it wouldn't be what makes you consciously freeze your legs.",
      "Parasympathetic is also part of the autonomic (involuntary) system — same issue as sympathetic."
    ],
    explanation: [
      "The Somatic Nervous System controls skeletal muscle and gives voluntary control.",
      "Freezing in place on \"red light\" is a conscious, voluntary muscle action — that's somatic, not autonomic.",
      "Somatic nerves are the cranial and spinal nerves running to skeletal muscle."
    ]
  },
  {
    id: 9,
    topic: "Autonomic Nervous System",
    prompt: "Which system controls involuntary effectors — the heart, smooth muscle, and glands?",
    type: "mc",
    choices: [
      "Somatic Nervous System",
      "Autonomic Nervous System",
      "Sensory division",
      "Integrative division"
    ],
    correct: 1,
    distractorNotes: [
      "Somatic controls skeletal muscle, which is voluntary — the heart and glands are involuntary, so that's autonomic.",
      "",
      "Sensory is a general function (input), not the division that controls effectors.",
      "Integrative is a general function (processing), not the division that controls effectors."
    ],
    explanation: [
      "The Autonomic Nervous System controls effectors you don't consciously control: heart muscle, smooth muscle (like in blood vessels and intestines), and glands.",
      "It happens automatically — hence the name \"autonomic.\""
    ]
  },
  {
    id: 10,
    topic: "Spinal Cord Functions",
    prompt: "What are the two major functions of the spinal cord?",
    type: "mc",
    choices: [
      "Store long-term memory and regulate body temperature",
      "Conduct nerve impulses and serve as a center for spinal reflexes",
      "Produce hormones and filter cerebrospinal fluid",
      "Interpret visual images and recognize objects"
    ],
    correct: 1,
    distractorNotes: [
      "Long-term memory storage and temperature regulation are brain jobs (cerebrum/hypothalamus), not spinal cord jobs.",
      "",
      "Hormone production and CSF filtering aren't spinal cord functions.",
      "Interpreting visual images is the occipital lobe's job, up in the brain."
    ],
    explanation: [
      "The spinal cord has two major functions: it conducts nerve impulses (both up to the brain and down from it), and it serves as a center for spinal reflexes — fast reactions that don't have to wait for the brain to process them first."
    ]
  },
  {
    id: 11,
    topic: "Spinal Cord — Ascending Tracts",
    prompt: "Tracts in the spinal cord that carry sensory information up to the brain are called:",
    type: "mc",
    choices: ["Descending tracts", "Ascending tracts", "Cranial tracts", "Reflex arcs"],
    correct: 1,
    distractorNotes: [
      "Descending tracts run the opposite direction — motor signals going down from the brain.",
      "",
      "\"Cranial tracts\" isn't the term used for this — cranial refers to the 12 cranial nerves coming off the brain.",
      "A reflex arc is the whole pathway of a reflex, not specifically the sensory-carrying tract."
    ],
    explanation: [
      "Ascending tracts carry sensory info UP to the brain — think \"ascending\" like climbing up.",
      "Descending tracts carry motor impulses DOWN from the brain to muscles/glands — the opposite direction."
    ]
  },
  {
    id: 12,
    topic: "Spinal Cord — Descending Tracts",
    prompt: "Tracts that conduct motor impulses from the brain down to muscles and glands are called:",
    type: "mc",
    choices: ["Ascending tracts", "Descending tracts", "Sensory tracts", "Association tracts"],
    correct: 1,
    distractorNotes: [
      "Ascending tracts carry sensory info up to the brain — the opposite direction of what's described here.",
      "",
      "\"Sensory tracts\" isn't the vocabulary term used here — that role belongs to ascending tracts.",
      "\"Association tracts\" isn't a term from these notes."
    ],
    explanation: [
      "Descending tracts run DOWN from the brain, carrying the motor commands that make muscles and glands act."
    ]
  },
  {
    id: 13,
    topic: "Gray Matter vs. White Matter",
    prompt: "In the SPINAL CORD, where is the gray matter (mostly nerve cell bodies and dendrites) located?",
    type: "mc",
    choices: [
      "On the outside",
      "On the inside",
      "It isn't present in the spinal cord",
      "Scattered randomly with no pattern"
    ],
    correct: 1,
    distractorNotes: [
      "That's the arrangement in the brain, not the spinal cord — the spinal cord is flipped.",
      "",
      "Gray matter is present in both the brain and spinal cord — just in opposite positions.",
      "It's not random — gray matter and white matter have a very specific, consistent layout."
    ],
    explanation: [
      "Gray matter = darker tissue, mostly cell bodies and branching dendrites.",
      "In the spinal cord, gray matter is on the INSIDE, with white matter wrapped around the outside.",
      "In the brain, it's the opposite: gray matter is on the outside (the cortex), white matter is on the inside."
    ]
  },
  {
    id: 14,
    topic: "Gray Matter vs. White Matter",
    prompt: "In the BRAIN, where is the white matter (mostly myelinated nerve fibers) located?",
    type: "mc",
    choices: [
      "On the outside",
      "On the inside",
      "Only in the cerebellum",
      "Only in the spinal cord"
    ],
    correct: 1,
    distractorNotes: [
      "Outside the brain is gray matter (the cortex) — white matter is the inside layer.",
      "",
      "White matter exists throughout the brain, not just the cerebellum.",
      "White matter exists in both the brain and spinal cord — just in opposite positions relative to gray matter."
    ],
    explanation: [
      "White matter = paler tissue, mostly nerve fibers with myelin sheaths.",
      "In the brain, white matter is on the INSIDE, gray matter wraps around the outside.",
      "Remember it as a flip: brain = gray outside / white inside; spinal cord = white outside / gray inside."
    ]
  },
  {
    id: 15,
    topic: "Types of Nerves",
    prompt: "A nerve that conducts impulses TO the brain or spinal cord — carrying information in — is called a:",
    type: "mc",
    choices: ["Motor nerve", "Sensory nerve", "Mixed nerve", "Autonomic nerve"],
    correct: 1,
    distractorNotes: [
      "Motor nerves carry impulses OUT to muscles/glands — the opposite direction.",
      "",
      "Mixed nerves carry both directions at once — this question describes only the \"in\" direction.",
      "\"Autonomic nerve\" describes what it controls (involuntary effectors), not the direction of the signal."
    ],
    explanation: [
      "Sensory nerves conduct impulses TO the brain/spinal cord — they're the \"input\" nerves.",
      "Motor nerves conduct impulses TO muscles/glands — the \"output\" nerves.",
      "Mixed nerves carry both sensory and motor fibers together."
    ]
  },
  {
    id: 16,
    topic: "Types of Nerves",
    prompt: "Which category do MOST nerves in the body fall into, since they carry both sensory and motor fibers in the same bundle?",
    type: "mc",
    choices: ["Sensory nerves", "Motor nerves", "Mixed nerves", "Cranial-only nerves"],
    correct: 2,
    distractorNotes: [
      "Purely sensory nerves exist, but they're not the majority — most nerves carry fibers both ways.",
      "Purely motor nerves exist, but they're not the majority either.",
      "",
      "There's no such category as \"cranial-only\" nerves in this classification — cranial nerves can be sensory, motor, or mixed too."
    ],
    explanation: [
      "Mixed nerves include both sensory and motor fibers bundled together.",
      "Because most nerves need to send signals in both directions (sensing and acting), mixed nerves are the category most nerves fall under."
    ]
  }
];
